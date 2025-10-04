<template>
  <section id="specialty" class="section-padding bg-soft-gray">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="heading-lg text-gradient mb-6" :data-vi="'TRÀ VIỆT NAM ĐẶC SẢN'" :data-en="'VIETNAMESE SPECIALTY TEAS'">
          {{ currentLang === 'vi' ? 'TRÀ VIỆT NAM ĐẶC SẢN' : 'VIETNAMESE SPECIALTY TEAS' }}
        </h2>
        <div class="w-24 h-0.5 bg-premium-gold mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto" 
           :data-vi="'Khám phá những loại trà đặc sản từ các vùng trà nổi tiếng nhất Việt Nam'"
           :data-en="'Discover specialty teas from Vietnam\'s most renowned tea regions'">
          {{ currentLang === 'vi' ? 'Khám phá những loại trà đặc sản từ các vùng trà nổi tiếng nhất Việt Nam' : 'Discover specialty teas from Vietnam\'s most renowned tea regions' }}
        </p>
      </div>
      
      <!-- Featured Teas -->
      <div class="grid lg:grid-cols-2 gap-12 mb-16">
        <!-- Shan Tuyet Tea -->
        <div class="card-elegant p-8">
          <div class="flex items-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-tea-green to-coral rounded-full flex items-center justify-center mr-6 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                   alt="Shan Tuyet Tea" 
                   class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-br from-tea-green/70 to-coral/70 flex items-center justify-center">
                <span class="text-white text-3xl">🏔️</span>
              </div>
            </div>
            <div>
              <h3 class="heading-md text-tea-green mb-2" :data-vi="'Shan Tuyet'" :data-en="'Shan Tuyet'">
                {{ currentLang === 'vi' ? 'Shan Tuyet' : 'Shan Tuyet' }}
              </h3>
              <p class="text-gray-600" :data-vi="'Vùng núi cao Tây Bắc'" :data-en="'Northwest Highlands'">
                {{ currentLang === 'vi' ? 'Vùng núi cao Tây Bắc' : 'Northwest Highlands' }}
              </p>
            </div>
          </div>
          
          <p class="text-gray-700 mb-6" 
             :data-vi="'Trà Shan Tuyet được hái từ những cây trà cổ thụ hàng trăm năm tuổi trên độ cao 1,500m. Lá trà được bao phủ bởi lớp lông tơ trắng như tuyết, tạo nên hương vị đậm đà và thanh khiết.'"
             :data-en="'Shan Tuyet tea is harvested from ancient tea trees hundreds of years old at altitudes above 1,500m. The tea leaves are covered with white downy hairs like snow, creating a rich and pure flavor.'">
            {{ currentLang === 'vi' ? 'Trà Shan Tuyet được hái từ những cây trà cổ thụ hàng trăm năm tuổi trên độ cao 1,500m. Lá trà được bao phủ bởi lớp lông tơ trắng như tuyết, tạo nên hương vị đậm đà và thanh khiết.' : 'Shan Tuyet tea is harvested from ancient tea trees hundreds of years old at altitudes above 1,500m. The tea leaves are covered with white downy hairs like snow, creating a rich and pure flavor.' }}
          </p>
          
          <div class="flex justify-between items-center">
            <div>
              <span class="text-premium-gold font-bold text-xl">$45</span>
              <span class="text-gray-500 text-sm ml-2" :data-vi="'/ 100g'" :data-en="'/ 100g'">/ 100g</span>
            </div>
            <button class="btn-primary" :data-vi="'Mua ngay'" :data-en="'Shop Now'">
              {{ currentLang === 'vi' ? 'Mua ngay' : 'Shop Now' }}
            </button>
          </div>
        </div>
        
        <!-- Oolong Tea -->
        <div class="card-elegant p-8">
          <div class="flex items-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-br from-premium-gold to-peach rounded-full flex items-center justify-center mr-6 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                   alt="Oolong Tea" 
                   class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-br from-premium-gold/70 to-peach/70 flex items-center justify-center">
                <span class="text-white text-3xl">🍃</span>
              </div>
            </div>
            <div>
              <h3 class="heading-md text-tea-green mb-2" :data-vi="'Oolong Việt Nam'" :data-en="'Vietnamese Oolong'">
                {{ currentLang === 'vi' ? 'Oolong Việt Nam' : 'Vietnamese Oolong' }}
              </h3>
              <p class="text-gray-600" :data-vi="'Vùng cao nguyên Lâm Đồng'" :data-en="'Lam Dong Highlands'">
                {{ currentLang === 'vi' ? 'Vùng cao nguyên Lâm Đồng' : 'Lam Dong Highlands' }}
              </p>
            </div>
          </div>
          
          <p class="text-gray-700 mb-6" 
             :data-vi="'Oolong Việt Nam được chế biến theo phương pháp truyền thống với quá trình oxy hóa một phần. Trà có hương vị cân bằng giữa trà xanh và trà đen, với hương hoa nhẹ nhàng và vị ngọt thanh.'"
             :data-en="'Vietnamese Oolong is processed using traditional methods with partial oxidation. The tea has a balanced flavor between green and black tea, with gentle floral notes and sweet aftertaste.'">
            {{ currentLang === 'vi' ? 'Oolong Việt Nam được chế biến theo phương pháp truyền thống với quá trình oxy hóa một phần. Trà có hương vị cân bằng giữa trà xanh và trà đen, với hương hoa nhẹ nhàng và vị ngọt thanh.' : 'Vietnamese Oolong is processed using traditional methods with partial oxidation. The tea has a balanced flavor between green and black tea, with gentle floral notes and sweet aftertaste.' }}
          </p>
          
          <div class="flex justify-between items-center">
            <div>
              <span class="text-premium-gold font-bold text-xl">$38</span>
              <span class="text-gray-500 text-sm ml-2" :data-vi="'/ 100g'" :data-en="'/ 100g'">/ 100g</span>
            </div>
            <button class="btn-primary" :data-vi="'Mua ngay'" :data-en="'Shop Now'">
              {{ currentLang === 'vi' ? 'Mua ngay' : 'Shop Now' }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- Regional Teas -->
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Thai Nguyen Tea -->
        <div class="product-card">
          <div class="product-image bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Thai Nguyen Tea" 
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-br from-green-600/60 to-green-800/60 flex items-center justify-center">
              <span class="text-white text-5xl">🌿</span>
            </div>
          </div>
          <div class="p-6">
            <h4 class="font-semibold text-tea-green mb-2" :data-vi="'Trà Thái Nguyên'" :data-en="'Thai Nguyen Tea'">
              {{ currentLang === 'vi' ? 'Trà Thái Nguyên' : 'Thai Nguyen Tea' }}
            </h4>
            <p class="text-gray-600 text-sm mb-4" :data-vi="'Trà xanh truyền thống từ vùng đất nổi tiếng'" :data-en="'Traditional green tea from the famous region'">
              {{ currentLang === 'vi' ? 'Trà xanh truyền thống từ vùng đất nổi tiếng' : 'Traditional green tea from the famous region' }}
            </p>
            <div class="flex justify-between items-center">
              <span class="text-premium-gold font-bold">$22</span>
              <button class="text-tea-green text-sm font-semibold hover:underline" :data-vi="'Xem thêm'" :data-en="'View More'">
                {{ currentLang === 'vi' ? 'Xem thêm' : 'View More' }}
              </button>
            </div>
          </div>
        </div>
        
        <!-- Moc Chau Tea -->
        <div class="product-card">
          <div class="product-image bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Moc Chau Tea" 
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/60 to-blue-700/60 flex items-center justify-center">
              <span class="text-white text-5xl">☁️</span>
            </div>
          </div>
          <div class="p-6">
            <h4 class="font-semibold text-tea-green mb-2" :data-vi="'Trà Mộc Châu'" :data-en="'Moc Chau Tea'">
              {{ currentLang === 'vi' ? 'Trà Mộc Châu' : 'Moc Chau Tea' }}
            </h4>
            <p class="text-gray-600 text-sm mb-4" :data-vi="'Trà từ vùng cao nguyên mây mù'" :data-en="'Tea from the misty highlands'">
              {{ currentLang === 'vi' ? 'Trà từ vùng cao nguyên mây mù' : 'Tea from the misty highlands' }}
            </p>
            <div class="flex justify-between items-center">
              <span class="text-premium-gold font-bold">$26</span>
              <button class="text-tea-green text-sm font-semibold hover:underline" :data-vi="'Xem thêm'" :data-en="'View More'">
                {{ currentLang === 'vi' ? 'Xem thêm' : 'View More' }}
              </button>
            </div>
          </div>
        </div>
        
        <!-- Lotus Tea -->
        <div class="product-card">
          <div class="product-image bg-gradient-to-br from-pink-400 to-purple-500 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1594736797933-d0c29b8d0b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Lotus Tea" 
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-400/60 to-purple-500/60 flex items-center justify-center">
              <span class="text-white text-5xl">🪷</span>
            </div>
          </div>
          <div class="p-6">
            <h4 class="font-semibold text-tea-green mb-2" :data-vi="'Trà Sen'" :data-en="'Lotus Tea'">
              {{ currentLang === 'vi' ? 'Trà Sen' : 'Lotus Tea' }}
            </h4>
            <p class="text-gray-600 text-sm mb-4" :data-vi="'Trà sen truyền thống với hương thơm đặc biệt'" :data-en="'Traditional lotus tea with unique fragrance'">
              {{ currentLang === 'vi' ? 'Trà sen truyền thống với hương thơm đặc biệt' : 'Traditional lotus tea with unique fragrance' }}
            </p>
            <div class="flex justify-between items-center">
              <span class="text-premium-gold font-bold">$35</span>
              <button class="text-tea-green text-sm font-semibold hover:underline" :data-vi="'Xem thêm'" :data-en="'View More'">
                {{ currentLang === 'vi' ? 'Xem thêm' : 'View More' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, inject } from 'vue'

export default {
  name: 'SpecialtySection',
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    
    return {
      currentLang
    }
  }
}
</script>
