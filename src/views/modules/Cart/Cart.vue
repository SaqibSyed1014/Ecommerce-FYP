<template>
  <div class="user-cart">
    <bread-crumbs />
    <div class="cart-empty text-center pt-5">
      <div>
        <feather-icon
          icon="ShoppingCartIcon"
          size="150"
        />
        <h3 class="py-1">No Products added to Cart</h3>
        <b-button variant="outline-primary" class="w-auto mx-auto" @click="$router.push('/products/all')">
          <span>Return To Shop</span>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '@/views/modules/Products/components/BreadCrumbs.vue'

export default {
  name: 'Cart',
  components: {
    BreadCrumbs,
  },
}
</script>

<style scoped>

</style>
