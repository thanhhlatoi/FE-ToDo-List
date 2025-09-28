<template>
  <div class="h-full">
    <div class="bg-white rounded-xl shadow-sm p-6 h-full">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">My Tasks</h3>
      
      <!-- Task Cards -->
      <div class="space-y-4">
        <div 
          v-for="task in tasks" 
          :key="task.id"
          @click="$emit('select-task', task)"
          :class="[
            'task-card cursor-pointer transition-all duration-200 hover:shadow-md',
            selectedTaskId === task.id ? 'ring-2 ring-coral-500' : ''
          ]"
        >
          <div class="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100 hover:border-gray-200">
            <!-- Status Indicator -->
            <div class="flex-shrink-0 mt-1">
              <div 
                :class="[
                  'w-4 h-4 rounded-full border-2',
                  getStatusColor(task.status)
                ]"
              ></div>
            </div>

            <!-- Task Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <h4 class="text-sm font-semibold text-gray-800 mb-1">{{ task.title }}</h4>
                  <p class="text-xs text-gray-500 mb-2 line-clamp-2">{{ task.description }}</p>
                  
                  <!-- Task Details -->
                  <div class="space-y-1">
                    <div class="flex items-center space-x-4 text-xs">
                      <span :class="['font-medium', getPriorityColor(task.priority)]">
                        Priority: {{ task.priority }}
                      </span>
                      <span :class="['font-medium', getStatusColor(task.status)]">
                        Status: {{ task.status }}
                      </span>
                    </div>
                    <p class="text-xs text-gray-400">Created on: {{ task.createdDate }}</p>
                  </div>
                </div>

                <!-- Task Image -->
                <div class="flex-shrink-0 ml-3">
                  <img 
                    :src="task.image" 
                    :alt="task.title"
                    class="w-12 h-12 rounded-lg object-cover"
                  />
                </div>

                <!-- Action Menu -->
                <div class="flex-shrink-0 ml-2">
                  <button 
                    @click.stop="$emit('toggle-menu', task.id)"
                    class="p-1 hover:bg-gray-100 rounded"
                  >
                    <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Props
const props = defineProps({
  tasks: {
    type: Array,
    default: () => []
  },
  selectedTaskId: {
    type: [Number, String],
    default: null
  }
})

// Emits
const emit = defineEmits(['select-task', 'toggle-menu'])

// Mock data if no props provided
const tasks = computed(() => {
  if (props.tasks && props.tasks.length > 0) {
    return props.tasks
  }
  
  return [
    {
      id: 1,
      title: "Complete project documentation",
      description: "Write comprehensive documentation for the new API endpoints and update user guides....",
      detailedDescription: "Create detailed documentation for all new API endpoints, including request/response examples, error codes, and authentication requirements. Update the user guide with new features and provide code samples for common use cases.",
      priority: "High",
      status: "In Progress",
      createdDate: "18/06/2023",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop&crop=faces",
      activities: [
        "Review existing documentation",
        "Create API endpoint documentation",
        "Write user guide updates",
        "Add code examples",
        "Review and proofread",
        "Publish documentation"
      ]
    },
    {
      id: 2,
      title: "Update user interface design",
      description: "Redesign the dashboard interface to improve user experience and accessibility....",
      detailedDescription: "Redesign the main dashboard interface with focus on user experience, accessibility, and modern design principles. Include responsive design for mobile devices and ensure compliance with accessibility standards.",
      priority: "Moderate", 
      status: "Not Started",
      createdDate: "17/06/2023",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&crop=faces",
      activities: [
        "Conduct user research",
        "Create wireframes",
        "Design mockups",
        "Implement responsive design",
        "Test accessibility",
        "Gather user feedback"
      ]
    },
    {
      id: 3,
      title: "Fix critical bug in payment system",
      description: "Resolve the payment processing issue that's causing transaction failures....",
      detailedDescription: "Investigate and fix the critical bug in the payment processing system that's causing some transactions to fail. This affects user experience and revenue, so it needs immediate attention.",
      priority: "Extreme", 
      status: "In Progress",
      createdDate: "19/06/2023",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop&crop=faces",
      activities: [
        "Reproduce the bug",
        "Analyze error logs",
        "Identify root cause",
        "Implement fix",
        "Test thoroughly",
        "Deploy to production"
      ]
    },
    {
      id: 4,
      title: "Plan team meeting agenda",
      description: "Prepare agenda and materials for next week's team meeting....",
      detailedDescription: "Create a comprehensive agenda for the weekly team meeting, including project updates, upcoming deadlines, and discussion topics. Prepare any necessary materials and presentations.",
      priority: "Low", 
      status: "Completed",
      createdDate: "15/06/2023",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&crop=faces",
      activities: [
        "Review previous meeting notes",
        "Collect project updates",
        "Identify discussion topics",
        "Prepare presentation slides",
        "Send meeting invitation",
        "Follow up on action items"
      ]
    }
  ]
})

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
      return 'text-red-500 border-red-500'
    case 'in progress':
      return 'text-blue-500 border-blue-500'
    case 'completed':
      return 'text-green-500 border-green-500'
    default:
      return 'text-gray-500 border-gray-500'
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.task-card {
  transition: all 0.2s ease-in-out;
}

.task-card:hover {
  transform: translateY(-1px);
}
</style>
