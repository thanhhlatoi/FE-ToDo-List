<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-10 left-10 w-4 h-4 bg-white rounded-full"></div>
      <div class="absolute top-20 left-32 w-3 h-3 bg-white rounded-full"></div>
      <div class="absolute top-40 left-20 w-2 h-2 bg-white rounded-full"></div>
      <div class="absolute top-60 left-40 w-5 h-5 bg-white rounded-full"></div>
      <div class="absolute top-80 left-10 w-3 h-3 bg-white rounded-full"></div>
      <div class="absolute top-32 left-60 w-4 h-4 bg-white rounded-full"></div>
      <div class="absolute top-52 left-80 w-2 h-2 bg-white rounded-full"></div>
      <div class="absolute top-72 left-100 w-3 h-3 bg-white rounded-full"></div>
      
      <!-- Square patterns -->
      <div class="absolute top-16 left-50 w-3 h-3 bg-white transform rotate-45"></div>
      <div class="absolute top-36 left-70 w-2 h-2 bg-white transform rotate-45"></div>
      <div class="absolute top-56 left-30 w-4 h-4 bg-white transform rotate-45"></div>
      <div class="absolute top-76 left-90 w-2 h-2 bg-white transform rotate-45"></div>
      
      <!-- Triangle patterns -->
      <div class="absolute top-24 left-45 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
      <div class="absolute top-44 left-65 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
      <div class="absolute top-64 left-25 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-white"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl w-full">
        <div class="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div class="flex flex-col lg:flex-row min-h-[600px]">
            
            <!-- Left Section - Illustration -->
            <div class="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12 flex items-center justify-center">
              <div class="relative max-w-md w-full">
                <!-- Man Figure -->
                <div class="absolute left-0 top-8 w-16 h-32">
                  <!-- Head -->
                  <div class="w-8 h-8 bg-purple-800 rounded-full absolute top-0 left-4"></div>
                  <!-- Beard -->
                  <div class="w-6 h-4 bg-purple-800 rounded-b-full absolute top-6 left-5"></div>
                  <!-- Body -->
                  <div class="w-12 h-16 bg-white absolute top-8 left-2 rounded-t-lg"></div>
                  <!-- Pants -->
                  <div class="w-12 h-8 bg-blue-900 absolute top-20 left-2 rounded-b-lg"></div>
                  <!-- Arms -->
                  <div class="w-2 h-8 bg-white absolute top-10 left-0 rounded-l-full"></div>
                  <div class="w-2 h-8 bg-white absolute top-10 right-0 rounded-r-full"></div>
                </div>

                <!-- Smartphone -->
                <div class="absolute left-12 top-4 w-8 h-16 bg-blue-600 rounded-lg">
                  <!-- Screen -->
                  <div class="w-6 h-12 bg-white rounded-md absolute top-1 left-1">
                    <!-- Checkmark -->
                    <div class="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                    <!-- Lines -->
                    <div class="absolute top-4 left-1 right-1 h-0.5 bg-gray-300"></div>
                    <div class="absolute top-6 left-1 right-1 h-0.5 bg-gray-300"></div>
                    <div class="absolute top-8 left-1 right-1 h-0.5 bg-gray-300"></div>
                  </div>
                </div>

                <!-- Floating Documents -->
                <div class="absolute left-20 top-8 w-6 h-8 bg-blue-800 rounded transform rotate-12">
                  <div class="absolute top-1 left-1 right-1 h-0.5 bg-white"></div>
                  <div class="absolute top-2 left-1 right-1 h-0.5 bg-white"></div>
                  <div class="absolute top-3 left-1 right-1 h-0.5 bg-white"></div>
                </div>

                <div class="absolute left-24 top-12 w-5 h-6 bg-blue-400 rounded transform -rotate-12">
                  <div class="absolute top-1 left-1 right-1 h-0.5 bg-white"></div>
                  <div class="absolute top-2 left-1 right-1 h-0.5 bg-white"></div>
                </div>

                <!-- Long Document -->
                <div class="absolute left-8 top-20 w-4 h-12 bg-blue-300 rounded">
                  <div class="absolute top-1 left-1 right-1 h-0.5 bg-white"></div>
                  <div class="absolute top-2 left-1 right-1 h-0.5 bg-white"></div>
                  <div class="absolute top-3 left-1 right-1 h-0.5 bg-white"></div>
                  <div class="absolute top-4 left-1 right-1 h-0.5 bg-white"></div>
                  <div class="absolute top-5 left-1 right-1 h-0.5 bg-white"></div>
                  <div class="absolute top-6 left-1 right-1 h-0.5 bg-white"></div>
                  <div class="absolute top-7 left-1 right-1 h-0.5 bg-white"></div>
                  <div class="absolute top-8 left-1 right-1 h-0.5 bg-white"></div>
                  <div class="absolute top-9 left-1 right-1 h-0.5 bg-white"></div>
                  <div class="absolute top-10 left-1 right-1 h-0.5 bg-white"></div>
                </div>

                <!-- Abstract Shapes -->
                <div class="absolute right-4 top-8 w-6 h-6 bg-purple-300 rounded-full"></div>
                <div class="absolute right-8 top-16 w-4 h-4 bg-yellow-300 rounded-full"></div>
                <div class="absolute right-2 top-24 w-3 h-3 bg-pink-300 rounded-full"></div>
              </div>
            </div>
            
            <!-- Right Section - Sign Up Form -->
            <div class="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div class="max-w-md mx-auto w-full">
                <!-- Title -->
                <h1 class="text-3xl font-bold text-gray-900 mb-8">Sign Up</h1>

                <!-- Sign Up Form -->
                <form @submit.prevent="handleSignUp" class="space-y-6">
                  <!-- First Name Field -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                        </svg>
                      </div>
                      <input
                        v-model="formData.firstName"
                        type="text"
                        placeholder="Enter First Name"
                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>

                  <!-- Last Name Field -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                        </svg>
                      </div>
                      <input
                        v-model="formData.lastName"
                        type="text"
                        placeholder="Enter Last Name"
                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>

                  <!-- Username Field -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                      </div>
                      <input
                        v-model="formData.username"
                        type="text"
                        placeholder="Enter Username"
                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>

                  <!-- Email Field -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <input
                        v-model="formData.email"
                        type="email"
                        placeholder="Enter Email"
                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>

                  <!-- Password Field -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                      </div>
                      <input
                        v-model="formData.password"
                        type="password"
                        placeholder="Enter Password"
                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>

                  <!-- Confirm Password Field -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                        </svg>
                      </div>
                      <input
                        v-model="formData.confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors duration-200"
                        required
                      />
                    </div>
                  </div>

                  <!-- Terms Agreement -->
                  <div class="flex items-center">
                    <input
                      v-model="formData.agreeTerms"
                      type="checkbox"
                      class="h-4 w-4 text-coral-500 focus:ring-coral-500 border-gray-300 rounded"
                    />
                    <label class="ml-2 block text-sm text-gray-700">
                      I agree to all terms
                    </label>
                  </div>

                  <!-- Error Message -->
                  <div v-if="errorMessage" class="text-red-500 text-sm text-center">
                    {{ errorMessage }}
                  </div>

                  <!-- Register Button -->
                  <button
                    type="submit"
                    :disabled="isSigningUp"
                    class="w-full bg-coral-500 hover:bg-coral-600 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    {{ isSigningUp ? 'Creating Account...' : 'Register' }}
                  </button>

                  <!-- Sign In Link -->
                  <div class="text-center">
                    <p class="text-sm text-gray-600">
                      Already have an account? 
                      <NuxtLink to="/login" class="text-blue-600 hover:text-blue-800 font-medium">
                        Sign In
                      </NuxtLink>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

// Use login layout
definePageMeta({
  layout: 'login'
})

// Use auth composable
const { login, isAuthenticated } = useAuth()

// Redirect if already authenticated
if (isAuthenticated.value) {
  navigateTo('/')
}

// Page metadata
useHead({
  title: 'Sign Up - ToDo App',
  meta: [
    { name: 'description', content: 'Create your ToDo account to start managing your tasks' }
  ]
})

// Form data
const formData = reactive({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeTerms: false
})

const errorMessage = ref('')
const isSigningUp = ref(false)

// Methods
const handleSignUp = async () => {
  // Validation
  if (!formData.firstName || !formData.lastName || !formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
    errorMessage.value = 'Please fill in all fields'
    return
  }

  if (formData.password !== formData.confirmPassword) {
    errorMessage.value = 'Passwords do not match'
    return
  }

  if (!formData.agreeTerms) {
    errorMessage.value = 'Please agree to the terms'
    return
  }

  isSigningUp.value = true
  errorMessage.value = ''

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Auto login after successful signup
    const result = await login({
      username: formData.username,
      password: formData.password,
      rememberMe: true
    })

    if (result.success) {
      // Redirect to dashboard
      navigateTo('/')
    } else {
      errorMessage.value = 'Account creation failed'
    }
  } catch (error) {
    errorMessage.value = 'An error occurred during signup'
    console.error('Signup error:', error)
  } finally {
    isSigningUp.value = false
  }
}
</script>

<style scoped>
/* Custom coral color for Tailwind */
.bg-coral-500 {
  background-color: #ff6b6b;
}

.hover\:bg-coral-600:hover {
  background-color: #ff5252;
}

.focus\:ring-coral-500:focus {
  --tw-ring-color: #ff6b6b;
}

.focus\:border-coral-500:focus {
  border-color: #ff6b6b;
}

.text-coral-500 {
  color: #ff6b6b;
}
</style>
