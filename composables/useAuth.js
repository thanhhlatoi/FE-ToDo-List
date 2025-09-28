export const useAuth = () => {
  // Reactive state
  const isAuthenticated = ref(false)
  const user = ref(null)
  const isLoading = ref(false)

  // Initialize auth state from localStorage
  const initAuth = () => {
    if (process.client) {
      const token = localStorage.getItem('auth_token')
      const userData = localStorage.getItem('user_data')
      
      if (token && userData) {
        isAuthenticated.value = true
        user.value = JSON.parse(userData)
      }
    }
  }

  // Login function
  const login = async (credentials) => {
    isLoading.value = true
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful login
      if (credentials.username && credentials.password) {
        const userData = {
          id: 1,
          username: credentials.username,
          email: `${credentials.username}@example.com`,
          name: credentials.username.charAt(0).toUpperCase() + credentials.username.slice(1),
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
        }
        
        // Store in localStorage
        if (process.client) {
          localStorage.setItem('auth_token', 'mock_jwt_token')
          localStorage.setItem('user_data', JSON.stringify(userData))
        }
        
        // Update state
        isAuthenticated.value = true
        user.value = userData
        
        return { success: true, user: userData }
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: error.message }
    } finally {
      isLoading.value = false
    }
  }

  // Logout function
  const logout = () => {
    if (process.client) {
      localStorage.removeItem('auth_token')
      localStorage.removeItem('user_data')
    }
    
    isAuthenticated.value = false
    user.value = null
    
    // Redirect to login
    navigateTo('/login')
  }

  // Check if user is authenticated
  const checkAuth = () => {
    if (process.client) {
      const token = localStorage.getItem('auth_token')
      return !!token
    }
    return false
  }

  // Initialize on composable creation
  if (process.client) {
    initAuth()
  }

  return {
    isAuthenticated: readonly(isAuthenticated),
    user: readonly(user),
    isLoading: readonly(isLoading),
    login,
    logout,
    checkAuth,
    initAuth
  }
}
