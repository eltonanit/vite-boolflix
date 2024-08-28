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
      return props.item.posterPath
        ? `${store.imageBaseUrl}w342${props.item.posterPath}`
        : '/path/to/default-poster.png';
    });

    return {
      posterUrl
    };
  }
}
</script>

<template>
  <div class="media-card">
    <img :src="posterUrl" :alt="item.title" class="poster">
  </div>
</template>



<style scoped>
.media-card {
  width: 200px;
  height: 300px;
  overflow: hidden;
  border: 2px solid #333;
}

.poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>