<template>
  <header class="bg-cream-white border-b border-soft-gray sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 bg-text-dark rounded-full flex items-center justify-center">
          <span class="text-cream-white font-bold text-sm">T</span>
        </div>
        <h1 class="text-xl font-serif font-bold text-text-dark">Teahouse</h1>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden lg:flex space-x-8">
        <router-link to="/" class="nav-link" :class="{ active: $route.name === 'Home' }">
          {{ currentLang === 'vi' ? 'Trang chủ' : 'Homepage' }}
        </router-link>
        <router-link to="/about" class="nav-link" :class="{ active: $route.name === 'About' }">{{ currentLang === 'vi' ? 'Về chúng tôi' : 'About' }}</router-link>
        <router-link to="/gallery" class="nav-link" :class="{ active: $route.name === 'Gallery' }">{{ currentLang === 'vi' ? 'Thư viện' : 'Gallery' }}</router-link>
        <router-link to="/shop" class="nav-link" :class="{ active: $route.name === 'Shop' }">{{ currentLang === 'vi' ? 'Cửa hàng' : 'Shop Pages' }}</router-link>
        <router-link to="/contact" class="nav-link" :class="{ active: $route.name === 'Contact' }">{{ currentLang === 'vi' ? 'Liên hệ' : 'Contact' }}</router-link>
      </div>
      
      <!-- Right side icons and language toggle -->
      <div class="flex items-center space-x-4">
        <button @click="toggleLanguage" class="lang-toggle">
          {{ currentLang === 'vi' ? 'EN' : 'VI' }}
        </button>
        
        <!-- Cart and User icons -->
        <div class="flex items-center space-x-3">
          <button class="w-8 h-8 flex items-center justify-center text-text-dark hover:text-text-medium transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"></path>
            </svg>
          </button>
          <button class="w-8 h-8 flex items-center justify-center text-text-dark hover:text-text-medium transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </button>
        </div>
        
        <!-- Mobile menu button -->
        <button @click="toggleMobileMenu" class="lg:hidden">
          <svg class="w-6 h-6 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
    
    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="lg:hidden bg-cream-white border-t border-soft-gray">
      <div class="container mx-auto px-6 py-4 space-y-4">
        <router-link to="/" class="block nav-link" @click="closeMobileMenu">{{ currentLang === 'vi' ? 'Trang chủ' : 'Homepage' }}</router-link>
        <router-link to="/about" class="block nav-link" @click="closeMobileMenu">{{ currentLang === 'vi' ? 'Về chúng tôi' : 'About' }}</router-link>
        <router-link to="/gallery" class="block nav-link" @click="closeMobileMenu">{{ currentLang === 'vi' ? 'Thư viện' : 'Gallery' }}</router-link>
        <router-link to="/shop" class="block nav-link" @click="closeMobileMenu">{{ currentLang === 'vi' ? 'Cửa hàng' : 'Shop Pages' }}</router-link>
        <router-link to="/contact" class="block nav-link" @click="closeMobileMenu">{{ currentLang === 'vi' ? 'Liên hệ' : 'Contact' }}</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, inject } from 'vue'

export default {
  name: 'Header',
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    const mobileMenuOpen = ref(false)
    
    const toggleLanguage = () => {
      currentLang.value = currentLang.value === 'vi' ? 'en' : 'vi'
      document.documentElement.lang = currentLang.value
    }
    
    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }
    
    const closeMobileMenu = () => {
      mobileMenuOpen.value = false
    }
    
    onMounted(() => {
      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          const target = document.querySelector(this.getAttribute('href'))
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        })
      })
    })
    
    return {
      currentLang,
      mobileMenuOpen,
      toggleLanguage,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script>