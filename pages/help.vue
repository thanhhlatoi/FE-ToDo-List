<template>
  <div class="min-h-screen bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-sm p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">Help & Support</h1>
        
        <div class="space-y-6">
          <div>
            <h2 class="text-xl font-semibold text-gray-800 mb-3">Getting Started</h2>
            <p class="text-gray-600">
              Welcome to the ToDo App! This application helps you manage your tasks efficiently.
            </p>
          </div>
          
          <div>
            <h2 class="text-xl font-semibold text-gray-800 mb-3">How to Use</h2>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>Create tasks using the "Add task" button</li>
              <li>Organize tasks by priority and status</li>
              <li>View your dashboard for task overview</li>
              <li>Manage task categories in the Categories page</li>
            </ul>
          </div>
          
          <div>
            <h2 class="text-xl font-semibold text-gray-800 mb-3">Features</h2>
            <ul class="list-disc list-inside space-y-2 text-gray-600">
              <li>User authentication (Login/Signup)</li>
              <li>Task management with priority levels</li>
              <li>Responsive design for all devices</li>
              <li>Task categorization and filtering</li>
            </ul>
          </div>
          
          <div>
            <h2 class="text-xl font-semibold text-gray-800 mb-3">Contact Support</h2>
            <p class="text-gray-600">
              If you need further assistance, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Add auth middleware
definePageMeta({
  middleware: 'auth'
})

// Page metadata
useHead({
  title: 'Help & Support - ToDo App',
  meta: [
    { name: 'description', content: 'Get help and support for the ToDo App' }
  ]
})
</script>
