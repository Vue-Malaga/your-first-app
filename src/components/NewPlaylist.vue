<template>
    <section>
        <div class="new-playlist">
            <h2>Nueva playlist</h2>
            <input type="text" id="playlist-name" name="playlist-name" placeholder="Nombre de la playlist"
                v-model="name" />
            <button type="submit" @click="createPlaylist">Create</button>
        </div>
    </section>
    <div class="message" id="message" v-if="isMessageVisible"></div>
</template>

<script setup>
import { usePlaylistsStore } from '../stores/playlists';
import { ref, nextTick } from 'vue'
import { post } from '../service/http.service'
import { v4 as uuidv4 } from 'uuid'

const name = ref('')
const isMessageVisible = ref(false)
const createPlaylist = () => {
    const newPlaylist = {
        id: uuidv4(),
        name: name.value,
        tracks: []

    }

    post('http://localhost:3000/playlists', newPlaylist)
        .then(() => {
            usePlaylistsStore().fetchPlaylists();
            popupMessage('Playlist creada');
        })
        .catch(() => {
            popupMessage('Ha ocurrido un error');
        });
}

const popupMessage = (message) => {
    isMessageVisible.value = true;

    nextTick(() => {
        document.querySelector("#message").innerText = message;
    });

    setTimeout(() => {
        isMessageVisible.value = false;
    }, 3000);
};
</script>

<style scoped>
section {
    grid-area: artists;
    height: 100%;
    width: 90vw;
    display: flex;
}

.new-playlist {
    display: flex;
    flex-direction: column;
    padding: 3rem 4rem;
    gap: 1rem;
    border-radius: 1rem;
}

.new-playlist h2 {
    font-size: 2rem;
    font-weight: 600;
    color: var(--accent-color-1);

}

.new-playlist input {
    padding: 0.5rem 2rem;
    outline: none;
    border: 1px solid var(--accent-color-1);
    font-size: 1rem;
    font-weight: 600;
    color: var(--accent-color-1);
}

.new-playlist button {
    padding: 0.5rem 2rem;
    outline: none;
    border: 1px solid var(--accent-color-1);
    font-size: 1rem;
    font-weight: 600;
    color: var(--accent-color-1);
    background: var(--background-color);
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}

.new-playlist button:hover {
    background: var(--accent-color-1);
    color: var(--background-color);
}

.message {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #54a056;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}
</style>