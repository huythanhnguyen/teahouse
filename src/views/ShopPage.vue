<template>
  <div class="min-h-screen bg-cream-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-soft-gray to-cream-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-serif font-bold text-text-dark mb-6">
          {{ currentLang === 'vi' ? 'Cửa Hàng Trà' : 'Tea Shop' }}
        </h1>
        <p class="text-lg md:text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
          {{ currentLang === 'vi' 
            ? 'Khám phá bộ sưu tập trà cao cấp của chúng tôi, được chọn lọc từ những nguyên liệu tốt nhất.' 
            : 'Discover our premium tea collection, carefully selected from the finest ingredients.' 
          }}
        </p>
      </div>
    </section>

    <!-- Filter and Search -->
    <section class="py-8 bg-soft-gray">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
          <!-- Search Bar -->
          <div class="flex-1 max-w-md">
            <div class="relative">
              <input 
                type="text" 
                v-model="searchQuery"
                :placeholder="currentLang === 'vi' ? 'Tìm kiếm trà...' : 'Search teas...'"
                class="w-full px-4 py-3 pl-10 border border-soft-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-text-dark focus:border-transparent"
              >
              <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          <!-- Category Filter -->
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="activeCategory = category.id"
              :class="[
                'px-4 py-2 rounded-lg font-semibold transition-colors',
                activeCategory === category.id 
                  ? 'bg-text-dark text-cream-white' 
                  : 'bg-white text-text-dark hover:bg-gray-50'
              ]"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Grid -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div 
            v-for="product in filteredProducts" 
            :key="product.id"
            class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <!-- Product Image -->
            <div class="relative overflow-hidden">
              <img 
                :src="product.image" 
                :alt="product.name"
                class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              >
              <div class="absolute top-4 right-4">
                <span v-if="product.isNew" class="bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
                  {{ currentLang === 'vi' ? 'Mới' : 'New' }}
                </span>
              </div>
            </div>

            <!-- Product Info -->
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-semibold text-text-dark">{{ product.name }}</h3>
                <span class="text-text-dark font-bold text-lg">{{ product.price }}</span>
              </div>
              
              <p class="text-text-medium text-sm mb-4 line-clamp-2">{{ product.description }}</p>
              
              <!-- Product Tags -->
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tag in product.tags" 
                  :key="tag"
                  class="px-2 py-1 bg-soft-gray text-text-dark text-xs rounded"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Product Actions -->
              <div class="flex gap-2">
                <button class="flex-1 bg-text-dark text-cream-white py-2 px-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  {{ currentLang === 'vi' ? 'Thêm vào giỏ' : 'Add to Cart' }}
                </button>
                <router-link 
                  :to="product.link"
                  class="flex-1 border border-text-dark text-text-dark py-2 px-4 rounded-lg font-semibold hover:bg-text-dark hover:text-cream-white transition-colors text-center"
                >
                  {{ currentLang === 'vi' ? 'Xem chi tiết' : 'View Details' }}
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button class="btn-secondary">
            {{ currentLang === 'vi' ? 'Xem thêm sản phẩm' : 'Load More Products' }}
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-soft-gray">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-serif font-bold text-text-dark text-center mb-16">
          {{ currentLang === 'vi' ? 'Tại Sao Chọn Chúng Tôi' : 'Why Choose Us' }}
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-text-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-cream-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-text-dark mb-4">
              {{ currentLang === 'vi' ? 'Chất Lượng Cao Cấp' : 'Premium Quality' }}
            </h3>
            <p class="text-text-medium">
              {{ currentLang === 'vi' 
                ? 'Chúng tôi cam kết mang đến những sản phẩm trà chất lượng cao nhất.' 
                : 'We are committed to delivering the highest quality tea products.' 
              }}
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-text-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-cream-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-text-dark mb-4">
              {{ currentLang === 'vi' ? 'Hỗ Trợ 24/7' : '24/7 Support' }}
            </h3>
            <p class="text-text-medium">
              {{ currentLang === 'vi' 
                ? 'Đội ngũ chuyên gia luôn sẵn sàng tư vấn và hỗ trợ bạn.' 
                : 'Our expert team is always ready to advise and support you.' 
              }}
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-text-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-cream-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-text-dark mb-4">
              {{ currentLang === 'vi' ? 'Giao Hàng Nhanh' : 'Fast Delivery' }}
            </h3>
            <p class="text-text-medium">
              {{ currentLang === 'vi' 
                ? 'Giao hàng nhanh chóng và an toàn đến tận nhà bạn.' 
                : 'Fast and safe delivery right to your doorstep.' 
              }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-20 bg-text-dark text-cream-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-serif font-bold mb-6">
          {{ currentLang === 'vi' ? 'Đăng Ký Nhận Tin' : 'Subscribe to Our Newsletter' }}
        </h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          {{ currentLang === 'vi' 
            ? 'Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt.' 
            : 'Get updates on new products and special offers.' 
          }}
        </p>
        <div class="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            :placeholder="currentLang === 'vi' ? 'Nhập email của bạn' : 'Enter your email'"
            class="flex-1 px-4 py-3 border border-soft-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-cream-white focus:border-transparent text-text-dark"
          >
          <button class="bg-cream-white text-text-dark px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            {{ currentLang === 'vi' ? 'Đăng ký' : 'Subscribe' }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { inject, ref, computed } from 'vue'

export default {
  name: 'ShopPage',
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    const searchQuery = ref('')
    const activeCategory = ref('all')

    const categories = [
      { id: 'all', name: currentLang.value === 'vi' ? 'Tất cả' : 'All' },
      { id: 'herbal', name: currentLang.value === 'vi' ? 'Trà thảo dược' : 'Herbal Tea' },
      { id: 'flower', name: currentLang.value === 'vi' ? 'Trà hoa' : 'Flower Tea' },
      { id: 'premium', name: currentLang.value === 'vi' ? 'Trà cao cấp' : 'Premium Tea' },
      { id: 'gift', name: currentLang.value === 'vi' ? 'Quà tặng' : 'Gift Sets' }
    ]

    const products = [
      {
        id: 1,
        name: currentLang.value === 'vi' ? 'AN NHIÊN' : 'SERENE',
        description: currentLang.value === 'vi' ? 'Trà hoa ngủ ngon với hỗn hợp hoa cúc, táo đỏ, kỷ tử và mật ong tự nhiên.' : 'Sleep tea with chamomile, red dates, goji berries and natural honey.',
        price: '$28.00',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'herbal',
        tags: [currentLang.value === 'vi' ? 'Ngủ ngon' : 'Sleep', currentLang.value === 'vi' ? 'Thảo dược' : 'Herbal'],
        link: '/tra-hoa-ngu-ngon',
        isNew: false
      },
      {
        id: 2,
        name: currentLang.value === 'vi' ? 'TỎA SẮC' : 'RADIANT',
        description: currentLang.value === 'vi' ? 'Trà hoa dưỡng nhan với hoa hồng, kỷ tử, táo đỏ và đường nâu tự nhiên.' : 'Beauty tea with rose, goji berries, red dates and natural brown sugar.',
        price: '$32.00',
        image: 'https://images.unsplash.com/photo-1594736797933-d0c29b8d0b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'flower',
        tags: [currentLang.value === 'vi' ? 'Dưỡng nhan' : 'Beauty', currentLang.value === 'vi' ? 'Hoa' : 'Flower'],
        link: '/tra-hoa-duong-nhan',
        isNew: true
      },
      {
        id: 3,
        name: currentLang.value === 'vi' ? 'ẤM VỊ' : 'WARMTH',
        description: currentLang.value === 'vi' ? 'Trà gừng tiêu hóa với gừng tươi, táo đỏ, mật ong và đường nâu.' : 'Ginger digestive tea with fresh ginger, red dates, honey and brown sugar.',
        price: '$24.00',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'herbal',
        tags: [currentLang.value === 'vi' ? 'Tiêu hóa' : 'Digestive', currentLang.value === 'vi' ? 'Gừng' : 'Ginger'],
        link: '/tra-gung-tieu-hoa',
        isNew: false
      },
      {
        id: 4,
        name: currentLang.value === 'vi' ? 'SHAN TUYẾT' : 'MOUNTAIN SNOW',
        description: currentLang.value === 'vi' ? 'Trà Shan Tuyết cao cấp từ vùng núi Tây Bắc Việt Nam.' : 'Premium Shan Tuyet tea from Northwest Vietnam mountains.',
        price: '$45.00',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'premium',
        tags: [currentLang.value === 'vi' ? 'Cao cấp' : 'Premium', currentLang.value === 'vi' ? 'Núi' : 'Mountain'],
        link: '/shan-tuyet',
        isNew: true
      },
      {
        id: 5,
        name: currentLang.value === 'vi' ? 'BỘ QUÀ TẶNG TRÀ HOA' : 'FLOWER TEA GIFT SET',
        description: currentLang.value === 'vi' ? 'Bộ sưu tập trà hoa cao cấp, hoàn hảo cho quà tặng.' : 'Premium flower tea collection, perfect for gifting.',
        price: '$89.00',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'gift',
        tags: [currentLang.value === 'vi' ? 'Quà tặng' : 'Gift', currentLang.value === 'vi' ? 'Bộ sưu tập' : 'Collection'],
        link: '#',
        isNew: false
      },
      {
        id: 6,
        name: currentLang.value === 'vi' ? 'TRÀ HOA CÚC' : 'CHRYSANTHEMUM TEA',
        description: currentLang.value === 'vi' ? 'Trà hoa cúc thơm ngon, giúp thư giãn và cải thiện giấc ngủ.' : 'Delicious chrysanthemum tea, helps relax and improve sleep.',
        price: '$18.00',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        category: 'flower',
        tags: [currentLang.value === 'vi' ? 'Thư giãn' : 'Relax', currentLang.value === 'vi' ? 'Hoa cúc' : 'Chrysanthemum'],
        link: '#',
        isNew: false
      }
    ]

    const filteredProducts = computed(() => {
      let filtered = products

      // Filter by category
      if (activeCategory.value !== 'all') {
        filtered = filtered.filter(product => product.category === activeCategory.value)
      }

      // Filter by search query
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(product => 
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.tags.some(tag => tag.toLowerCase().includes(query))
        )
      }

      return filtered
    })

    return {
      currentLang,
      searchQuery,
      activeCategory,
      categories,
      filteredProducts
    }
  },
  mounted() {
    document.title = 'Cửa Hàng Trà - Vietnamese Tea Heritage'
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 2;
}
</style>
