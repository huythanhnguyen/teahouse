<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image Slider -->
    <div class="absolute inset-0">
      <div class="relative w-full h-full">
        <!-- Background images with fade transition -->
        <div 
          v-for="(image, index) in backgroundImages" 
          :key="index"
          :class="[
            'absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out',
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          ]"
          :style="{ backgroundImage: `url(${image})` }"
        ></div>
        
        <!-- Overlay for better text readability -->
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
    </div>
    
    
    <!-- Main content -->
    <div class="relative z-10 text-center max-w-4xl mx-auto px-6">
      <!-- Main title -->
      <h1 class="heading-xl mb-8 text-text-dark animate-fadeInUp">
        <span class="text-elegant block mb-4 animate-stagger-1" :data-vi="'Teahouse'" :data-en="'Teahouse'">
          {{ currentLang === 'vi' ? 'Teahouse' : 'Teahouse' }}
        </span>
      </h1>
      
      <!-- Subtitle -->
      <p class="text-lg text-text-medium mb-12 max-w-2xl mx-auto animate-stagger-2" 
         :data-vi="'Khám phá thế giới trà hoa tinh tế và nghệ thuật thưởng thức trà truyền thống Việt Nam'"
         :data-en="'Discover the world of delicate flower teas and the art of traditional Vietnamese tea appreciation'">
        {{ currentLang === 'vi' ? 'Khám phá thế giới trà hoa tinh tế và nghệ thuật thưởng thức trà truyền thống Việt Nam' : 'Discover the world of delicate flower teas and the art of traditional Vietnamese tea appreciation' }}
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-stagger-3">
        <button class="btn-primary smooth-hover" :data-vi="'Khám phá bộ sưu tập'" :data-en="'Explore Collection'">
          {{ currentLang === 'vi' ? 'Khám phá bộ sưu tập' : 'Explore Collection' }}
        </button>
        <button class="btn-secondary smooth-hover" :data-vi="'Tìm hiểu thêm'" :data-en="'Learn More'">
          {{ currentLang === 'vi' ? 'Tìm hiểu thêm' : 'Learn More' }}
        </button>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-stagger-4">
      <div class="text-center">
        <p class="text-sm text-text-medium mb-2 uppercase tracking-wider">Scroll</p>
        <svg class="w-6 h-6 text-text-medium animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, inject, onMounted, onUnmounted } from 'vue'

export default {
  name: 'HeroSection',
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    const currentImageIndex = ref(0)
    let slideInterval = null
    
    // Background images array using organized folder structure
    const backgroundImages = [
      '/images/homepage/banner/home-slider-background-img.png',
      '/images/homepage/banner/tra-hoa-large.jpg',
      '/images/homepage/banner/tra-hoa.jpg',
      '/images/homepage/banner/tea-set-1.jpg',
      '/images/homepage/banner/tra-mat-ong.jpg'
    ]
    
    // Auto-slide functionality
    const startSlideShow = () => {
      slideInterval = setInterval(() => {
        currentImageIndex.value = (currentImageIndex.value + 1) % backgroundImages.length
      }, 4000) // Change image every 4 seconds
    }
    
    const stopSlideShow = () => {
      if (slideInterval) {
        clearInterval(slideInterval)
        slideInterval = null
      }
    }
    
    onMounted(() => {
      startSlideShow()
    })
    
    onUnmounted(() => {
      stopSlideShow()
    })
    
    return {
      currentLang,
      currentImageIndex,
      backgroundImages
    }
  }
}
</script>