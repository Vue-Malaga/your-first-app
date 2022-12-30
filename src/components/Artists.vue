<template>
    <figure>
        <div class="image">
            <img :src="artist.image" :alt="artist.name" />
        </div>
        <figcaption>
            <h3>{{ artist.name }}</h3>
            <p>Canciones {{ artist.tracks.length }}</p>
        </figcaption>
    </figure>
</template>

<script setup>
const props = defineProps({
    artist: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
figure {
    border-radius: 10px;
    margin: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    position: relative;
}

.image {
    width: 200px;
    height: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease;
}

figcaption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: none;
    transition: display 0.5s ease;
}

figcaption h3 {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--text-color-2);
    text-align: center;
    margin-top: 1rem;
}

figcaption p {
    font-size: 1rem;
    color: var(--text-color-2);
    text-align: center;
    margin-top: 1rem;
    opacity: 0.8;
}

figure:hover figcaption {
    display: block;
}

figure:hover {
    cursor: pointer;
}

figure:hover img {
    filter: brightness(0.2);
}
</style>
