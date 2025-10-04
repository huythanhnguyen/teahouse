<template>
  <div class="min-h-screen bg-cream-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-soft-gray to-cream-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-serif font-bold text-text-dark mb-6">
          {{ currentLang === 'vi' ? 'Blog Trà' : 'Tea Blog' }}
        </h1>
        <p class="text-lg md:text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
          {{ currentLang === 'vi' 
            ? 'Khám phá những bài viết về trà, sức khỏe và lối sống lành mạnh từ các chuyên gia.' 
            : 'Discover articles about tea, health, and healthy lifestyle from our experts.' 
          }}
        </p>
      </div>
    </section>

    <!-- Blog Articles -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <!-- Featured Article -->
        <div class="mb-16">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="grid lg:grid-cols-2 gap-8">
              <div class="relative">
                <img 
                  src="/images/blog/tra_hoa_cuc_ky_tu_tao_do_co_tac_dung_gi_cach_pha_nhu_the_nao_2_94950fc483.webp" 
                  alt="Trà Hoa Cúc - Táo Đỏ - Kỷ Tử"
                  class="w-full h-80 object-cover"
                >
                <div class="absolute top-4 left-4">
                  <span class="bg-text-dark text-cream-white px-3 py-1 text-sm font-semibold uppercase tracking-wider">
                    {{ currentLang === 'vi' ? 'Nổi bật' : 'Featured' }}
                  </span>
                </div>
              </div>
              <div class="p-8">
                <div class="flex flex-wrap gap-2 mb-4">
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
                <h2 class="text-2xl font-serif font-bold text-text-dark mb-4">
                  {{ currentLang === 'vi' 
                    ? 'Trà Hoa Cúc – Táo Đỏ – Kỷ Tử: Tách Trà Dịu Êm Cho Giấc Ngủ Bình An' 
                    : 'Chamomile – Red Date – Goji Berry Tea: A Gentle Cup for Peaceful Sleep' 
                  }}
                </h2>
                <p class="text-text-medium mb-6 leading-relaxed">
                  {{ currentLang === 'vi' 
                    ? 'Có những buổi tối, sau một ngày dài quay cuồng với công việc và màn hình máy tính, ta chỉ muốn tìm một góc thật yên, buông lỏng vai và hít một hơi thật sâu. Giữa nhịp sống hiện đại, đôi khi chỉ cần một bản nhạc êm dịu du dương cùng một tách trà ấm – chỉ vậy thôi cũng làm cho mọi thứ trở nên giản dị nhưng lại chứa đựng cả sự bình yên.' 
                    : 'There are evenings when, after a long day of spinning with work and computer screens, we just want to find a quiet corner, relax our shoulders and take a deep breath. In the rhythm of modern life, sometimes just a gentle melody and a warm cup of tea - just that alone makes everything simple yet contains all the peace.' 
                  }}
                </p>
                <div class="flex justify-between items-center text-sm text-text-light mb-6">
                  <span>{{ currentLang === 'vi' ? '5 phút đọc' : '5 min read' }}</span>
                  <span>{{ currentLang === 'vi' ? '4 Tháng 10, 2025' : 'Oct 4, 2025' }}</span>
                </div>
                <router-link to="/blog/tra-hoa-cuc-tao-do-ky-tu" class="btn-primary">
                  {{ currentLang === 'vi' ? 'Đọc thêm' : 'Read More' }}
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Blog Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="(article, index) in articles" :key="article.id" 
                   class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <!-- Article Image -->
            <div class="relative overflow-hidden">
              <img :src="article.image" 
                   :alt="article.title" 
                   class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
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
              <h3 class="text-lg font-semibold text-text-dark mb-3 line-clamp-2">
                {{ article.title }}
              </h3>
              
              <!-- Article Description -->
              <p class="text-sm text-text-light mb-4 line-clamp-3">
                {{ article.description }}
              </p>
              
              <!-- Article Meta -->
              <div class="flex justify-between items-center text-xs text-text-light mb-4">
                <span>{{ article.readTime }}</span>
                <span>{{ article.date }}</span>
              </div>
              
              <!-- Read More Button -->
              <router-link v-if="article.id === 0" to="/blog/tra-hoa-cuc-tao-do-ky-tu" class="text-text-dark font-semibold hover:text-text-medium transition-colors">
                {{ currentLang === 'vi' ? 'Đọc thêm →' : 'Read More →' }}
              </router-link>
              <button v-else class="text-text-dark font-semibold hover:text-text-medium transition-colors">
                {{ currentLang === 'vi' ? 'Đọc thêm →' : 'Read More →' }}
              </button>
            </div>
          </article>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button class="btn-secondary">
            {{ currentLang === 'vi' ? 'Xem thêm bài viết' : 'Load More Articles' }}
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-20 bg-soft-gray">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-serif font-bold text-text-dark mb-6">
          {{ currentLang === 'vi' ? 'Đăng Ký Nhận Tin' : 'Subscribe to Our Newsletter' }}
        </h2>
        <p class="text-lg text-text-medium mb-8 max-w-2xl mx-auto">
          {{ currentLang === 'vi' 
            ? 'Nhận những bài viết mới nhất về trà và sức khỏe trực tiếp vào hộp thư của bạn.' 
            : 'Get the latest articles about tea and health delivered directly to your inbox.' 
          }}
        </p>
        <div class="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            :placeholder="currentLang === 'vi' ? 'Nhập email của bạn' : 'Enter your email'"
            class="flex-1 px-4 py-3 border border-soft-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-text-dark focus:border-transparent"
          >
          <button class="bg-text-dark text-cream-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
            {{ currentLang === 'vi' ? 'Đăng ký' : 'Subscribe' }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'BlogPage',
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    
    const articles = [
      {
        id: 0,
        title: currentLang.value === 'vi' 
          ? 'Trà Hoa Cúc – Táo Đỏ – Kỷ Tử: Tách Trà Dịu Êm Cho Giấc Ngủ Bình An' 
          : 'Chamomile – Red Date – Goji Berry Tea: A Gentle Cup for Peaceful Sleep',
        description: currentLang.value === 'vi'
          ? 'Có những buổi tối, sau một ngày dài quay cuồng với công việc và màn hình máy tính, ta chỉ muốn tìm một góc thật yên, buông lỏng vai và hít một hơi thật sâu. Giữa nhịp sống hiện đại, đôi khi chỉ cần một bản nhạc êm dịu du dương cùng một tách trà ấm – chỉ vậy thôi cũng làm cho mọi thứ trở nên giản dị nhưng lại chứa đựng cả sự bình yên.'
          : 'There are evenings when, after a long day of spinning with work and computer screens, we just want to find a quiet corner, relax our shoulders and take a deep breath. In the rhythm of modern life, sometimes just a gentle melody and a warm cup of tea - just that alone makes everything simple yet contains all the peace.',
        image: '/images/blog/tra_hoa_cuc_ky_tu_tao_do_co_tac_dung_gi_cach_pha_nhu_the_nao_2_94950fc483.webp',
        tags: currentLang.value === 'vi' ? ['Sức khỏe', 'Giấc ngủ', 'Thảo mộc'] : ['Health', 'Sleep', 'Herbal'],
        readTime: currentLang.value === 'vi' ? '5 phút đọc' : '5 min read',
        date: currentLang.value === 'vi' ? '4 Tháng 10, 2025' : 'Oct 4, 2025'
      },
      {
        id: 1,
        title: currentLang.value === 'vi' 
          ? 'Năm Lý Do Nên Uống Trà Xanh Hàng Ngày' 
          : 'Five Reasons to Drink Green Tea Daily',
        description: currentLang.value === 'vi'
          ? 'Trong tinh thần của tất cả những gì xanh lá cây hôm nay, chúng tôi muốn phân tích một số lợi ích sức khỏe của một trong những loại trà cổ điển nhất - TRÀ XANH!'
          : 'In the spirit of all things green today, we wanted to break down some of the health benefits of one of the most classic teas, GREEN tea (and matcha of course)!',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        tags: currentLang.value === 'vi' ? ['Sức khỏe', 'Lối sống'] : ['Healthcare', 'Lifestyle'],
        readTime: currentLang.value === 'vi' ? '3 phút đọc' : '3 min read',
        date: currentLang.value === 'vi' ? '24 Tháng 5, 2022' : 'May 24, 2022'
      },
      {
        id: 2,
        title: currentLang.value === 'vi'
          ? '3 Lý Do Chúng Tôi Yêu Thích Trà Yerba Mate'
          : '3 Reasons We Are Obsessed with Yerba Mate Tea',
        description: currentLang.value === 'vi'
          ? 'Trong tinh thần của tất cả những gì xanh lá cây hôm nay, chúng tôi muốn phân tích một số lợi ích sức khỏe của một trong những loại trà cổ điển nhất - TRÀ XANH!'
          : 'In the spirit of all things green today, we wanted to break down some of the health benefits of one of the most classic teas, GREEN tea (and matcha of course)!',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        tags: currentLang.value === 'vi' ? ['Sức khỏe'] : ['Healthcare'],
        readTime: currentLang.value === 'vi' ? '3 phút đọc' : '3 min read',
        date: currentLang.value === 'vi' ? '24 Tháng 5, 2022' : 'May 24, 2022'
      },
      {
        id: 3,
        title: currentLang.value === 'vi'
          ? 'Cách Trà Có Thể Giúp Bạn Giữ Động Lực Trong Mùa Đông'
          : 'How Tea Can Help You Stay Motivated This Winter',
        description: currentLang.value === 'vi'
          ? 'Thời gian trôi qua thật nhanh khi mùa đông giờ chỉ còn vài tuần nữa. Và chắc chắn, hầu hết mọi người đều háo hức về những kỳ nghỉ sắp tới.'
          : 'Time is really flying by fast as the winter season is now just a few weeks away. And certainly, almost everyone is excited about the upcoming holiday.',
        image: 'https://images.unsplash.com/photo-1594736797933-d0c29b8d0b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        tags: currentLang.value === 'vi' ? ['Công thức'] : ['Recipe'],
        readTime: currentLang.value === 'vi' ? '3 phút đọc' : '3 min read',
        date: currentLang.value === 'vi' ? '24 Tháng 5, 2022' : 'May 24, 2022'
      },
      {
        id: 4,
        title: currentLang.value === 'vi'
          ? 'Nghệ Thuật Pha Trà Truyền Thống Việt Nam'
          : 'Traditional Vietnamese Tea Brewing Art',
        description: currentLang.value === 'vi'
          ? 'Khám phá những bí quyết pha trà truyền thống được truyền từ thế hệ này sang thế hệ khác trong các gia đình Việt Nam.'
          : 'Discover traditional tea brewing secrets passed down from generation to generation in Vietnamese families.',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        tags: currentLang.value === 'vi' ? ['Truyền thống', 'Văn hóa'] : ['Tradition', 'Culture'],
        readTime: currentLang.value === 'vi' ? '5 phút đọc' : '5 min read',
        date: currentLang.value === 'vi' ? '20 Tháng 5, 2022' : 'May 20, 2022'
      },
      {
        id: 5,
        title: currentLang.value === 'vi'
          ? 'Trà Hoa Cúc: Thần Dược Tự Nhiên Cho Giấc Ngủ'
          : 'Chamomile Tea: Natural Sleep Remedy',
        description: currentLang.value === 'vi'
          ? 'Tìm hiểu về những lợi ích tuyệt vời của trà hoa cúc trong việc cải thiện chất lượng giấc ngủ và giảm căng thẳng.'
          : 'Learn about the amazing benefits of chamomile tea in improving sleep quality and reducing stress.',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        tags: currentLang.value === 'vi' ? ['Sức khỏe', 'Giấc ngủ'] : ['Health', 'Sleep'],
        readTime: currentLang.value === 'vi' ? '4 phút đọc' : '4 min read',
        date: currentLang.value === 'vi' ? '18 Tháng 5, 2022' : 'May 18, 2022'
      },
      {
        id: 6,
        title: currentLang.value === 'vi'
          ? 'Trà Gừng: Vị Thuốc Tự Nhiên Cho Hệ Tiêu Hóa'
          : 'Ginger Tea: Natural Digestive Remedy',
        description: currentLang.value === 'vi'
          ? 'Khám phá công dụng của trà gừng trong việc hỗ trợ tiêu hóa và tăng cường hệ miễn dịch tự nhiên.'
          : 'Discover the benefits of ginger tea in supporting digestion and boosting natural immunity.',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        tags: currentLang.value === 'vi' ? ['Sức khỏe', 'Tiêu hóa'] : ['Health', 'Digestion'],
        readTime: currentLang.value === 'vi' ? '4 phút đọc' : '4 min read',
        date: currentLang.value === 'vi' ? '16 Tháng 5, 2022' : 'May 16, 2022'
      }
    ]
    
    return {
      currentLang,
      articles
    }
  },
  mounted() {
    document.title = 'Blog Trà - Vietnamese Tea Heritage'
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

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-clamp: 3;
}
</style>
