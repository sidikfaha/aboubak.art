import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const firebaseConfig = config.public.firebase;

  const app = initializeApp(firebaseConfig);
  // Use default database - remove "website" if you don't have a named database
  const db = getFirestore(app);

  return {
    provide: {
      db,
    },
  };
});
