<template>
  <div>
    <HeroSection />
    
    <!-- Our Story Section -->
    <section class="py-20 bg-cream-white">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Our Story Text -->
          <div class="space-y-6 animate-fadeInLeft">
            <div>
              <h2 class="heading-lg text-text-dark mb-6 animate-stagger-1">
                {{ currentLang === 'vi' ? 'TRẢI NGHIỆM' : 'EXPERIENCE' }}
              </h2>
              <h3 class="heading-md text-text-dark mb-4 animate-stagger-2">
                {{ currentLang === 'vi' ? 'Câu Chuyện Đằng Sau Trà Việt Nam' : 'The Story Behind Our Vietnamese Tea House' }}
              </h3>
            </div>
            
            <p class="text-body leading-relaxed animate-stagger-3 mb-8">
              {{ currentLang === 'vi' 
                ? 'Chúng tôi là một đơn vị chuyên về các loại trà thảo dược cũng như trà đặc biệt của Việt Nam. Với niềm đam mê và kinh nghiệm lâu năm trong lĩnh vực trà, chúng tôi cam kết mang đến những sản phẩm trà chất lượng cao, kết hợp giữa truyền thống và hiện đại. Mỗi loại trà đều được chọn lọc kỹ lưỡng từ những nguyên liệu thiên nhiên tốt nhất, nhằm mang đến cả các yếu tố sức khỏe và các sản phẩm thật sự tốt cho người sành trà.'
                : 'We are a specialized unit focused on Vietnamese herbal teas and specialty teas. With our passion and years of experience in the tea industry, we are committed to delivering high-quality tea products that combine tradition and modernity. Each tea is carefully selected from the finest natural ingredients, aiming to bring both health benefits and truly excellent products for tea connoisseurs.' }}
            </p>
            
            <div class="animate-stagger-4">
              <router-link to="/about" class="btn-primary smooth-hover">
                {{ currentLang === 'vi' ? 'Tìm hiểu thêm' : 'Learn More' }}
              </router-link>
            </div>
          </div>
          
          <!-- Tea Gallery -->
          <div class="relative animate-fadeInRight">
            <div class="flex overflow-x-auto gap-4 pb-4">
              <!-- Trà Thảo Dược -->
              <div class="flex-shrink-0 w-64 space-y-4 animate-stagger-1">
                <div class="relative overflow-hidden rounded-lg smooth-hover">
                  <img src="/images/homepage/our-story/an-nhien-tra.jpg" 
                       :alt="currentLang === 'vi' ? 'Trà Thảo Dược' : 'Herbal Teas'" 
                       class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110">
                </div>
                <h4 class="text-sm font-semibold text-text-dark text-center">
                  {{ currentLang === 'vi' ? 'Trà Thảo Dược' : 'Herbal Teas' }}
                </h4>
              </div>
              
              <!-- Trà Đặc Sản -->
              <div class="flex-shrink-0 w-64 space-y-4 animate-stagger-2">
                <div class="relative overflow-hidden rounded-lg smooth-hover">
                  <img src="/images/homepage/our-story/tra-mong-rong.jpg" 
                       :alt="currentLang === 'vi' ? 'Trà Đặc Sản' : 'Specialty Teas'" 
                       class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110">
                </div>
                <h4 class="text-sm font-semibold text-text-dark text-center">
                  {{ currentLang === 'vi' ? 'Trà Đặc Sản' : 'Specialty Teas' }}
                </h4>
              </div>
              
              <!-- Nguyên Liệu Truyền Thống -->
              <div class="flex-shrink-0 w-64 space-y-4 animate-stagger-3">
                <div class="relative overflow-hidden rounded-lg smooth-hover">
                  <img src="/images/homepage/our-story/nguyen-lieu.jpg" 
                       :alt="currentLang === 'vi' ? 'Nguyên Liệu Truyền Thống' : 'Traditional Ingredients'" 
                       class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110">
                </div>
                <h4 class="text-sm font-semibold text-text-dark text-center">
                  {{ currentLang === 'vi' ? 'Nguyên Liệu Truyền Thống' : 'Traditional Ingredients' }}
                </h4>
              </div>
            </div>
            
            <!-- Navigation arrows -->
            <button class="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110">
              <svg class="w-4 h-4 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button class="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110">
              <svg class="w-4 h-4 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Product Grid -->
    <ProductGrid 
      :section-title="currentLang === 'vi' ? 'Trà hoa & Thảo mộc' : 'Flower & Herbal Teas'"
      :products="products"
    />
    
    <!-- Tea Bloggers Reviews -->
    <section class="py-20 bg-light-teal">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <div class="w-20 h-20 bg-cream-white rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
            <img src="/images/homepage/our-story/nguyen-lieu.jpg" 
                 :alt="currentLang === 'vi' ? 'Chuyên gia trà' : 'Tea Expert'" 
                 class="w-full h-full object-cover">
          </div>
          <h3 class="heading-md text-text-dark mb-6">
            {{ currentLang === 'vi' ? 'ĐÁNH GIÁ CHUYÊN GIA' : 'EXPERT REVIEWS' }}
          </h3>
          <p class="text-body max-w-2xl mx-auto">
            {{ currentLang === 'vi' 
              ? '"Chất lượng trà hoa Việt Nam thật xuất sắc. Mỗi loại trà đều kể một câu chuyện về truyền thống và nghề thủ công. Trà An Nhiên đã trở thành nghi lễ hàng đêm của tôi, và trà Tỏa Sắc đã thay đổi thói quen buổi sáng của tôi."'
              : '"The quality of Vietnamese flower teas is exceptional. Each blend tells a story of tradition and craftsmanship. The Serene sleep tea has become my nightly ritual, and the Radiant beauty tea has transformed my morning routine."' }}
          </p>
          <p class="text-small mt-4 text-text-medium">
            {{ currentLang === 'vi' ? '- Sarah Chen, Người yêu trà' : '- Sarah Chen, Tea Enthusiast' }}
          </p>
        </div>
      </div>
    </section>
    
    <!-- Blog Section -->
    <BlogSection />
    
    <!-- Second Hero Section -->
    <section class="relative py-20 bg-muted-blue">
      <div class="container mx-auto px-6 text-center">
        <h2 class="heading-xl text-text-dark mb-8">
          {{ currentLang === 'vi' ? 'Trà Việt Nam' : 'Vietnamese Tea' }}
        </h2>
        <p class="text-lg text-text-medium max-w-2xl mx-auto">
          {{ currentLang === 'vi' 
            ? 'Nơi hội tụ của nghệ thuật trà và vẻ đẹp thiên nhiên Việt Nam' 
            : 'Where Vietnamese tea artistry meets natural beauty' }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { inject, ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import ProductGrid from '../components/ProductGrid.vue'
import BlogSection from '../components/BlogSection.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    ProductGrid,
    BlogSection
  },
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    
    const products = [
      {
        id: 1,
        name: currentLang.value === 'vi' ? 'AN NHIÊN' : 'SERENE',
        origin: currentLang.value === 'vi' ? 'Trà Ngủ Ngon Việt Nam' : 'Vietnamese Sleep Tea',
        price: '$28.00',
        image: '/images/homepage/products/an-nhien-tra.jpg',
        link: '/tra-hoa-ngu-ngon'
      },
      {
        id: 2,
        name: currentLang.value === 'vi' ? 'TỎA SẮC' : 'RADIANT',
        origin: currentLang.value === 'vi' ? 'Trà Dưỡng Nhan Việt Nam' : 'Vietnamese Beauty Tea',
        price: '$32.00',
        image: '/images/homepage/banner/tra-hoa.jpg',
        link: '/tra-hoa-duong-nhan'
      },
      {
        id: 3,
        name: currentLang.value === 'vi' ? 'ẤM VỊ' : 'WARMTH',
        origin: currentLang.value === 'vi' ? 'Trà Gừng Tiêu Hóa Việt Nam' : 'Vietnamese Ginger Tea',
        price: '$24.00',
        image: '/images/homepage/products/tra-chanh-mat-ong.jpg',
        link: '/tra-gung-tieu-hoa'
      },
      {
        id: 4,
        name: currentLang.value === 'vi' ? 'SHAN TUYẾT' : 'MOUNTAIN SNOW',
        origin: currentLang.value === 'vi' ? 'Trà Núi Việt Nam' : 'Vietnamese Mountain Tea',
        price: '$45.00',
        image: '/images/homepage/banner/tra-hoa-large.jpg',
        link: '/shan-tuyet'
      }
    ]
    
    return {
      currentLang,
      products
    }
  }
}
</script>