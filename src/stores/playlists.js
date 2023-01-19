import { defineStore } from "pinia";
import { ref } from "vue";
import { useHttpStore } from "./http";

export const usePlaylistsStore = defineStore("playlists", () => {
    const playlists = ref([]);

    const fetchPlaylists = async () => {
        const response = await useHttpStore().get("http://localhost:3000/playlists");
        playlists.value = response;
    };

    return {
        playlists,
        fetchPlaylists,
    };
});
