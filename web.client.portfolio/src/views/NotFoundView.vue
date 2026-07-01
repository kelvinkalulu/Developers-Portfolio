<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-green-50 px-6 overflow-hidden"
  >
    <div class="relative text-center max-w-xl">
      <!-- Floating Background Shapes -->
      <div
        class="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-green-200/40 blur-3xl animate-pulse"
      ></div>

      <div
        class="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-blue-200/40 blur-3xl animate-pulse"
      ></div>

      <!-- 404 Text -->
      <h1
        class="relative text-[120px] md:text-[180px] font-black tracking-tight text-gray-900 leading-none animate-bounce-slow"
      >
        404
      </h1>

      <!-- Icon -->
      <div
        class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100 text-4xl shadow-lg animate-float"
      >
        🚀
      </div>

      <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Page Not Found</h2>

      <p class="mt-4 text-gray-600 text-lg leading-relaxed">
        The page you are looking for doesn't exist, was moved, or is temporarily unavailable.
      </p>

      <!-- Actions -->
      <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <RouterLink
          to="/"
          class="rounded-full bg-gray-900 px-8 py-3 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-600"
        >
          Go Home
        </RouterLink>

        <button
          @click="$router.back()"
          class="rounded-full border border-gray-300 px-8 py-3 font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100"
        >
          Go Back
        </button>
      </div>

      <!-- Bottom Message -->
      <p class="mt-10 text-sm text-gray-400">Error Code: 404 • Lost in the digital space</p>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes bounceSlow {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

.animate-bounce-slow {
  animation: bounceSlow 4s ease-in-out infinite;
}
</style>
