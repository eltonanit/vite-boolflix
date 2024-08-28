

<script>
export default {
    name: 'LanguageFlag',
    props: {
        language: String
    },
    data() {
        return {
            imageLoaded: true
        }
    },
    computed: {
        hasFlag() {
            return ['en', 'it', 'fr', 'es'].includes(this.language);
        },
        flagSrc() {
            return require(`@/assets/img/flags/${this.language}.png`);
        }
    },
    methods: {
        onImageError() {
            this.imageLoaded = false;
        }
    }
}
</script>

<template>
    <span>
        <img v-if="hasFlag" :src="flagSrc" :alt="language" class="flag" @error="onImageError">
        <span v-show="!imageLoaded">{{ language }}</span>
    </span>
</template>

<style scoped>
.flag {
    width: 30px;
    height: 20px;
    vertical-align: middle;
}
</style>