<template>
  <div>
    <bread-crumbs />
  </div>
</template>

<script>
import BreadCrumbs from '@/views/modules/Products/components/BreadCrumbs.vue'

export default {
  name: 'ProductDetails',
  components: { BreadCrumbs },
  data: () => ({
    product: {},
  }),
  mounted() {
    this.product = JSON.parse(localStorage.getItem('view-details'))
    this.$route.meta.breadcrumb[2].text = this.product.name
  },
}
</script>

<style scoped>

</style>
