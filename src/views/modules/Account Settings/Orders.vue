<template>
  <div>
    <h3>No Order has been made yet</h3>
    <b-button variant="outline-primary" class="w-auto" @click="$router.push('/products/all')">
      <feather-icon icon="ShoppingCartIcon" size="16" />
      <span>Go to Shop</span>
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Orders',
}
</script>

<style scoped>

</style>
