<template>
  <ProductDetailTemplate
    product-name="TỎA SẮC"
    product-image="https://images.unsplash.com/photo-1594736797933-d0c29b8d0b0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    product-description="Trà hoa dưỡng nhan với hoa hồng, kỷ tử, táo đỏ và đường nâu tự nhiên. Làm đẹp da từ bên trong, điều hòa nội tiết và giúp da hồng hào rạng rỡ."
    aroma="Sweet, pink rose, hint of strawberry"
    appearance="Luminous pinkish-cream"
    taste="Ample sweetness, smooth, velvety, notes of pink rose, sweet and a hint of strawberry"
    volume="180 ml"
    temperature="85 - 90 °C"
    quantity="3 tsp / 2.5g"
    time="3-5 mins"
    price="$32.00"
    benefit1-title="Beautiful Skin"
    benefit1-desc="Nourishes skin from within"
    benefit2-title="Hormone Balance"
    benefit2-desc="Natural hormone regulation"
    benefit3-title="Blood Nourishment"
    benefit3-desc="Promotes healthy complexion"
    cta-title="Begin Your Beauty Journey"
    cta-description="Nurture your skin with the power of nature's beauty secrets"
    cta-button1="Add to Cart"
    cta-button2="Learn More"
  />
</template>

<script>
import ProductDetailTemplate from '../components/ProductDetailTemplate.vue'

export default {
  name: 'BeautyTeaPage',
  components: {
    ProductDetailTemplate
  },
  mounted() {
    document.title = 'Trà Hoa Dưỡng Nhan - Tỏa Sắc | Vietnamese Tea Heritage'
  }
}
</script>