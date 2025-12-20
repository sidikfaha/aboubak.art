---
title: "Vue 3 Composition API Fundamentals"
description: "Discover how to master Vue 3's Composition API and improve code reusability with composables."
date: "2025-12-15T14:00:00+01:00"
image: "/images/blog/en/vue3-composition-api-fundamentals.png"
tags: ["Vue.js", "JavaScript", "Frontend"]
category: "Web Development"
author: "Aboubakar Sidik Faha"
readingTime: "8 min"
locale: "en"
slug: "vue3-composition-api-fundamentals"
draft: false
---

Vue 3's Composition API represents a major evolution in how we structure and organize component code. In this article, we'll explore the fundamental concepts and best practices.

## Why Composition API?

The Composition API offers several significant advantages:

- **Better code organization**: Group logic by feature
- **Improved reusability**: Create easily shareable composables
- **Native TypeScript**: Full TypeScript support
- **Flexibility**: More control over component lifecycle

## The basics: ref and reactive

```typescript
import { ref, reactive } from 'vue'

// ref for primitive values
const count = ref(0)
count.value++ // Access via .value

// reactive for objects
const state = reactive({
  name: 'Vue 3',
  version: 3.4
})
state.name = 'Vue' // Direct access
```

## Creating a composable

Composables are functions that encapsulate and reuse stateful logic:

```typescript
// composables/useCounter.ts
export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  return {
    count: readonly(count),
    increment,
    decrement,
    reset
  }
}
```

## Watchers and computed

```typescript
import { computed, watch, watchEffect } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

// Computed property
const fullName = computed(() => `${firstName.value} ${lastName.value}`)

// Specific watch
watch(firstName, (newVal, oldVal) => {
  console.log(`First name changed from ${oldVal} to ${newVal}`)
})

// WatchEffect for reactive effects
watchEffect(() => {
  console.log(`Full name: ${fullName.value}`)
})
```

## Best practices

1. **Name your composables with the `use` prefix**: `useUser`, `useAuth`, `useFetch`
2. **Return readonly refs** when possible to avoid accidental modifications
3. **Document parameters and return values**
4. **Keep composables focused** on a single responsibility

## Conclusion

Vue 3's Composition API opens new possibilities for structuring your applications in a more maintainable and reusable way. By mastering these fundamentals, you'll be able to create cleaner and more performant components.

Feel free to share your questions in the comments below!
