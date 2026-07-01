<template>
  <div
    class="max-w-6xl mx-auto group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
  >
    <!-- Image Container -->
    <div class="relative h-64 overflow-hidden">
      <img
        :src="image"
        :alt="title"
        class="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
      />

      <!-- Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70"
      ></div>

      <!-- Hover Overlay -->
      <div
        class="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100"
      >
        <a
          :href="link"
          target="_blank"
          class="translate-y-5 rounded-full bg-white/90 backdrop-blur-md px-6 py-3 text-sm font-semibold text-gray-900 shadow-xl transition-all duration-500 group-hover:translate-y-0 hover:bg-green-500 hover:text-white"
        >
          View Project →
        </a>
      </div>

      <!-- Floating Badge -->
      <div
        class="absolute top-5 left-5 rounded-full bg-green-500 px-4 py-1 text-xs font-medium dark:text-white backdrop-blur-md"
      >
        Featured
      </div>
    </div>

    <!-- Content -->
    <div class="p-7 dark:bg-slate-900 dark:text-white text-slate-900">
      <h3
        class="dark:text-white text-slate-900 text-2xl font-bold tracking-tight text-gray-900 transition duration-300 group-hover:text-green-600"
      >
        {{ title }}
      </h3>

      <p class="mt-3 leading-relaxed text-gray-600 dark:text-white text-slate-900">
        {{ description }}
      </p>

      <!-- Tech Stack -->
      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-semibold text-green-700 transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:text-white"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Footer -->
      <div class="mt-8 flex items-center justify-between border-t border-gray-100 pt-5">
        <span class="text-sm text-slate-900 dark:text-white"> Software Project </span>

        <span
          class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white transition duration-300 group-hover:rotate-45"
        >
          ↗
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
  tags: Array,
  link: String
})
</script>
