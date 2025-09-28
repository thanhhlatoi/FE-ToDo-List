<template>
  <div class="min-h-screen bg-gray-50">
    <TheTaskCategory />
  </div>
</template>

<script setup>
import TheTaskCategory from '~/components/TheTaskCategory/index.vue'

// Add auth middleware
definePageMeta({
  middleware: 'auth'
})

// Page metadata
useHead({
  title: 'Task Categories - ToDo App',
  meta: [
    { name: 'description', content: 'Quản lý các danh mục, trạng thái và mức độ ưu tiên của công việc' }
  ]
})
</script>
