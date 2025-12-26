import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const firebaseConfig = config.public.firebase;

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return {
    provide: {
      db,
    },
  };
});
