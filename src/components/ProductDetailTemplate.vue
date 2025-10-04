<template>
  <div class="min-h-screen bg-cream-white">
    <!-- Product Detail Section -->
    <section class="product-detail-section">
      <div class="container mx-auto px-6">
        <div class="product-info-grid">
          <!-- Product Image -->
          <div class="relative">
            <img :src="productImage" 
                 :alt="productName" 
                 class="product-image-large">
          </div>
          
          <!-- Product Details -->
          <div class="product-details">
            <h1 class="product-title">{{ productName }}</h1>
            
            <div class="product-description">
              {{ productDescription }}
            </div>
            
            <!-- Product Details -->
            <div class="space-y-6">
              <div class="detail-item">
                <div class="detail-label">Aroma</div>
                <div class="detail-value">{{ aroma }}</div>
              </div>
              
              <div class="detail-item">
                <div class="detail-label">Appearance</div>
                <div class="detail-value">{{ appearance }}</div>
              </div>
              
              <div class="detail-item">
                <div class="detail-label">Taste</div>
                <div class="detail-value">{{ taste }}</div>
              </div>
            </div>
            
            <!-- Steeping Notes -->
            <div class="mt-8">
              <h3 class="heading-sm mb-6">Steeping Notes</h3>
              <div class="steeping-notes">
                <div class="steeping-item">
                  <svg class="steeping-icon mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0 2l3 9m-3-9l-3 9"></path>
                  </svg>
                  <div class="steeping-value">{{ volume }}</div>
                </div>
                
                <div class="steeping-item">
                  <svg class="steeping-icon mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  <div class="steeping-value">{{ temperature }}</div>
                </div>
                
                <div class="steeping-item">
                  <svg class="steeping-icon mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                  </svg>
                  <div class="steeping-value">{{ quantity }}</div>
                </div>
                
                <div class="steeping-item">
                  <svg class="steeping-icon mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div class="steeping-value">{{ time }}</div>
                </div>
              </div>
            </div>
            
            <!-- Price and CTA -->
            <div class="mt-8 flex items-center justify-between">
              <div class="text-2xl font-bold text-text-dark">{{ price }}</div>
              <button class="btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-light-teal">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h3 class="heading-lg text-text-dark mb-6">Benefits</h3>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center bg-cream-white p-8">
            <div class="w-16 h-16 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-cream-white text-2xl">✨</span>
            </div>
            <h4 class="font-semibold text-text-dark mb-2">{{ benefit1Title }}</h4>
            <p class="text-small">{{ benefit1Desc }}</p>
          </div>
          
          <div class="text-center bg-cream-white p-8">
            <div class="w-16 h-16 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-cream-white text-2xl">💖</span>
            </div>
            <h4 class="font-semibold text-text-dark mb-2">{{ benefit2Title }}</h4>
            <p class="text-small">{{ benefit2Desc }}</p>
          </div>
          
          <div class="text-center bg-cream-white p-8">
            <div class="w-16 h-16 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-cream-white text-2xl">🌿</span>
            </div>
            <h4 class="font-semibold text-text-dark mb-2">{{ benefit3Title }}</h4>
            <p class="text-small">{{ benefit3Desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-text-dark text-cream-white">
      <div class="container mx-auto px-6 text-center">
        <h3 class="heading-lg mb-6">{{ ctaTitle }}</h3>
        <p class="text-lg mb-8 opacity-90 max-w-2xl mx-auto">{{ ctaDescription }}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn-secondary">{{ ctaButton1 }}</button>
          <button class="btn-minimal text-cream-white border-cream-white">{{ ctaButton2 }}</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailTemplate',
  props: {
    productName: {
      type: String,
      required: true
    },
    productImage: {
      type: String,
      required: true
    },
    productDescription: {
      type: String,
      required: true
    },
    aroma: {
      type: String,
      required: true
    },
    appearance: {
      type: String,
      required: true
    },
    taste: {
      type: String,
      required: true
    },
    volume: {
      type: String,
      default: '180 ml'
    },
    temperature: {
      type: String,
      default: '80 - 85 °C'
    },
    quantity: {
      type: String,
      default: '3 tsp / 2.5 g'
    },
    time: {
      type: String,
      default: '5 mins'
    },
    price: {
      type: String,
      required: true
    },
    benefit1Title: {
      type: String,
      required: true
    },
    benefit1Desc: {
      type: String,
      required: true
    },
    benefit2Title: {
      type: String,
      required: true
    },
    benefit2Desc: {
      type: String,
      required: true
    },
    benefit3Title: {
      type: String,
      required: true
    },
    benefit3Desc: {
      type: String,
      required: true
    },
    ctaTitle: {
      type: String,
      required: true
    },
    ctaDescription: {
      type: String,
      required: true
    },
    ctaButton1: {
      type: String,
      required: true
    },
    ctaButton2: {
      type: String,
      required: true
    }
  }
}
</script>



