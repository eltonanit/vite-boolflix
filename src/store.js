 
import { reactive } from 'vue'

export const store = reactive({
    searchQuery: '',
    movies: [],
    apiKey: '0bd6ccebdf4db426f1acd075c94d2b84',  
    apiBaseUrl: 'https://api.themoviedb.org/3',
})