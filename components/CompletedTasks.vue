<template>
  <div class="bg-white rounded-lg shadow-sm p-4">
    <!-- Header -->
    <div class="flex items-center mb-4">
      <div class="p-2 bg-gray-100 rounded-md mr-3">
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <h3 class="text-base font-semibold text-gray-800">Completed Task</h3>
    </div>
    
    <!-- Completed Task Cards -->
    <div class="space-y-3">
      <div v-for="task in completedTasks" :key="task.id" class="bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
        <div class="flex items-start space-x-3">
          <!-- Status Circle -->
          <div class="w-5 h-5 rounded-full border-2 border-green-500 bg-green-500 flex-shrink-0 mt-0.5">
            <div class="w-full h-full flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
          </div>

          <!-- Task Content -->
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-semibold text-gray-900 mb-1">{{ task.title }}</h4>
            <p class="text-xs text-gray-600 mb-2 leading-relaxed">{{ task.description }}</p>
            
            <!-- Task Details -->
            <div class="text-xs text-gray-500">
              <span class="font-medium text-green-600">Status: Completed</span>
              <span class="ml-2">{{ task.completedDate }}</span>
            </div>
          </div>

          <!-- Task Image -->
          <div class="flex-shrink-0 ml-2">
            <img 
              :src="task.image" 
              :alt="task.title"
              class="w-12 h-12 rounded-lg object-cover border border-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Props
const props = defineProps({
  completedTasks: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: 'Walk the dog',
        description: 'Take the dog to the park and bring treats as well.',
        completedDate: 'Completed 2 days ago',
        image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=200&h=200&fit=crop&crop=faces'
      },
      {
        id: 2,
        title: 'Conduct meeting',
        description: 'Meet with the client and finalize requirements.',
        completedDate: 'Completed 2 days ago',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&crop=faces'
      }
    ]
  }
})
</script>
