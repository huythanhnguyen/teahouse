<template>
  <div class="min-h-screen bg-cream-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-soft-gray to-cream-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-serif font-bold text-text-dark mb-6">
          {{ currentLang === 'vi' ? 'Về Chúng Tôi' : 'About Us' }}
        </h1>
        <p class="text-lg md:text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
          {{ currentLang === 'vi' 
            ? 'Khám phá câu chuyện đằng sau những tách trà thơm ngon và truyền thống trà Việt Nam hàng trăm năm tuổi.' 
            : 'Discover the story behind our delicious teas and Vietnam\'s centuries-old tea tradition.' 
          }}
        </p>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-serif font-bold text-text-dark mb-6">
              {{ currentLang === 'vi' ? 'Câu Chuyện Của Chúng Tôi' : 'Our Story' }}
            </h2>
            <div class="space-y-4 text-text-medium leading-relaxed">
              <p>
                {{ currentLang === 'vi' 
                  ? 'Từ những ngọn núi cao nguyên Tây Bắc, nơi những cây trà cổ thụ hàng trăm năm tuổi vẫn đứng vững, chúng tôi mang đến những sản phẩm trà cao cấp nhất.' 
                  : 'From the highlands of Northwest Vietnam, where ancient tea trees hundreds of years old still stand, we bring you the finest tea products.' 
                }}
              </p>
              <p>
                {{ currentLang === 'vi' 
                  ? 'Mỗi lá trà được chọn lọc kỹ càng, mỗi công thức được truyền từ thế hệ này sang thế hệ khác, tạo nên hương vị độc đáo không thể tìm thấy ở đâu khác.' 
                  : 'Each tea leaf is carefully selected, each recipe passed down from generation to generation, creating unique flavors found nowhere else.' 
                }}
              </p>
              <p>
                {{ currentLang === 'vi' 
                  ? 'Chúng tôi tin rằng trà không chỉ là thức uống, mà còn là cầu nối giữa con người với thiên nhiên, giữa hiện tại với quá khứ.' 
                  : 'We believe that tea is not just a beverage, but a bridge between humans and nature, between present and past.' 
                }}
              </p>
            </div>
          </div>
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Tea plantation"
              class="rounded-lg shadow-lg w-full h-80 object-cover"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-soft-gray">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-text-dark text-center mb-16">
          {{ currentLang === 'vi' ? 'Giá Trị Cốt Lõi' : 'Our Values' }}
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-text-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-cream-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-text-dark mb-4">
              {{ currentLang === 'vi' ? 'Chất Lượng Cao Cấp' : 'Premium Quality' }}
            </h3>
            <p class="text-text-medium">
              {{ currentLang === 'vi' 
                ? 'Chúng tôi cam kết mang đến những sản phẩm trà chất lượng cao nhất, được chọn lọc từ những nguyên liệu tốt nhất.' 
                : 'We are committed to bringing you the highest quality tea products, selected from the finest ingredients.' 
              }}
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-text-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-cream-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-text-dark mb-4">
              {{ currentLang === 'vi' ? 'Truyền Thống Lâu Đời' : 'Ancient Tradition' }}
            </h3>
            <p class="text-text-medium">
              {{ currentLang === 'vi' 
                ? 'Giữ gìn và phát huy những giá trị truyền thống của nghệ thuật trà Việt Nam qua nhiều thế hệ.' 
                : 'Preserving and promoting the traditional values of Vietnamese tea art through generations.' 
              }}
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-text-dark rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-cream-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-text-dark mb-4">
              {{ currentLang === 'vi' ? 'Bền Vững' : 'Sustainability' }}
            </h3>
            <p class="text-text-medium">
              {{ currentLang === 'vi' 
                ? 'Cam kết phát triển bền vững, bảo vệ môi trường và hỗ trợ cộng đồng địa phương.' 
                : 'Committed to sustainable development, environmental protection and supporting local communities.' 
              }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-text-dark text-center mb-16">
          {{ currentLang === 'vi' ? 'Đội Ngũ Của Chúng Tôi' : 'Our Team' }}
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="text-center">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              alt="Team member"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-lg font-semibold text-text-dark mb-2">
              {{ currentLang === 'vi' ? 'Nguyễn Văn Minh' : 'Nguyen Van Minh' }}
            </h3>
            <p class="text-text-medium">
              {{ currentLang === 'vi' ? 'Chuyên gia trà' : 'Tea Master' }}
            </p>
          </div>
          <div class="text-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              alt="Team member"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-lg font-semibold text-text-dark mb-2">
              {{ currentLang === 'vi' ? 'Trần Thị Lan' : 'Tran Thi Lan' }}
            </h3>
            <p class="text-text-medium">
              {{ currentLang === 'vi' ? 'Chuyên gia chất lượng' : 'Quality Specialist' }}
            </p>
          </div>
          <div class="text-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              alt="Team member"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-lg font-semibold text-text-dark mb-2">
              {{ currentLang === 'vi' ? 'Lê Hoàng Nam' : 'Le Hoang Nam' }}
            </h3>
            <p class="text-text-medium">
              {{ currentLang === 'vi' ? 'Giám đốc sản xuất' : 'Production Director' }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-text-dark text-cream-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6">
          {{ currentLang === 'vi' ? 'Tham Gia Hành Trình Trà' : 'Join Our Tea Journey' }}
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
import { inject } from 'vue'

export default {
  name: 'AboutPage',
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    
    return {
      currentLang
    }
  },
  mounted() {
    document.title = 'Về Chúng Tôi - Vietnamese Tea Heritage'
  }
}
</script>