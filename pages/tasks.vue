<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Danh sách công việc</h1>
        <p class="text-gray-600">Quản lý các công việc hàng ngày của bạn</p>
      </div>

      <!-- Add new task form -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-xl font-semibold mb-4">Thêm công việc mới</h2>
        <form @submit.prevent="addTask" class="flex gap-4">
          <input
            v-model="newTask"
            type="text"
            placeholder="Nhập công việc mới..."
            class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Thêm
          </button>
        </form>
      </div>

      <!-- Tasks list -->
      <div class="bg-white rounded-lg shadow-md">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-4">Công việc hiện tại</h2>
          <div v-if="tasks.length === 0" class="text-gray-500 text-center py-8">
            Chưa có công việc nào. Hãy thêm công việc đầu tiên!
          </div>
          <div v-else class="space-y-3">
            <div
              v-for="(task, index) in tasks"
              :key="index"
              class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              <div class="flex items-center">
                <input
                  v-model="task.completed"
                  type="checkbox"
                  class="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                >
                <span :class="task.completed ? 'line-through text-gray-500' : 'text-gray-900'">
                  {{ task.text }}
                </span>
              </div>
              <button
                @click="removeTask(index)"
                class="text-red-500 hover:text-red-700 transition duration-300"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Danh sách công việc - ToDo App',
  meta: [
    { name: 'description', content: 'Quản lý công việc hàng ngày' }
  ]
})

// Reactive data
const newTask = ref('')
const tasks = ref([
  { text: 'Học Nuxt.js', completed: false },
  { text: 'Tạo ứng dụng ToDo', completed: true },
  { text: 'Deploy lên production', completed: false }
])

// Methods
const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push({
      text: newTask.value.trim(),
      completed: false
    })
    newTask.value = ''
  }
}

const removeTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>
