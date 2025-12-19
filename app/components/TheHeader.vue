<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const navItems = computed(() => [
  { key: "home", href: "/#home", isRoute: false },
  { key: "services", href: "/#services", isRoute: false },
  { key: "portfolio", href: "/#portfolio", isRoute: false },
  { key: "contact", href: localePath("/contact"), isRoute: true },
]);

const isMobileMenuOpen = ref(false);
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 glass-card px-4 md:px-20 py-0.5"
  >
    <div class="container-lg px-4 md:px-12 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3">
          <AppLogo class="size-10" gradient />
          <span class="font-orbitron font-bold text-xl text-gradient-primary">
            Aboubak'Art
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <template v-for="item in navItems" :key="item.key">
            <NuxtLink
              v-if="item.isRoute"
              :to="item.href"
              class="font-inter font-medium text-text-secondary hover:text-primary transition-colors py-2"
            >
              {{ t(`nav.${item.key}`) }}
            </NuxtLink>
            <a
              v-else
              :href="item.href"
              class="font-inter font-medium text-text-secondary hover:text-primary transition-colors py-2"
            >
              {{ t(`nav.${item.key}`) }}
            </a>
          </template>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <!-- Language Switcher -->
          <LanguageSwitcher />

          <!-- Theme Toggle (placeholder for now) -->
          <button
            class="hidden md:flex items-center justify-center size-10 rounded-lg hover:bg-surface transition-colors"
          >
            <Icon name="heroicons:moon" class="size-4 text-text-secondary" />
          </button>

          <!-- CTA Button -->
          <a
            href="https://calendar.app.google/DeCnXF86SxmiLF6M6"
            target="_blank"
            class="hidden md:block bg-gradient-primary px-6 py-2 rounded-lg font-inter font-semibold text-text hover:opacity-90 transition-opacity"
          >
            {{ t("nav.bookCall") }}
          </a>

          <!-- Mobile Menu Button -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden flex items-center justify-center size-10"
          >
            <Icon
              :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="size-6 text-text-secondary"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <nav v-if="isMobileMenuOpen" class="lg:hidden py-4 border-t border-border mt-4">
          <div class="flex flex-col gap-4">
            <template v-for="item in navItems" :key="item.key">
              <NuxtLink
                v-if="item.isRoute"
                :to="item.href"
                class="font-inter font-medium text-text-secondary hover:text-primary transition-colors py-2"
                @click="isMobileMenuOpen = false"
              >
                {{ t(`nav.${item.key}`) }}
              </NuxtLink>
              <a
                v-else
                :href="item.href"
                class="font-inter font-medium text-text-secondary hover:text-primary transition-colors py-2"
                @click="isMobileMenuOpen = false"
              >
                {{ t(`nav.${item.key}`) }}
              </a>
            </template>
            <a
              href="https://calendar.app.google/DeCnXF86SxmiLF6M6"
              target="_blank"
              class="bg-gradient-primary px-6 py-3 rounded-lg font-inter font-semibold text-text text-center hover:opacity-90 transition-opacity"
              @click="isMobileMenuOpen = false"
            >
              {{ t("nav.bookCall") }}
            </a>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>
