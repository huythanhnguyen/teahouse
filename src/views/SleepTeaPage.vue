<template>
  <ProductDetailTemplate
    product-name="AN NHIÊN"
    product-image="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    product-description="Trà hoa ngủ ngon với hỗn hợp hoa cúc, táo đỏ, kỷ tử và mật ong tự nhiên. Giúp thư giãn tinh thần và cải thiện chất lượng giấc ngủ một cách tự nhiên."
    aroma="Sweet, floral chamomile, hint of honey"
    appearance="Golden amber with floating flower petals"
    taste="Gentle sweetness, calming chamomile, subtle honey notes, smooth and soothing"
    volume="200 ml"
    temperature="80 - 85 °C"
    quantity="2 tsp / 3g"
    time="5-7 mins"
    price="$28.00"
    benefit1-title="Better Sleep"
    benefit1-desc="Improves sleep quality naturally"
    benefit2-title="Stress Relief"
    benefit2-desc="Reduces daily stress and tension"
    benefit3-title="Gentle Calming"
    benefit3-desc="Non-addictive, safe relaxation"
    cta-title="Start Your Peaceful Journey"
    cta-description="Experience the gentle power of nature's sleep remedy"
    cta-button1="Add to Cart"
    cta-button2="Learn More"
  />
</template>

<script>
import ProductDetailTemplate from '../components/ProductDetailTemplate.vue'

export default {
  name: 'SleepTeaPage',
  components: {
    ProductDetailTemplate
  },
  mounted() {
    document.title = 'Trà Hoa Ngủ Ngon - An Nhiên | Vietnamese Tea Heritage'
  }
}
</script>