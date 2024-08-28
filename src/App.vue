<template>
  <div id="app">
    <header>
      <h1 class="logo">BOOLFLIX</h1>
      <SearchBar @search="searchMedia" />
    </header>
    <main>
      <MediaList :items="mediaItems" />
    </main>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import SearchBar from './components/SearchBar.vue';
import MediaList from './components/MediaList.vue';
import { useStore } from './store';

export default {
  name: 'App',
  components: {
    SearchBar,
    MediaList
  },
  setup() {
    const store = useStore();

    const searchMedia = (query) => {
       
      console.log('Searching for:', query);
    };

    const mediaItems = computed(() => {
      return [...store.movies, ...store.tvShows];
    });

    return {
      searchMedia,
      mediaItems
    };
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  background-color: #141414;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #000;
}

.logo {
  color: #E50914;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

main {
  padding: 2rem;
}
</style>