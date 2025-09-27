<template>
  <div class="space-y-6">
    <!-- Welcome Section -->
    <div class="bg-white rounded-xl shadow-sm p-6">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-2xl font-bold text-gray-800">Welcome back!</h2>
          <p class="text-gray-600 mt-1">Here's what's happening with your tasks today.</p>
        </div>
        <div class="hidden sm:block">
          <div class="flex items-center space-x-2 text-sm text-gray-500">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
            <span>Last updated: {{ lastUpdated }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Total Tasks -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Tasks</p>
            <p class="text-2xl font-bold text-gray-900">{{ stats.totalTasks }}</p>
          </div>
          <div class="p-3 bg-blue-100 rounded-lg">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Completed Tasks -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Completed</p>
            <p class="text-2xl font-bold text-green-600">{{ stats.completedTasks }}</p>
          </div>
          <div class="p-3 bg-green-100 rounded-lg">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Pending Tasks -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Pending</p>
            <p class="text-2xl font-bold text-yellow-600">{{ stats.pendingTasks }}</p>
          </div>
          <div class="p-3 bg-yellow-100 rounded-lg">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- Overdue Tasks -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Overdue</p>
            <p class="text-2xl font-bold text-red-600">{{ stats.overdueTasks }}</p>
          </div>
          <div class="p-3 bg-red-100 rounded-lg">
            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Tasks & Quick Actions -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Recent Tasks -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-800">Recent Tasks</h3>
          <NuxtLink to="/tasks" class="text-coral-500 hover:text-coral-600 text-sm font-medium">
            View All
          </NuxtLink>
        </div>
        
        <div class="space-y-3">
          <div v-for="task in recentTasks" :key="task.id" class="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div :class="[
              'w-3 h-3 rounded-full',
              task.completed ? 'bg-green-500' : task.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
            ]"></div>
            <div class="flex-1">
              <p :class="[
                'text-sm font-medium',
                task.completed ? 'text-gray-500 line-through' : 'text-gray-800'
              ]">
                {{ task.title }}
              </p>
              <p class="text-xs text-gray-500">{{ task.category }}</p>
            </div>
            <div class="text-xs text-gray-400">{{ task.time }}</div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-white rounded-xl shadow-sm p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        
        <div class="space-y-3">
          <NuxtLink 
            to="/tasks" 
            class="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-coral-50 rounded-lg transition-colors duration-200 group"
          >
            <div class="p-2 bg-coral-100 group-hover:bg-coral-200 rounded-lg">
              <svg class="w-5 h-5 text-coral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </div>
            <div>
              <p class="font-medium text-gray-800">Add New Task</p>
              <p class="text-sm text-gray-500">Create a new task quickly</p>
            </div>
          </NuxtLink>

          <NuxtLink 
            to="/categories" 
            class="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-coral-50 rounded-lg transition-colors duration-200 group"
          >
            <div class="p-2 bg-coral-100 group-hover:bg-coral-200 rounded-lg">
              <svg class="w-5 h-5 text-coral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/>
              </svg>
            </div>
            <div>
              <p class="font-medium text-gray-800">Manage Categories</p>
              <p class="text-sm text-gray-500">Organize your tasks</p>
            </div>
          </NuxtLink>

          <NuxtLink 
            to="/settings" 
            class="flex items-center space-x-3 p-3 bg-gray-50 hover:bg-coral-50 rounded-lg transition-colors duration-200 group"
          >
            <div class="p-2 bg-coral-100 group-hover:bg-coral-200 rounded-lg">
              <svg class="w-5 h-5 text-coral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <p class="font-medium text-gray-800">Settings</p>
              <p class="text-sm text-gray-500">Customize your experience</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Page metadata
useHead({
  title: 'Dashboard - ToDo App',
  meta: [
    { name: 'description', content: 'Dashboard của ứng dụng ToDo với thống kê và quản lý công việc' }
  ]
})

// Mock data
const stats = ref({
  totalTasks: 24,
  completedTasks: 18,
  pendingTasks: 4,
  overdueTasks: 2
})

const recentTasks = ref([
  {
    id: 1,
    title: 'Complete project proposal',
    category: 'Work',
    completed: true,
    priority: 'high',
    time: '2h ago'
  },
  {
    id: 2,
    title: 'Buy groceries',
    category: 'Personal',
    completed: false,
    priority: 'medium',
    time: '1h ago'
  },
  {
    id: 3,
    title: 'Call dentist',
    category: 'Health',
    completed: false,
    priority: 'low',
    time: '30m ago'
  },
  {
    id: 4,
    title: 'Review team reports',
    category: 'Work',
    completed: true,
    priority: 'medium',
    time: '45m ago'
  },
  {
    id: 5,
    title: 'Plan weekend trip',
    category: 'Personal',
    completed: false,
    priority: 'low',
    time: '1h ago'
  }
])

const lastUpdated = computed(() => {
  const now = new Date()
  return now.toLocaleTimeString('vi-VN', { 
    hour: '2-digit', 
    minute: '2-digit' 
  })
})
</script>
