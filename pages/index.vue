<template>
  <div class="space-y-32">
    <Head>
      <Title>Aboubakar Sidik | Expert DevOps & Entrepreneur</Title>
      <Meta
        name="description"
        content="Je suis un expert DevOps et Entrepreneur basé à Abidjan. Le consultant qui mènera votre projet à son pic de performance."
      />
    </Head>

    <!-- Hero -->
    <section class="pt-32 flex flex-col lg:flex-row gap-16 lg:gap-28 container">
      <div class="flex flex-col justify-center">
        <h1 class="text-6xl font-extrabold">
          Salut, <br />
          Moi c'est
          <span class="text-primary">Aboubakar Sidik</span>
        </h1>
        <p class="text-4xl mt-4 font-light">
          Je suis <strong class="text-primary">Expert DevOps</strong> et
          <strong class="text-primary">Entrepreneur</strong> basé à
          <strong class="text-primary">Abidjan</strong>. Le consultant qui
          mènera votre projet à son pic de performance.
        </p>
        <div class="mt-10">
          <a
            :href="appointmentLink"
            target="_blank"
            class="py-4 px-8 text-xl rounded-lg text-white bg-primary inline-flex items-center gap-4"
          >
            <icon name="uil:schedule" />
            Prenez RDV
          </a>
        </div>
      </div>
      <div>
        <img
          src="~/assets/images/home/me.jpeg"
          alt="Aboubakar Sidik"
          class="rounded-full"
        />
      </div>
    </section>

    <!-- Stats -->
    <section class="py-10 bg-primary-50 dark:bg-primary-950">
      <div
        class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div class="p-10">
          <p class="text-5xl font-bold text-primary">20+</p>
          <h3 class="text-xl">Projets réalisés</h3>
        </div>
        <div class="p-10">
          <p class="text-5xl font-bold text-primary">10+</p>
          <h3 class="text-xl">Clients satisfaits</h3>
        </div>
        <div class="p-10">
          <p class="text-5xl font-bold text-primary">
            {{ new Date().getFullYear() - 2019 }}+
          </p>
          <h3 class="text-xl">Années d'expérience</h3>
        </div>
        <div class="p-10">
          <p class="text-5xl font-bold text-primary">100%</p>
          <h3 class="text-xl">Satisfaction client</h3>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="grid lg:grid-cols-5 gap-8">
        <div class="lg:col-span-2">
          <h2 class="text-6xl font-extrabold">
            Pourquoi travailler avec <span class="text-primary">moi</span> ?
          </h2>
          <p class="text-xl font-light mt-6">
            Voici quelques raisons pour lesquelles vous devriez me choisir pour
            votre prochain projet.
          </p>

          <a
            :href="appointmentLink"
            target="_blank"
            class="mt-10 py-4 px-8 text-xl rounded-lg text-white bg-primary inline-flex items-center gap-4"
          >
            <icon name="uil:comment" />
            Demandez un devis
          </a>
        </div>

        <div class="lg:col-span-3 grid md:grid-cols-2 gap-4">
          <div class="p-6 rounded-3xl">
            <h3 class="text-2xl font-bold flex flex-col gap-2">
              <icon class="text-primary" name="mdi-light:trophy" :size="32" />
              Expertise
            </h3>
            <p class="mt-4">
              Je suis un expert dans mon domaine et je mets à votre disposition
              mon savoir-faire.
            </p>
          </div>
          <div class="p-6 rounded-3xl">
            <h3 class="text-2xl font-bold flex flex-col gap-2">
              <icon
                class="text-primary"
                name="mingcute:certificate-line"
                :size="32"
              />
              Qualité
            </h3>
            <p class="mt-4">
              Je mets un point d'honneur à vous fournir un travail de qualité
              irréprochable.
            </p>
          </div>
          <div class="p-6 rounded-3xl">
            <h3 class="text-2xl font-bold flex flex-col gap-2">
              <icon
                class="text-primary"
                name="solar:hand-heart-outline"
                :size="32"
              />
              Support
            </h3>
            <p class="mt-4">
              Je vous accompagne tout au long de votre projet et vous apporte
              mon support.
            </p>
          </div>
          <div class="p-6 rounded-3xl">
            <h3 class="text-2xl font-bold flex flex-col gap-2">
              <icon
                class="text-primary"
                name="circum:badge-dollar"
                :size="32"
              />
              Prix
            </h3>
            <p class="mt-4">
              Je vous propose des tarifs compétitifs et adaptés à votre budget.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ils m'ont fait confiance -->
    <section data-mode="light" class="py-10 bg-primary/70">
      <div class="flex flex-col items-center text-center container">
        <h2 class="text-6xl font-extrabold">
          Ils m'ont fait <span class="text-primary">confiance</span>
        </h2>

        <div class="flex gap-16 justify-center items-center pt-16 flex-wrap">
          <img
            v-for="(client, index) in clients"
            :title="client.name"
            class="h-16 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            :src="client.logo"
            :alt="client.name"
            :key="index"
          />

          <!-- Add your logo -->

          <nuxt-link
            to="#"
            class="px-8 py-4 rounded-xl border border-dashed border-gray-800 text-gray-800 hover:text-white hover:border-white flex flex-col gap-2 items-center"
          >
            <icon name="tabler:photo-plus" :size="32" />
            <small>Votre logo ici</small>
          </nuxt-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import DigitComImage from "~/assets/images/clients/digit-com.png";
import PaynahImage from "~/assets/images/clients/paynah.svg";
import ZawajSunnahImage from "~/assets/images/clients/zawaj-sunnah.png";
import BiciciImage from "~/assets/images/clients/bicici.png";
import JackwestinImage from "~/assets/images/clients/jackwestin.svg";
import DrBalconyImage from "~/assets/images/clients/dr-balcony.png";
import JMFImage from "~/assets/images/clients/jmf.webp";
import EverestConsultingImage from "~/assets/images/clients/everest-consulting.png";

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
