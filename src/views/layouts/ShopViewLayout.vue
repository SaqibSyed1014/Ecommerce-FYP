<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/layouts/components/Navbar.vue'
import Footer from '@/layouts/components/Footer.vue'

export default {
  name: 'ProductsViewLayout',
  components: { Navbar, Footer },
}
</script>

<style scoped>

</style>
