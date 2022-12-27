<script setup>
import { onMounted } from '@vue/runtime-core';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { get } from '../service/http.service';

const playlists = ref([]);

onMounted(async () => {
    const response = await get('http://localhost:3000/playlists');
    playlists.value = response;
});
</script>

<template>
    <aside>
        <h2>Mis Playlists</h2>
        <ul>
            <li v-for="playlist in playlists" :key="playlist.id">
                {{ playlist.name }}
            </li>
        </ul>
        <RouterLink to="#" class="new-playlist">
            + Crea una nueva
        </RouterLink>
    </aside>
</template>

<style scoped>
aside {
    display: flex;
    flex-flow: column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    justify-content: space-between;
    border-right: 2px solid black;
    width: 12vw;
    overflow-y: scroll;
    position: relative;
    height: 100vh;
}

h2 {
    padding: 2rem;
}

ul {
    padding-left: 1rem;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}

li {
    margin-bottom: 1rem;
    padding: 0 1rem;
    border-left: 2px solid transparent;
}

li:hover {
    cursor: pointer;
    color: var(--text-color-1);
    border-left: var(--main-border);

}

.new-playlist {
    padding: 1rem 2rem;
    border-top: var(--main-border);
    cursor: pointer;
    position: sticky;
    bottom: 0;
    background-color: var(--background-color);
}

.new-playlist:hover {
    color: var(--text-color-1);
}
</style>