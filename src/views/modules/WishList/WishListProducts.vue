<template>
  <div class="user-wishlist">
    <bread-crumbs />
    <div class="wishlist-empty pt-5">
      <div>
        <feather-icon
          icon="HeartIcon"
          size="150"
        />
        <h3 class="py-1">No Products added to Wishlist</h3>
        <b-button variant="outline-primary" class="w-auto mx-auto" @click="$router.push('/products/all')">
          <feather-icon icon="ShoppingCartIcon" size="16" />
          <span>Go Shop</span>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '@/views/modules/Products/components/BreadCrumbs.vue'

export default {
  name: 'WishListProducts',
  components: {
    BreadCrumbs,
  },
}
</script>
