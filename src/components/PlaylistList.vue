<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
    <aside>
        <h2>Mis Playlists</h2>
        <ul>
            <!-- This is an example, it will change to Playlist components or something similar -->
            <li>PlayList 1</li>
            <li>PlayList 2</li>
            <li>PlayList 3</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>PlayList N</li>
            <li>Last PlayList</li>
        </ul>
        <!-- Move to a new route that will change the view of the app to one with a form to create a playlist -->
        <RouterLink to="#" class="new-playlist">
            + Crea una nueva
        </RouterLink>
    </aside>
</template>

<style scoped>
aside {
    display: flex;
    flex-flow: column;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    justify-content: space-between;
    border-right: 2px solid black;
    width: 12vw;
    overflow-y: scroll;
    position: relative;
}

h2 {
    padding: 2rem;
}

ul {
    padding-left: 1rem;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}

li {
    margin-bottom: 1rem;
    padding: 0 1rem;
    border-left: 2px solid transparent;
}

li:hover {
    cursor: pointer;
    color: var(--text-color-1);
    border-left: var(--main-border);

}

.new-playlist {
    padding: 1rem 2rem;
    border-top: var(--main-border);
    cursor: pointer;
    position: sticky;
    bottom: 0;
    background-color: var(--background-color);
}

.new-playlist:hover {
    color: var(--text-color-1);
}

</style>