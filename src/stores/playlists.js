import { defineStore } from "pinia";
import { ref } from "vue";
import { get } from "../service/http.service";

export const usePlaylistsStore = defineStore("playlists", () => {
    const playlists = ref([]);

    const fetchPlaylists = async () => {
        const response = await get("http://localhost:3000/playlists");
        playlists.value = response;
    };

    return {
        playlists,
        fetchPlaylists,
    };
});
