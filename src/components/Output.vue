<script setup>
import { defineProps, watch, ref, nextTick } from 'vue'
import { useDraggable } from '../utils/index.js'
const props = defineProps(['textItem', 'image', 'select'])

const memeContainer = ref(null)

const items = ref([])

// Watch for changes in the textItem prop
// and push the new item to the items array
// and assign the useDraggable function to the item
watch(
  () => props.textItem,
  async () => {
    items.value.push({
      text: props.textItem,
      x: 0,
      y: 0,
      width: 0,
      height: 0
    })

    await nextTick()

    items.value.forEach((item, index) => {
      const element = document.getElementById(`draggable-${index}`)
      item.width = element.offsetWidth
      item.height = element.offsetHeight
      Object.assign(item, useDraggable(item, memeContainer))
    })
  }
)

const handleSelection = (event) => {
  props.select(event.target)
}
</script>

<template>
  <div class="meme-container" ref="memeContainer">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="draggable"
      ref="draggable"
      :id="`draggable-${index}`"
      :style="{ top: item.y + 'px', left: item.x + 'px' }"
      @mousedown="item.startDrag($event)"
      @click="handleSelection"
    >
      {{ item.text }}
    </div>
    <img v-if="image && image.url" :src="image.url" alt="meme" />
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

main .meme-container {
  position: relative;
  display: flex;
  justify-content: center;
  color: black;
  width: 100%;
  height: 100%;
}

.meme-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.text-container {
  width: 100%;
  height: 100%;
}

.draggable {
  color: #fff;
  position: absolute;
  width: fit-content;
  cursor: move;
  padding: 5px;
  font-weight: bold;

  text-shadow:
    -1px -1px 0 #000,
    1px 1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000;
}

.draggable:active {
  cursor: grabbing;
  border: dotted 1px #000;
}
</style>
