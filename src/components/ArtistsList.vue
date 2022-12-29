<script setup>
import Artists from './Artists.vue';
import { computed, onMounted } from '@vue/runtime-core';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { get } from '../service/http.service';

const artists = ref([]);
const artistSearched = ref('');

onMounted(async () => {
    const response = await get('http://localhost:3000/artists');
    artists.value = response;
});

const filterArtist = (artist) => {
    return artists.value.filter(({ name }) => name.toLowerCase().includes(artistSearched.value.toLowerCase()));
};
</script>

<template>
    <section>
        <div class="search-box">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Busca tu artista favorito.." v-model="artistSearched" />
        </div>
        <div class="artists">
            <RouterLink v-for="artist in filterArtist('')" :key="artist.id"
                :to="{ name: 'artist', params: { id: artist.id } }">
                <Artists :artist="artist" />
            </RouterLink>
        </div>
    </section>
</template>

<style scoped>
section {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    grid-area: artists;
}

.artists {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
}

.search-box {
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    background-color: var(--text-color-2);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    position: relative;
    margin: 0 1rem;
    border-bottom: var(--main-border);
}

.search-box i {
    position: absolute;
    left: 1rem;
    color: var(--background-color);
}

.search-box input {
    border: none;
    background-color: transparent;
    color: var(--background-color);
    padding-left: 2rem;
    width: 100%;
    margin-right: 1rem;
    outline: none;
}
</style>