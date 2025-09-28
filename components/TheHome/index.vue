<template>
  <div class="space-y-6">
    <!-- Welcome Section -->
    <WelcomeSection :user-name="userName" :team-members="teamMembers" />

    <!-- Main Content - 2 Column Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column - To-Do (2/3 width) -->
      <div class="lg:col-span-2">
        <RecentTasks :recent-tasks="recentTasks" @add-task="$emit('add-task')" />
      </div>

      <!-- Right Column - Task Status & Completed Tasks (1/3 width) -->
      <div class="space-y-6">
        <!-- Task Status -->
        <StatsCards :stats="stats" />
        
        <!-- Completed Tasks -->
        <CompletedTasks :completed-tasks="completedTasks" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import WelcomeSection from './WelcomeSection.vue'
import RecentTasks from './RecentTasks.vue'
import StatsCards from './StatsCards.vue'
import CompletedTasks from './CompletedTasks.vue'

// Emits
const emit = defineEmits(['add-task'])

// Props để nhận data từ parent
const props = defineProps({
  userName: {
    type: String,
    default: 'Sundar'
  },
  teamMembers: {
    type: Array,
    default: () => []
  },
  stats: {
    type: Object,
    default: () => ({})
  },
  recentTasks: {
    type: Array,
    default: () => []
  },
  completedTasks: {
    type: Array,
    default: () => []
  }
})

// Mock data nếu không có props
const userName = ref(props.userName || 'Sundar')
const teamMembers = ref(props.teamMembers.length > 0 ? props.teamMembers : [
  { id: 1, name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
  { id: 2, name: 'Jane Smith', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face' },
  { id: 3, name: 'Mike Johnson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
  { id: 4, name: 'Sarah Wilson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
  { id: 5, name: 'David Brown', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
  { id: 6, name: 'Lisa Davis', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face' }
])

const stats = ref(props.stats && Object.keys(props.stats).length > 0 ? props.stats : {
  totalTasks: 24,
  completedTasks: 18,
  pendingTasks: 4,
  overdueTasks: 2
})

const recentTasks = ref(props.recentTasks.length > 0 ? props.recentTasks : [
  {
    id: 1,
    title: "Attend Nischal's Birthday Party",
    description: "Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....",
    priority: 'moderate',
    status: 'not-started',
    createdDate: '20/06/2023',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=200&h=200&fit=crop&crop=faces'
  },
  {
    id: 2,
    title: 'Landing Page Design for TravelDays',
    description: 'Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)',
    priority: 'moderate',
    status: 'in-progress',
    createdDate: '20/06/2023',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop&crop=faces'
  },
  {
    id: 3,
    title: 'Presentation on Final Product',
    description: 'Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for...',
    priority: 'moderate',
    status: 'in-progress',
    createdDate: '19/06/2023',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&crop=faces'
  }
])

const completedTasks = ref(props.completedTasks.length > 0 ? props.completedTasks : [
  {
    id: 1,
    title: 'Walk the dog',
    description: 'Take the dog to the park and bring treats as well.',
    completedDate: 'Completed 2 days ago',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=200&h=200&fit=crop&crop=faces'
  },
  {
    id: 2,
    title: 'Conduct meeting',
    description: 'Meet with the client and finalize requirements.',
    completedDate: 'Completed 2 days ago',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&crop=faces'
  }
])
</script>
