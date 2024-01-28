import { onMounted, onUnmounted } from 'vue'

export const useDraggable = (item) => {
  let initialX = 0
  let initialY = 0

  const startDrag = (event) => {
    initialX = event.clientX - item.x
    initialY = event.clientY - item.y
    window.addEventListener('mousemove', drag)
    window.addEventListener('mouseup', stopDrag)
  }

  const drag = (event) => {
    event.preventDefault()

    let newX = event.clientX - initialX
    let newY = event.clientY - initialY

    item.x = newX
    item.y = newY
  }

  const stopDrag = () => {
    window.removeEventListener('mousemove', drag)
    window.removeEventListener('mouseup', stopDrag)
  }

  onMounted(() => {
    window.addEventListener('mouseup', stopDrag)
  })

  onUnmounted(() => {
    window.removeEventListener('mouseup', stopDrag)
  })

  return {
    startDrag
  }
}