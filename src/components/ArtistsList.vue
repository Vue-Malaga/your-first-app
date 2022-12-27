<template>
    <section>
        <Artists v-for="artist in artists" :key="artist.key" :artist="artist" />
    </section>
</template>

<script setup>
import Artists from './Artists.vue';
import { onMounted } from '@vue/runtime-core';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { get } from '../service/http.service';

const artists = ref([]);

onMounted(async () => {
    const response = await get('http://localhost:3000/artists');
    artists.value = response;
});
</script>

<style scoped>
section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

    overflow-y: scroll;
    grid-area: artists;
}
</style>