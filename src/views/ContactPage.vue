<template>
  <div class="min-h-screen bg-cream-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-soft-gray to-cream-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-serif font-bold text-text-dark mb-6">
          {{ currentLang === 'vi' ? 'Liên Hệ' : 'Contact Us' }}
        </h1>
        <p class="text-lg md:text-xl text-text-medium max-w-3xl mx-auto leading-relaxed">
          {{ currentLang === 'vi' 
            ? 'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi để được tư vấn tốt nhất.' 
            : 'We are always ready to listen and support you. Contact us for the best consultation.' 
          }}
        </p>
      </div>
    </section>

    <!-- Contact Info Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-serif font-bold text-text-dark mb-8">
              {{ currentLang === 'vi' ? 'Gửi Tin Nhắn' : 'Send Message' }}
            </h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-text-dark font-medium mb-2">
                    {{ currentLang === 'vi' ? 'Họ và tên' : 'Full Name' }}
                  </label>
                  <input 
                    type="text" 
                    v-model="form.name"
                    class="w-full px-4 py-3 border border-soft-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-text-dark focus:border-transparent"
                    :placeholder="currentLang === 'vi' ? 'Nhập họ và tên' : 'Enter your full name'"
                    required
                  >
                </div>
                <div>
                  <label class="block text-text-dark font-medium mb-2">
                    {{ currentLang === 'vi' ? 'Email' : 'Email' }}
                  </label>
                  <input 
                    type="email" 
                    v-model="form.email"
                    class="w-full px-4 py-3 border border-soft-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-text-dark focus:border-transparent"
                    :placeholder="currentLang === 'vi' ? 'Nhập email' : 'Enter your email'"
                    required
                  >
                </div>
              </div>
              <div>
                <label class="block text-text-dark font-medium mb-2">
                  {{ currentLang === 'vi' ? 'Số điện thoại' : 'Phone Number' }}
                </label>
                <input 
                  type="tel" 
                  v-model="form.phone"
                  class="w-full px-4 py-3 border border-soft-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-text-dark focus:border-transparent"
                  :placeholder="currentLang === 'vi' ? 'Nhập số điện thoại' : 'Enter your phone number'"
                >
              </div>
              <div>
                <label class="block text-text-dark font-medium mb-2">
                  {{ currentLang === 'vi' ? 'Chủ đề' : 'Subject' }}
                </label>
                <select 
                  v-model="form.subject"
                  class="w-full px-4 py-3 border border-soft-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-text-dark focus:border-transparent"
                >
                  <option value="">{{ currentLang === 'vi' ? 'Chọn chủ đề' : 'Select subject' }}</option>
                  <option value="product">{{ currentLang === 'vi' ? 'Tư vấn sản phẩm' : 'Product Consultation' }}</option>
                  <option value="order">{{ currentLang === 'vi' ? 'Đặt hàng' : 'Order' }}</option>
                  <option value="support">{{ currentLang === 'vi' ? 'Hỗ trợ kỹ thuật' : 'Technical Support' }}</option>
                  <option value="partnership">{{ currentLang === 'vi' ? 'Hợp tác' : 'Partnership' }}</option>
                  <option value="other">{{ currentLang === 'vi' ? 'Khác' : 'Other' }}</option>
                </select>
              </div>
              <div>
                <label class="block text-text-dark font-medium mb-2">
                  {{ currentLang === 'vi' ? 'Tin nhắn' : 'Message' }}
                </label>
                <textarea 
                  v-model="form.message"
                  rows="5"
                  class="w-full px-4 py-3 border border-soft-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-text-dark focus:border-transparent resize-none"
                  :placeholder="currentLang === 'vi' ? 'Nhập tin nhắn của bạn...' : 'Enter your message...'"
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                class="w-full bg-text-dark text-cream-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                {{ currentLang === 'vi' ? 'Gửi Tin Nhắn' : 'Send Message' }}
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-serif font-bold text-text-dark mb-8">
              {{ currentLang === 'vi' ? 'Thông Tin Liên Hệ' : 'Contact Information' }}
            </h2>
            <div class="space-y-8">
              <!-- Address -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-text-dark rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-cream-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-text-dark mb-2">
                    {{ currentLang === 'vi' ? 'Địa chỉ' : 'Address' }}
                  </h3>
                  <p class="text-text-medium">
                    {{ currentLang === 'vi' 
                      ? '123 Đường Trà Hoa, Quận 1, TP. Hồ Chí Minh, Việt Nam' 
                      : '123 Tea Flower Street, District 1, Ho Chi Minh City, Vietnam' 
                    }}
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-text-dark rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-cream-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-text-dark mb-2">
                    {{ currentLang === 'vi' ? 'Điện thoại' : 'Phone' }}
                  </h3>
                  <p class="text-text-medium">+84 28 1234 5678</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-text-dark rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-cream-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-text-dark mb-2">
                    {{ currentLang === 'vi' ? 'Email' : 'Email' }}
                  </h3>
                  <p class="text-text-medium">info@teahouse.vn</p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-text-dark rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-cream-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-text-dark mb-2">
                    {{ currentLang === 'vi' ? 'Giờ làm việc' : 'Business Hours' }}
                  </h3>
                  <div class="text-text-medium space-y-1">
                    <p>{{ currentLang === 'vi' ? 'Thứ 2 - Thứ 6: 8:00 - 18:00' : 'Monday - Friday: 8:00 - 18:00' }}</p>
                    <p>{{ currentLang === 'vi' ? 'Thứ 7: 9:00 - 17:00' : 'Saturday: 9:00 - 17:00' }}</p>
                    <p>{{ currentLang === 'vi' ? 'Chủ nhật: Nghỉ' : 'Sunday: Closed' }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-soft-gray">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-serif font-bold text-text-dark text-center mb-12">
          {{ currentLang === 'vi' ? 'Vị Trí Cửa Hàng' : 'Store Location' }}
        </h2>
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
          <div class="h-96 bg-gray-200 flex items-center justify-center">
            <div class="text-center text-text-medium">
              <svg class="w-16 h-16 mx-auto mb-4 text-text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <p>{{ currentLang === 'vi' ? 'Bản đồ sẽ được tích hợp ở đây' : 'Map will be integrated here' }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'ContactPage',
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    const form = ref({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })

    const submitForm = () => {
      // Handle form submission
      console.log('Form submitted:', form.value)
      alert(currentLang.value === 'vi' ? 'Tin nhắn đã được gửi thành công!' : 'Message sent successfully!')
      
      // Reset form
      form.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }

    return {
      currentLang,
      form,
      submitForm
    }
  },
  mounted() {
    document.title = 'Liên Hệ - Vietnamese Tea Heritage'
  }
}
</script>