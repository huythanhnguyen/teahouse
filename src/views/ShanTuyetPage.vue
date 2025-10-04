<template>
  <ProductDetailTemplate
    product-name="SHAN TUYẾT"
    product-image="https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    product-description="Trà Shan Tuyết cao cấp từ vùng núi Tây Bắc Việt Nam. Lá trà được hái từ những cây trà cổ thụ hàng trăm năm tuổi, mang hương vị đặc trưng và giá trị dinh dưỡng cao."
    aroma="Fresh, delicate mountain air, subtle floral notes"
    appearance="Light golden yellow with floating tea buds"
    taste="Clean, refreshing, subtle sweetness, smooth mountain character, lingering aftertaste"
    volume="200 ml"
    temperature="85 - 90 °C"
    quantity="2 tsp / 3g"
    time="3-5 mins"
    price="$45.00"
    benefit1-title="Premium Quality"
    benefit1-desc="From ancient tea trees in mountain regions"
    benefit2-title="Rich Antioxidants"
    benefit2-desc="High levels of natural antioxidants"
    benefit3-title="Pure Origin"
    benefit3-desc="Unpolluted mountain environment"
    cta-title="Experience Mountain Heritage"
    cta-description="Taste the pure essence of Vietnam's ancient tea tradition"
    cta-button1="Add to Cart"
    cta-button2="Learn More"
  />
</template>

<script>
import ProductDetailTemplate from '../components/ProductDetailTemplate.vue'

export default {
  name: 'ShanTuyetPage',
  components: {
    ProductDetailTemplate
  },
  mounted() {
    document.title = 'Trà Shan Tuyết - Cao Cấp | Vietnamese Tea Heritage'
  }
}
</script>