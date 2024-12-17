<template>
  <Html
    :lang="$i18n.locale"
    :data-mode="uiStore.darkMode ? 'dark' : 'light'"
    class="dark:bg-gray-900 dark:text-gray-300 transition-colors"
  >
    <div v-if="uiStore.loading" class="h-screen w-screen fixed z-50">
      <div
        class="flex items-center justify-center h-full bg-primary text-white"
      >
        <logo class="w-40 animate-pulse" :colors="['white']" />
      </div>
    </div>
    <div>
      <header class="flex items-center pt-6 sticky top-0 z-10">
        <div class="container">
          <div
            class="h-16 flex justify-between items-center backdrop-blur-md bg-gray-200/50 dark:bg-gray-700/50 rounded-3xl px-6 z-10"
          >
            <nuxt-link to="/" class="font-black text-xl w-8">
              <logo
                :colors="uiStore.darkMode ? ['#059669', 'white'] : undefined"
              />
            </nuxt-link>

            <nav class="hidden lg:flex gap-6">
              <ul class="flex gap-6">
                <li>
                  <nuxt-link to="#" class="hover:text-primary">
                    {{ $t("home.menu.skills") }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">
                    {{ $t("home.menu.services") }}
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="#">
                    {{ $t("home.menu.projects") }}
                  </nuxt-link>
                </li>
              </ul>
            </nav>

            <nav>
              <ul class="flex text-sm items-center">
                <li>
                  <icon-btn
                    class="hover:bg-gray-300/50 dark:hover:bg-gray-900/50"
                    @click="uiStore.toggleDarkMode"
                    :name="
                      !uiStore.darkMode
                        ? 'solar:sun-outline'
                        : 'solar:moon-outline'
                    "
                  />
                </li>
                <li>
                  <DropdownMenuRoot>
                    <DropdownMenuTrigger as-child>
                      <icon-btn
                        class="hover:bg-gray-300/50 dark:hover:bg-gray-900/50"
                        name="mdi:language"
                      >
                        <template #indicator>
                          <icon :name="`circle-flags:${locale}`" size="10" class="absolute top-2 right-2" />
                        </template>
                      </icon-btn>
                    </DropdownMenuTrigger>

                    <Transition name="fade">
                      <DropdownMenuContent
                        class="bg-gray-200 dark:bg-gray-700 shadow-lg rounded-lg p-1"
                      >
                        <DropdownMenuItem
                          v-for="locale in availableLocales"
                          :key="locale.code"
                          @click="setLocale(locale.code)"
                          class="flex items-center gap-2 cursor-pointer px-4 py-1 hover:bg-gray-300/50 dark:hover:bg-gray-900/50 rounded-lg"
                        >
                          <icon :name="`circle-flags:${locale.code}`" />
                          <span class="capitalize">{{ locale.name }}</span>
                        </DropdownMenuItem>
                        <DropdownMenuArrow
                          class="fill-gray-200 dark:fill-gray-700 stroke-2"
                        />
                      </DropdownMenuContent>
                    </Transition>
                  </DropdownMenuRoot>
                </li>
                <li class="lg:hidden">
                  <icon-btn
                    class="hover:bg-gray-300/50 dark:hover:bg-gray-900/50"
                    @click="() => uiStore.setDrawerOpen(true)"
                    name="feather:menu"
                  />
                </li>
                <li>
                  <nuxt-link
                    to="#"
                    class="ml-2 py-2 px-4 rounded-full text-white bg-primary hidden lg:inline"
                  >
                    {{ $t("home.contactMe") }}
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

      <footer class="container border-t dark:border-gray-700 py-6">
        <div class="text-center flex justify-between">
          <small>
            &copy; {{ new Date().getFullYear() }} Aboubak'Art. All Rights
            Reserved
          </small>

          <div class="flex gap-0.5">
            <a
              href="https://github.com/sidikfaha"
              target="_blank"
              class="size-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            >
              <icon name="feather:github" />
            </a>
            <a
              href="https://x.com/sidikfaha"
              target="_blank"
              class="size-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            >
              <icon name="pajamas:twitter" />
            </a>
            <a
              href="https://instagram.com/aboubak.art"
              target="_blank"
              class="size-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            >
              <icon name="feather:instagram" />
            </a>
          </div>
        </div>
      </footer>
    </div>

    <Transition name="fade">
      <Drawer
        v-if="uiStore.drawerOpen"
        @close="() => uiStore.setDrawerOpen(false)"
      />
    </Transition>
  </Html>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n();
const uiStore = useUiStore();

const availableLocales = computed(() =>
  locales.value.filter((l) => l !== locale.value)
);

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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
