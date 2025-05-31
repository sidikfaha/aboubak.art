<template>
  <div class="fixed inset-0 z-50">
    <!-- Enhanced backdrop with better blur -->
    <div
      class="fixed inset-0 bg-black/60 backdrop-blur-md"
      @click="closeDrawer"
    ></div>
    
    <!-- Enhanced drawer with glass-morphism -->
    <div
      class="fixed top-0 right-0 h-full w-80 p-4 drawer-menu"
      :class="{ 'animate-closeDrawer': isDrawerClosing }"
    >
      <div class="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl rounded-3xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
        <!-- Decorative gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-indigo-50/50 dark:from-blue-900/20 dark:via-transparent dark:to-indigo-900/20"></div>
        
        <!-- Floating particles -->
        <div class="absolute top-8 right-8 w-16 h-16 bg-blue-300/10 rounded-full blur-2xl animate-pulse"></div>
        <div class="absolute bottom-16 left-8 w-12 h-12 bg-indigo-300/10 rounded-full blur-2xl animate-pulse" style="animation-delay: 1s;"></div>
        
        <div class="relative z-10 p-8 h-full flex flex-col">
          <!-- Header with close button -->
          <div class="flex items-center justify-between mb-8">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <icon name="mdi:menu" class="text-white" :size="16" />
              </div>
              <span class="font-bold text-lg text-gray-900 dark:text-white">{{ $t("home.common.menu") }}</span>
            </div>
            <button
              @click="closeDrawer"
              class="w-10 h-10 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-600/50 flex items-center justify-center hover:bg-white/70 dark:hover:bg-gray-600/70 transition-all duration-300 group"
            >
              <icon name="mdi:close" class="text-gray-700 dark:text-gray-300 group-hover:rotate-90 transition-transform duration-300" :size="18" />
            </button>
          </div>
          
          <!-- Enhanced navigation -->
          <nav class="flex-1">
            <ul class="space-y-3">
              <li>
                <a 
                  href="#skills" 
                  @click="closeDrawer"
                  class="group flex items-center gap-4 p-4 bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-600/30 hover:bg-white/50 dark:hover:bg-gray-600/50 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <icon name="mdi:brain" class="text-white" :size="18" />
                  </div>
                  <div class="flex-1">
                    <span class="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {{ $t("home.menu.skills") }}
                    </span>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t("home.common.skillsExpertise") }}</p>
                  </div>
                  <icon name="mdi:chevron-right" class="text-gray-400 group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300" :size="20" />
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  @click="closeDrawer"
                  class="group flex items-center gap-4 p-4 bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-600/30 hover:bg-white/50 dark:hover:bg-gray-600/50 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <icon name="mdi:cog" class="text-white" :size="18" />
                  </div>
                  <div class="flex-1">
                    <span class="font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {{ $t("home.menu.services") }}
                    </span>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t("home.common.services") }}</p>
                  </div>
                  <icon name="mdi:chevron-right" class="text-gray-400 group-hover:translate-x-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all duration-300" :size="20" />
                </a>
              </li>
              <li>
                <a 
                  href="#clients" 
                  @click="closeDrawer"
                  class="group flex items-center gap-4 p-4 bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-600/30 hover:bg-white/50 dark:hover:bg-gray-600/50 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <icon name="mdi:briefcase" class="text-white" :size="18" />
                  </div>
                  <div class="flex-1">
                    <span class="font-medium text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {{ $t("home.menu.projects") }}
                    </span>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t("home.common.projects") }}</p>
                  </div>
                  <icon name="mdi:chevron-right" class="text-gray-400 group-hover:translate-x-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-300" :size="20" />
                </a>
              </li>
            </ul>
          </nav>
          
          <!-- Enhanced CTA button -->
          <div class="mt-8">
            <a 
              href="#contact" 
              @click="closeDrawer"
              class="group relative w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-indigo-400/50 rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <icon name="mdi:message-outline" :size="20" class="group-hover:rotate-12 transition-transform duration-300" />
              {{ $t("home.contactMe") }}
            </a>
          </div>
          
          <!-- Social links -->
          <div class="mt-6 pt-6 border-t border-white/20 dark:border-gray-600/30">
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-3 text-center">{{ $t("home.common.followMe") }}</p>
            <div class="flex justify-center gap-3">
              <a
                href="https://github.com/sidikfaha"
                target="_blank"
                class="group w-10 h-10 bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-600/30 flex items-center justify-center hover:bg-white/50 dark:hover:bg-gray-600/50 transition-all duration-300"
              >
                <icon name="feather:github" class="text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" :size="16" />
              </a>
              <a
                href="https://x.com/sidikfaha"
                target="_blank"
                class="group w-10 h-10 bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-600/30 flex items-center justify-center hover:bg-white/50 dark:hover:bg-gray-600/50 transition-all duration-300"
              >
                <icon name="pajamas:twitter" class="text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" :size="16" />
              </a>
              <a
                href="https://instagram.com/aboubak.art"
                target="_blank"
                class="group w-10 h-10 bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-600/30 flex items-center justify-center hover:bg-white/50 dark:hover:bg-gray-600/50 transition-all duration-300"
              >
                <icon name="feather:instagram" class="text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" :size="16" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { t } = useI18n()
const emit = defineEmits(["close"]);
const isDrawerClosing = ref(false);

const closeDrawer = () => {
  isDrawerClosing.value = true;
  setTimeout(() => {
    isDrawerClosing.value = false;
    emit("close");
  }, 200);
};</script>

<style scoped>
@keyframes openDrawer {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes closeDrawer {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

.drawer-menu {
  transform: translateX(100%);
  animation: openDrawer 0.2s forwards;
}

.animate-closeDrawer {
  animation: closeDrawer 0.2s forwards;
}

</style>