<template>
  <div
    class="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-all duration-500 overflow-hidden"
  >
    <!-- Aurora Background -->
    <div class="fixed inset-0 -z-10 overflow-hidden">
      <div
        class="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-3xl animate-pulse"
      ></div>

      <div
        class="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-green-400/20 blur-3xl animate-pulse"
      ></div>

      <div
        class="absolute top-1/2 left-1/2 h-[400px] w-[400px] rounded-full bg-lime-500/10 blur-3xl"
      ></div>
    </div>

    <!-- NAV -->
    <header
      class="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800"
    >
      <div class="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <div>
          <h1
            class="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent"
          >
            Kelvin Kalulu
          </h1>
        </div>

        <div class="flex items-center gap-8">
          <nav class="hidden md:flex gap-6">
            <a href="#about" class="hover:text-emerald-500 transition">About</a>
            <a href="#skills" class="hover:text-emerald-500 transition">Skills</a>
            <a href="#projects" class="hover:text-emerald-500 transition">Projects</a>
            <a href="#contact" class="hover:text-emerald-500 transition">Contact</a>
          </nav>

          <button
            @click="toggleTheme"
            class="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center"
          >
            {{ darkMode ? '☀️' : '🌙' }}
          </button>
        </div>
      </div>
    </header>

    <!-- HERO -->
    <section
      data-aos="fade-up"
      class="min-h-[90vh] flex flex-col items-center justify-center text-center"
    >
      <!-- <div
        class="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-8"
      >
        <span class="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></span>
        Available for Opportunities
      </div> -->

      <h2 class="text-5xl md:text-7xl font-black leading-tight max-w-5xl animate-fade-up">
        Building
        <span
          class="bg-gradient-to-r from-emerald-400 via-green-500 to-lime-400 bg-clip-text text-transparent"
        >
          Enterprise Solutions
        </span>
        That Scale
      </h2>

      <p class="mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl">
        Full Stack Developer specializing in Vue.js, ASP.NET Core, Payroll Systems, HR Platforms,
        Clean Architecture and Enterprise Applications.
      </p>

      <div class="mt-10 flex gap-4 flex-wrap justify-center">
        <a
          href="#projects"
          class="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold hover:scale-105 transition"
        >
          View Projects
        </a>

        <button
          class="px-8 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 hover:scale-105 transition"
        >
          Download CV
        </button>
      </div>
    </section>

    <!-- ABOUT -->
    <section data-aos="zoom-in" id="about" class="px-8 py-20 border-t border-slate-800">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h3 class="text-2xl font-semibold text-white">About Me</h3>
          <p class="mt-4 text-slate-400 leading-relaxed">
            Experienced full-stack developer specializing in enterprise systems, payroll solutions,
            HR systems, and API-driven architectures. I focus on maintainable code, clean UX, and
            scalable backend design.
          </p>
        </div>

        <div class="space-y-4">
          <div class="p-4 bg-slate-900 rounded-xl border border-slate-800">
            <p class="text-sm text-slate-400">Experience</p>
            <p class="text-white font-semibold">5+ Years</p>
          </div>

          <div class="p-4 bg-slate-900 rounded-xl border border-slate-800">
            <p class="text-sm text-slate-400">Specialization</p>
            <p class="text-white font-semibold">Vue · .NET · EF Core</p>
          </div>
        </div>
      </div>
    </section>

    <section data-aos="zoom-in" class="max-w-6xl mx-auto px-8 py-16">
      <div class="grid md:grid-cols-4 gap-6">
        <div
          class="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6"
        >
          <h3 class="text-4xl font-bold text-emerald-500">5+</h3>
          <p>Years Experience</p>
        </div>

        <div
          class="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6"
        >
          <h3 class="text-4xl font-bold text-emerald-500">20+</h3>
          <p>Projects Delivered</p>
        </div>

        <div
          class="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6"
        >
          <h3 class="text-4xl font-bold text-emerald-500">100K+</h3>
          <p>Payroll Records Processed</p>
        </div>

        <div
          class="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-6"
        >
          <h3 class="text-4xl font-bold text-emerald-500">99.9%</h3>
          <p>System Reliability</p>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section data-aos="zoom-in" id="skills" class="px-8 py-20 border-t border-slate-800">
      <h3 class="text-2xl font-semibold text-white text-center">Technical Skills</h3>

      <div class="flex flex-wrap gap-4 justify-center mt-10">
        <span
          v-for="skill in [
            'Vue 3',
            'Tailwind',
            'Node Js',
            'C#',
            'ASP.NET Core',
            'EF Core',
            'SQL Server',
            'Azure',
            'Docker',
            'REST APIs',
            'Microservices',
            'Rabbit MQ',
            'Firebase',
            'Git',
          ]"
          :key="skill"
          class="px-5 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          {{ skill }}
        </span>
      </div>
    </section>

    <!-- PROJECTS -->
    <section data-aos="fade-right" id="projects" class="px-8 py-20 border-t border-slate-800">
      <h3 class="text-2xl font-semibold text-white text-center">Featured Projects</h3>

      <div class="grid md:grid-cols-3 max-w-6xl mx-auto gap-8 mt-12">
        <div
          v-for="project in projectsStore.FeaturedProjects"
          :key="project.title"
          class="group rounded-3xl overflow-hidden backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
        >
          <div class="h-2 bg-gradient-to-r from-emerald-400 to-green-600"></div>

          <div class="p-8">
            <h4 class="text-xl font-bold group-hover:text-emerald-500 transition">
              {{ project.title }}
            </h4>

            <p class="mt-3 text-slate-600 dark:text-slate-400">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mt-5">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 text-xs rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
              >
                {{ tech }}
              </span>
            </div>

            <div class="mt-6">
              <a
                target="_blank"
                :href="project.link"
                class="text-emerald-500 font-semibold group-hover:translate-x-2 inline-block transition"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section
      id="contact"
      data-aos="fade-up"
      class="relative px-6 md:px-8 py-24 border-t border-slate-200 dark:border-slate-800"
    >
      <div class="max-w-6xl mx-auto">
        <!-- Contact Card -->
        <div
          class="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-10 md:p-16 text-center"
        >
          <!-- <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Opportunities
          </div> -->

          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Let's Build Something Amazing
          </h2>

          <p class="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Whether you're looking for a full-stack developer, enterprise software architect, or
            consultant for HR & Payroll solutions, I'd love to hear about your project.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              target="_blank"
              href="https://github.com/kelvinkalulu"
              class="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              Get In Touch
            </a>

            <a
              href="#projects"
              class="px-8 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-500 transition duration-300"
            >
              View My Work
            </a>
          </div>

          <!-- Socials -->
          <div class="mt-12 flex justify-center gap-8">
            <a
              target="_blank"
              href="https://github.com/kelvinkalulu"
              class="text-slate-500 hover:text-emerald-500 transition"
            >
              GitHub
            </a>

            <a
              target="_blank"
              href="https://linkedin.com/in/kelvin-kalulu-944410229"
              class="text-slate-500 hover:text-emerald-500 transition"
            >
              LinkedIn
            </a>

            <a
              target="_blank"
              href="mailto:kelvin99kalulu@gmail.com"
              class="text-slate-500 hover:text-emerald-500 transition"
            >
              Email
            </a>
          </div>
        </div>

        <!-- Footer -->
        <footer class="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3
                class="font-bold text-lg bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent"
              >
                Kelvin Kalulu
              </h3>

              <p class="text-sm text-slate-500 mt-1">
                Full Stack Developer • Vue.js • ASP.NET Core • Enterprise Solutions
              </p>
            </div>

            <div class="text-sm text-slate-500 text-center md:text-right">
              <p>
                © {{ new Date().getFullYear() }}
                Kelvin Kalulu. All rights reserved.
              </p>

              <p class="mt-1">Crafted with Vue 3, Tailwind CSS & ☕</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProjectsStore } from '@/stores'

const projectsStore = useProjectsStore()

const darkMode = ref(false)

const toggleTheme = () => {
  darkMode.value = !darkMode.value
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// const projects = projectsStore.FeaturedProjects

onMounted(() => {
  projectsStore.$subscribe((mutation, state) => {
    console.log('Projects Store Updated:', mutation, state)
  })
  // Initialization code if needed
})
</script>
