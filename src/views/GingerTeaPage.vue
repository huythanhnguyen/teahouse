<template>
  <ProductDetailTemplate
    product-name="ẤM VỊ"
    product-image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    product-description="Trà gừng tiêu hóa với gừng tươi, táo đỏ, mật ong và đường nâu. Hỗ trợ tiêu hóa, làm ấm cơ thể và giảm đầy hơi một cách tự nhiên."
    aroma="Warm, spicy ginger, hint of honey"
    appearance="Golden amber with ginger pieces"
    taste="Warming spice, sweet honey, smooth ginger notes, comforting and invigorating"
    volume="200 ml"
    temperature="90 - 95 °C"
    quantity="2 tsp / 4g"
    time="7-10 mins"
    price="$24.00"
    benefit1-title="Digestive Support"
    benefit1-desc="Aids digestion naturally"
    benefit2-title="Body Warming"
    benefit2-desc="Reduces cold hands and feet"
    benefit3-title="Immune Boost"
    benefit3-desc="Natural antibacterial properties"
    cta-title="Start Your Warming Journey"
    cta-description="Feel the warmth of ginger's healing touch"
    cta-button1="Add to Cart"
    cta-button2="Learn More"
  />
</template>

<script>
import ProductDetailTemplate from '../components/ProductDetailTemplate.vue'

export default {
  name: 'GingerTeaPage',
  components: {
    ProductDetailTemplate
  },
  mounted() {
    document.title = 'Trà Gừng Tiêu Hóa - Ấm Vị | Vietnamese Tea Heritage'
  }
}
</script>