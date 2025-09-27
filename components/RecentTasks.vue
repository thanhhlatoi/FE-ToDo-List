<template>
  <div class="bg-white rounded-lg shadow-sm p-4">
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center">
        <div class="p-2 bg-gray-100 rounded-md mr-3">
          <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
          </svg>
        </div>
        <h3 class="text-base font-semibold text-coral-500">To-Do</h3>
      </div>
      <button class="flex items-center text-gray-600 hover:text-gray-800 text-sm font-medium">
        <svg class="w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
        </svg>
        Add task
      </button>
    </div>

    <!-- Date Indicator -->
    <div class="flex items-center mb-4">
      <span class="text-sm font-medium text-gray-900">20 June</span>
      <div class="w-1.5 h-1.5 bg-red-500 rounded-full mx-2"></div>
      <span class="text-sm text-gray-500">Today</span>
    </div>
    
    <!-- Task Cards -->
    <div class="space-y-3">
      <div v-for="task in recentTasks" :key="task.id" class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div class="flex items-start space-x-3">
          <!-- Status Circle -->
          <div :class="[
            'w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5',
            task.status === 'completed' ? 'border-green-500 bg-green-500' : 
            task.status === 'in-progress' ? 'border-blue-500 bg-blue-500' : 
            'border-red-500 bg-red-500'
          ]">
            <div v-if="task.status === 'completed'" class="w-full h-full flex items-center justify-center">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
          </div>

          <!-- Task Content -->
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-semibold text-gray-900 mb-1">{{ task.title }}</h4>
            <p class="text-xs text-gray-600 mb-3 leading-relaxed">{{ task.description }}</p>
            
            <!-- Task Details -->
            <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <div class="flex items-center">
                <span class="text-gray-500">Priority:</span>
                <span :class="[
                  'ml-1 font-medium',
                  task.priority === 'high' ? 'text-red-500' :
                  task.priority === 'moderate' ? 'text-blue-500' : 'text-green-500'
                ]">
                  {{ task.priority.charAt(0).toUpperCase() + task.priority.slice(1) }}
                </span>
              </div>
              <div class="flex items-center">
                <span class="text-gray-500">Status:</span>
                <span :class="[
                  'ml-1 font-medium',
                  task.status === 'completed' ? 'text-green-500' :
                  task.status === 'in-progress' ? 'text-blue-500' : 'text-red-500'
                ]">
                  {{ task.status === 'in-progress' ? 'In Progress' : 
                     task.status === 'completed' ? 'Completed' : 'Not Started' }}
                </span>
              </div>
              <div class="flex items-center">
                <span class="text-gray-500">Created on:</span>
                <span class="ml-1 font-medium text-gray-700">{{ task.createdDate }}</span>
              </div>
            </div>
          </div>

          <!-- Task Image -->
          <div class="flex-shrink-0 ml-3">
            <img 
              :src="task.image" 
              :alt="task.title"
              class="w-16 h-16 rounded-lg object-cover border border-gray-200"
            />
          </div>

          <!-- Menu Dots -->
          <button class="flex-shrink-0 p-1 hover:bg-gray-100 rounded-md transition-colors duration-200">
            <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Props
const props = defineProps({
  recentTasks: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: "Attend Nischal's Birthday Party",
        description: "Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....",
        priority: 'moderate',
        status: 'not-started',
        createdDate: '20/06/2023',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=200&h=200&fit=crop&crop=faces'
      },
      {
        id: 2,
        title: 'Landing Page Design for TravelDays',
        description: 'Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)',
        priority: 'moderate',
        status: 'in-progress',
        createdDate: '20/06/2023',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop&crop=faces'
      },
      {
        id: 3,
        title: 'Presentation on Final Product',
        description: 'Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for...',
        priority: 'moderate',
        status: 'in-progress',
        createdDate: '19/06/2023',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&crop=faces'
      }
    ]
  }
})

// Methods
const handleAddTask = () => {
  console.log('Add task clicked')
  // Add your add task logic here
}
</script>
