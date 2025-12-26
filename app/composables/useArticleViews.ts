import { doc, setDoc, increment, onSnapshot } from "firebase/firestore";

export const useArticleViews = () => {
  const { $db } = useNuxtApp();

  const incrementViews = async (slug: string) => {
    if (!$db) return;

    const docRef = doc($db, "article_views", slug);

    try {
      await setDoc(docRef, {
        views: increment(1)
      }, { merge: true });
    } catch (e: any) {
      console.error("Error incrementing views:", e.message);
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
