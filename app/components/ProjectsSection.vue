<script setup lang="ts">
const { t } = useI18n();

interface Project {
  key: string;
  image: string;
  link: string;
  tags: { name: string; color: string; bg: string }[];
}

const projects = ref<Project[]>([
  {
    key: "dukify",
    image: "/images/644a626d62f687623f771b718eda33628314b4ef.png",
    link: "https://dukify.com",
    tags: [
      { name: "Nuxt.js", color: "text-primary", bg: "bg-primary/20" },
      { name: "Node.js", color: "text-secondary", bg: "bg-secondary/20" },
      { name: "Owner", color: "text-accent", bg: "bg-accent/20" },
    ],
  },
  {
    key: "kika",
    image: "/images/ec5a3dd22ad2d6706e807c2a11c95e845211383d.png",
    link: "https://kika.africa",
    tags: [
      { name: "Mobile", color: "text-primary", bg: "bg-primary/20" },
      { name: "Web", color: "text-secondary", bg: "bg-secondary/20" },
      { name: "Full Stack", color: "text-accent", bg: "bg-accent/20" },
    ],
  },
  {
    key: "copaa",
    image: "/images/644a626d62f687623f771b718eda33628314b4ef.png",
    link: "https://copaa.africa",
    tags: [
      { name: "Mobile", color: "text-primary", bg: "bg-primary/20" },
      { name: "Web", color: "text-secondary", bg: "bg-secondary/20" },
      { name: "Social Network", color: "text-accent", bg: "bg-accent/20" },
    ],
  },
  {
    key: "jackwestin",
    image: "/images/ec5a3dd22ad2d6706e807c2a11c95e845211383d.png",
    link: "https://jackwestin.com",
    tags: [
      { name: "Nuxt.js", color: "text-primary", bg: "bg-primary/20" },
      { name: "Education", color: "text-secondary", bg: "bg-secondary/20" },
    ],
  },
  {
    key: "drbalcony",
    image: "/images/644a626d62f687623f771b718eda33628314b4ef.png",
    link: "https://drbalcony.com",
    tags: [
      { name: "Frontend", color: "text-primary", bg: "bg-primary/20" },
      { name: "Web", color: "text-secondary", bg: "bg-secondary/20" },
    ],
  },
  {
    key: "zawajsounnah",
    image: "/images/ec5a3dd22ad2d6706e807c2a11c95e845211383d.png",
    link: "https://zawaj-sounnah.com",
    tags: [
      { name: "DevOps", color: "text-primary", bg: "bg-primary/20" },
      { name: "Web", color: "text-secondary", bg: "bg-secondary/20" },
    ],
  },
  {
    key: "paynah",
    image: "/images/644a626d62f687623f771b718eda33628314b4ef.png",
    link: "https://paynah.com",
    tags: [
      { name: "DevOps", color: "text-primary", bg: "bg-primary/20" },
      { name: "Fintech", color: "text-secondary", bg: "bg-secondary/20" },
    ],
  },
  {
    key: "schoolgood",
    image: "/images/ec5a3dd22ad2d6706e807c2a11c95e845211383d.png",
    link: "https://schoolgood.cm",
    tags: [
      { name: "Nuxt.js", color: "text-primary", bg: "bg-primary/20" },
      { name: "Education", color: "text-secondary", bg: "bg-secondary/20" },
    ],
  },
  {
    key: "jemoovfree",
    image: "/images/644a626d62f687623f771b718eda33628314b4ef.png",
    link: "https://jemoovfree.africa",
    tags: [
      { name: "Mobile", color: "text-primary", bg: "bg-primary/20" },
      { name: "Telecom", color: "text-secondary", bg: "bg-secondary/20" },
    ],
  },
]);
</script>

<template>
  <section id="portfolio" class="py-24">
    <div class="container-lg px-6">
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4 mb-16">
        <h2 class="font-orbitron font-bold text-4xl md:text-5xl text-gradient-primary">
          {{ t("projects.title") }}
        </h2>
        <p class="font-inter text-lg md:text-xl text-text-muted text-center max-w-2xl">
          {{ t("projects.subtitle") }}
        </p>
        <div class="w-24 h-1 bg-gradient-primary rounded-full" />
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <a
          v-for="project in projects"
          :key="project.key"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="group glass-card rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 block"
        >
          <!-- Image -->
          <div class="relative h-64 overflow-hidden">
            <img
              :src="project.image"
              :alt="t(`projects.${project.key}.title`)"
              class="size-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <!-- Overlay on hover -->
            <div
              class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <Icon name="heroicons:arrow-top-right-on-square" class="size-12 text-white" />
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-6">
            <h3 class="font-orbitron font-bold text-lg text-white mb-2">
              {{ t(`projects.${project.key}.title`) }}
            </h3>
            <p class="font-inter text-sm text-text-secondary mb-4">
              {{ t(`projects.${project.key}.description`) }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag.name"
                :class="[tag.bg, tag.color, 'px-3 py-1 rounded-full text-xs font-inter']"
              >
                {{ tag.name }}
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
