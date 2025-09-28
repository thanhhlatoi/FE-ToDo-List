<template>
  <!-- Modal Overlay -->
  <div 
    v-if="isOpen" 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click="closeModal"
  >
    <!-- Modal Content -->
    <div 
      class="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
      @click.stop
    >
      <!-- Modal Header -->
      <div class="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 class="text-2xl font-bold text-gray-800 border-b-2 border-red-500 pb-1">
          Add New Task
        </h2>
        <button 
          @click="closeModal"
          class="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
        >
          Go Back
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-6">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Title Field -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              v-model="formData.title"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Enter task title"
              required
            />
          </div>

          <!-- Date Field -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <div class="relative">
              <input
                v-model="formData.date"
                type="date"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Priority Field -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Priority
            </label>
            <div class="space-y-2">
              <label 
                v-for="priority in priorities" 
                :key="priority.value"
                class="flex items-center cursor-pointer"
              >
                <input
                  v-model="formData.priority"
                  :value="priority.value"
                  type="radio"
                  class="sr-only"
                />
                <div 
                  :class="[
                    'w-4 h-4 rounded border-2 mr-3 flex items-center justify-center',
                    formData.priority === priority.value 
                      ? 'border-gray-400 bg-white' 
                      : 'border-gray-300'
                  ]"
                >
                  <div 
                    v-if="formData.priority === priority.value"
                    class="w-2 h-2 rounded-full"
                    :class="priority.color"
                  ></div>
                </div>
                <div class="flex items-center">
                  <div 
                    class="w-3 h-3 rounded-full mr-2"
                    :class="priority.color"
                  ></div>
                  <span class="text-sm text-gray-700">{{ priority.label }}</span>
                </div>
              </label>
            </div>
          </div>

          <!-- Task Description -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Task Description
            </label>
            <textarea
              v-model="formData.description"
              rows="4"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              placeholder="Start writing here....."
            ></textarea>
          </div>

          <!-- Upload Image Section -->
          <div class="flex gap-6">
            <div class="flex-1">
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Upload Image
              </label>
              <div 
                @click="triggerFileUpload"
                @dragover.prevent
                @drop.prevent="handleFileDrop"
                class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors duration-200"
              >
                <div class="flex flex-col items-center">
                  <!-- Upload Icon -->
                  <div class="mb-4">
                    <svg class="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                    </svg>
                  </div>
                  <p class="text-sm text-gray-500 mb-4">Drag&Drop files here or</p>
                  <button
                    type="button"
                    class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Browse
                  </button>
                </div>
              </div>
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                @change="handleFileSelect"
                class="hidden"
              />
            </div>
          </div>

          <!-- Action Button -->
          <div class="flex justify-start pt-4">
            <button
              type="submit"
              class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

// Emits
const emit = defineEmits(['close', 'submit'])

// Reactive data
const fileInput = ref(null)

const formData = reactive({
  title: '',
  date: '',
  priority: 'moderate',
  description: '',
  image: null
})

const priorities = [
  { value: 'extreme', label: 'Extreme', color: 'bg-red-500' },
  { value: 'moderate', label: 'Moderate', color: 'bg-blue-500' },
  { value: 'low', label: 'Low', color: 'bg-green-500' }
]

// Methods
const closeModal = () => {
  emit('close')
}

const triggerFileUpload = () => {
  fileInput.value?.click()
}

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    formData.image = file
  }
}

const handleFileDrop = (event) => {
  const file = event.dataTransfer.files[0]
  if (file && file.type.startsWith('image/')) {
    formData.image = file
  }
}

const handleSubmit = () => {
  // Emit the form data to parent
  emit('submit', { ...formData })
  
  // Reset form
  formData.title = ''
  formData.date = ''
  formData.priority = 'moderate'
  formData.description = ''
  formData.image = null
  
  // Close modal
  closeModal()
}
</script>
