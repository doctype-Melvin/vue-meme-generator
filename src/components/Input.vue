<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  updateTopText: Function,
  updateBottomText: Function
})

const exampleText = ref('')
</script>

<template>
  <h1>Meme Generator</h1>
  <p>Generate Memes and share them with your friends!</p>
  <form class="form">
    <label for="top-text">Top Text</label>
    <input @input="updateTopText" id="top-text" type="text" />
    <label for="bottom-text">Bottom Text</label>
    <input @input="updateBottomText" id="bottom-text" type="text" />
  </form>
  <div>{{ exampleText }}</div>
</template>

<style scoped></style>
