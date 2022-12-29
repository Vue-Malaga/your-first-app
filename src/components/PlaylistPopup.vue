<script setup>
import { onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { get } from '../service/http.service';

const playlists = ref([]);

const select = (id) => {
    const selected = document.querySelector(".selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    document.querySelector(`[data-id="${id}"]`).classList.add("selected");      
};

defineProps({
    track: {
        type: Object,
        required: true
    }
})

defineEmits(["closePopup"]);

onMounted(async () => {
    const response = await get("http://localhost:3000/playlists");
    playlists.value = response;
});
</script>

<template>
    <div>
        <a class="close-popup" @click="$emit('closePopup')">X</a>
        <p>Elige la Playlist donde quieras guardar la canción <strong>{{ track.name }}</strong></p>
        <ul>
            <li v-for="playlist in playlists" :key="playlist.id" @click="select(playlist.id)" :data-id="playlist.id">
                {{ playlist.name }}
            </li>
        </ul>
        <a class="confirm">Confirmar</a>
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

div {
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

a.confirm {
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

.selected {
    background-color: var(--accent-color-1);
    color: var(--text-color);
}

.overlay-back {
    position   : absolute;
    top        : 0;
    left       : 0;
    width      : 100vw;
    height     : 100vh;
    background : #000;
    opacity    : 0.6;
    filter     : alpha(opacity=60);
    z-index    : 5;
}
</style>
