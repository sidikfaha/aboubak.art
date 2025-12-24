<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from "reka-ui";

const { locale, setLocale } = useI18n();
const route = useRoute();
const router = useRouter();
const localePath = useLocalePath();

type LocaleCode = "en" | "fr";

interface Language {
  code: LocaleCode;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

const currentLanguage = computed(
  () => languages.find((l) => l.code === locale.value) ?? languages[0]
);

const selectLanguage = (code: LocaleCode) => {
  const isBlogPostPage = String(route.name).includes("blog-slug");

  if (isBlogPostPage) {
    router.push(localePath("blog", code));
  } else {
    setLocale(code);
  }
};
</script>

<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger
      class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-surface transition-colors outline-none"
    >
      <span class="text-lg">{{ currentLanguage!.flag }}</span>
      <span class="font-inter text-sm text-text-secondary hidden sm:inline">
        {{ currentLanguage!.name }}
      </span>
      <Icon
        name="heroicons:chevron-down"
        class="size-4 text-text-muted"
      />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        :side-offset="8"
        class="glass-card-strong rounded-xl p-2 min-w-40 z-100 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
      >
        <DropdownMenuItem
          v-for="lang in languages"
          :key="lang.code"
          class="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer outline-none transition-colors hover:bg-surface focus:bg-surface"
          :class="{ 'bg-primary/10': locale === lang.code }"
          @select="selectLanguage(lang.code)"
        >
          <span class="text-lg">{{ lang.flag }}</span>
          <span class="font-inter text-sm text-text">{{ lang.name }}</span>
          <Icon
            v-if="locale === lang.code"
            name="heroicons:check"
            class="size-4 text-primary ml-auto"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<style>
.animate-in {
  animation: animate-in 150ms ease-out;
}

.fade-in-0 {
  --tw-enter-opacity: 0;
}

.zoom-in-95 {
  --tw-enter-scale: 0.95;
}

.slide-in-from-top-2 {
  --tw-enter-translate-y: -0.5rem;
}

@keyframes animate-in {
  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0)
      scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1));
  }
}
</style>
