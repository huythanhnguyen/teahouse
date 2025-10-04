<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { ref, provide } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup() {
    // Global language state
    const currentLang = ref('vi')
    
    // Provide language state to all child components
    provide('currentLang', currentLang)
    
    return {
      currentLang
    }
  }
}
</script>

