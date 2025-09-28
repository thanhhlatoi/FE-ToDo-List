<template>
  <div class="task-categories-container">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Task Categories</h1>
      <div class="flex items-center space-x-4">
        <button 
          @click="addCategory"
          class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
        >
          Add Category
        </button>
        <button 
          @click="goBack"
          class="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
        >
          Go Back
        </button>
      </div>
    </div>

    <!-- Task Status Section -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-800 border-b-2 border-orange-500 pb-1">
          Task Status
        </h2>
        <button 
          @click="addTaskStatus"
          class="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
        >
          + Add Task Status
        </button>
      </div>

      <!-- Task Status Table -->
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SN
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task Status
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr 
              v-for="(status, index) in taskStatuses" 
              :key="status.id"
              class="hover:bg-gray-50"
            >
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ index + 1 }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ status.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button 
                    @click="editTaskStatus(status)"
                    class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors duration-200 flex items-center"
                  >
                    <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                    Edit
                  </button>
                  <button 
                    @click="deleteTaskStatus(status.id)"
                    class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors duration-200 flex items-center"
                  >
                    <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Task Priority Section -->
    <div class="mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-800 border-b-2 border-orange-500 pb-1">
          Task Priority
        </h2>
        <button 
          @click="addTaskPriority"
          class="text-orange-500 hover:text-orange-600 font-medium transition-colors duration-200"
        >
          + Add New Priority
        </button>
      </div>

      <!-- Task Priority Table -->
      <div class="bg-white rounded-lg shadow-sm overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SN
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Task Priority
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr 
              v-for="(priority, index) in taskPriorities" 
              :key="priority.id"
              class="hover:bg-gray-50"
            >
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ index + 1 }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ priority.name }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button 
                    @click="editTaskPriority(priority)"
                    class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors duration-200 flex items-center"
                  >
                    <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                    Edit
                  </button>
                  <button 
                    @click="deleteTaskPriority(priority.id)"
                    class="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors duration-200 flex items-center"
                  >
                    <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center">
      <div class="flex space-x-2">
        <button 
          @click="previousPage"
          class="bg-gray-600 hover:bg-gray-700 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button 
          @click="nextPage"
          class="bg-gray-600 hover:bg-gray-700 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Reactive data
const taskStatuses = ref([
  { id: 1, name: 'Completed' },
  { id: 2, name: 'In Progress' },
  { id: 3, name: 'Not Started' }
])

const taskPriorities = ref([
  { id: 1, name: 'Extreme' },
  { id: 2, name: 'Moderate' },
  { id: 3, name: 'Low' }
])

// Methods
const addCategory = () => {
  console.log('Add Category clicked')
  // Add category logic here
}

const goBack = () => {
  // Navigate back or close modal
  console.log('Go Back clicked')
  // You can use router.back() or emit event
}

const addTaskStatus = () => {
  console.log('Add Task Status clicked')
  // Add task status logic here
}

const editTaskStatus = (status) => {
  console.log('Edit Task Status:', status)
  // Edit task status logic here
}

const deleteTaskStatus = (statusId) => {
  console.log('Delete Task Status:', statusId)
  // Delete task status logic here
  taskStatuses.value = taskStatuses.value.filter(status => status.id !== statusId)
}

const addTaskPriority = () => {
  console.log('Add Task Priority clicked')
  // Add task priority logic here
}

const editTaskPriority = (priority) => {
  console.log('Edit Task Priority:', priority)
  // Edit task priority logic here
}

const deleteTaskPriority = (priorityId) => {
  console.log('Delete Task Priority:', priorityId)
  // Delete task priority logic here
  taskPriorities.value = taskPriorities.value.filter(priority => priority.id !== priorityId)
}

const previousPage = () => {
  console.log('Previous page clicked')
  // Pagination logic here
}

const nextPage = () => {
  console.log('Next page clicked')
  // Pagination logic here
}
</script>

<style scoped>
.task-categories-container {
  @apply max-w-6xl mx-auto p-6;
}
</style>
