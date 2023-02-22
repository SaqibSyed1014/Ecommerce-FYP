<template>
  <div>
    <h3>No Address has been added yet</h3>
    <b-button variant="outline-primary" class="w-auto" @click="$router.push('/products/all')">
      <span>Click To Add</span>
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Addresses',
}
</script>

<style scoped>

</style>
