
<script>
import { ref } from 'vue';

export default {
  name: 'SearchBar',
  emits: ['search'],
  setup(props, { emit }) {
    const query = ref('');

    const search = () => {
      emit('search', query.value);
    };

    return {
      query,
      search
    };
  }
}
</script>

<template>
  <div class="search-bar">
    <input v-model="query" type="text" placeholder="Cerca un film...">
    <button @click="search">Cerca</button>
  </div>
</template>


<style scoped>
.search-bar {
  display: flex;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  width: 200px;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #E50914;
  color: white;
  border: none;
  cursor: pointer;
}
</style>