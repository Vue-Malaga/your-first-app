<template>
</template>

<script setup>
</script>

<style scoped>
main {
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
