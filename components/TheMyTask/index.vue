<template>
  <div class="my-tasks-container">
    <!-- Header -->
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-gray-800">My Tasks</h2>
    </div>

    <!-- Two Column Layout -->
    <div class="flex flex-col lg:flex-row gap-6">
      
      <!-- Left Column - Task List -->
      <div class="flex-1 lg:w-1/2">
        <TaskList 
          :tasks="props.tasks"
          :selected-task-id="selectedTask?.id"
          @select-task="selectTask"
          @toggle-menu="toggleTaskMenu"
        />
      </div>

      <!-- Right Column - Task Detail -->
      <div class="flex-1 lg:w-1/2">
        <TaskDetail 
          :task="selectedTask"
          @edit-task="editTask"
          @delete-task="deleteTask"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TaskList from './TaskList.vue'
import TaskDetail from './TaskDetail.vue'

// Props
const props = defineProps({
  tasks: {
    type: Array,
    default: () => []
  }
})

// Reactive state
const selectedTask = ref(null)
const taskMenuOpen = ref(null)

// Methods
const selectTask = (task) => {
  selectedTask.value = task
}

const toggleTaskMenu = (taskId) => {
  taskMenuOpen.value = taskMenuOpen.value === taskId ? null : taskId
}

const editTask = (taskId) => {
  console.log('Edit task:', taskId)
  // Add edit logic here
}

const deleteTask = (taskId) => {
  console.log('Delete task:', taskId)
  // Add delete logic here
}
</script>
