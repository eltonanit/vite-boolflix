

<template>
  <div class="media-card" 
   @mouseover="showDetails = true"
    @mouseleave="showDetails = false"
    >
    <img :src="posterUrl" :alt="title" class="poster">
    <div v-if="showDetails" class="details">
      <h3>{{ item.title }}</h3>
      <p>{{ item.originalTitle }}</p>
      <p>{{ item.originalTitle }}</p>
      <StarRating :rating="item.rating" /> 
      <p>
        <LanguageFlag :language="item.language" />
      </p>
      <p>Voto: <StarRating :rating="rating" /></p>
      <p class="overview">{{ item.overview }}</p>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue';
import { useStore } from '../store';
import StarRating from './StarRating.vue';

export default {
  name: 'MediaCard',
  components: {
    StarRating  
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore();
    const showDetails = ref(false);
    
    const posterUrl = computed(() => {
      return props.item.poster_path
        ? `${store.imageBaseUrl}w342${props.item.poster_path}`
        : '/path/to/default-poster.png';
    });

    const title = computed(() => {
      return props.item.mediaType === 'movie' ? props.item.title : props.item.name;
    });

    return {
      posterUrl,
      title,
      showDetails
    };
  }
}
</script>

<style scoped>
.media-card {
  position: relative;
  width: 200px;
  height: 300px;
  overflow: hidden;
  cursor: pointer;
}

.poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.media-card:hover .poster {
  transform: scale(1.1);
}

.details {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  overflow-y: auto;
}

.media-card:hover .details {
  opacity: 1;
}
</style>