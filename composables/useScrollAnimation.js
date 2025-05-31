export const useScrollAnimation = () => {
  const animateOnScroll = (elements, options = {}) => {
    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      once: true,
      ...options
    }

    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          if (defaultOptions.once) {
            observer.unobserve(entry.target)
          }
        } else if (!defaultOptions.once) {
          entry.target.classList.remove('animate-in')
        }
      })
    }, defaultOptions)

    elements.forEach((el) => {
      if (el) {
        observer.observe(el)
      }
    })

    return observer
  }

  const animateCounter = (target, finalValue, duration = 2000) => {
    if (typeof window === 'undefined') return

    const startValue = 0
    const startTime = performance.now()

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (finalValue - startValue) * easeOutQuart)
      
      target.textContent = currentValue + (finalValue === 100 ? '%' : '+')
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }

    requestAnimationFrame(updateCounter)
  }

  return {
    animateOnScroll,
    animateCounter
  }
}