<template>
    <header>
        <figure>
            <img src="../assets/vue_malaga_logo.png" alt="Vue Málaga logo" />
            <h1>VUETIFY</h1>
        </figure>
        <!-- Here will be a search bar -->
    </header>
</template>

<style scoped>
header {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 1rem 2rem;
    border-bottom: 2px solid var(--accent-color-1);
    grid-area: header;
}

figure {
    display: flex;
    flex-flow: row;
    align-items: center;
}

figure img {
    width: 100px;
    height: 100px;
}

h1 {
    color: var(--text-color-1);
    font-family: var(--logo-font);
    font-size: 3.5rem;
    text-shadow: 1px 0 var(--accent-color-1), -1px 0 var(--accent-color-1),
        0 1px var(--accent-color-1), 0 -1px var(--accent-color-1),
        1px 1px var(--accent-color-1), -1px -1px var(--accent-color-1),
        1px -1px var(--accent-color-1), -1px 1px var(--accent-color-1);
}
</style>
