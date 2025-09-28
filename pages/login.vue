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
            
            <!-- Left Section - Login Form -->
            <div class="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div class="max-w-md mx-auto w-full">
                <!-- Title -->
                <h1 class="text-3xl font-bold text-gray-900 mb-8">Sign In</h1>

                <!-- Login Form -->
                <form @submit.prevent="handleLogin" class="space-y-6">
                  <!-- Username Field -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Enter Username
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
                        class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                        placeholder="Enter your username"
                        required
                      />
                    </div>
                  </div>

                  <!-- Password Field -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      Enter Password
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
                        class="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>

                  <!-- Remember Me -->
                  <div class="flex items-center">
                    <input
                      v-model="formData.rememberMe"
                      type="checkbox"
                      class="h-4 w-4 text-coral-500 focus:ring-coral-500 border-gray-300 rounded"
                    />
                    <label class="ml-2 block text-sm text-gray-700">
                      Remember Me
                    </label>
                  </div>

                  <!-- Error Message -->
                  <div v-if="errorMessage" class="text-red-500 text-sm text-center">
                    {{ errorMessage }}
                  </div>

                  <!-- Login Button -->
                  <button
                    type="submit"
                    :disabled="isLoggingIn"
                    class="w-full bg-coral-500 hover:bg-coral-600 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                  >
                    {{ isLoggingIn ? 'Logging in...' : 'Login' }}
                  </button>

                  <!-- Social Login -->
                  <div class="text-center">
                    <p class="text-sm text-gray-500 mb-4">Or, Login with</p>
                    <div class="flex justify-center space-x-4">
                      <!-- Facebook -->
                      <button
                        type="button"
                        @click="loginWithFacebook"
                        class="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                      >
                        <span class="text-sm font-bold">f</span>
                      </button>
                      
                      <!-- Google -->
                      <button
                        type="button"
                        @click="loginWithGoogle"
                        class="w-10 h-10 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg flex items-center justify-center transition-colors duration-200"
                      >
                        <span class="text-sm font-bold text-blue-500">G</span>
                      </button>
                      
                      <!-- Twitter/X -->
                      <button
                        type="button"
                        @click="loginWithTwitter"
                        class="w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                      >
                        <span class="text-sm font-bold">X</span>
                      </button>
                    </div>
                  </div>

                  <!-- Create Account Link -->
                  <div class="text-center">
                    <p class="text-sm text-gray-600">
                      Don't have an account? 
                      <NuxtLink to="/signup" class="text-blue-500 hover:text-blue-600 font-medium">
                        Create One
                      </NuxtLink>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            <!-- Right Section - Illustration -->
            <div class="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 p-8 lg:p-12 flex items-center justify-center relative">
              <!-- Smartphone -->
              <div class="relative z-10">
                <div class="w-32 h-56 bg-blue-200 rounded-3xl p-2 shadow-lg">
                  <div class="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center p-4">
                    <!-- Checkmark -->
                    <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-4">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <!-- Credit Card -->
                    <div class="w-16 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <div class="w-12 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <div class="w-8 h-4 bg-blue-700 rounded flex items-center justify-center">
                          <div class="w-6 h-2 bg-white rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Woman Figure -->
              <div class="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
                <div class="relative">
                  <!-- Woman's head -->
                  <div class="w-8 h-8 bg-yellow-200 rounded-full mb-2"></div>
                  <!-- Woman's body -->
                  <div class="w-6 h-12 bg-purple-500 rounded-t-lg"></div>
                  <!-- Woman's legs -->
                  <div class="w-6 h-8 bg-blue-800 rounded-b-lg"></div>
                  <!-- Woman's arm -->
                  <div class="absolute -left-2 top-4 w-3 h-8 bg-yellow-200 rounded-full transform rotate-12"></div>
                  <!-- Small phone in hand -->
                  <div class="absolute -left-4 top-6 w-4 h-6 bg-gray-800 rounded"></div>
                </div>
              </div>

              <!-- Abstract Shapes -->
              <div class="absolute inset-0 overflow-hidden">
                <div class="absolute top-10 right-20 w-20 h-20 bg-purple-200 rounded-full opacity-30"></div>
                <div class="absolute bottom-20 right-10 w-16 h-16 bg-pink-200 rounded-full opacity-40"></div>
                <div class="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-50"></div>
                <div class="absolute bottom-1/3 left-1/4 w-14 h-14 bg-purple-300 rounded-full opacity-30"></div>
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
  title: 'Sign In - ToDo App',
  meta: [
    { name: 'description', content: 'Sign in to your ToDo account to manage your tasks' }
  ]
})

// Form data
const formData = reactive({
  username: '',
  password: '',
  rememberMe: false
})

const errorMessage = ref('')
const isLoggingIn = ref(false)

// Methods
const handleLogin = async () => {
  if (!formData.username || !formData.password) {
    errorMessage.value = 'Please fill in all fields'
    return
  }

  isLoggingIn.value = true
  errorMessage.value = ''

  try {
    const result = await login({
      username: formData.username,
      password: formData.password,
      rememberMe: formData.rememberMe
    })

    if (result.success) {
      // Redirect to dashboard
      navigateTo('/')
    } else {
      errorMessage.value = result.error || 'Login failed'
    }
  } catch (error) {
    errorMessage.value = 'An error occurred during login'
    console.error('Login error:', error)
  } finally {
    isLoggingIn.value = false
  }
}

const loginWithFacebook = () => {
  console.log('Login with Facebook')
  // Add Facebook login logic here
}

const loginWithGoogle = () => {
  console.log('Login with Google')
  // Add Google login logic here
}

const loginWithTwitter = () => {
  console.log('Login with Twitter/X')
  // Add Twitter login logic here
}
</script>

<style scoped>
/* Custom coral color for Tailwind */
.bg-coral-500 {
  background-color: #ff7f6b;
}

.bg-coral-600 {
  background-color: #ff6b5b;
}

.text-coral-500 {
  color: #ff7f6b;
}

.focus\:ring-coral-500:focus {
  --tw-ring-color: #ff7f6b;
}
</style>
