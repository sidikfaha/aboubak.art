<template>
  <div class="bg-background min-h-screen">
    <NuxtLoadingIndicator color="#06b6d4" :height="3" />
    <NuxtRouteAnnouncer />
    <TheHeader />
    <main>
      <NuxtPage />
    </main>
    <TheFooter />
    <ScrollToTop />
  </div>
</template>
