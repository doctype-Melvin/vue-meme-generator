<script setup>
import { ref, watchEffect } from 'vue'
import Input from './components/Input.vue'
import Output from './components/Output.vue'

// Ref is set in the Input component
// and passed to the Output component
const textItem = ref('')
const selectedItem = ref('')

// Refs for
// 1. storing the array of images
// 2. storing the random image
const apiImagesArray = ref('')
const memeImage = ref('')

// Function to set the textItem ref
const setTextItem = (value) => {
  textItem.value = value
}

const setMemeImage = (value) => {
  memeImage.value = value
}

const setSelectedItem = (value) => {
  selectedItem.value = value
}

const changeTextColor = (value) => {
  !selectedItem.value ? null : (selectedItem.value.style.color = value)
}

const changeTextSize = (value) => {
  !selectedItem.value ? null : (selectedItem.value.style.fontSize = value + 'px')
}

const changeFont = (value) => {
  !selectedItem.value ? null : (selectedItem.value.style.fontFamily = value)
}

// Picture API endpoints
const REDDIT = `https://meme-api.com/gimme`
const IMGFLIP = `https://api.imgflip.com/get_memes`

// Fetch pics from the API
watchEffect(async () => {
  const response = await fetch(`${IMGFLIP}`)
  const data = await response.json()
  apiImagesArray.value = data.data.memes
})

// Function to set the memeImage ref
const randomiser = async () => {
  const ranNum = Math.floor(Math.random() * apiImagesArray.value.length)
  memeImage.value = apiImagesArray.value[ranNum]
}
</script>

<template>
  <header>
    <div class="wrapper">
      <Input
        :setTextItem="setTextItem"
        :randomiser="randomiser"
        :changeTextColor="changeTextColor"
        :changeTextSize="changeTextSize"
        :changeFont="changeFont"
        @update:meme-image="setMemeImage"
      />
    </div>
  </header>

  <main>
    <Output
      :textItem="textItem"
      :image="memeImage"
      :select="setSelectedItem"
      :selectedItem="selectedItem"
    />
  </main>
</template>

<style scoped>
header {
  display: flex;
  place-items: center;
  padding-right: calc(var(--section-gap) / 2);
}

.logo {
  margin: 0 2rem 0 0;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}
</style>
