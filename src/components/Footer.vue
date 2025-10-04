<template>
  <footer class="bg-tea-green text-white py-16">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8 mb-12">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-12 h-12 bg-premium-gold rounded-full flex items-center justify-center">
              <span class="text-tea-green font-bold text-xl">T</span>
            </div>
            <h3 class="text-2xl font-serif font-bold">Trà Việt Nam</h3>
          </div>
          <p class="text-gray-300 mb-6 max-w-md" 
             :data-vi="'Nâng cao trải nghiệm của những nghi lễ hàng ngày với trà cao cấp từ Việt Nam'"
             :data-en="'Elevating the experience of everyday rituals with premium teas from Vietnam'">
            {{ currentLang === 'vi' ? 'Nâng cao trải nghiệm của những nghi lễ hàng ngày với trà cao cấp từ Việt Nam' : 'Elevating the experience of everyday rituals with premium teas from Vietnam' }}
          </p>
          
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-premium-gold rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors">
              <span class="text-tea-green font-bold">f</span>
            </a>
            <a href="#" class="w-10 h-10 bg-premium-gold rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors">
              <span class="text-tea-green font-bold">i</span>
            </a>
            <a href="#" class="w-10 h-10 bg-premium-gold rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors">
              <span class="text-tea-green font-bold">t</span>
            </a>
            <a href="#" class="w-10 h-10 bg-premium-gold rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors">
              <span class="text-tea-green font-bold">p</span>
            </a>
          </div>
        </div>
        
        <!-- Products -->
        <div>
          <h4 class="font-semibold mb-6" :data-vi="'Sản phẩm'" :data-en="'Products'">
            {{ currentLang === 'vi' ? 'Sản phẩm' : 'Products' }}
          </h4>
          <ul class="space-y-3 text-gray-300">
            <li><a href="#" class="hover:text-premium-gold transition-colors" :data-vi="'Trà dưỡng nhan'" :data-en="'Wellness Teas'">
              {{ currentLang === 'vi' ? 'Trà dưỡng nhan' : 'Wellness Teas' }}
            </a></li>
            <li><a href="#" class="hover:text-premium-gold transition-colors" :data-vi="'Trà đặc sản'" :data-en="'Specialty Teas'">
              {{ currentLang === 'vi' ? 'Trà đặc sản' : 'Specialty Teas' }}
            </a></li>
            <li><a href="#" class="hover:text-premium-gold transition-colors" :data-vi="'Trà hoa'" :data-en="'Flower Teas'">
              {{ currentLang === 'vi' ? 'Trà hoa' : 'Flower Teas' }}
            </a></li>
            <li><a href="#" class="hover:text-premium-gold transition-colors" :data-vi="'Phụ kiện'" :data-en="'Accessories'">
              {{ currentLang === 'vi' ? 'Phụ kiện' : 'Accessories' }}
            </a></li>
          </ul>
        </div>
        
        <!-- Support -->
        <div>
          <h4 class="font-semibold mb-6" :data-vi="'Hỗ trợ'" :data-en="'Support'">
            {{ currentLang === 'vi' ? 'Hỗ trợ' : 'Support' }}
          </h4>
          <ul class="space-y-3 text-gray-300">
            <li><a href="#" class="hover:text-premium-gold transition-colors" :data-vi="'Hướng dẫn pha trà'" :data-en="'Brewing Guide'">
              {{ currentLang === 'vi' ? 'Hướng dẫn pha trà' : 'Brewing Guide' }}
            </a></li>
            <li><a href="#" class="hover:text-premium-gold transition-colors" :data-vi="'Công thức'" :data-en="'Recipes'">
              {{ currentLang === 'vi' ? 'Công thức' : 'Recipes' }}
            </a></li>
            <li><a href="#" class="hover:text-premium-gold transition-colors" :data-vi="'Liên hệ'" :data-en="'Contact'">
              {{ currentLang === 'vi' ? 'Liên hệ' : 'Contact' }}
            </a></li>
            <li><a href="#" class="hover:text-premium-gold transition-colors" :data-vi="'FAQ'" :data-en="'FAQ'">
              {{ currentLang === 'vi' ? 'FAQ' : 'FAQ' }}
            </a></li>
          </ul>
        </div>
      </div>
      
      <!-- Newsletter -->
      <div class="border-t border-gray-600 pt-8 mb-8">
        <div class="max-w-md mx-auto text-center">
          <h4 class="font-semibold mb-4" :data-vi="'Đăng ký nhận tin'" :data-en="'Newsletter'">
            {{ currentLang === 'vi' ? 'Đăng ký nhận tin' : 'Newsletter' }}
          </h4>
          <p class="text-gray-300 text-sm mb-6" 
             :data-vi="'Nhận cập nhật, ưu đãi đặc biệt, công thức và nhiều hơn nữa từ atelier của chúng tôi'"
             :data-en="'Sign up and enjoy updates, special offers, recipes and more from our atelier'">
            {{ currentLang === 'vi' ? 'Nhận cập nhật, ưu đãi đặc biệt, công thức và nhiều hơn nữa từ atelier của chúng tôi' : 'Sign up and enjoy updates, special offers, recipes and more from our atelier' }}
          </p>
          <div class="flex">
            <input type="email" 
                   :placeholder="currentLang === 'vi' ? 'Nhập email của bạn' : 'Enter your email'"
                   class="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-premium-gold">
            <button class="bg-premium-gold text-tea-green px-6 py-2 rounded-r-lg font-semibold hover:bg-opacity-90 transition-colors">
              {{ currentLang === 'vi' ? 'Đăng ký' : 'Subscribe' }}
            </button>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="border-t border-gray-600 pt-8 text-center text-gray-300">
        <p :data-vi="'© 2024 Trà Việt Nam. Tất cả quyền được bảo lưu.'" :data-en="'© 2024 Vietnamese Tea Heritage. All rights reserved.'">
          {{ currentLang === 'vi' ? '© 2024 Trà Việt Nam. Tất cả quyền được bảo lưu.' : '© 2024 Vietnamese Tea Heritage. All rights reserved.' }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref, inject } from 'vue'

export default {
  name: 'Footer',
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    
    return {
      currentLang
    }
  }
}
</script>


