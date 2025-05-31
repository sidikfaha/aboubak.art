<template>
  <div class="group relative inline-block w-full max-w-md">
    <!-- Enhanced testimonial card with glass-morphism -->
    <div
      class="relative p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 card-3d overflow-hidden"
    >
      <!-- Animated gradient border -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
      ></div>
      <div
        class="absolute inset-[1px] bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl"
      ></div>

      <!-- Floating particles effect -->
      <div
        class="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none"
      >
        <div
          class="absolute -top-2 -left-2 w-4 h-4 bg-blue-400/30 rounded-full blur-sm animate-float"
        ></div>
        <div
          class="absolute -bottom-2 -right-2 w-3 h-3 bg-indigo-400/30 rounded-full blur-sm animate-float"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute top-1/3 -right-1 w-2 h-2 bg-purple-400/30 rounded-full blur-sm animate-float"
          style="animation-delay: 2s"
        ></div>
      </div>

      <div class="relative z-10">
        <!-- Enhanced quote icon with gradient -->
        <div class="mb-6">
          <div
            class="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          >
            <icon
              name="mdi:format-quote-open"
              :size="32"
              class="text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-500"
            />
          </div>
        </div>

        <!-- Enhanced testimony text -->
        <p
          class="font-light text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-justify group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300"
        >
          "{{ testimony }}"
        </p>

        <!-- Enhanced author section -->
        <div class="flex items-center gap-4">
          <!-- Enhanced profile image -->

          <div class="flex-1">
            <h3
              class="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
            >
              {{ name }}
            </h3>
            <p class="text-sm text-blue-600 dark:text-blue-400 font-medium">
              {{ title }}
            </p>
            <!-- Rating stars -->
          
          </div>
        </div>

        <!-- Verification badge -->
        <div
          class="mt-6 inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-full text-xs font-medium text-green-700 dark:text-green-300"
        >
          <icon
            name="mdi:check-decagram"
            :size="12"
            class="text-green-600 dark:text-green-400"
          />
          {{ $t("home.common.verifiedClient") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n();

defineProps({
  name: String,
  title: String,
  image: String,
  testimony: String,
});
</script>
