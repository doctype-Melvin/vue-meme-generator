<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps([
  'setTextItem',
  'randomiser',
  'changeTextColor',
  'changeTextSize',
  'changeFont'
])

const inputText = ref('')

const fontSizes = ref([
  { name: 'small', size: 9 },
  { name: 'medium', size: 18 },
  { name: 'big', size: 32 },
  { name: 'huge', size: 60 }
])

const fontStyles = ref(['Arial', 'Pacifico', 'Comic Neue'])

const handleTextInput = (event) => {
  inputText.value = event.target.value
}

const handleSubmit = (event) => {
  event.preventDefault()
  props.setTextItem(inputText.value)
  inputText.value = ''
}

const handleColorChange = (event) => {
  props.changeTextColor(event.target.value)
}

const handleTextSizeChange = (event) => {
  props.changeTextSize(Number(event.target.dataset.size))
}

const handleFontChange = (event) => {
  props.changeFont(event.target.dataset.font)
}

// Component emit event
// to update the memeImage ref
const emit = defineEmits(['update:memeImage'])

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()

  reader.onload = (event) => {
    emit('update:memeImage', { url: event.target.result })
  }

  reader.readAsDataURL(file)
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
  <input @change="handleImageUpload" type="file" accept="image/*" />
  <input @change="handleColorChange" type="color" />
  <button
    v-for="(obj, index) in fontSizes"
    :key="index"
    :data-size="obj.size"
    @click="handleTextSizeChange"
    type="button"
  >
    {{ obj.name }}
  </button>
  <button
    @click="handleFontChange"
    v-for="(font, index) in fontStyles"
    :key="index"
    :data-font="font"
  >
    {{ font }}
  </button>
</template>

<style scoped></style>
