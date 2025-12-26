import { doc, getDoc, setDoc, updateDoc, increment, onSnapshot } from "firebase/firestore";

export const useArticleViews = () => {
  const { $db } = useNuxtApp();

  const incrementViews = async (slug: string) => {
    if (!$db) {
        console.error("Firestore is not initialized.");
        return;
    };
    
    const docRef = doc($db, "article_views", slug);
    
    try {
      // Try to update first
      await updateDoc(docRef, {
        views: increment(1)
      });
    } catch (e: any) {
      // If document doesn't exist, create it
      if (e.code === 'not-found') {
        await setDoc(docRef, {
          views: 1
        });
      } else {
        console.error("Error incrementing views:", e);
      }
    }
  };

  const getViews = (slug: string) => {
    const views = ref<number | null>(null);
    
    if (!$db) return views;

    const docRef = doc($db, "article_views", slug);
    
    // Real-time listener
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        views.value = doc.data().views;
      } else {
        views.value = 0;
      }
    });

    // Clean up listener when component unmounts
    onUnmounted(() => {
      unsubscribe();
    });

    return views;
  };

  return {
    incrementViews,
    getViews
  };
};
