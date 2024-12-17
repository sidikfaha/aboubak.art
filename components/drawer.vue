<template>
  <div class="fixed inset-0 z-50">
    <div
      class="fixed inset-0 bg-black/50 backdrop-blur-sm"
      @click="closeDrawer"
    ></div>
    <div
      class="fixed top-0 right-0 h-full w-64 p-2 drawer-menu"
      :class="{ 'animate-closeDrawer': isDrawerClosing }"
    >
      <div class="p-6 bg-gray-200 dark:bg-gray-700 shadow-lg h-full rounded-3xl">
        <ul class="flex flex-col gap-4">
          <li>
            <nuxt-link to="#" class="hover:text-primary">
              {{ $t("home.menu.skills") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" class="hover:text-primary">
              {{ $t("home.menu.services") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#" class="hover:text-primary">
              {{ $t("home.menu.projects") }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
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