

<script>
import { computed } from 'vue';
import { useStore } from '../store';

export default {
  name: 'MediaCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore();

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
      title
    };
  }
}
</script>

<template>
  <div class="media-card">
    <img :src="posterUrl" :alt="title" class="poster">
  </div>
</template>
 
<style scoped>
.media-card {
  position: relative;
  width: 200px;
  height: 300px;
  overflow: hidden;
}

.poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  overflow-y: auto;
}

.overview {
  font-size: 0.8rem;
  margin-top: 1rem;
}
</style>