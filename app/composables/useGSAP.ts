import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useGSAP = () => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
  }

  const fadeInUp = (element: string | Element | Element[], options = {}) => {
    if (process.server) return
    
    return gsap.from(element, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      ...options
    })
  }

  const fadeIn = (element: string | Element | Element[], options = {}) => {
    if (process.server) return
    
    return gsap.from(element, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      ...options
    })
  }

  const staggerReveal = (elements: string | Element[], options = {}) => {
    if (process.server) return
    
    return gsap.from(elements, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      ...options
    })
  }

  const scrollTriggerFadeIn = (element: string | Element, options = {}) => {
    if (process.server) return
    
    return ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(element, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          ...options
        })
      },
      once: true
    })
  }

  const parallax = (element: string | Element, speed = 0.5) => {
    if (process.server) return
    
    return gsap.to(element, {
      y: () => window.innerHeight * speed * 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })
  }

  return {
    gsap,
    ScrollTrigger,
    fadeInUp,
    fadeIn,
    staggerReveal,
    scrollTriggerFadeIn,
    parallax
  }
}
