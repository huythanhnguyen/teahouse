<template>
  <section class="py-20 bg-light-teal">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fadeInUp">
        <h2 class="heading-lg text-text-dark mb-4">
          {{ currentLang === 'vi' ? 'BLOG TRÀ' : 'TEA BLOG' }}
        </h2>
        <div class="w-16 h-px bg-text-dark mx-auto"></div>
        <p class="text-body mt-6 max-w-2xl mx-auto">
          {{ currentLang === 'vi' 
            ? 'Khám phá những bài viết về trà, sức khỏe và lối sống lành mạnh' 
            : 'Discover articles about tea, health, and healthy lifestyle' }}
        </p>
      </div>
      
      <!-- Blog Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <article v-for="(article, index) in articles" :key="article.id" 
                 :class="`blog-card animate-stagger-${index + 1}`">
          <!-- Article Image -->
          <div class="blog-image">
            <img :src="article.image" 
                 :alt="article.title" 
                 class="w-full h-full object-cover">
          </div>
          
          <!-- Article Content -->
          <div class="p-6">
            <!-- Category Tags -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in article.tags" :key="tag" 
                    class="px-3 py-1 bg-text-dark text-cream-white text-xs font-semibold uppercase tracking-wider">
                {{ tag }}
              </span>
            </div>
            
            <!-- Article Title -->
            <h3 class="heading-sm text-text-dark mb-3 line-clamp-2">
              {{ article.title }}
            </h3>
            
            <!-- Article Description -->
            <p class="text-small text-text-light mb-4 line-clamp-3">
              {{ article.description }}
            </p>
            
            <!-- Article Meta -->
            <div class="flex justify-between items-center text-xs text-text-light mb-4">
              <span>{{ article.readTime }}</span>
              <span>{{ article.date }}</span>
            </div>
            
            <!-- Read More Button -->
            <router-link v-if="article.id === 1" to="/blog/tra-hoa-cuc-tao-do-ky-tu" class="text-text-dark font-semibold hover:text-text-medium transition-colors">
              {{ currentLang === 'vi' ? 'Đọc thêm →' : 'Read More →' }}
            </router-link>
            <button v-else class="text-text-dark font-semibold hover:text-text-medium transition-colors">
              {{ currentLang === 'vi' ? 'Đọc thêm →' : 'Read More →' }}
            </button>
          </div>
        </article>
      </div>
      
      <!-- View All Button -->
      <div class="text-center mt-12 animate-stagger-4">
        <router-link to="/blog" class="btn-secondary smooth-hover">
          {{ currentLang === 'vi' ? 'Xem tất cả bài viết' : 'View All Articles' }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'BlogSection',
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    
    const articles = [
      {
        id: 1,
        title: currentLang.value === 'vi' 
          ? 'Trà Hoa Cúc – Táo Đỏ – Kỷ Tử: Tách Trà Dịu Êm Cho Giấc Ngủ Bình An' 
          : 'Chamomile – Red Date – Goji Berry Tea: A Gentle Cup for Peaceful Sleep',
        description: currentLang.value === 'vi'
          ? 'Có những buổi tối, sau một ngày dài quay cuồng với công việc và màn hình máy tính, ta chỉ muốn tìm một góc thật yên, buông lỏng vai và hít một hơi thật sâu. Giữa nhịp sống hiện đại, đôi khi chỉ cần một bản nhạc êm dịu du dương cùng một tách trà ấm – chỉ vậy thôi cũng làm cho mọi thứ trở nên giản dị nhưng lại chứa đựng cả sự bình yên.'
          : 'There are evenings when, after a long day of spinning with work and computer screens, we just want to find a quiet corner, relax our shoulders and take a deep breath. In the rhythm of modern life, sometimes just a gentle melody and a warm cup of tea - just that alone makes everything simple yet contains all the peace.',
        image: '/images/blog/tra_hoa_cuc_ky_tu_tao_do_co_tac_dung_gi_cach_pha_nhu_the_nao_2_94950fc483.webp',
        tags: currentLang.value === 'vi' ? ['Sức khỏe', 'Giấc ngủ', 'Thảo mộc'] : ['Health', 'Sleep', 'Herbal'],
        readTime: '5 phút đọc',
        date: '4 Tháng 10, 2025'
      },
      {
        id: 2,
        title: currentLang.value === 'vi' 
          ? 'Năm Lý Do Nên Uống Trà Xanh Hàng Ngày' 
          : 'Five Reasons to Drink Green Tea Daily',
        description: currentLang.value === 'vi'
          ? 'Trong tinh thần của tất cả những gì xanh lá cây hôm nay, chúng tôi muốn phân tích một số lợi ích sức khỏe của một trong những loại trà cổ điển nhất - TRÀ XANH!'
          : 'In the spirit of all things green today, we wanted to break down some of the health benefits of one of the most classic teas, GREEN tea (and matcha of course)!',
        image: '/images/blog/thumbnails/gallery-img-2.jpg',
        tags: currentLang.value === 'vi' ? ['Sức khỏe', 'Lối sống'] : ['Healthcare', 'Lifestyle'],
        readTime: '3 phút đọc',
        date: '24 Tháng 5, 2022'
      },
      {
        id: 3,
        title: currentLang.value === 'vi'
          ? '3 Lý Do Chúng Tôi Yêu Thích Trà Yerba Mate'
          : '3 Reasons We Are Obsessed with Yerba Mate Tea',
        description: currentLang.value === 'vi'
          ? 'Trong tinh thần của tất cả những gì xanh lá cây hôm nay, chúng tôi muốn phân tích một số lợi ích sức khỏe của một trong những loại trà cổ điển nhất - TRÀ XANH!'
          : 'In the spirit of all things green today, we wanted to break down some of the health benefits of one of the most classic teas, GREEN tea (and matcha of course)!',
        image: '/images/blog/thumbnails/gallery-img-2.jpg',
        tags: currentLang.value === 'vi' ? ['Sức khỏe'] : ['Healthcare'],
        readTime: '3 phút đọc',
        date: '24 Tháng 5, 2022'
      }
    ]
    
    return {
      currentLang,
      articles
    }
  }
}
</script>

<style scoped>
.blog-card {
  background: var(--cream-white);
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.blog-image {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.blog-image img {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 2;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 3;
}
</style>
