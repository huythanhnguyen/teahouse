<template>
  <div class="min-h-screen bg-cream-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-soft-gray to-cream-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-serif font-bold text-text-dark mb-6">
          {{ currentLang === 'vi' ? 'Thư Viện Ảnh' : 'Photo Gallery' }}
        </h1>
        <p class="text-lg md:text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
          {{ currentLang === 'vi' 
            ? 'Khám phá vẻ đẹp của trà Việt Nam qua những hình ảnh tuyệt đẹp từ vườn trà đến tách trà thơm ngon.' 
            : 'Discover the beauty of Vietnamese tea through stunning images from tea gardens to delicious cups of tea.' 
          }}
        </p>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="py-8 bg-soft-gray">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="activeCategory = category.id"
            :class="[
              'px-6 py-3 rounded-lg font-semibold transition-colors',
              activeCategory === category.id 
                ? 'bg-text-dark text-cream-white' 
                : 'bg-white text-text-dark hover:bg-gray-50'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="(image, index) in filteredImages" 
            :key="image.id"
            class="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            @click="openModal(index)"
          >
            <img 
              :src="image.src" 
              :alt="image.alt"
              class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            >
            <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
              </svg>
            </div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 class="text-white font-semibold">{{ image.title }}</h3>
              <p class="text-white text-sm opacity-90">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" @click="closeModal">
      <div class="relative max-w-4xl max-h-full" @click.stop>
        <button 
          @click="closeModal"
          class="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <img 
          :src="currentImage.src" 
          :alt="currentImage.alt"
          class="max-w-full max-h-full object-contain rounded-lg"
        >
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
          <h3 class="text-xl font-semibold mb-2">{{ currentImage.title }}</h3>
          <p class="text-sm opacity-90">{{ currentImage.description }}</p>
        </div>
        <!-- Navigation arrows -->
        <button 
          v-if="currentImageIndex > 0"
          @click="previousImage"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button 
          v-if="currentImageIndex < filteredImages.length - 1"
          @click="nextImage"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
        >
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- CTA Section -->
    <section class="py-20 bg-text-dark text-cream-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6">
          {{ currentLang === 'vi' ? 'Trải Nghiệm Trà Việt Nam' : 'Experience Vietnamese Tea' }}
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          {{ currentLang === 'vi' 
            ? 'Khám phá thế giới trà Việt Nam và trải nghiệm những hương vị độc đáo không thể quên.' 
            : 'Discover the world of Vietnamese tea and experience unforgettable unique flavors.' 
          }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/" 
            class="bg-cream-white text-text-dark px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            {{ currentLang === 'vi' ? 'Khám Phá Sản Phẩm' : 'Explore Products' }}
          </router-link>
          <router-link 
            to="/contact" 
            class="border border-cream-white text-cream-white px-8 py-3 rounded-lg font-semibold hover:bg-cream-white hover:text-text-dark transition-colors"
          >
            {{ currentLang === 'vi' ? 'Liên Hệ Chúng Tôi' : 'Contact Us' }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { inject, ref, computed } from 'vue'

export default {
  name: 'GalleryPage',
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    const activeCategory = ref('all')
    const showModal = ref(false)
    const currentImageIndex = ref(0)

    const categories = [
      { id: 'all', name: currentLang.value === 'vi' ? 'Tất cả' : 'All' },
      { id: 'tea-garden', name: currentLang.value === 'vi' ? 'Vườn trà' : 'Tea Garden' },
      { id: 'products', name: currentLang.value === 'vi' ? 'Sản phẩm' : 'Products' },
      { id: 'process', name: currentLang.value === 'vi' ? 'Quy trình' : 'Process' },
      { id: 'lifestyle', name: currentLang.value === 'vi' ? 'Lối sống' : 'Lifestyle' }
    ]

    const images = [
      {
        id: 1,
        category: 'tea-garden',
        src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Tea plantation',
        title: currentLang.value === 'vi' ? 'Vườn Trà Shan Tuyết' : 'Shan Tuyet Tea Garden',
        description: currentLang.value === 'vi' ? 'Những cây trà cổ thụ hàng trăm năm tuổi' : 'Ancient tea trees hundreds of years old'
      },
      {
        id: 2,
        category: 'products',
        src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Tea products',
        title: currentLang.value === 'vi' ? 'Trà Hoa An Nhiên' : 'Serene Flower Tea',
        description: currentLang.value === 'vi' ? 'Trà hoa ngủ ngon với hương vị dịu nhẹ' : 'Gentle sleep tea with soothing flavors'
      },
      {
        id: 3,
        category: 'process',
        src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Tea brewing process',
        title: currentLang.value === 'vi' ? 'Nghệ Thuật Pha Trà' : 'Tea Brewing Art',
        description: currentLang.value === 'vi' ? 'Quy trình pha trà truyền thống Việt Nam' : 'Traditional Vietnamese tea brewing process'
      },
      {
        id: 4,
        category: 'lifestyle',
        src: 'https://images.unsplash.com/photo-1594736797933-d0c29b8d0b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Tea lifestyle',
        title: currentLang.value === 'vi' ? 'Thưởng Trà Buổi Sáng' : 'Morning Tea Ritual',
        description: currentLang.value === 'vi' ? 'Khoảnh khắc thư giãn với tách trà' : 'Relaxing moments with a cup of tea'
      },
      {
        id: 5,
        category: 'tea-garden',
        src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Tea harvest',
        title: currentLang.value === 'vi' ? 'Thu Hoạch Trà' : 'Tea Harvest',
        description: currentLang.value === 'vi' ? 'Thu hoạch lá trà tươi từ vườn' : 'Fresh tea leaves harvested from garden'
      },
      {
        id: 6,
        category: 'products',
        src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Beauty tea',
        title: currentLang.value === 'vi' ? 'Trà Dưỡng Nhan Tỏa Sắc' : 'Radiant Beauty Tea',
        description: currentLang.value === 'vi' ? 'Trà hoa dưỡng nhan cho làn da rạng rỡ' : 'Beauty tea for radiant skin'
      },
      {
        id: 7,
        category: 'process',
        src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Tea ceremony',
        title: currentLang.value === 'vi' ? 'Nghi Lễ Trà' : 'Tea Ceremony',
        description: currentLang.value === 'vi' ? 'Nghi lễ trà truyền thống Việt Nam' : 'Traditional Vietnamese tea ceremony'
      },
      {
        id: 8,
        category: 'lifestyle',
        src: 'https://images.unsplash.com/photo-1594736797933-d0c29b8d0b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        alt: 'Tea meditation',
        title: currentLang.value === 'vi' ? 'Thiền Trà' : 'Tea Meditation',
        description: currentLang.value === 'vi' ? 'Thiền định với tách trà' : 'Meditation with a cup of tea'
      }
    ]

    const filteredImages = computed(() => {
      if (activeCategory.value === 'all') {
        return images
      }
      return images.filter(image => image.category === activeCategory.value)
    })

    const currentImage = computed(() => {
      return filteredImages.value[currentImageIndex.value]
    })

    const openModal = (index) => {
      currentImageIndex.value = index
      showModal.value = true
    }

    const closeModal = () => {
      showModal.value = false
    }

    const nextImage = () => {
      if (currentImageIndex.value < filteredImages.value.length - 1) {
        currentImageIndex.value++
      }
    }

    const previousImage = () => {
      if (currentImageIndex.value > 0) {
        currentImageIndex.value--
      }
    }

    return {
      currentLang,
      categories,
      activeCategory,
      filteredImages,
      showModal,
      currentImageIndex,
      currentImage,
      openModal,
      closeModal,
      nextImage,
      previousImage
    }
  },
  mounted() {
    document.title = 'Thư Viện Ảnh - Vietnamese Tea Heritage'
  }
}
</script>
