<script setup>
import { ref, watchEffect } from 'vue'
import Input from './components/Input.vue'
import Output from './components/Output.vue'

const topText = ref('')
const bottomText = ref('')
const picArray = ref('')
const randomPic = ref('')

const updateTopText = (event) => {
  topText.value = event.target.value
}

const updateBottomText = (event) => {
  bottomText.value = event.target.value
}

const REDDIT = `https://meme-api.com/gimme`
const IMGFLIP = `https://api.imgflip.com/get_memes`

watchEffect(async () => {
  const response = await fetch(`${IMGFLIP}`)
  const data = await response.json()
  picArray.value = data.data.memes
  console.log(picArray.value)
})

const randomiser = async () => {
  const ranNum = Math.floor(Math.random() * picArray.value.length)
  randomPic.value = picArray.value[ranNum]
  console.log('randomPic', randomPic.value)
}
</script>

<template>
  <header>
    <div class="wrapper">
      <Input
        :updateTopText="updateTopText"
        :updateBottomText="updateBottomText"
        :randomiser="randomiser"
      />
    </div>
  </header>

  <main>
    <Output :topText="topText" :bottomText="bottomText" :image="randomPic" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
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
}
</style>
