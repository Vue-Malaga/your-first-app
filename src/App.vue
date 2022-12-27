<script setup>
import Header from './components/Header.vue';
import PlaylistList from './components/PlaylistList.vue';
import ArtistsList from './components/ArtistsList.vue';
</script>

<template>
  <div class="container">
    <Header />
    <PlaylistList />
    <ArtistsList />
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 12vw 96vw;
  grid-template-rows: 10vh 90vh;
  grid-template-areas:
    'header header'
    'playlist artists';
  height: 100vh;
}
</style>
