<template>
  <section id="heritage" class="section-padding bg-white">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div>
          <h2 class="heading-lg text-gradient mb-6" :data-vi="'DI SẢN TRÀ VIỆT NAM'" :data-en="'VIETNAMESE TEA HERITAGE'">
            {{ currentLang === 'vi' ? 'DI SẢN TRÀ VIỆT NAM' : 'VIETNAMESE TEA HERITAGE' }}
          </h2>
          <div class="w-24 h-0.5 bg-premium-gold mb-8"></div>
          
          <p class="text-lg text-gray-700 mb-8" 
             :data-vi="'Khám phá lịch sử phong phú của trà Việt Nam, từ những truyền thống vùng miền đến nghệ thuật chế biến trà tinh tế. Mỗi lá trà đều mang trong mình câu chuyện của những người nông dân tận tâm và vùng đất màu mỡ.'"
             :data-en="'Discover the rich history of Vietnamese tea, from regional traditions to the delicate art of tea processing. Every tea leaf carries the story of dedicated farmers and fertile lands.'">
            {{ currentLang === 'vi' ? 'Khám phá lịch sử phong phú của trà Việt Nam, từ những truyền thống vùng miền đến nghệ thuật chế biến trà tinh tế. Mỗi lá trà đều mang trong mình câu chuyện của những người nông dân tận tâm và vùng đất màu mỡ.' : 'Discover the rich history of Vietnamese tea, from regional traditions to the delicate art of tea processing. Every tea leaf carries the story of dedicated farmers and fertile lands.' }}
          </p>
          
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-tea-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white text-sm">✓</span>
              </div>
              <div>
                <h4 class="font-semibold text-tea-green mb-2" :data-vi="'Truyền thống vùng miền'" :data-en="'Regional Traditions'">
                  {{ currentLang === 'vi' ? 'Truyền thống vùng miền' : 'Regional Traditions' }}
                </h4>
                <p class="text-gray-600 text-sm" :data-vi="'Thái Nguyên, Mộc Châu và các vùng trà nổi tiếng'" :data-en="'Thai Nguyen, Moc Chau and renowned tea regions'">
                  {{ currentLang === 'vi' ? 'Thái Nguyên, Mộc Châu và các vùng trà nổi tiếng' : 'Thai Nguyen, Moc Chau and renowned tea regions' }}
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-tea-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white text-sm">✓</span>
              </div>
              <div>
                <h4 class="font-semibold text-tea-green mb-2" :data-vi="'Nghệ thuật chế biến'" :data-en="'Processing Artistry'">
                  {{ currentLang === 'vi' ? 'Nghệ thuật chế biến' : 'Processing Artistry' }}
                </h4>
                <p class="text-gray-600 text-sm" :data-vi="'Phương pháp truyền thống được truyền qua nhiều thế hệ'" :data-en="'Traditional methods passed down through generations'">
                  {{ currentLang === 'vi' ? 'Phương pháp truyền thống được truyền qua nhiều thế hệ' : 'Traditional methods passed down through generations' }}
                </p>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-8 h-8 bg-tea-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white text-sm">✓</span>
              </div>
              <div>
                <h4 class="font-semibold text-tea-green mb-2" :data-vi="'Hợp tác trực tiếp'" :data-en="'Direct Partnerships'">
                  {{ currentLang === 'vi' ? 'Hợp tác trực tiếp' : 'Direct Partnerships' }}
                </h4>
                <p class="text-gray-600 text-sm" :data-vi="'Làm việc trực tiếp với nông dân địa phương'" :data-en="'Working directly with local farmers'">
                  {{ currentLang === 'vi' ? 'Làm việc trực tiếp với nông dân địa phương' : 'Working directly with local farmers' }}
                </p>
              </div>
            </div>
          </div>
          
          <div class="mt-8">
            <button class="btn-primary" :data-vi="'Tìm hiểu thêm'" :data-en="'Learn More'">
              {{ currentLang === 'vi' ? 'Tìm hiểu thêm' : 'Learn More' }}
            </button>
          </div>
        </div>
        
        <!-- Visual -->
        <div class="relative">
          <div class="bg-gradient-to-br from-coral to-peach rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                 alt="Vietnamese Tea Heritage" 
                 class="w-full h-full object-cover rounded-2xl">
            <div class="absolute inset-0 bg-gradient-to-br from-coral/60 to-peach/60 flex items-center justify-center rounded-2xl">
              <span class="text-white text-8xl">🏔️</span>
            </div>
            <!-- Floating elements -->
            <div class="absolute top-8 left-8 w-16 h-16 bg-premium-gold rounded-full opacity-20 animate-float"></div>
            <div class="absolute bottom-8 right-8 w-12 h-12 bg-champagne rounded-full opacity-30 animate-float" style="animation-delay: 1s;"></div>
            <div class="absolute top-1/2 left-4 w-8 h-8 bg-white rounded-full opacity-40 animate-float" style="animation-delay: 2s;"></div>
          </div>
          
          <!-- Decorative elements -->
          <div class="absolute -top-4 -right-4 w-24 h-24 bg-premium-gold rounded-full opacity-10"></div>
          <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-coral rounded-full opacity-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, inject } from 'vue'

export default {
  name: 'HeritageSection',
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    
    return {
      currentLang
    }
  }
}
</script>
