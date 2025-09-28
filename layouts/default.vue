<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header Component - Compact -->
    <div class="relative z-20">
      <TheHeader />
    </div>

    <!-- Mobile Header - Compact -->
    <header class="lg:hidden bg-white shadow-sm border-b relative z-10">
      <div class="flex items-center justify-between px-3 py-2">
        <button 
          @click="toggleSidebar"
          class="p-1.5 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition duration-200"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <h1 class="text-base font-semibold text-gray-800">My ToDo App</h1>
        <div class="w-8"></div>
      </div>
    </header>

    <!-- Main Layout Container - Compact -->
    <div class="flex">
      <!-- Sidebar - Compact -->
      <TheSider 
        :mobile-open="isSidebarOpen" 
        @toggle-sidebar="handleSidebarToggle"
        @logout="handleLogout"
      />

      <!-- Main Content Area - Maximized -->
      <div class="flex-1">
        <!-- Main Content - Compact -->
        <main class="bg-gray-50 min-h-screen">
          <div class="max-w-none px-4 py-4">
            <slot />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Use auth composable
const { logout, user } = useAuth()

// Reactive state
const isSidebarOpen = ref(false)

// Methods
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const handleSidebarToggle = (isOpen) => {
  isSidebarOpen.value = isOpen
}

const handleLogout = () => {
  logout()
}
</script>
