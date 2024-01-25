<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue'
import Output from './components/Output.vue'

const topText = ref('')
const updateTopText = (event) => {
  topText.value = event.target.value
}

const bottomText = ref('')
const updateBottomText = (event) => {
  bottomText.value = event.target.value
}
</script>

<template>
  <header>
    <div class="wrapper">
      <Input :updateTopText="updateTopText" :updateBottomText="updateBottomText" />
    </div>
  </header>

  <main>
    <Output :topText="topText" :bottomText="bottomText" />
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
