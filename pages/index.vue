<template>
  <div>
    <Head>
      <Title>{{ $t("home.meta.title") }}</Title>
      <Meta name="description" :content="$t('home.meta.description')" />
      <Meta name="keywords" :content="$t('home.meta.keywords')" />
      <Meta name="author" content="Aboubakar Sidik Faha" />
      <Meta name="robots" content="index, follow" />
      <Meta property="og:title" :content="$t('home.meta.title')" />
      <Meta property="og:description" :content="$t('home.meta.description')" />
      <Meta property="og:image" :content="`https://aboubak.art${MeImage}`" />
      <Meta property="og:url" content="https://aboubak.art" />
      <Meta property="og:type" content="website" />
      <Meta property="og:site_name" content="Aboubak'Art" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="@sidikfaha" />
      <Meta name="twitter:creator" content="@sidikfaha" />
      <Meta name="twitter:title" :content="$t('home.meta.title')" />
      <Meta name="twitter:description" :content="$t('home.meta.description')" />
      <Meta name="twitter:image" :content="`https://aboubak.art${MeImage}`" />
      <!-- To Edit -->
    </Head>

    <!-- Hero -->
    <section class="relative py-28 lg:pt-32 overflow-hidden">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div class="container relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-28" ref="heroRef">
        <div class="flex flex-col justify-center animate-fade-left">
          <div class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/50 rounded-full text-primary-600 dark:text-primary-400 font-medium text-sm mb-6 w-fit">
            <icon name="mdi:rocket-launch" class="mr-2" :size="16" />
            {{ $t("home.common.availableForProjects") }}
          </div>
          
          <h1 class="flex gap-2 justify-between items-center">
            <div class="text-4xl lg:text-6xl font-black leading-tight">
              {{ $t("home.hero.greeting") }} <br class="" />
              {{ $t("home.hero.iam") }}
              <span class="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Aboubakar Sidik Faha
              </span>
            </div>

            <div class="lg:hidden relative flex-shrink-0">
              <div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full blur-lg opacity-30"></div>
              <img
                src="~/assets/images/home/me.webp"
                alt="Aboubakar Sidik"
                class="relative rounded-full size-28 flex-shrink-0 hover:scale-110 transition-transform duration-300 border-4 border-white/50 dark:border-gray-800/50"
              />
            </div>
          </h1>
          
          <p class="text-2xl mt-6 font-light leading-relaxed text-gray-600 dark:text-gray-300">
            {{ $t("home.hero.iam") }}
            <strong class="text-primary dark:text-primary-500">
              {{ $t("home.hero.profession") }}
            </strong>
            {{ $t("home.hero.and") }}
            <strong class="text-primary dark:text-primary-500">
              {{ $t("home.hero.profession2") }}
            </strong>
            {{ $t("home.hero.basedIn") }}
            <strong class="text-primary dark:text-primary-500">Abidjan</strong>.
            {{ $t("home.hero.description") }}
          </p>
          
          <div class="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              :href="appointmentLink"
              target="_blank"
              class="group relative px-8 py-4 text-xl rounded-2xl text-white bg-gradient-to-r from-primary-500 to-purple-600 flex justify-center lg:justify-start lg:inline-flex items-center gap-4 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <!-- Button glow effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <icon name="uil:schedule" class="relative z-10" />
              <span class="relative z-10">{{ $t("home.hero.cta") }}</span>
            </a>
            
            <a
              href="#skills"
              class="px-8 py-4 text-xl rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 flex justify-center items-center gap-4 hover:shadow-xl"
            >
              <icon name="mdi:arrow-down" />
              <span>{{ $t("home.common.discoverMore") }}</span>
            </a>
          </div>
        </div>
        
        <div class="hidden lg:block flex-shrink-0 w-80 animate-fade-right">
          <div class="relative">
            <!-- Floating background elements -->
            <div class="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
            <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-yellow-500/20 rounded-full blur-2xl"></div>
            
            <!-- Main image with enhanced styling -->
            <div class="relative p-2 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full">
              <img
                src="~/assets/images/home/me.webp"
                alt="Aboubakar Sidik"
                class="rounded-full w-full hover:scale-105 transition-transform duration-300 border-4 border-white dark:border-gray-800"
              />
            </div>
            
            <!-- Floating skill badges -->
            <div class="absolute -top-2 -left-8 px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 text-sm font-medium animate-bounce" style="animation-delay: 0.5s;">
              {{ $t("home.common.devopsBadge") }}
            </div>
            <div class="absolute top-16 -right-6 px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 text-sm font-medium animate-bounce" style="animation-delay: 1s;">
              {{ $t("home.common.cloudBadge") }}
            </div>
            <div class="absolute -bottom-2 -right-4 px-3 py-1 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 text-sm font-medium animate-bounce" style="animation-delay: 1.5s;">
              {{ $t("home.common.fullStackBadge") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="relative py-16 overflow-hidden" ref="statsRef">
      <!-- Background with subtle pattern -->
      <div class="absolute inset-0 bg-gradient-to-r from-primary-50 via-white to-primary-50 dark:from-primary-950 dark:via-gray-900 dark:to-primary-950"></div>
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
        <div class="group p-6 lg:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-up text-center" style="--index: 0">
          <!-- Card background gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-transparent via-primary-50/30 to-purple-50/30 dark:from-transparent dark:via-primary-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <div class="relative">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
              <icon name="mdi:briefcase" class="text-white" :size="24" />
            </div>
            <p class="text-4xl lg:text-5xl font-black text-primary dark:text-primary-500 mb-2">
              <AnimatedCounter :value="20" />
            </p>
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ $t("home.stats.projects") }}</h3>
          </div>
        </div>

        <div class="group p-6 lg:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-up text-center" style="--index: 1">
          <div class="absolute inset-0 bg-gradient-to-br from-transparent via-primary-50/30 to-purple-50/30 dark:from-transparent dark:via-primary-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <div class="relative">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
              <icon name="mdi:account-group" class="text-white" :size="24" />
            </div>
            <p class="text-4xl lg:text-5xl font-black text-primary dark:text-primary-500 mb-2">
              <AnimatedCounter :value="10" />
            </p>
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ $t("home.stats.clients") }}</h3>
          </div>
        </div>

        <div class="group p-6 lg:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-up text-center" style="--index: 2">
          <div class="absolute inset-0 bg-gradient-to-br from-transparent via-primary-50/30 to-purple-50/30 dark:from-transparent dark:via-primary-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <div class="relative">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
              <icon name="mdi:calendar" class="text-white" :size="24" />
            </div>
            <p class="text-4xl lg:text-5xl font-black text-primary dark:text-primary-500 mb-2">
              <AnimatedCounter :value="new Date().getFullYear() - 2019" />
            </p>
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ $t("home.stats.experience") }}</h3>
          </div>
        </div>

        <div class="group p-6 lg:p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-up text-center" style="--index: 3">
          <div class="absolute inset-0 bg-gradient-to-br from-transparent via-primary-50/30 to-purple-50/30 dark:from-transparent dark:via-primary-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
          
          <div class="relative">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
              <icon name="mdi:heart" class="text-white" :size="24" />
            </div>
            <p class="text-4xl lg:text-5xl font-black text-primary dark:text-primary-500 mb-2">
              <AnimatedCounter :value="100" suffix="%" />
            </p>
            <h3 class="text-lg font-semibold text-gray-700 dark:text-gray-300">{{ $t("home.stats.satisfactionPercentage") }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <SkillsSection id="skills" />

    <!-- Services Section -->
    <ServicesSection id="services" />

    <!-- Why Me Section -->
    <section class="relative py-20 overflow-hidden" ref="whyMeRef">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-primary-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div class="container relative z-10">
        <div class="grid lg:grid-cols-5 gap-12">
          <div class="lg:col-span-2 animate-fade-left">
            <div class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/50 rounded-full text-primary-600 dark:text-primary-400 font-medium text-sm mb-6">
              <icon name="mdi:star-four-points" class="mr-2" :size="16" />
              {{ $t("home.common.whyChooseMe") }}
            </div>
            
            <h2 class="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              {{ $t("home.whyMe.title") }}
              <span class="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                {{ $t("home.whyMe.me") }}
              </span>
              ?
            </h2>
            
            <p class="text-xl font-light leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
              {{ $t("home.whyMe.description") }}
            </p>

            <a
              :href="appointmentLink"
              target="_blank"
              class="group relative px-8 py-4 text-xl rounded-2xl text-white bg-gradient-to-r from-primary-500 to-purple-600 flex justify-center lg:justify-start lg:inline-flex items-center gap-4 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-primary-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <icon name="uil:phone" class="relative z-10" />
              <span class="relative z-10">{{ $t("home.whyMe.cta") }}</span>
            </a>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center lg:text-left lg:col-span-3 stagger-children" ref="reasonsRef">
            <div class="group relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-up overflow-hidden" style="--index: 0">
              <!-- Card background gradient -->
              <div class="absolute inset-0 bg-gradient-to-br from-transparent via-primary-50/30 to-purple-50/30 dark:from-transparent dark:via-primary-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative">
                <div class="w-16 h-16 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <icon name="mdi-light:trophy" class="text-white" :size="24" />
                </div>
                <h3 class="text-2xl font-bold mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {{ $t("home.whyMe.reasons.expert.title") }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {{ $t("home.whyMe.reasons.expert.description") }}
                </p>
              </div>
            </div>

            <div class="group relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-up overflow-hidden" style="--index: 1">
              <div class="absolute inset-0 bg-gradient-to-br from-transparent via-primary-50/30 to-purple-50/30 dark:from-transparent dark:via-primary-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative">
                <div class="w-16 h-16 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <icon name="mingcute:certificate-line" class="text-white" :size="24" />
                </div>
                <h3 class="text-2xl font-bold mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {{ $t("home.whyMe.reasons.quality.title") }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {{ $t("home.whyMe.reasons.quality.description") }}
                </p>
              </div>
            </div>

            <div class="group relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-up overflow-hidden" style="--index: 2">
              <div class="absolute inset-0 bg-gradient-to-br from-transparent via-primary-50/30 to-purple-50/30 dark:from-transparent dark:via-primary-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative">
                <div class="w-16 h-16 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <icon name="solar:hand-heart-outline" class="text-white" :size="24" />
                </div>
                <h3 class="text-2xl font-bold mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {{ $t("home.whyMe.reasons.support.title") }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {{ $t("home.whyMe.reasons.support.description") }}
                </p>
              </div>
            </div>

            <div class="group relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-up overflow-hidden" style="--index: 3">
              <div class="absolute inset-0 bg-gradient-to-br from-transparent via-primary-50/30 to-purple-50/30 dark:from-transparent dark:via-primary-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative">
                <div class="w-16 h-16 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <icon name="circum:badge-dollar" class="text-white" :size="24" />
                </div>
                <h3 class="text-2xl font-bold mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {{ $t("home.whyMe.reasons.price.title") }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {{ $t("home.whyMe.reasons.price.description") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Showcase -->
    <section class="relative py-20 overflow-hidden" id="clients" ref="clientsRef">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
      
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div class="container relative z-10">
        <div class="text-center mb-16 animate-fade-up">
          <div class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/50 rounded-full text-primary-600 dark:text-primary-400 font-medium text-sm mb-6">
            <icon name="mdi:handshake" class="mr-2" :size="16" />
            {{ $t("home.common.trustedPartners") }}
          </div>
          
          <h2 class="text-5xl lg:text-6xl font-black mb-6 leading-tight">
            {{ $t("home.clients.title.part1") }}
            <span class="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 dark:from-primary-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              {{ $t("home.clients.title.part2") }}
            </span>
          </h2>
          
          <p class="text-xl font-light max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ $t("home.common.trustedPartnersDescription") }}
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 stagger-children" ref="clientLogosRef">
          <div
            v-for="(client, index) in clients"
            :key="index"
            :title="client.name"
            class="group relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-scale-up overflow-hidden cursor-pointer"
            :style="{ '--index': index }"
          >
            <!-- Card background gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-transparent via-primary-50/30 to-purple-50/30 dark:from-transparent dark:via-primary-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative text-center">
              <img
                class="h-16 w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                :src="client.logo"
                :alt="client.name"
              />
              <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p class="text-sm font-medium text-gray-600 dark:text-gray-300">{{ client.name }}</p>
              </div>
            </div>
            
            <!-- Hover glow effect -->
            <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          </div>

          <!-- Add your logo call-to-action -->
          <nuxt-link
            to="#contact"
            class="group relative p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary-500 transition-all duration-500 hover:-translate-y-2 animate-scale-up overflow-hidden"
            :style="{ '--index': clients.length }"
          >
            <!-- Card background gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-transparent via-primary-50/30 to-purple-50/30 dark:from-transparent dark:via-primary-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                <icon name="tabler:photo-plus" class="text-white" :size="24" />
              </div>
              <h3 class="text-lg font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {{ $t("home.clients.add") }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ $t("home.common.joinSuccessStories") }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="relative py-20 overflow-hidden" ref="recommendationsRef">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-72 h-72 bg-primary-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div class="container relative z-10">
        <div class="text-center mb-16 animate-fade-up">
          <div class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/50 rounded-full text-primary-600 dark:text-primary-400 font-medium text-sm mb-6">
            <icon name="mdi:account-voice" class="mr-2" :size="16" />
            {{ $t("home.common.clientTestimonials") }}
          </div>
          
          <h2 class="text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-primary-600 to-purple-600 dark:from-white dark:via-primary-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
            {{ $t("home.recommendations.title") }}
          </h2>
          
          <p class="text-xl font-light max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ $t("home.common.testimonialsDescription") }}
          </p>
        </div>

        <div class="lg:columns-2 gap-6 space-y-6 stagger-children" ref="testimonialsRef">
          <TestimonyItem
            v-for="(testimony, index) in testimonyList"
            :key="index"
            :name="testimony.name"
            :title="testimony.title"
            :image="testimony.image"
            :testimony="testimony.testimony"
            class="animate-fade-up break-inside-avoid"
            :style="{ '--index': index }"
          />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="relative py-20 overflow-hidden" id="contact" ref="contactRef">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-primary-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
      
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto text-center animate-fade-up">
          <div class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/50 rounded-full text-primary-600 dark:text-primary-400 font-medium text-sm mb-6">
            <icon name="mdi:rocket-launch" class="mr-2" :size="16" />
            {{ $t("home.common.readyToStart") }}
          </div>
          
          <h2 class="text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 via-primary-600 to-purple-600 dark:from-white dark:via-primary-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
            {{ $t("home.contact.title") }}
          </h2>
          
          <p class="text-xl font-light text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            {{ $t("home.contact.description") }}
          </p>
          
          <!-- Contact options with enhanced design -->
          <div class="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <a
              :href="appointmentLink"
              target="_blank"
              class="group relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <!-- Card background gradient -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative">
                <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <icon name="mdi:calendar" class="text-white" :size="24" />
                </div>
                <h3 class="text-2xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {{ $t("home.common.scheduleCall") }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  {{ $t("home.common.bookConsultation") }}
                </p>
                <div class="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium">
                  <span>{{ $t("home.hero.cta") }}</span>
                  <icon name="mdi:arrow-right" class="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" :size="16" />
                </div>
              </div>
            </a>

            <a
              href="mailto:hello@aboubak.art"
              class="group relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <!-- Card background gradient -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative">
                <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <icon name="mdi:email" class="text-white" :size="24" />
                </div>
                <h3 class="text-2xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {{ $t("home.common.sendEmail") }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                  {{ $t("home.common.reachOutEmail") }}
                </p>
                <div class="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  <span>{{ $t("home.contact.email") }}</span>
                  <icon name="mdi:arrow-right" class="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" :size="16" />
                </div>
              </div>
            </a>
          </div>
          
          <!-- Social proof badges -->
          <div class="flex flex-wrap justify-center gap-4 opacity-60">
            <div class="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full">
              <icon name="mdi:clock-fast" class="text-green-500" :size="16" />
              <span class="text-sm font-medium">{{ $t("home.common.fastResponse") }}</span>
            </div>
            <div class="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full">
              <icon name="mdi:shield-check" class="text-blue-500" :size="16" />
              <span class="text-sm font-medium">{{ $t("home.common.ndaAvailable") }}</span>
            </div>
            <div class="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 rounded-full">
              <icon name="mdi:handshake" class="text-purple-500" :size="16" />
              <span class="text-sm font-medium">{{ $t("home.common.freeConsultation") }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import DigitComImage from "~/assets/images/clients/digit-com.webp";
import PaynahImage from "~/assets/images/clients/paynah.svg";
import ZawajSunnahImage from "~/assets/images/clients/zawaj-sunnah.webp";
import BiciciImage from "~/assets/images/clients/bicici.webp";
import JackwestinImage from "~/assets/images/clients/jackwestin.svg";
import DrBalconyImage from "~/assets/images/clients/dr-balcony.webp";
import JMFImage from "~/assets/images/clients/jmf.webp";
import EverestConsultingImage from "~/assets/images/clients/everest-consulting.webp";
import MeImage from "~/assets/images/home/me.webp";

const clients = [
  {
    name: "Digit Communication",
    logo: DigitComImage,
  },
  {
    name: "Paynah",
    logo: PaynahImage,
  },
  {
    name: "Zawaj Sunnah",
    logo: ZawajSunnahImage,
  },
  {
    name: "BICICI",
    logo: BiciciImage,
  },
  {
    name: "Jack Westin",
    logo: JackwestinImage,
  },
  {
    name: "Dr Balcony",
    logo: DrBalconyImage,
  },
  {
    name: "J'Moov Free",
    logo: JMFImage,
  },
  {
    name: "Everest Consulting",
    logo: EverestConsultingImage,
  },
];

const testimonyList = [
  {
    name: "David Ben OTTO",
    title: "Ingénieur Cloud AWS chez KodeCloud Inc",
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQE4IsBWfNDhJg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1669302475415?e=1740614400&v=beta&t=e17aluc1h7jBxHyCdnDsaYKVr-1uzyNWgk3BR2ZVYfc',
    testimony:
      "I've worked with Aboubakar in a very innovative project around connected vehicules and I've discover a professionnal Team Lead with great background in Development and DevOps. He use to manage the projects with a collaborative spirit. On the technical side, Aboubakar was just a guru: we worked hours on CI-CD pipelines with GitHub Actions (he's a perfective approch) and integration of micro services using API. He helped you to skill-up on CICD pipelines and orchestration tools like Docker Swarm and Kubernetes. On the other end, Aboubakar designed application architeture with design pattern integrated. We worked intensively on AWS Cloud Plaform for our projects and many services have been involved. I will always be happy to collaborate again with Aboubakar.",
  },
  {
    name: "Cabraule Ketchanga",
    title: "React & Angular | Flutter Developer",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFSAieIfVxbRQ/profile-displayphoto-shrink_100_100/B4EZQ262UJGwAU-/0/1736088186793?e=1741824000&v=beta&t=TeV6p4NWWvePP3Ez7x6OKRx6CM_6vJFXKHKu1IJ8w48",
    testimony:
      "C'est l'une des personnes dynamique que je connaisse en développement.\nSon sens de l'engagement et sa prise de responsabilité fait qu'il est toujours considérer comme celui qui doit manager les autres, ce qui est facilement approuvé à cause de son expérience et ces capacités techniques.",
  },
  {
    name: "Kwiringira Bruce Hervé",
    title: "Architecte Cloud",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQHFSqOLezSZzw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1654590458641?e=1740614400&v=beta&t=xYIgBWYdiBsOxO2QN8fy7c0i-dgCgO4q5hisoZCT3ps",
    testimony:
      "It's rare that you come across a standout talent like Aboubakar. Incredibly multi talented, a fully fledged full stack engineer capable of coding in multiple JavaScript frameworks, code in different programming languages for backend micro-services and on top of that be a fully fledged DevOps engineer capable of putting in place software architectures, deploy, operate and maintain distributed systems on multiple clouds and automate development processes via CI/CD pipelines. Plus an ability to lead and juggle multiple projects at the same time.",
  },
  {
    name: "Jim Carlsson Ngnintedem",
    title: "DevOps Engineer",
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQF7V_Ka1NbFew/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1631537543608?e=1740614400&v=beta&t=24tHaaWupBt6lGPC1rt8GlD-8XE_Wpa_THrUvcC4-3Q',
    testimony:
      "Curieux, responsable, très impliqué et naturellement doté d’un esprit critique et de synthèse, Sidik Aboubakar est un moteur qui aime les challenges et s’investir dans de nouveaux projets. Doté d’un fort esprit d’équipe, il a également toujours su travailler en parfaite autonomie et responsabilité tout au long de ses missions.",
  }
];

const appointmentLink = "https://calendar.app.google/qEuB6T8Qz8nfAJpw5";

// Animation setup
const { animateOnScroll } = useScrollAnimation()

// Refs for animation targets
const heroRef = ref(null)
const statsRef = ref(null)
const whyMeRef = ref(null)
const reasonsRef = ref(null)
const clientsRef = ref(null)
const clientLogosRef = ref(null)
const recommendationsRef = ref(null)
const testimonialsRef = ref(null)
const contactRef = ref(null)

// Initialize animations on mount
onMounted(() => {
  nextTick(() => {
    // Hero section animations
    if (heroRef.value) {
      const heroElements = heroRef.value.querySelectorAll('.animate-fade-left, .animate-fade-right')
      animateOnScroll(heroElements)
    }

    // Stats animations
    if (statsRef.value) {
      const statElements = statsRef.value.querySelectorAll('.animate-scale-up')
      statElements.forEach((el, index) => {
        el.style.setProperty('--stagger-delay', '100ms')
        el.style.setProperty('--index', index)
      })
      animateOnScroll(statElements)
    }

    // Why me section
    if (whyMeRef.value) {
      const whyMeElements = whyMeRef.value.querySelectorAll('.animate-fade-left')
      animateOnScroll(whyMeElements)
    }

    // Reasons cards
    if (reasonsRef.value) {
      const reasonCards = reasonsRef.value.querySelectorAll('.animate-scale-up')
      reasonCards.forEach((card, index) => {
        card.style.setProperty('--stagger-delay', '100ms')
        card.style.setProperty('--index', index)
      })
      animateOnScroll(reasonCards)
    }

    // Clients section
    if (clientsRef.value) {
      const clientsTitle = clientsRef.value.querySelector('.animate-fade-up')
      if (clientsTitle) animateOnScroll([clientsTitle])
    }

    if (clientLogosRef.value) {
      const logoElements = clientLogosRef.value.querySelectorAll('.animate-scale-up')
      logoElements.forEach((el, index) => {
        el.style.setProperty('--stagger-delay', '80ms')
        el.style.setProperty('--index', index)
      })
      animateOnScroll(logoElements)
    }

    // Recommendations section
    if (recommendationsRef.value) {
      const title = recommendationsRef.value.querySelector('.animate-fade-up')
      if (title) animateOnScroll([title])
    }

    if (testimonialsRef.value) {
      const testimonials = testimonialsRef.value.querySelectorAll('.animate-fade-up')
      testimonials.forEach((el, index) => {
        el.style.setProperty('--stagger-delay', '150ms')
        el.style.setProperty('--index', index)
      })
      animateOnScroll(testimonials)
    }

    // Contact section
    if (contactRef.value) {
      const contactElements = contactRef.value.querySelectorAll('.animate-fade-up')
      animateOnScroll(contactElements)
    }
  })
})
</script>
