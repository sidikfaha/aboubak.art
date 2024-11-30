<template>
  <NuxtLayout>
    <Head>
      <Link rel="icon" href="/favicon.svg" />
    </Head>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(5px);
}
</style>
