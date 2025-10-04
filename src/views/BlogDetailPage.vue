<template>
  <div class="min-h-screen bg-cream-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-soft-gray to-cream-white py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <!-- Back Button -->
          <router-link to="/blog" class="inline-flex items-center text-text-medium hover:text-text-dark transition-colors mb-8">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            {{ currentLang === 'vi' ? 'Quay lại Blog' : 'Back to Blog' }}
          </router-link>
          
          <!-- Article Header -->
          <div class="text-center mb-12">
            <div class="flex flex-wrap justify-center gap-2 mb-6">
              <span class="px-3 py-1 bg-text-dark text-cream-white text-xs font-semibold uppercase tracking-wider">
                {{ currentLang === 'vi' ? 'Sức khỏe' : 'Health' }}
              </span>
              <span class="px-3 py-1 bg-text-dark text-cream-white text-xs font-semibold uppercase tracking-wider">
                {{ currentLang === 'vi' ? 'Giấc ngủ' : 'Sleep' }}
              </span>
              <span class="px-3 py-1 bg-text-dark text-cream-white text-xs font-semibold uppercase tracking-wider">
                {{ currentLang === 'vi' ? 'Thảo mộc' : 'Herbal' }}
              </span>
            </div>
            
            <h1 class="text-3xl md:text-5xl font-serif font-bold text-text-dark mb-6 leading-tight">
              {{ currentLang === 'vi' 
                ? 'Trà Hoa Cúc – Táo Đỏ – Kỷ Tử: Tách Trà Dịu Êm Cho Giấc Ngủ Bình An' 
                : 'Chamomile – Red Date – Goji Berry Tea: A Gentle Cup for Peaceful Sleep' 
              }}
            </h1>
            
            <div class="flex justify-center items-center text-sm text-text-light">
              <span class="mr-4">{{ currentLang === 'vi' ? '5 phút đọc' : '5 min read' }}</span>
              <span>{{ currentLang === 'vi' ? '26 Tháng 12, 2024' : 'Dec 26, 2024' }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <article class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <!-- Featured Image -->
          <div class="mb-12">
            <img 
              src="/images/blog/tra_hoa_cuc_ky_tu_tao_do_co_tac_dung_gi_cach_pha_nhu_the_nao_2_94950fc483.webp" 
              alt="Trà Hoa Cúc - Táo Đỏ - Kỷ Tử"
              class="w-full h-96 object-cover rounded-lg shadow-lg"
            >
          </div>

          <!-- Article Body -->
          <div class="prose prose-lg max-w-none">
            <div class="space-y-8 text-text-dark leading-relaxed">
              
              <!-- Introduction -->
              <div class="text-lg">
                <p>Có những buổi tối, sau một ngày dài quay cuồng với công việc và màn hình máy tính, ta chỉ muốn tìm một góc thật yên, buông lỏng vai và hít một hơi thật sâu.</p>
                <p>Giữa nhịp sống hiện đại, đôi khi chỉ cần một bản nhạc êm dịu du dương cùng một tách trà ấm – chỉ vậy thôi cũng làm cho mọi thứ trở nên giản dị nhưng lại chứa đựng cả sự bình yên.</p>
                <p>Và trong thế giới của vô vàn loại trà, trà hoa cúc kết hợp táo đỏ và kỷ tử dường như là món quà dành riêng cho những ai đang tìm kiếm sự nhẹ nhõm trong tâm trí.</p>
              </div>

              <!-- Section 1 -->
              <div>
                <h2 class="text-2xl font-serif font-bold text-text-dark mb-6">✨ Bộ ba hương vị của sự an yên</h2>
                
                <!-- Ingredients Image -->
                <div class="mb-8">
                  <img 
                    src="/images/blog/chamomile-tea/ingredients.png" 
                    alt="Nguyên liệu trà hoa cúc - táo đỏ - kỷ tử"
                    class="w-full h-64 object-cover rounded-lg shadow-md"
                  >
                </div>
                
                <p>Nếu hoa cúc là sự dịu dàng của thiên nhiên, thì táo đỏ là vị ngọt của yêu thương, còn kỷ tử là dấu chấm đỏ của sức sống.</p>
                <p>Ba nguyên liệu ấy khi hòa quyện vào nhau, tạo nên thứ hương vị vừa thanh khiết, vừa ấm áp – như một lời vỗ về nhẹ nhàng gửi đến cơ thể mệt mỏi.</p>
                
                <ul class="list-none space-y-4 my-6">
                  <li class="flex items-start">
                    <span class="text-2xl mr-3">🌼</span>
                    <div>
                      <strong>Hoa cúc</strong> - giúp thanh nhiệt, giảm căng thẳng, xoa dịu tinh thần sau ngày dài.
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="text-2xl mr-3">🍎</span>
                    <div>
                      <strong>Táo đỏ</strong> – vị ngọt tự nhiên, hỗ trợ bổ máu, tăng đề kháng, cho làn da sáng khỏe.
                    </div>
                  </li>
                  <li class="flex items-start">
                    <span class="text-2xl mr-3">🔴</span>
                    <div>
                      <strong>Kỷ tử Ninh Hạ</strong> – "viên ngọc nhỏ" giàu vitamin, tốt cho mắt và làm chậm quá trình lão hóa.
                    </div>
                  </li>
                </ul>
                
                <p>Không cầu kỳ, không phô trương – chỉ là ba nguyên liệu thân thuộc, nhưng lại đủ sức mang đến cảm giác yên bình mà ta vẫn kiếm tìm mỗi khi đêm về.</p>
              </div>

              <!-- Section 2 -->
              <div>
                <h2 class="text-2xl font-serif font-bold text-text-dark mb-6">🌸 Pha trà – một nghi thức chậm rãi</h2>
                <p>Một ấm trà ngon không đòi hỏi sự cầu kỳ. Chỉ cần một chút tinh tế và tấm lòng muốn chăm sóc bản thân là đủ.</p>
                
                <!-- Brewing Image -->
                <div class="mb-8">
                  <img 
                    src="/images/blog/chamomile-tea/brewing.png" 
                    alt="Cách pha trà hoa cúc - táo đỏ - kỷ tử"
                    class="w-full h-64 object-cover rounded-lg shadow-md"
                  >
                </div>
                
                <ol class="list-decimal list-inside space-y-3 my-6 bg-light-teal p-6 rounded-lg">
                  <li>Tráng sơ nguyên liệu với nước sôi để làm sạch và "đánh thức" hương thơm.</li>
                  <li>Thêm 500ml nước nóng < 90°C, đậy nắp và ủ khoảng 3–5 phút.</li>
                  <li>Thưởng trà khi còn ấm.</li>
                </ol>
                
                <p>Mỗi ngụm trà là sự hòa quyện tinh tế giữa vị thanh của hoa cúc, vị ngọt nhẹ của táo đỏ và hậu vị mềm của kỷ tử.</p>
                <p>Bạn có thể châm thêm nước 2–3 lần, trà vẫn dịu hương, mỗi lần uống lại thấy vị khác – giống như cảm xúc ta dần lắng lại, càng nhẹ nhõm, càng yên hơn.</p>
              </div>

              <!-- Section 3 -->
              <div>
                <h2 class="text-2xl font-serif font-bold text-text-dark mb-6">🌙 Tách trà cho giấc ngủ êm</h2>
                <p>Trà hoa cúc – táo đỏ – kỷ tử không chứa caffeine, giúp cơ thể thư giãn mà không lo mất ngủ.</p>
                <p>Hoa cúc hỗ trợ điều hòa giấc ngủ tự nhiên, trong khi táo đỏ và kỷ tử cung cấp dưỡng chất tốt cho mắt, giảm khô mỏi và giúp da sáng mịn hơn.</p>
                <p>Thưởng trà trước giờ ngủ 30 phút, tắt điện thoại, nghe một bản nhạc nhẹ – đó có lẽ là công thức giản dị nhất cho một giấc ngủ sâu và một tâm hồn được nạp lại năng lượng.</p>
              </div>

              <!-- Section 4 -->
              <div>
                <h2 class="text-2xl font-serif font-bold text-text-dark mb-6">💛 Khi uống trà là một cách yêu mình</h2>
                <p>Giữa bộn bề của những ngày mệt mỏi, đôi khi một tách trà ấm chính là "khoảng dừng" ta cần nhất.</p>
                <p>Không cần lý do, không cần kế hoạch – chỉ là dành vài phút để ngồi yên, để hít vào hương hoa cúc, thở ra những lo âu, và cảm nhận nhịp sống chậm lại trong từng giọt trà.</p>
                <p>Uống trà, không chỉ là thưởng thức vị ngon – mà là một cách sống tử tế hơn với chính mình.</p>
                <p>Một tách trà, một buổi tối yên, một giấc ngủ ngon — đôi khi hạnh phúc chỉ giản dị đến thế thôi.</p>
              </div>

              <!-- Conclusion -->
              <div class="bg-soft-gray p-8 rounded-lg">
                <p class="text-lg font-medium mb-4">🌿 Trà hoa cúc – táo đỏ – kỷ tử không phải là bí quyết mới, mà là cách mà người xưa đã chọn để chăm sóc thân tâm bằng những điều tự nhiên nhất.</p>
                <p class="text-lg">Còn bạn, tối nay, đã pha cho mình một tách trà chưa? 🍵</p>
              </div>
            </div>
          </div>

          <!-- Related Articles -->
          <div class="mt-16 pt-12 border-t border-soft-gray">
            <h3 class="text-2xl font-serif font-bold text-text-dark mb-8 text-center">
              {{ currentLang === 'vi' ? 'Bài viết liên quan' : 'Related Articles' }}
            </h3>
            <div class="grid md:grid-cols-2 gap-8">
              <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                       alt="Trà Xanh" 
                       class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
                </div>
                <div class="p-6">
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="px-3 py-1 bg-text-dark text-cream-white text-xs font-semibold uppercase tracking-wider">
                      {{ currentLang === 'vi' ? 'Sức khỏe' : 'Health' }}
                    </span>
                  </div>
                  <h4 class="text-lg font-semibold text-text-dark mb-3">
                    {{ currentLang === 'vi' ? 'Năm Lý Do Nên Uống Trà Xanh Hàng Ngày' : 'Five Reasons to Drink Green Tea Daily' }}
                  </h4>
                  <p class="text-sm text-text-light mb-4">
                    {{ currentLang === 'vi' ? 'Trong tinh thần của tất cả những gì xanh lá cây hôm nay...' : 'In the spirit of all things green today...' }}
                  </p>
                  <div class="flex justify-between items-center text-xs text-text-light">
                    <span>{{ currentLang === 'vi' ? '3 phút đọc' : '3 min read' }}</span>
                    <span>{{ currentLang === 'vi' ? '24 Tháng 5, 2022' : 'May 24, 2022' }}</span>
                  </div>
                </div>
              </article>
              
              <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                       alt="Trà Gừng" 
                       class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
                </div>
                <div class="p-6">
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="px-3 py-1 bg-text-dark text-cream-white text-xs font-semibold uppercase tracking-wider">
                      {{ currentLang === 'vi' ? 'Sức khỏe' : 'Health' }}
                    </span>
                  </div>
                  <h4 class="text-lg font-semibold text-text-dark mb-3">
                    {{ currentLang === 'vi' ? 'Trà Gừng: Vị Thuốc Tự Nhiên Cho Hệ Tiêu Hóa' : 'Ginger Tea: Natural Digestive Remedy' }}
                  </h4>
                  <p class="text-sm text-text-light mb-4">
                    {{ currentLang === 'vi' ? 'Khám phá công dụng của trà gừng trong việc hỗ trợ tiêu hóa...' : 'Discover the benefits of ginger tea in supporting digestion...' }}
                  </p>
                  <div class="flex justify-between items-center text-xs text-text-light">
                    <span>{{ currentLang === 'vi' ? '4 phút đọc' : '4 min read' }}</span>
                    <span>{{ currentLang === 'vi' ? '16 Tháng 5, 2022' : 'May 16, 2022' }}</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'BlogDetailPage',
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    
    return {
      currentLang
    }
  },
  mounted() {
    document.title = 'Trà Hoa Cúc – Táo Đỏ – Kỷ Tử - Vietnamese Tea Heritage'
  }
}
</script>

<style scoped>
.prose {
  color: inherit;
}

.prose h2 {
  color: var(--text-dark);
  font-weight: 700;
}

.prose p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.prose ul, .prose ol {
  margin: 1.5rem 0;
}

.prose li {
  margin-bottom: 0.5rem;
}
</style>
