<template>
  <div class="space-y-8">
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
      class="py-10 lg:pt-32 flex flex-col lg:flex-row gap-16 lg:gap-28 container"
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

    <section class="container py-10">
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
    <section class="py-20 bg-gray-100 dark:bg-gray-800">
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

    <!-- Recommendations -->
    <section class="container lg:py-20">
      <h2 class="text-4xl lg:text-5xl font-extrabold lg:text-center">
        {{ $t("home.recommendations.title") }}
      </h2>

      <div class="lg:columns-2 pt-8 gap-4">
        <TestimonyItem
          v-for="(testimony, index) in testimonyList"
          :key="index"
          :name="testimony.name"
          :title="testimony.title"
          :image="testimony.image"
          :testimony="testimony.testimony"
        />
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
</script>
