export const useDraggable = (item, containerRef) => {
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
    const rect = containerRef.value.getBoundingClientRect()

    let newX = event.clientX - initialX
    let newY = event.clientY - initialY

    const rightBoundary = rect.width - item.width
    const bottomBoundary = rect.height - item.height

    newX = Math.max(0, Math.min(newX, rightBoundary))
    newY = Math.max(0, Math.min(newY, bottomBoundary))

    item.x = newX
    item.y = newY
  }

  const stopDrag = () => {
    window.removeEventListener('mousemove', drag)
    window.removeEventListener('mouseup', stopDrag)
  }

  return {
    startDrag
  }
}
