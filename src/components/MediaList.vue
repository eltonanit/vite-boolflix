<script>
import MediaCard from './MediaCard.vue';

export default {
  name: 'MediaList',
  components: {
    MediaCard
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="media-list">
    <MediaCard v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>



<style scoped>
.media-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: flex-start;
}
</style>