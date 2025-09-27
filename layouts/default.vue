<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header Component - Outside, spans full width -->
    <div class="relative z-20">
      <TheHeader />
    </div>

    <!-- Mobile Header -->
    <header class="lg:hidden bg-white shadow-sm border-b relative z-10">
      <div class="flex items-center justify-between px-4 py-3">
        <button 
          @click="toggleSidebar"
          class="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition duration-200"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <h1 class="text-lg font-semibold text-gray-800">My ToDo App</h1>
        <div class="w-10"></div> <!-- Spacer for centering -->
      </div>
    </header>

    <!-- Main Layout Container -->
    <div class="flex-1 flex relative">
      <!-- Sidebar - Fixed at left corner -->
      <TheSider 
        :mobile-open="isSidebarOpen" 
        @toggle-sidebar="handleSidebarToggle"
      />

      <!-- Main Content Area - Takes remaining space -->
      <div class="flex-1 lg:ml-80 flex flex-col">
        <!-- Main Content -->
        <main class="flex-1 bg-gray-50">
          <div class="max-w-7xl mx-auto px-6 py-6">
            <slot />
          </div>
        </main>

        <!-- Footer -->
        <footer class="bg-white border-t">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <p class="text-center text-gray-600">© 2025 My ToDo App</p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive state
const isSidebarOpen = ref(false)

// Methods
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const handleSidebarToggle = (isOpen) => {
  isSidebarOpen.value = isOpen
}
</script>
