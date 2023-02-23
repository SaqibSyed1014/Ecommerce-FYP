<template>
  <div class="user-wishlist">
    <div class="text-center">
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
</template>

<script>
export default {
  name: 'WishListProducts',
}
</script>

<style scoped>
.user-wishlist{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
}
</style>
