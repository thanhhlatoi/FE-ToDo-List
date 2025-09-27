<template>
  <div class="bg-white rounded-lg shadow-sm p-4">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-xl font-bold text-gray-800">
          Welcome back, {{ userName }} 👋
        </h2>
        <p class="text-sm text-gray-600 mt-0.5">Here's what's happening with your tasks today.</p>
      </div>
      
      <div class="hidden sm:flex items-center space-x-3">
        <!-- Team Members Avatars -->
        <div class="flex items-center space-x-1">
          <div class="flex -space-x-1">
            <img 
              v-for="(member, index) in teamMembers.slice(0, 4)" 
              :key="member.id"
              :src="member.avatar" 
              :alt="member.name"
              class="w-6 h-6 rounded-md border border-white object-cover"
            />
            <div 
              v-if="teamMembers.length > 4"
              class="w-6 h-6 rounded-md border border-white bg-gray-100 flex items-center justify-center text-xs font-semibold text-gray-600"
            >
              +{{ teamMembers.length - 4 }}
            </div>
          </div>
        </div>

        <!-- Invite Button -->
        <button 
          @click="handleInvite"
          class="flex items-center space-x-1.5 px-3 py-1.5 border border-red-500 rounded-md text-red-500 hover:bg-red-50 transition-colors duration-200"
        >
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
          </svg>
          <span class="text-xs font-medium">Invite</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

// Props
const props = defineProps({
  userName: {
    type: String,
    default: 'Sundar'
  },
  teamMembers: {
    type: Array,
    default: () => [
      {
        id: 1,
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
      },
      {
        id: 3,
        name: 'Mike Johnson',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      {
        id: 4,
        name: 'Sarah Wilson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
      },
      {
        id: 5,
        name: 'David Brown',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
      },
      {
        id: 6,
        name: 'Lisa Davis',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
      }
    ]
  }
})

// Methods
const handleInvite = () => {
  console.log('Invite button clicked')
  // Add your invite logic here
  // For example: open invite modal, copy invite link, etc.
}

const lastUpdated = computed(() => {
  const now = new Date()
  return now.toLocaleTimeString('vi-VN', { 
    hour: '2-digit', 
    minute: '2-digit' 
  })
})
</script>
