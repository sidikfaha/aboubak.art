<template>
  <div class="space-y-8 lg:space-y-32">
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
    <section
      class="pt-10 lg:pt-32 flex flex-col lg:flex-row gap-16 lg:gap-28 container"
    >
      <div class="flex flex-col justify-center">
        <h1 class="flex gap-2 justify-between items-center">
          <div class="text-3xl lg:text-5xl font-extrabold">
            {{ $t("home.hero.greeting") }} <br class="" />
            {{ $t("home.hero.iam") }}
            <span class="text-primary dark:text-primary-500">
              Aboubakar Sidik Faha
            </span>
          </div>

          <img
            src="~/assets/images/home/me.webp"
            alt="Aboubakar Sidik"
            class="lg:hidden rounded-full size-28 flex-shrink-0"
          />
        </h1>
        <p class="text-2xl mt-4 font-light">
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
        <div class="mt-10">
          <a
            :href="appointmentLink"
            target="_blank"
            class="py-4 px-8 text-xl rounded-lg text-white bg-primary flex justify-center lg:justify-start lg:inline-flex items-center gap-4"
          >
            <icon name="uil:schedule" />
            {{ $t("home.hero.cta") }}
          </a>
        </div>
      </div>
      <div class="hidden lg:block flex-shrink-0 w-64">
        <img
          src="~/assets/images/home/me.webp"
          alt="Aboubakar Sidik"
          class="rounded-full w-full"
        />
      </div>
    </section>

    <!-- Stats -->
    <section class="py-5 lg:py-10 bg-primary-50 dark:bg-primary-950">
      <div class="container grid grid-cols-2 lg:grid-cols-4 lg:gap-6">
        <div class="p-5 lg:p-10">
          <p class="text-5xl font-bold text-primary dark:text-primary-500">
            20+
          </p>
          <h3 class="text-lg">{{ $t("home.stats.projects") }}</h3>
        </div>
        <div class="p-5 lg:p-10">
          <p class="text-5xl font-bold text-primary dark:text-primary-500">
            10+
          </p>
          <h3 class="text-lg">{{ $t("home.stats.clients") }}</h3>
        </div>
        <div class="p-5 lg:p-10">
          <p class="text-5xl font-bold text-primary dark:text-primary-500">
            {{ new Date().getFullYear() - 2019 }}+
          </p>
          <h3 class="text-lg">{{ $t("home.stats.experience") }}</h3>
        </div>
        <div class="p-5 lg:p-10">
          <p class="text-5xl font-bold text-primary dark:text-primary-500">
            100%
          </p>
          <h3 class="text-lg">{{ $t("home.stats.satisfactionPercentage") }}</h3>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="grid lg:grid-cols-5 gap-8">
        <div class="lg:col-span-2">
          <h2 class="text-5xl font-extrabold">
            {{ $t("home.whyMe.title") }}
            <span class="text-primary dark:text-primary-500">{{
              $t("home.whyMe.me")
            }}</span>
            ?
          </h2>
          <p class="text-xl font-light mt-6">
            {{ $t("home.whyMe.description") }}
          </p>

          <a
            :href="appointmentLink"
            target="_blank"
            class="mt-10 py-4 px-8 text-xl rounded-lg text-white bg-primary flex justify-center lg:justify-start lg:inline-flex items-center gap-4"
          >
            <icon name="uil:phone" />
            {{ $t("home.whyMe.cta") }}
          </a>
        </div>

        <div
          class="grid grid-cols-2 gap-1 text-center lg:text-left lg:col-span-3 lg:gap-4"
        >
          <div class="p-6 rounded-3xl">
            <h3
              class="text-2xl font-bold flex items-center lg:items-start flex-col gap-2"
            >
              <icon
                class="text-primary dark:text-primary-500"
                name="mdi-light:trophy"
                :size="32"
              />
              {{ $t("home.whyMe.reasons.expert.title") }}
            </h3>
            <p class="mt-4">
              {{ $t("home.whyMe.reasons.expert.description") }}
            </p>
          </div>
          <div class="p-6 rounded-3xl">
            <h3
              class="text-2xl font-bold flex items-center lg:items-start flex-col gap-2"
            >
              <icon
                class="text-primary dark:text-primary-500"
                name="mingcute:certificate-line"
                :size="32"
              />
              {{ $t("home.whyMe.reasons.quality.title") }}
            </h3>
            <p class="mt-4">
              {{ $t("home.whyMe.reasons.quality.description") }}
            </p>
          </div>
          <div class="p-6 rounded-3xl">
            <h3
              class="text-2xl font-bold flex items-center lg:items-start flex-col gap-2"
            >
              <icon
                class="text-primary dark:text-primary-500"
                name="solar:hand-heart-outline"
                :size="32"
              />
              {{ $t("home.whyMe.reasons.support.title") }}
            </h3>
            <p class="mt-4">
              {{ $t("home.whyMe.reasons.support.description") }}
            </p>
          </div>
          <div class="p-6 rounded-3xl">
            <h3
              class="text-2xl font-bold flex items-center lg:items-start flex-col gap-2"
            >
              <icon
                class="text-primary dark:text-primary-500"
                name="circum:badge-dollar"
                :size="32"
              />
              {{ $t("home.whyMe.reasons.price.title") }}
            </h3>
            <p class="mt-4">
              {{ $t("home.whyMe.reasons.price.description") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ils m'ont fait confiance -->
    <section class="py-10 bg-gray-200 dark:bg-gray-800">
      <div class="flex flex-col items-stretch container">
        <h2 class="text-5xl font-extrabold md:text-center">
          {{ $t("home.clients.title.part1") }}
          <span class="text-primary dark:text-primary-500">
            {{ $t("home.clients.title.part2") }}
          </span>
        </h2>

        <div class="grid pt-8 lg:pt-16 grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            v-for="(client, index) in clients"
            :key="index"
            :title="client.name"
            class="p-5 rounded-xl bg-primary-600 text-center cursor-pointer dark:bg-primary-500"
          >
            <img
              class="h-16 object-scale-down filter grayscale hover:grayscale-0 transition-all duration-300 inline"
              :src="client.logo"
              :alt="client.name"
            />
          </div>

          <!-- Add your logo -->

          <nuxt-link
            to="#"
            class="px-8 py-4 rounded-xl border border-dashed border-gray-700 hover:text-primary hover:border-primary flex flex-col gap-2 items-center dark:border-gray-300 dark:hover:border-primary-500"
          >
            <icon name="tabler:photo-plus" :size="32" />
            <small>
              {{ $t("home.clients.add") }}
            </small>
          </nuxt-link>
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

const appointmentLink = "https://calendar.app.google/qEuB6T8Qz8nfAJpw5";
</script>
