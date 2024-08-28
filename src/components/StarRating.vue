 <script>
export default {
  name: 'StarRating',
  props: {
    rating: Number
  },
  methods: {
    starClass(n) {
      return n <= this.rating ? 'fas fa-star' : 'far fa-star'
    }
  }
}
</script>
<template>
  <div class="star-rating">
    <i v-for="n in 5" :key="n" :class="starClass(n)"></i>
  </div>
</template>




<style scoped>
.star-rating {
  color: gold;
}
</style>