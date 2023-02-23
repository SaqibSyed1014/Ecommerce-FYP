<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/layouts/components/Navbar.vue'

export default {
  name: 'ProductsViewLayout',
  components: { Navbar },
}
</script>

<style scoped>

</style>
