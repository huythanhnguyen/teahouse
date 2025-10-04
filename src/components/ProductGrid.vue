<template>
  <section class="py-20 bg-cream-white">
    <div class="container mx-auto px-6">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="heading-lg text-text-dark mb-4">{{ sectionTitle }}</h2>
        <div class="w-16 h-px bg-text-dark mx-auto"></div>
      </div>
      
      <!-- Product Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(product, index) in products" :key="product.id" 
             :class="`product-card group animate-stagger-${index + 1}`">
          <!-- Product Image -->
          <div class="product-image">
            <img :src="product.image" 
                 :alt="product.name" 
                 class="w-full h-full object-cover">
          </div>
          
          <!-- Product Info -->
          <div class="p-6">
            <h3 class="heading-sm text-text-dark mb-2">{{ product.name }}</h3>
            <p class="text-small text-text-light mb-4">{{ product.origin }}</p>
            <div class="flex justify-between items-center">
              <span class="text-lg font-semibold text-text-dark">{{ product.price }}</span>
              <router-link :to="product.link" class="btn-minimal smooth-hover">
                {{ currentLang === 'vi' ? 'Xem chi tiết' : 'View Details' }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'ProductGrid',
  props: {
    sectionTitle: {
      type: String,
      required: true
    },
    products: {
      type: Array,
      required: true
    }
  },
  setup() {
    const currentLang = inject('currentLang', ref('vi'))
    
    return {
      currentLang
    }
  }
}
</script>

