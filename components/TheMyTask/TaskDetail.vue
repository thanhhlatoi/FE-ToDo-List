<template>
  <div class="h-full">
    <!-- Task Detail Card -->
    <div v-if="task" class="bg-white rounded-xl shadow-sm overflow-hidden h-full">
      <!-- Task Image -->
      <div class="aspect-video w-full">
        <img 
          :src="task.image" 
          :alt="task.title"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Task Content -->
      <div class="p-6">
        <!-- Task Title -->
        <h3 class="text-xl font-bold text-gray-800 mb-3">{{ task.title }}</h3>

        <!-- Task Metadata -->
        <div class="flex items-center space-x-4 mb-4 text-sm">
          <span :class="['font-medium', getPriorityColor(task.priority)]">
            Priority: {{ task.priority }}
          </span>
          <span :class="['font-medium', getStatusColor(task.status)]">
            Status: {{ task.status }}
          </span>
          <span class="text-gray-400">Created on: {{ task.createdDate }}</span>
        </div>

        <!-- Short Description -->
        <p class="text-gray-600 mb-4">{{ task.description }}</p>

        <!-- Detailed Description -->
        <div class="mb-6">
          <h4 class="text-sm font-semibold text-gray-800 mb-2">Description</h4>
          <p class="text-sm text-gray-600 leading-relaxed">
            {{ task.detailedDescription }}
          </p>
        </div>

        <!-- Activity List -->
        <div class="mb-6">
          <h4 class="text-sm font-semibold text-gray-800 mb-3">Suggested Activities</h4>
          <ol class="space-y-2">
            <li 
              v-for="(activity, index) in task.activities" 
              :key="index"
              class="text-sm text-gray-600 flex items-start"
            >
              <span class="font-medium text-gray-400 mr-2">{{ index + 1 }}.</span>
              <span>{{ activity }}</span>
            </li>
          </ol>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-end space-x-3">
          <button 
            @click="$emit('delete-task', task.id)"
            class="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
          </button>
          <button 
            @click="$emit('edit-task', task.id)"
            class="w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- No Task Selected -->
    <div v-else class="bg-white rounded-xl shadow-sm p-8 text-center h-full flex items-center justify-center">
      <div class="text-gray-400 mb-4">
        <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
        </svg>
      </div>
      <h3 class="text-lg font-medium text-gray-600 mb-2">No Task Selected</h3>
      <p class="text-sm text-gray-400">Click on a task from the list to view details</p>
    </div>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  task: {
    type: Object,
    default: null
  }
})

// Emits
const emit = defineEmits(['edit-task', 'delete-task'])

// Methods
const getPriorityColor = (priority) => {
  switch (priority.toLowerCase()) {
    case 'extreme':
      return 'text-red-500'
    case 'high':
      return 'text-orange-500'
    case 'moderate':
      return 'text-blue-500'
    case 'low':
      return 'text-green-500'
    default:
      return 'text-gray-500'
  }
}

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'not started':
      return 'text-red-500'
    case 'in progress':
      return 'text-blue-500'
    case 'completed':
      return 'text-green-500'
    default:
      return 'text-gray-500'
  }
}
</script>
