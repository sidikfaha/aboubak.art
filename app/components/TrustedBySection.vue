<script setup lang="ts">
const { t } = useI18n();

const clients = [
  { name: "BICICI", logo: "/images/clients/bicici.webp" },
  { name: "Digit Com", logo: "/images/clients/digit-com.webp" },
  { name: "Dr Balcony", logo: "/images/clients/dr-balcony.webp" },
  { name: "Everest Consulting", logo: "/images/clients/everest-consulting.webp" },
  { name: "Jack Westin", logo: "/images/clients/jackwestin.svg" },
  { name: "JMF", logo: "/images/clients/jmf.webp" },
  { name: "Paynah", logo: "/images/clients/paynah.svg" },
  { name: "Zawaj Sunnah", logo: "/images/clients/zawaj-sunnah.webp" },
];
</script>

<template>
  <section class="py-16 border-t border-border/50">
    <div class="container-lg px-6">
      <!-- Header -->
      <p class="font-inter text-center text-text-muted mb-10">
        {{ t("trustedBy.title") }}
      </p>

      <!-- Logos Grid -->
      <div class="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        <div
          v-for="client in clients"
          :key="client.name"
          class="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
        >
          <img
            :src="client.logo"
            :alt="client.name"
            class="h-8 md:h-10 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>
