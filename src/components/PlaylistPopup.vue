<script setup>
import { usePlaylistsStore } from '../stores/playlists';
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { put } from "../service/http.service";

const playlists = ref([]);
const confirmButton = ref(null);

const select = (id) => {
    const selected = document.querySelector(".selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    document.querySelector(`[data-id="${id}"]`).classList.add("selected");
    confirmButton.value.classList.remove("disabled");
};

const insertTrack = (artist, song) => {
    const selected = document.querySelector(".selected");
    if (!selected) {
        emit("message", "No se ha seleccionado ninguna playlist");
        emit("closePopup");
        return;
    }

    const playlistId = selected.dataset.id;
    const playlist = playlists.value.find((playlist) => playlist.id === playlistId);

    if (playlist.tracks.find((track) => track.song.id === song.id)) {
        emit("message", "La canción ya está en la playlist");
        emit("closePopup");
        return;
    }

    playlist.tracks = [...playlist.tracks, { artist: artist, song: song }];

    put(`http://localhost:3000/playlists/${playlist.id}`, playlist)
        .then(() => {
            emit("message", "Canción añadida a la playlist");
            emit("closePopup");
        })
        .catch(() => {
            emit("message", "Ha ocurrido un error");
            emit("closePopup");
        });
};

defineProps({
    track: {
        type: Object,
        required: true,
    },
    artist: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(["closePopup", "message"]);

onMounted(async () => {
    playlists.value = usePlaylistsStore().playlists;
});
</script>

<template>
    <div class="popup">
        <a class="close-popup" @click="$emit('closePopup')">X</a>
        <p>
            Elige la Playlist donde quieras guardar la canción
            <strong>{{ track.name }}</strong>
        </p>
        <ul>
            <li
                v-for="playlist in playlists"
                :key="playlist.id"
                @click="select(playlist.id)"
                :data-id="playlist.id"
            >
                {{ playlist.name }}
            </li>
        </ul>
        <a class="confirm disabled" ref="confirmButton" @click="insertTrack(artist, track)">Confirmar</a>
    </div>
    <div class="overlay-back"></div>
</template>

<style scoped>
strong {
    color: var(--accent-color-1);
}

p {
    font-weight: bold;
}

div.popup {
    position: absolute;
    background-color: var(--background-color);
    width: fit-content;
    height: fit-content;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
    border: 1px solid var(--accent-color-1);
    border-radius: 5px;
    padding: 2rem;
}

ul {
    margin-top: 2rem;
}

li {
    list-style: none;
    margin-bottom: 1rem;
    cursor: pointer;
    padding: 0.5rem;
    width: fit-content;
    border-radius: 5px;
}

a {
    cursor: pointer;
}

a.close-popup {
    position: absolute;
    top: -10px;
    right: -12px;
    color: var(--text-color);
    text-decoration: none;
    padding: 10px 12px;
    border-radius: 50%;
    background-color: var(--accent-color-1);
}

.confirm {
    display: block;
    text-align: center;
    background-color: var(--accent-color-1);
    color: var(--text-color);
    padding: 1rem;
    border-radius: 5px;
    margin: 0 auto;
    margin-top: 2rem;
    width: fit-content;
}

.disabled {
    background-color: #333;
    color: #aaa;
    cursor: not-allowed;
    pointer-events: none;
}

.selected {
    background-color: var(--accent-color-1);
    color: var(--text-color);
}

.overlay-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
    padding: 0;
    z-index: 5;
    overflow: hidden;
}
</style>
