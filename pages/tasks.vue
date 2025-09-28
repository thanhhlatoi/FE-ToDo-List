<template>
  <div class="min-h-screen bg-gray-50">
    <TheMyTask :tasks="myTasks" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheMyTask from '~/components/TheMyTask/index.vue'

// Add auth middleware
definePageMeta({
  middleware: 'auth'
})

// Page metadata
useHead({
  title: 'My Tasks - ToDo App',
  meta: [
    { name: 'description', content: 'Quản lý các công việc cá nhân của bạn' }
  ]
})

// Mock data for my tasks
const myTasks = ref([
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
])
</script>
