<template>
  <div class="h-full">
    <div class="bg-white rounded-xl shadow-sm p-6 h-full">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Vital Tasks</h3>
      
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
      title: "Walk the dog",
      description: "Take the dog to the park and bring treats as well.....",
      detailedDescription: "Take Luffy and Jiro for a leisurely stroll around the neighborhood. Enjoy the fresh air and give them the exercise and mental stimulation they need for a happy and healthy day. Don't forget to bring along squeaky and fluffy for some extra fun along the way!",
      priority: "Extreme",
      status: "Not Started",
      createdDate: "20/06/2023",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=200&h=200&fit=crop&crop=faces",
      activities: [
        "Listen to a podcast or audiobook",
        "Practice mindfulness or meditation", 
        "Take photos of interesting sights along the way",
        "Practice obedience training with your dog",
        "Chat with neighbors or other dog walkers",
        "Listen to music or an upbeat playlist"
      ]
    },
    {
      id: 2,
      title: "Take grandma to hospital",
      description: "Go back home and take grandma to the hosp....",
      detailedDescription: "Take grandma to her scheduled appointment at the hospital. Make sure to bring all necessary documents and arrive 15 minutes early. Help her with mobility assistance and stay with her during the appointment.",
      priority: "Moderate", 
      status: "In Progress",
      createdDate: "20/06/2023",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&crop=faces",
      activities: [
        "Pack necessary documents and ID",
        "Check appointment time and location",
        "Prepare mobility assistance if needed",
        "Plan transportation route",
        "Bring snacks and water",
        "Set reminder for next appointment"
      ]
    },
    {
      id: 3,
      title: "Prepare presentation for client",
      description: "Create slides and prepare demo for tomorrow's meeting....",
      detailedDescription: "Prepare a comprehensive presentation for the client meeting tomorrow. Include project overview, timeline, deliverables, and budget breakdown. Practice the demo and prepare for Q&A session.",
      priority: "High", 
      status: "Not Started",
      createdDate: "19/06/2023",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop&crop=faces",
      activities: [
        "Review project requirements",
        "Create presentation outline",
        "Design slides with company branding",
        "Prepare demo environment",
        "Practice presentation timing",
        "Prepare backup materials"
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
