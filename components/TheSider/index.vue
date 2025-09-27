<template>
  <div class="sidebar-container">
    <!-- Mobile overlay -->
    <div 
      v-if="isOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      @click="toggleSidebar"
    ></div>
    
    <!-- Sidebar -->
    <aside 
      :class="[
        'fixed top-0 left-0 h-full bg-coral-500 text-white transform transition-transform duration-300 ease-in-out z-40 lg:translate-x-0 lg:relative lg:inset-0 lg:z-auto',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
      class="w-64 shadow-xl flex flex-col sidebar-position"
    >
      <!-- Sidebar Header with User Profile -->
      <div class="p-4 border-b border-coral-600">
        <div class="flex flex-col items-center space-y-3">
          <!-- Profile Avatar -->
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
              alt="Profile Picture"
              class="w-16 h-16 rounded-full border-3 border-white shadow-lg object-cover"
            />
          </div>
          
          <!-- User Info -->
          <div class="text-center">
            <h2 class="text-lg font-bold text-white">Sundar Gurung</h2>
            <p class="text-xs text-coral-100 mt-0.5">sundargurung360@gmail.com</p>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 px-3 py-4">
        <ul class="space-y-1">
          <!-- Dashboard -->
          <li>
            <NuxtLink 
              to="/" 
              :class="[
                'flex items-center px-3 py-2.5 rounded-lg text-white transition-all duration-200 text-sm',
                $route.path === '/' ? 'bg-white text-coral-500 shadow-lg' : 'hover:bg-coral-600'
              ]"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
              Dashboard
            </NuxtLink>
          </li>

          <!-- Vital Task -->
          <li>
            <NuxtLink 
              to="/vital-tasks" 
              :class="[
                'flex items-center px-3 py-2.5 rounded-lg text-white transition-all duration-200 text-sm',
                $route.path === '/vital-tasks' ? 'bg-white text-coral-500 shadow-lg' : 'hover:bg-coral-600'
              ]"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              Vital Task
            </NuxtLink>
          </li>

          <!-- My Task -->
          <li>
            <NuxtLink 
              to="/tasks" 
              :class="[
                'flex items-center px-3 py-2.5 rounded-lg text-white transition-all duration-200 text-sm',
                $route.path === '/tasks' ? 'bg-white text-coral-500 shadow-lg' : 'hover:bg-coral-600'
              ]"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              My Task
            </NuxtLink>
          </li>

          <!-- Task Categories -->
          <li>
            <NuxtLink 
              to="/categories" 
              :class="[
                'flex items-center px-3 py-2.5 rounded-lg text-white transition-all duration-200 text-sm',
                $route.path === '/categories' ? 'bg-white text-coral-500 shadow-lg' : 'hover:bg-coral-600'
              ]"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
              </svg>
              Task Categories
            </NuxtLink>
          </li>

          <!-- Settings -->
          <li>
            <NuxtLink 
              to="/settings" 
              :class="[
                'flex items-center px-3 py-2.5 rounded-lg text-white transition-all duration-200 text-sm',
                $route.path === '/settings' ? 'bg-white text-coral-500 shadow-lg' : 'hover:bg-coral-600'
              ]"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
              </svg>
              Settings
            </NuxtLink>
          </li>

          <!-- Help -->
          <li>
            <NuxtLink 
              to="/help" 
              :class="[
                'flex items-center px-3 py-2.5 rounded-lg text-white transition-all duration-200 text-sm',
                $route.path === '/help' ? 'bg-white text-coral-500 shadow-lg' : 'hover:bg-coral-600'
              ]"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
              </svg>
              Help
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Logout Section -->
      <div class="p-3 border-t border-coral-600">
        <button 
          @click="handleLogout"
          class="w-full flex items-center px-3 py-2.5 rounded-lg text-white hover:bg-coral-600 transition-all duration-200 text-sm"
        >
          <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"/>
          </svg>
          Logout
        </button>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

// Reactive state
const isOpen = ref(false)

// Props
const props = defineProps({
  mobileOpen: {
    type: Boolean,
    default: false
  }
})

// Emits
const emit = defineEmits(['toggle-sidebar'])

// Methods
const toggleSidebar = () => {
  isOpen.value = !isOpen.value
  emit('toggle-sidebar', isOpen.value)
}

const handleLogout = () => {
  // Handle logout logic here
  console.log('Logout clicked')
  // You can add your logout logic here
  // For example: clear tokens, redirect to login, etc.
}

// Watch for mobile open prop changes
watch(() => props.mobileOpen, (newVal) => {
  isOpen.value = newVal
})

// Handle window resize
const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isOpen.value = false
  }
}

// Lifecycle
onMounted(() => {
  window.addEventListener('resize', handleResize)
  isOpen.value = props.mobileOpen
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.sidebar-container {
  @apply relative;
}

/* Custom coral color for Tailwind */
.bg-coral-500 {
  background-color: #ff7f6b;
}

.bg-coral-600 {
  background-color: #ff6b5b;
}

.text-coral-500 {
  color: #ff7f6b;
}

.text-coral-100 {
  color: #fff5f4;
}

.border-coral-600 {
  border-color: #ff6b5b;
}

/* Custom scrollbar for sidebar */
.sidebar-container aside {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

.sidebar-container aside::-webkit-scrollbar {
  width: 4px;
}

.sidebar-container aside::-webkit-scrollbar-track {
  background: transparent;
}

.sidebar-container aside::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.sidebar-container aside::-webkit-scrollbar-thumb:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

/* Sidebar positioning */
.sidebar-position {
  /* On mobile, start from top */
  top: 0;
}

/* On desktop, relative positioning within flex layout */
@media (min-width: 1024px) {
  .sidebar-position {
    position: relative;
    top: auto;
    height: 100vh;
    flex-shrink: 0;
  }
}
</style>
