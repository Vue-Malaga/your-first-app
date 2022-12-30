<script setup>
import { usePlaylistsStore } from '../stores/playlists';
import { watch, onMounted } from '@vue/runtime-core';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const playlists = ref([]);

onMounted(() => {
    playlists.value = usePlaylistsStore().fetchPlaylists();
});

watch(() => usePlaylistsStore().playlists,
    (newPlaylists) => {
        playlists.value = newPlaylists;
    }
);

</script>

<template>
    <aside>
        <h2>Mis Playlists</h2>
        <ul>
            <li v-for="playlist in playlists" :key="playlist.id">
                <RouterLink :to="{ name: 'playlist', params: { id: playlist.id } }">
                    {{ playlist.name }}
                </RouterLink>
            </li>
        </ul>
        <RouterLink to="/new-playlist" class="new-playlist">
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
    overflow-y: auto;
    position: relative;
    grid-area: playlist;
}

h2 {
    padding: 2rem;
    border-bottom: var(--main-border);
    margin-bottom: 1rem;
    background: var(--background-color);
    position: sticky;
    top: 0;
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

/* :has not working in Firefox */
li:hover,
li:has(.active) {
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