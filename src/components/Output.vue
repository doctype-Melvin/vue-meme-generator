<script setup>
import { defineProps, ref } from 'vue'
defineProps(['topText', 'bottomText', 'image'])
const imgDimensions = () => console.log('New Image')
</script>

<template>
  <div class="meme-container">
    <h2 class="topText">{{ topText }}</h2>
    <img @change="imgDimensions" v-if="image && image.url" :src="image.url" alt="meme" />
    <h2 class="bottomText">{{ bottomText }}</h2>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.meme-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.meme-container img {
  width: 100%;
  height: 100%;
}

.meme-container img {
  object-fit: contain;
}

.topText {
  position: absolute;
  top: 0;
  transform: translate(275%, 50%);
}

.bottomText {
  position: absolute;
  bottom: 0;
  transform: translate(275%, -50%);
}
</style>
