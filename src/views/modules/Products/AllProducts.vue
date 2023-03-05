<template>
  <div class="product-view">
    <bread-crumbs />
    <b-container>
      <b-row>
        <b-col
          lg="3"
          class="d-none d-lg-block"
        >
          <div class="filter-section">
            <label>Filters:</label>
            <filter-section />
          </div>
        </b-col>
        <b-col lg="9">
          <b-col>
            <b-row>
              <b-row class="d-flex d-lg-none" style="padding: 0 15px;">
                <feather-icon
                  v-b-toggle.filter-sidebar
                  icon="MenuIcon"
                  size="20"
                  class="filter-icon"
                />
                <div class="filter-btn">
                  FILTERS
                </div>
              </b-row>
              <label class="products-visible">Showing <span>12 of 35</span> Products</label>
            </b-row>
          </b-col>
          <b-row class="product-list">
            <b-col
              v-for="product in products"
              :key="product.id"
              lg="3"
              md="4"
              sm="6"
              cols="12"
            >
              <product :product="product" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>

    <b-sidebar
      id="filter-sidebar"
      title="Filter"
      backdrop
      shadow
    >
      <filter-section />
    </b-sidebar>
  </div>
</template>

<script>
import BreadCrumbs from '@/views/modules/Products/components/BreadCrumbs.vue'
import { products } from '@/views/demoData'
import FilterSection from '@/views/modules/Products/components/FilterSection.vue'
import product from './components/Product.vue'

export default {
  name: 'Products',
  components: {
    product,
    BreadCrumbs,
    FilterSection,
  },
  data: () => ({
    products,
  }),
}
</script>

<style scoped lang="scss">
.product-view{
  .product-list{
    .col-12{
      padding-left: .8rem;
      padding-right: .8rem;
    }
  }
}
.filter-section {
  //position: fixed; //for fixed filer panel & scrollable product view
  //width: 290px;
  background: white;

  label {
    color: #333;
    font-weight: 400;
    font-size: 1.25rem;
    padding-left: 1rem;
    padding-bottom: 1rem;
    display: block;
    width: 100%;
    border-bottom: 0.1rem solid #ebebeb;
  }
}
.filter-icon{ margin-right: 10px; }
.filter-btn{
  color: #333;
  font-weight: 400;
  font-size: 1.05rem;
  margin-right: 25px;
  margin-bottom: 5px;
}
.products-visible{
  color: #ccc;
  font-size: 1.25rem;
  padding-bottom: 1rem;
  font-weight: 400;
  margin-bottom: 0;
  display: inline;
  span{ color: var(--primary); }
  @media (max-width: 992px) {
    font-size: 1.1rem;
  }
}
.b-sidebar-header{
  background: var(--primary);
  color: white;
}
</style>
