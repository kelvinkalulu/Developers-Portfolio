<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur border-b border-slate-800 mb-6">
    <nav class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-18">

        <!-- Logo -->
        <a href="#" class="text-2xl font-bold text-white tracking-wide">
           <h1
            class="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent"
          >
            Kelvin Kalulu
          </h1>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in links"
            :key="item.name"
            :href="item.href"
            class="text-slate-300 hover:text-emerald-500 transition duration-300"
          >
            {{ item.name }}
          </a>

          <button
            @click="downloadCV"
            downloadCV
            class="px-5 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-800 transition"
          >
            Download CV
          </button>
        </div>

        <!-- Mobile Button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden text-white"
        >
          <!-- Hamburger -->
          <svg
            v-if="!isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <!-- Close -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isOpen"
          class="md:hidden py-6 space-y-4 border-t border-slate-800"
        >
          <a
            v-for="item in links"
            :key="item.name"
            :href="item.href"
            @click="isOpen = false"
            class="block text-slate-300 hover:text-emerald-500 transition"
          >
            {{ item.name }}
          </a>

          <a
            href="/files/Kelvin_Kalulu_CV.pdf"
            download
            class="inline-block mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold hover:scale-105 transition"
          >
            Download CV
          </a>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import cv from "@/assets/files/Kelvin_Kalulu_CV.pdf"

const isOpen = ref(false);

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// download cv link
const downloadCV = () => {
  const link = document.createElement('a')
  link.href = cv
  link.download = 'Kelvin_Kalulu_CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>