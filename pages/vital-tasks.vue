<template>
  <div class="min-h-screen bg-gray-50">
    <TheVitalTask :tasks="vitalTasks" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheVitalTask from '~/components/TheVitalTask/index.vue'

// Add auth middleware
definePageMeta({
  middleware: 'auth'
})

// Page metadata
useHead({
  title: 'Vital Tasks - ToDo App',
  meta: [
    { name: 'description', content: 'Quản lý các nhiệm vụ quan trọng và cấp bách' }
  ]
})

// Mock data for vital tasks
const vitalTasks = ref([
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
])
</script>
