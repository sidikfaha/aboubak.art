<template>
  <ClientOnly>
    <div 
      v-if="!isTouchDevice"
      class="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      :style="cursorStyle"
    >
      <!-- Outer ring -->
      <div 
        class="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 transition-all duration-300"
        :class="{
          'w-10 h-10': !isHovering,
          'w-16 h-16 opacity-50': isHovering
        }"
      ></div>
      <!-- Inner dot -->
      <div 
        class="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full transition-all duration-150"
        :class="{
          'scale-100': !isHovering,
          'scale-0': isHovering
        }"
      ></div>
    </div>
  </ClientOnly>
</template>

<script setup>
const cursorX = ref(0)
const cursorY = ref(0)
const isHovering = ref(false)
const isTouchDevice = ref(false)

const cursorStyle = computed(() => ({
  transform: `translate(${cursorX.value}px, ${cursorY.value}px)`
}))

onMounted(() => {
  // Check for touch device
  isTouchDevice.value = window.matchMedia('(pointer: coarse)').matches
  
  if (isTouchDevice.value) return
  
  let rafId = null
  let targetX = 0
  let targetY = 0
  
  const updateCursor = () => {
    cursorX.value += (targetX - cursorX.value) * 0.15
    cursorY.value += (targetY - cursorY.value) * 0.15
    rafId = requestAnimationFrame(updateCursor)
  }
  
  const handleMouseMove = (e) => {
    targetX = e.clientX
    targetY = e.clientY
  }
  
  const handleMouseEnter = () => {
    isHovering.value = true
  }
  
  const handleMouseLeave = () => {
    isHovering.value = false
  }
  
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  rafId = requestAnimationFrame(updateCursor)
  
  // Add hover detection for interactive elements
  const addHoverListeners = () => {
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, .magnetic-btn')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })
  }
  
  addHoverListeners()
  
  // Watch for dynamically added elements
  const observer = new MutationObserver(() => {
    addHoverListeners()
  })
  
  observer.observe(document.body, { childList: true, subtree: true })
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    cancelAnimationFrame(rafId)
    observer.disconnect()
  })
})
</script>
