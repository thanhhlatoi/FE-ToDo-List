<template>
  <div class="bg-white rounded-lg shadow-sm p-4">
    <!-- Header -->
    <div class="flex items-center mb-4">
      <div class="p-2 bg-gray-100 rounded-md mr-3">
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
        </svg>
      </div>
      <h3 class="text-base font-semibold text-red-500">Task Status</h3>
    </div>

    <!-- Circular Progress Charts -->
    <div class="flex justify-between items-center">
      <!-- Completed Tasks -->
      <div class="flex flex-col items-center">
        <div class="relative w-20 h-20">
          <svg class="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
            <!-- Background circle -->
            <path
              class="stroke-gray-200"
              stroke-width="3"
              fill="none"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <!-- Progress circle -->
            <path
              class="stroke-green-500"
              stroke-width="3"
              fill="none"
              :stroke-dasharray="`${completedPercentage}, 100`"
              stroke-linecap="round"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-gray-900">{{ completedPercentage }}%</span>
          </div>
        </div>
        <div class="flex items-center mt-2">
          <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          <span class="text-sm text-gray-800">Completed</span>
        </div>
      </div>

      <!-- In Progress Tasks -->
      <div class="flex flex-col items-center">
        <div class="relative w-20 h-20">
          <svg class="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
            <!-- Background circle -->
            <path
              class="stroke-gray-200"
              stroke-width="3"
              fill="none"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <!-- Progress circle -->
            <path
              class="stroke-blue-500"
              stroke-width="3"
              fill="none"
              :stroke-dasharray="`${inProgressPercentage}, 100`"
              stroke-linecap="round"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-gray-900">{{ inProgressPercentage }}%</span>
          </div>
        </div>
        <div class="flex items-center mt-2">
          <div class="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
          <span class="text-sm text-gray-800">In Progress</span>
        </div>
      </div>

      <!-- Not Started Tasks -->
      <div class="flex flex-col items-center">
        <div class="relative w-20 h-20">
          <svg class="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
            <!-- Background circle -->
            <path
              class="stroke-gray-200"
              stroke-width="3"
              fill="none"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <!-- Progress circle -->
            <path
              class="stroke-red-500"
              stroke-width="3"
              fill="none"
              :stroke-dasharray="`${notStartedPercentage}, 100`"
              stroke-linecap="round"
              d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-lg font-bold text-gray-900">{{ notStartedPercentage }}%</span>
          </div>
        </div>
        <div class="flex items-center mt-2">
          <div class="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
          <span class="text-sm text-gray-800">Not Started</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  stats: {
    type: Object,
    default: () => ({
      totalTasks: 24,
      completedTasks: 18,
      pendingTasks: 4,
      overdueTasks: 2
    })
  }
})

// Computed percentages
const completedPercentage = computed(() => {
  return Math.round((props.stats.completedTasks / props.stats.totalTasks) * 100)
})

const inProgressPercentage = computed(() => {
  return Math.round((props.stats.pendingTasks / props.stats.totalTasks) * 100)
})

const notStartedPercentage = computed(() => {
  return Math.round((props.stats.overdueTasks / props.stats.totalTasks) * 100)
})
</script>
