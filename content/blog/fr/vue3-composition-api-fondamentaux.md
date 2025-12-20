---
title: "Les Fondamentaux de Vue 3 Composition API"
description: "Découvrez comment maîtriser la Composition API de Vue 3 et améliorer la réutilisabilité de votre code avec les composables."
date: "2025-12-15T14:00:00+01:00"
image: "/images/blog/fr/vue3-composition-api-fondamentaux.png"
tags: ["Vue.js", "JavaScript", "Frontend"]
category: "Développement Web"
author: "Aboubakar Sidik Faha"
readingTime: "8 min"
locale: "fr"
slug: "vue3-composition-api-fondamentaux"
draft: false
---

La Composition API de Vue 3 représente une évolution majeure dans la façon dont nous structurons et organisons le code de nos composants. Dans cet article, nous allons explorer les concepts fondamentaux et les meilleures pratiques.

## Pourquoi la Composition API ?

La Composition API offre plusieurs avantages significatifs :

- **Meilleure organisation du code** : Regroupez la logique par fonctionnalité
- **Réutilisabilité améliorée** : Créez des composables facilement partageables
- **TypeScript natif** : Support complet de TypeScript
- **Flexibilité** : Plus de contrôle sur le cycle de vie des composants

## Les bases : ref et reactive

```typescript
import { ref, reactive } from 'vue'

// ref pour les valeurs primitives
const count = ref(0)
count.value++ // Accès via .value

// reactive pour les objets
const state = reactive({
  name: 'Vue 3',
  version: 3.4
})
state.name = 'Vue' // Accès direct
```

## Créer un composable

Les composables sont des fonctions qui encapsulent et réutilisent la logique stateful :

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

## Watchers et computed

```typescript
import { computed, watch, watchEffect } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

// Computed property
const fullName = computed(() => `${firstName.value} ${lastName.value}`)

// Watch spécifique
watch(firstName, (newVal, oldVal) => {
  console.log(`Prénom changé de ${oldVal} à ${newVal}`)
})

// WatchEffect pour les effets réactifs
watchEffect(() => {
  console.log(`Nom complet: ${fullName.value}`)
})
```

## Bonnes pratiques

1. **Nommez vos composables avec le préfixe `use`** : `useUser`, `useAuth`, `useFetch`
2. **Retournez des refs readonly** quand c'est possible pour éviter les modifications accidentelles
3. **Documentez les paramètres et valeurs de retour**
4. **Gardez les composables focalisés** sur une seule responsabilité

## Conclusion

La Composition API de Vue 3 ouvre de nouvelles possibilités pour structurer vos applications de manière plus maintenable et réutilisable. En maîtrisant ces fondamentaux, vous serez en mesure de créer des composants plus propres et plus performants.

N'hésitez pas à partager vos questions dans les commentaires ci-dessous !
