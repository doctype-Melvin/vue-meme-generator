<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps(['setTextItem', 'randomiser', 'updateContents'])

const inputText = ref('')

const handleTextInput = (event) => {
  inputText.value = event.target.value
}

const handleSubmit = (event) => {
  event.preventDefault()
  props.setTextItem(inputText.value)
  inputText.value = ''
}
</script>

<template>
  <h1>Meme Generator</h1>
  <p>Create Memes and share them with your friends!</p>
  <form class="form" @submit.prevent="handleSubmit">
    <label for="top-text">Add text</label>
    <input @input="handleTextInput" id="text-item" type="text" v-model="inputText" />
    <button type="submit">+</button>
  </form>
  <button @click="randomiser">Random Pic</button>
</template>

<style scoped></style>
