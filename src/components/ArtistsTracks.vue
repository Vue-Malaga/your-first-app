<template>
</template>

<script setup>
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
