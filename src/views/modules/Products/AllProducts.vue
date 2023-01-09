<template>
  <div>
    <b-row>
      <b-col
        v-for="product in products"
        :key="product.id"
        cols="1"
        md="3"
      >
        <product :product="product" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import product from './components/Product.vue'

export default {
  name: 'Products',
  components: {
    product,
  },
  data: () => ({
    products: [
      {
        id: 1, name: 'nnn', price: '22', desc: 'kkkkkk', image: '', category: 'men',
      },
      {
        id: 2, name: 'nnn', price: '19', desc: 'kkkkkk', image: '', category: 'women',
      },
      {
        id: 3, name: 'nnn', price: '22', desc: 'kkkkkk', image: '', category: 'men',
      },
      {
        id: 4, name: 'nnn', price: '19', desc: 'kkkkkk', image: '', category: 'women',
      },
      {
        id: 5, name: 'nnn', price: '22', desc: 'kkkkkk', image: '', category: 'men',
      },
      {
        id: 6, name: 'nnn', price: '19', desc: 'kkkkkk', image: '', category: 'women',
      },
    ],
  }),
}
</script>

<style scoped>

</style>
