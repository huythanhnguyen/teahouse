<template>
  <section id="wellness" class="section-padding bg-warm-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="heading-lg text-gradient mb-6" :data-vi="'TRÀ DƯỠNG NHAN'" :data-en="'WELLNESS ESSENTIALS'">
          {{ currentLang === 'vi' ? 'TRÀ DƯỠNG NHAN' : 'WELLNESS ESSENTIALS' }}
        </h2>
        <div class="w-24 h-0.5 bg-premium-gold mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto" 
           :data-vi="'Chăm sóc sức khỏe và sắc đẹp từ thiên nhiên với các loại trà hoa và thảo mộc quý giá'"
           :data-en="'Nurturing health and beauty naturally with precious flower teas and herbal blends'">
          {{ currentLang === 'vi' ? 'Chăm sóc sức khỏe và sắc đẹp từ thiên nhiên với các loại trà hoa và thảo mộc quý giá' : 'Nurturing health and beauty naturally with precious flower teas and herbal blends' }}
        </p>
      </div>
      
      <!-- Wellness Tea Categories -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Sleep Tea -->
        <div class="product-card group">
          <div class="product-image bg-gradient-to-br from-indigo-600 to-purple-600 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Sleep Flower Tea" 
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-600/60 to-purple-600/60 flex items-center justify-center">
              <span class="text-white text-6xl">🌙</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="heading-md mb-3 text-tea-green" :data-vi="'Trà Hoa Ngủ Ngon'" :data-en="'Sleep Flower Tea'">
              {{ currentLang === 'vi' ? 'Trà Hoa Ngủ Ngon' : 'Sleep Flower Tea' }}
            </h3>
            <p class="text-gray-600 mb-4" 
               :data-vi="'Hỗn hợp hoa cúc, hoa nhài và hoa oải hương giúp thư giãn tinh thần và cải thiện chất lượng giấc ngủ'"
               :data-en="'Blend of chrysanthemum, jasmine and lavender flowers to relax the mind and improve sleep quality'">
              {{ currentLang === 'vi' ? 'Hỗn hợp hoa cúc, hoa nhài và hoa oải hương giúp thư giãn tinh thần và cải thiện chất lượng giấc ngủ' : 'Blend of chrysanthemum, jasmine and lavender flowers to relax the mind and improve sleep quality' }}
            </p>
            <div class="flex justify-between items-center">
              <span class="text-premium-gold font-bold text-lg">$28</span>
              <router-link to="/tra-hoa-ngu-ngon" class="btn-primary text-sm px-4 py-2" :data-vi="'Xem chi tiết'" :data-en="'View Details'">
                {{ currentLang === 'vi' ? 'Xem chi tiết' : 'View Details' }}
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Beauty Tea -->
        <div class="product-card group">
          <div class="product-image bg-gradient-to-br from-pink-400 to-rose-500 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1594736797933-d0c29b8d0b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Beauty Tea" 
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-400/60 to-rose-500/60 flex items-center justify-center">
              <span class="text-white text-6xl">🌸</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="heading-md mb-3 text-tea-green" :data-vi="'Trà Dưỡng Nhan'" :data-en="'Beauty Tea'">
              {{ currentLang === 'vi' ? 'Trà Dưỡng Nhan' : 'Beauty Tea' }}
            </h3>
            <p class="text-gray-600 mb-4" 
               :data-vi="'Trà hoa hồng, hoa đậu biếc và collagen tự nhiên giúp làm đẹp da từ bên trong'"
               :data-en="'Rose tea, butterfly pea flower and natural collagen to beautify skin from within'">
              {{ currentLang === 'vi' ? 'Trà hoa hồng, hoa đậu biếc và collagen tự nhiên giúp làm đẹp da từ bên trong' : 'Rose tea, butterfly pea flower and natural collagen to beautify skin from within' }}
            </p>
            <div class="flex justify-between items-center">
              <span class="text-premium-gold font-bold text-lg">$32</span>
              <router-link to="/tra-hoa-duong-nhan" class="btn-primary text-sm px-4 py-2" :data-vi="'Xem chi tiết'" :data-en="'View Details'">
                {{ currentLang === 'vi' ? 'Xem chi tiết' : 'View Details' }}
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Ginger Digestive Tea -->
        <div class="product-card group">
          <div class="product-image bg-gradient-to-br from-orange-500 to-red-500 relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                 alt="Ginger Tea" 
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-br from-orange-500/60 to-red-500/60 flex items-center justify-center">
              <span class="text-white text-6xl">🫚</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="heading-md mb-3 text-tea-green" :data-vi="'Trà Gừng Tiêu Hóa'" :data-en="'Ginger Digestive Tea'">
              {{ currentLang === 'vi' ? 'Trà Gừng Tiêu Hóa' : 'Ginger Digestive Tea' }}
            </h3>
            <p class="text-gray-600 mb-4" 
               :data-vi="'Gừng tươi, nghệ vàng và bạc hà giúp hỗ trợ tiêu hóa và giảm đầy hơi'"
               :data-en="'Fresh ginger, turmeric and mint to support digestion and reduce bloating'">
              {{ currentLang === 'vi' ? 'Gừng tươi, nghệ vàng và bạc hà giúp hỗ trợ tiêu hóa và giảm đầy hơi' : 'Fresh ginger, turmeric and mint to support digestion and reduce bloating' }}
            </p>
            <div class="flex justify-between items-center">
              <span class="text-premium-gold font-bold text-lg">$24</span>
              <router-link to="/tra-gung-tieu-hoa" class="btn-primary text-sm px-4 py-2" :data-vi="'Xem chi tiết'" :data-en="'View Details'">
                {{ currentLang === 'vi' ? 'Xem chi tiết' : 'View Details' }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Wellness Benefits -->
      <div class="bg-gradient-to-r from-coral to-peach rounded-2xl p-8 text-white">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-premium-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-tea-green text-2xl">😴</span>
            </div>
            <h4 class="font-semibold mb-2" :data-vi="'Cải thiện giấc ngủ'" :data-en="'Better Sleep'">
              {{ currentLang === 'vi' ? 'Cải thiện giấc ngủ' : 'Better Sleep' }}
            </h4>
            <p class="text-sm opacity-90" :data-vi="'Thư giãn tinh thần và cải thiện chất lượng giấc ngủ'" :data-en="'Relax the mind and improve sleep quality'">
              {{ currentLang === 'vi' ? 'Thư giãn tinh thần và cải thiện chất lượng giấc ngủ' : 'Relax the mind and improve sleep quality' }}
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-premium-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-tea-green text-2xl">✨</span>
            </div>
            <h4 class="font-semibold mb-2" :data-vi="'Làm đẹp da'" :data-en="'Beautiful Skin'">
              {{ currentLang === 'vi' ? 'Làm đẹp da' : 'Beautiful Skin' }}
            </h4>
            <p class="text-sm opacity-90" :data-vi="'Chống lão hóa và nuôi dưỡng da từ bên trong'" :data-en="'Anti-aging and nourish skin from within'">
              {{ currentLang === 'vi' ? 'Chống lão hóa và nuôi dưỡng da từ bên trong' : 'Anti-aging and nourish skin from within' }}
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-premium-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-tea-green text-2xl">🌿</span>
            </div>
            <h4 class="font-semibold mb-2" :data-vi="'Hỗ trợ tiêu hóa'" :data-en="'Digestive Support'">
              {{ currentLang === 'vi' ? 'Hỗ trợ tiêu hóa' : 'Digestive Support' }}
            </h4>
            <p class="text-sm opacity-90" :data-vi="'Cải thiện tiêu hóa và giảm đầy hơi'" :data-en="'Improve digestion and reduce bloating'">
              {{ currentLang === 'vi' ? 'Cải thiện tiêu hóa và giảm đầy hơi' : 'Improve digestion and reduce bloating' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, inject } from 'vue'

export default {
  name: 'WellnessSection',
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    
    return {
      currentLang
    }
  }
}
</script>
