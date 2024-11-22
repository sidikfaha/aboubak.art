<template>
  <div v-if="uiStore.loading" class="h-screen w-screen fixed z-50">
    <div class="flex items-center justify-center h-full bg-primary text-white">
      <icon :size="64" name="feather:loader" class="animate-spin" />
    </div>
  </div>
  <div
    :data-mode="uiStore.darkMode ? 'dark' : 'light'"
    lang="fr"
    class="dark:bg-gray-900 dark:text-white transition-colors"
  >
    <header class="flex items-center pt-6 sticky top-0 z-10">
      <div class="container">
        <div
          class="h-16 flex justify-between items-center backdrop-blur-md bg-gray-200/50 dark:bg-gray-700/50 rounded-3xl px-6 z-10"
        >
          <nuxt-link to="/" class="font-black text-xl">
            ~> aboubak.<span class="text-primary">art</span>_
          </nuxt-link>

          <nav>
            <ul class="flex gap-6">
              <li>
                <nuxt-link to="#" class="hover:text-primary">
                  Compétences
                </nuxt-link>
              </li>
              <li><nuxt-link to="#">Services</nuxt-link></li>
              <li><nuxt-link to="#">Projets</nuxt-link></li>
            </ul>
          </nav>

          <nav>
            <ul class="flex gap-2 text-sm items-center">
              <li>
                <icon-btn
                  class="hover:bg-gray-300/50 dark:hover:bg-gray-900/50"
                  @click="uiStore.toggleDarkMode"
                  :name="
                    uiStore.darkMode
                      ? 'solar:sun-outline'
                      : 'solar:moon-outline'
                  "
                />
              </li>
              <li>
                <nuxt-link
                  to="#"
                  class="py-2 px-4 rounded-full text-white bg-primary"
                >
                  Contactez-moi
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="container mt-6">
      <div class="py-6 text-center border-t flex justify-between">
        <small>
          &copy; {{ new Date().getFullYear() }} Aboubak'Art. All Rights Reserved
        </small>

        <div class="flex gap-0.5">
          <a
            href="https://github.com/sidikfaha"
            target="_blank"
            class="size-8 rounded-full bg-gray-700 flex items-center justify-center text-white"
          >
            <icon name="feather:github" />
          </a>
          <a
            href="https://x.com/sidikfaha"
            target="_blank"
            class="size-8 rounded-full bg-gray-700 flex items-center justify-center text-white"
          >
            <icon name="pajamas:twitter" />
          </a>
          <a
            href="https://instagram.com/aboubak.art"
            target="_blank"
            class="size-8 rounded-full bg-gray-700 flex items-center justify-center text-white"
          >
            <icon name="feather:instagram" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const uiStore = useUiStore();

onMounted(async () => {
  await new Promise((resolve) => {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode) {
      uiStore.setDarkMode(JSON.parse(darkMode));
    }
    setTimeout(resolve, 200);
  });
  uiStore.setLoading(false);
});
</script>
