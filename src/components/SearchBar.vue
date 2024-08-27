

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchQuery: ''
        }
    },
    methods: {
        search() {
            this.$emit('search', this.searchQuery)
        }
    }
}
</script>

<template>
    <div class="search-bar">
        <input v-model="searchQuery" type="text" placeholder="Cerca un film...">
        <button @click="search">Cerca</button>
    </div>
</template>