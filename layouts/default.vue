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
      <header class="flex items-center pt-6 fixed top-0 z-50 w-full">
        <div class="container">
          <div
            class="h-16 flex justify-between items-center backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-3xl px-6 z-10 border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <nuxt-link to="/" class="font-black text-xl w-8 group">
              <div
                class="group-hover:scale-110 transition-transform duration-300"
              >
                <logo
                  :colors="uiStore.darkMode ? ['#059669', 'white'] : undefined"
                />
              </div>
            </nuxt-link>

            <nav class="hidden lg:flex gap-6">
              <ul class="flex gap-6">
                <li>
                  <NuxtLink
                    to="/#skills"
                    class="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium group"
                  >
                    {{ $t("home.menu.skills") }}
                    <div
                      class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"
                    ></div>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/#services"
                    class="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium group"
                  >
                    {{ $t("home.menu.services") }}
                    <div
                      class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"
                    ></div>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/#clients"
                    class="relative px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium group"
                  >
                    {{ $t("home.menu.projects") }}
                    <div
                      class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"
                    ></div>
                  </NuxtLink>
                </li>
              </ul>
            </nav>

            <nav>
              <ul class="flex text-sm items-center gap-2">
                <li>
                  <icon-btn
                    class="hover:bg-blue-100/50 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300"
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
                        class="hover:bg-blue-100/50 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300"
                        name="mdi:language"
                      />
                    </DropdownMenuTrigger>

                    <Transition name="fade">
                      <DropdownMenuContent
                        class="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl rounded-2xl p-2 border border-white/20 dark:border-gray-700/50"
                      >
                        <DropdownMenuItem
                          v-for="locale in availableLocales"
                          :key="locale.code"
                          @click="setLocale(locale.code)"
                          class="flex items-center gap-3 cursor-pointer px-4 py-3 hover:bg-blue-100/50 dark:hover:bg-blue-900/30 rounded-xl transition-all duration-300 font-medium"
                        >
                          <icon :name="`circle-flags:${locale.code}`" />
                          <span class="capitalize">{{ locale.name }}</span>
                        </DropdownMenuItem>
                        <DropdownMenuArrow
                          class="fill-white/90 dark:fill-gray-800/90 stroke-2"
                        />
                      </DropdownMenuContent>
                    </Transition>
                  </DropdownMenuRoot>
                </li>
                <li class="lg:hidden">
                  <icon-btn
                    class="hover:bg-blue-100/50 dark:hover:bg-blue-900/30 hover:scale-110 transition-all duration-300"
                    @click="() => uiStore.setDrawerOpen(true)"
                    name="feather:menu"
                  />
                </li>
                <li>
                  <NuxtLink
                    to="/#contact"
                    class="relative ml-2 py-3 px-6 rounded-2xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hidden lg:inline-flex items-center gap-2 font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 glow-effect group overflow-hidden"
                  >
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-indigo-400/50 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    ></div>
                    <icon
                      name="mdi:message-outline"
                      :size="16"
                      class="group-hover:rotate-12 transition-transform duration-300"
                    />
                    {{ $t("home.contactMe") }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <slot />
      </main>

      <footer class="relative overflow-hidden">
        <!-- Enhanced footer with gradient background -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30"
        ></div>

        <!-- Decorative elements -->
        <div
          class="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"
        ></div>
        <div
          class="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl"
        ></div>

        <div class="container relative z-10">
          <div class="border-t border-white/20 dark:border-gray-700/50 py-12">
            <!-- Enhanced footer content -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <!-- Brand section -->
              <div class="md:col-span-1">
                <div class="flex items-center gap-3 mb-4">
                  <logo
                    :colors="
                      uiStore.darkMode ? ['#059669', 'white'] : undefined
                    "
                    class="w-8"
                  />
                  <span
                    class="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                  >
                    Aboubak'Art
                  </span>
                </div>
                <p
                  class="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
                >
                  {{ $t("home.common.digitalExperiences") }}
                </p>
                <div
                  class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  <div
                    class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                  ></div>
                  {{ $t("home.common.availableForProjects") }}
                </div>
              </div>

              <!-- Quick links -->
              <div class="md:col-span-1">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-4">
                  {{ $t("home.common.quickLinks") }}
                </h4>
                <ul class="space-y-2">
                  <li>
                    <a
                      href="#skills"
                      class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <icon
                        name="mdi:chevron-right"
                        :size="16"
                        class="group-hover:translate-x-1 transition-transform duration-300"
                      />
                      {{ $t("home.common.skillsExpertise") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <icon
                        name="mdi:chevron-right"
                        :size="16"
                        class="group-hover:translate-x-1 transition-transform duration-300"
                      />
                      {{ $t("home.common.services") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#clients"
                      class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <icon
                        name="mdi:chevron-right"
                        :size="16"
                        class="group-hover:translate-x-1 transition-transform duration-300"
                      />
                      {{ $t("home.common.projects") }}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <icon
                        name="mdi:chevron-right"
                        :size="16"
                        class="group-hover:translate-x-1 transition-transform duration-300"
                      />
                      {{ $t("home.common.contact") }}
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Social links -->
              <div class="md:col-span-1">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-4">
                  {{ $t("home.common.connectWithMe") }}
                </h4>
                <div class="flex gap-3 mb-4">
                  <a
                    href="https://github.com/sidikfaha"
                    target="_blank"
                    class="group relative w-12 h-12 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/50 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div
                      class="absolute inset-0 bg-gray-900 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"
                    ></div>
                    <icon
                      name="feather:github"
                      class="relative z-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                  <a
                    href="https://x.com/sidikfaha"
                    target="_blank"
                    class="group relative w-12 h-12 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/50 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div
                      class="absolute inset-0 bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"
                    ></div>
                    <icon
                      name="pajamas:twitter"
                      class="relative z-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                  <a
                    href="https://instagram.com/aboubak.art"
                    target="_blank"
                    class="group relative w-12 h-12 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/50 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div
                      class="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"
                    ></div>
                    <icon
                      name="feather:instagram"
                      class="relative z-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ $t("home.common.buildTogether") }}
                </p>
              </div>
            </div>

            <!-- Copyright section -->
            <div class="pt-8 border-t border-white/10 dark:border-gray-700/30">
              <div
                class="flex flex-col md:flex-row justify-between items-center gap-4"
              >
                <small class="text-gray-500 dark:text-gray-400">
                  &copy; {{ new Date().getFullYear() }} Aboubak'Art.
                  {{ $t("home.common.allRightsReserved") }}
                </small>
                <div
                  class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
                >
                  <span>{{ $t("home.common.madeWith") }}</span>
                  <icon
                    name="mdi:heart"
                    class="text-red-500 animate-pulse"
                    :size="16"
                  />
                  <span>{{ $t("home.common.and") }}</span>
                  <icon name="mdi:coffee" class="text-amber-600" :size="16" />
                </div>
              </div>
            </div>
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
