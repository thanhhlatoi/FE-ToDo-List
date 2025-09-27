<template>
  <div class="header-container relative w-full">
    <!-- Background Image Section -->
   

    <!-- Dashboard Header Section -->
    <div class="bg-white rounded-t-3xl -mt-4 relative shadow-lg w-full">
      <div class="px-6 py-6">
        <!-- Header Content -->
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          <!-- Dashboard Title -->
          <div class="flex items-center">
            <h1 class="text-3xl font-bold">
              <span class="text-coral-500">Dash</span>
              <span class="text-gray-800">board</span>
            </h1>
          </div>

          <!-- Search and Actions -->
          <div class="flex flex-col sm:flex-row items-center gap-4 flex-1 lg:max-w-4xl">
            
            <!-- Search Bar - Centered and Wider -->
            <div class="relative w-full max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search your task here..."
                v-model="searchQuery"
                class="w-full px-4 py-3 bg-gray-100 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:bg-white transition-all duration-200 text-gray-700 placeholder-gray-400"
                @keyup.enter="handleSearch"
              />
              <button
                @click="handleSearch"
                class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-coral-500 hover:bg-coral-600 text-white p-2 rounded-lg transition-colors duration-200"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </button>
            </div>

            <!-- Action Buttons -->
            <div class="flex items-center gap-3">
              
              <!-- Notifications Button -->
              <button
                @click="toggleNotifications"
                class="relative bg-coral-500 hover:bg-coral-600 text-white p-3 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
              >
               <svg xmlns="http://www.w3.org/2000/svg" 
     fill="none" 
     viewBox="0 0 24 24" 
     stroke="currentColor" 
     class="w-6 h-6">
  <path stroke-linecap="round" 
        stroke-linejoin="round" 
        stroke-width="2" 
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 
           6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 
           6.165 6 8.388 6 11v3.159c0 .538-.214 
           1.055-.595 1.436L4 17h5m6 0v1a3 3 0 
           11-6 0v-1m6 0H9" />
</svg>
                <!-- Notification Badge -->
                <span 
                  v-if="notificationCount > 0"
                  class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold"
                >
                  {{ notificationCount > 9 ? '9+' : notificationCount }}
                </span>
              </button>

              <!-- Calendar Button -->
              <button
                @click="openCalendar"
                class="bg-coral-500 hover:bg-coral-600 text-white p-3 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </button>

              <!-- Current Date -->
              <div class="hidden sm:block text-right">
                <div class="text-gray-800 font-semibold text-sm">
                  {{ currentDate.dayName }}
                </div>
                <div class="text-blue-500 text-xs">
                  {{ currentDate.formatted }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Date Display -->
        <div class="sm:hidden mt-4 pt-4 border-t border-gray-100">
          <div class="flex items-center justify-between">
            <div class="text-gray-800 font-semibold">
              {{ currentDate.dayName }}
            </div>
            <div class="text-blue-500">
              {{ currentDate.formatted }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Reactive state
const searchQuery = ref('')
const notificationCount = ref(3) // Mock notification count

// Computed properties
const currentDate = computed(() => {
  const now = new Date()
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December']
  
  return {
    dayName: dayNames[now.getDay()],
    formatted: `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`
  }
})

// Methods
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    console.log('Searching for:', searchQuery.value)
    // Add your search logic here
    // You can emit an event or use a composable for search functionality
  }
}

const toggleNotifications = () => {
  console.log('Toggle notifications')
  // Add notification panel logic here
  notificationCount.value = 0 // Clear notifications when clicked
}

const openCalendar = () => {
  console.log('Open calendar')
  // Add calendar functionality here
}

// Lifecycle
onMounted(() => {
  // Any initialization logic can go here
})
</script>

<style scoped>
.header-container {
  @apply relative w-full;
  position: relative;
  width: 100%;
  z-index: 10;
}

/* Custom animations */
@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-container > div:last-child {
  animation: slideInFromTop 0.5s ease-out;
}

/* Custom scrollbar for search suggestions if needed */
.search-suggestions {
  scrollbar-width: thin;
  scrollbar-color: #ff7f6b transparent;
}

.search-suggestions::-webkit-scrollbar {
  width: 4px;
}

.search-suggestions::-webkit-scrollbar-track {
  background: transparent;
}

.search-suggestions::-webkit-scrollbar-thumb {
  background-color: #ff7f6b;
  border-radius: 2px;
}

/* Focus styles */
input:focus {
  box-shadow: 0 0 0 3px rgba(255, 127, 107, 0.1);
}

/* Button hover effects */
button {
  transition: all 0.2s ease-in-out;
}

button:hover {
  transform: translateY(-1px);
}

button:active {
  transform: translateY(0);
}
</style>