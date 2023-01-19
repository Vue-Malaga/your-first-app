<template>
    <main>
        <figure>
            <div class="artist-image">
                <img :src="artist.image" :alt="artist.name" />
            </div>
            <figcaption>
                <h3>{{ artist.name }}</h3>
                <p>
                    <strong>{{ totalTracks }}</strong> canciones disponibles
                </p>
                <p>
                    Horas de musica <strong>{{ totalTime }}</strong> horas
                </p>
            </figcaption>
        </figure>
        <section class="tracks">
            <div class="track">
                <h3><strong>Añadir</strong></h3>
                <h3>-</h3>
                <h3><strong>Nombre</strong></h3>
                <h3><strong>Duración</strong></h3>
                <h3><strong>Album</strong></h3>
                <h3><strong>Año</strong></h3>
            </div>
            <div v-for="track in tracks" :key="track.id" class="track">
                <a @click="showPopup(track.id)">+</a>
                <PlaylistPopup
                    v-if="track.isPopupVisible"
                    :track="track"
                    :artist="artist"
                    @close-popup="hidePopup(track.id)"
                    @message="popupMessage"
                />
                <img :src="track.image" alt="track.name" />
                <p>{{ track.name }}</p>
                <p>{{ track.duration }}</p>
                <p>{{ track.album }}</p>
                <p>{{ track.year }}</p>
            </div>
        </section>
    </main>
    <div class="message" id="message" v-if="isMessageVisible"></div>
</template>

<script setup>
import { ref, watch, onMounted, computed, nextTick } from "vue";
import { useHttpStore } from "../stores/http";
import PlaylistPopup from "./PlaylistPopup.vue";

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const artist = ref({});
const tracks = ref([]);
const totalTime = ref(0);
const totalTracks = ref(0);
const isMessageVisible = ref(false);

const showPopup = (id) => {
    tracks.value.find((track) => track.id === id).isPopupVisible = true;
};

const hidePopup = (id) => {
    tracks.value.find((track) => track.id === id).isPopupVisible = false;
};

const popupMessage = (message) => {
    isMessageVisible.value = true;

    nextTick(() => {
        document.querySelector("#message").innerText = message;
    });

    setTimeout(() => {
        isMessageVisible.value = false;
    }, 3000);
};

onMounted(async () => {
    artist.value = await useHttpStore().getById(`http://localhost:3000/artists`, props.id);

    tracks.value = artist.value.tracks.map((track) => {
        return {
            ...track,
            isPopupVisible: false,
        };
    });

    totalTime.value = computed(() => {
        return tracks.value.reduce((acc, track) => {
            return acc + track.duration;
        }, 0);
    });

    totalTracks.value = computed(() => {
        return tracks.value.length;
    });

    return {
        totalTime,
        totalTracks,
    };
});

watch(() => props.id, async () => {
    artist.value = await useHttpStore().getById(`http://localhost:3000/artists`, props.id);
});
</script>

<style scoped>
main {
    overflow-y: auto;
    grid-area: artists;
    padding: 1rem;
}

figure {
    display: flex;
    align-items: flex-end;
    margin: 0 2rem;
}

figcaption {
    margin: 1rem;
}

figcaption h3 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
}

figcaption p {
    margin-bottom: 1rem;
    font-size: 1rem;
}

strong {
    font-weight: bold;
    color: var(--accent-color-1);
}

.artist-image {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;
    border: var(--main-border);
}

.artist-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.tracks {
    width: 100%;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.track a {
    margin-left: 1rem;
    cursor: pointer;
}

.track {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    margin-bottom: 1rem;
}

.track img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
    border: var(--main-border);
}
</style>
