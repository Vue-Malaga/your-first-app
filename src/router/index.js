import { createRouter, createWebHistory } from 'vue-router'
import ArtistsList from '../components/ArtistsList.vue';
import ArtistsTracks from '../components/ArtistsTracks.vue';
import Playlist from '../components/Playlist.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: "/",
      component: ArtistsList
    },
    {
      path: "/playlist/:id",
      name: "playlist",
      component: Playlist,
      props: true
    },
    {
      path: "/artist/:id",
      name: "artist",
      component: ArtistsTracks,
      props: true
    }
  ]
})

export default router
