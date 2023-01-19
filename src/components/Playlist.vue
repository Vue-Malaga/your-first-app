<template>
    <main>
        <h2>{{ playlist.name }}</h2>
        <ul v-if="playlist.tracks && !isEmpty()">
            <li>
                <p>Img</p>
                <p>Nombre / Artista</p>
                <p>Album</p>
                <p>Año</p>
                <p>Duración</p>
            </li>
            <li v-for="track in playlist.tracks" :key="track.song.id">
                <img :src="track.song.image" :alt="track.song.album" />
                <h3>
                    <span>{{ track.song.name }}</span>
                    <span>{{ track.artist.name }}</span>
                </h3>
                <p>{{ track.song.album }}</p>
                <p>{{ track.song.year }}</p>
                <p>{{ track.song.duration }}</p>
            </li>
        </ul>
        <h4 v-else>Esta Playlist esta vacía...</h4>
    </main>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useHttpStore } from "../stores/http";

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const playlist = ref({});

const isEmpty = ref(() => playlist.value.tracks.length === 0);

onMounted(async () => {
    playlist.value = await useHttpStore().getById(`http://localhost:3000/playlists`, props.id);
});

watch(() => props.id, async () => {
    playlist.value = await useHttpStore().getById(`http://localhost:3000/playlists`, props.id);
});
</script>

<style scoped>
main {
    display: flex;
    flex-flow: column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    justify-content: space-between;
    border-right: 2px solid black;
    overflow-y: scroll;
    position: relative;
}

h2 {
    padding: 2rem;
    margin-bottom: 1rem;
    background: var(--background-color);
    position: sticky;
    top: 0;
    border-left: 2px solid black;
    font-size: 2rem;
    font-weight: bold;
    z-index: 1;
}

ul,
h4 {
    padding: 0 1rem;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    width: 90%;
}

li {
    display: grid;
    grid-template-columns: 4rem 4fr 1fr 1fr 1fr;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    border-bottom: var(--main-border);
    position: relative;
}

li:first-child p {
    font-weight: bold;
    color: var(--accent-color-1);
}

li:last-child {
    border-bottom: none;
    margin-bottom: 2rem;
}

img {
    width: 4rem;
    height: 4rem;
    border-radius: 10px;
    margin-right: 1rem;
    border: var(--main-border);
}

h3 {
    display: flex;
    flex-flow: column;
}

h3 span:first-child {
    font-size: 1.4rem;
}
</style>
