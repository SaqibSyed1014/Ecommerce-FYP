<template>
  <div>
    <div class="breadcrumb-wrapper mb-2">
      <b-container>
        <b-breadcrumb>
          <b-breadcrumb-item
            v-for="item in $route.meta.breadcrumb"
            :key="item.text"
            :active="item.active"
            :to="item.to"
          >
            {{ item.text }}
          </b-breadcrumb-item>
        </b-breadcrumb>
      </b-container>
    </div>
    <b-container>
      <b-row>
        <b-col
          xl="3"
          class="d-none d-xl-block"
        >
          <div class="filter-section">
            <label>Filters:</label>
            <app-collapse>
              <app-collapse-item
                is-visible
                title="Category"
              />
              <app-collapse-item
                is-visible
                title="Size"
              >
                <b-checkbox
                  v-for="(size, i) in sizes"
                  :key="i"
                  v-model="selectedSize"
                  :value="size"
                  class="mb-1"
                >
                  {{ size }}
                </b-checkbox>
              </app-collapse-item>
              <app-collapse-item
                is-visible
                title="Color"
              >
                <b-row style="grid-gap: 5px; padding: 0 15px;">
                  <div
                    v-for="color in colors"
                    :key="color"
                    :style="{ background: color }"
                    class="color-badge"
                  />
                </b-row>
              </app-collapse-item>
              <app-collapse-item
                is-visible
                title="Price"
              >
                <b-row class="mb-1">
                  <b-col
                    cols="6"
                    style="padding-right: 7px;"
                  >
                    <b-form-input placeholder="Max Value" />
                  </b-col>
                  <b-col
                    cols="6"
                    style="padding-left: 7px;"
                  >
                    <b-form-input placeholder="Min Value" />
                  </b-col>
                </b-row>
                <b-button
                  block
                  variant="primary"
                >
                  Apply
                </b-button>
              </app-collapse-item>
            </app-collapse>
          </div>
        </b-col>
        <b-col xl="9">
          <b-col>
            <b-row>
              <b-row class="d-flex d-xl-none" style="padding: 0 15px;">
                <feather-icon
                  v-b-toggle.filter-sidebar
                  icon="MenuIcon"
                  size="22"
                  class="filter-icon"
                />
                <div class="filter-btn">
                  FILTERS
                </div>
              </b-row>
              <label class="products-visible">Showing <span>12 of 35</span> Products</label>
            </b-row>
          </b-col>
          <b-row>
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
      <app-collapse>
        <app-collapse-item
          is-visible
          title="Category"
        />
        <app-collapse-item
          is-visible
          title="Size"
        >
          <b-checkbox
            v-for="(size, i) in sizes"
            :key="i"
            v-model="selectedSize"
            :value="size"
            class="mb-1"
          >
            {{ size }}
          </b-checkbox>
        </app-collapse-item>
        <app-collapse-item
          is-visible
          title="Color"
        >
          <b-row style="grid-gap: 5px; padding: 0 15px;">
            <div
              v-for="color in colors"
              :key="color"
              :style="{ background: color }"
              class="color-badge"
            />
          </b-row>
        </app-collapse-item>
        <app-collapse-item
          is-visible
          title="Price"
        >
          <b-row class="mb-1">
            <b-col
              cols="6"
              style="padding-right: 7px;"
            >
              <b-form-input placeholder="Max Value" />
            </b-col>
            <b-col
              cols="6"
              style="padding-left: 7px;"
            >
              <b-form-input placeholder="Min Value" />
            </b-col>
          </b-row>
          <b-button
            block
            variant="primary"
          >
            Apply
          </b-button>
        </app-collapse-item>
      </app-collapse>
    </b-sidebar>
  </div>
</template>

<script>
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import product from './components/Product.vue'

export default {
  name: 'Products',
  components: {
    product,
    AppCollapse,
    AppCollapseItem,
  },
  data: () => ({
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['red', 'black', 'yellow', 'blue', 'orange'],
    selectedSize: [],
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

<style scoped lang="scss">
.filter-section{
  //position: fixed; //for fixed filer panel & scrollable product view
  //width: 290px;
  background: white;
  label{
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
  font-size: 1.25rem;
  margin-right: 25px;
}
.products-visible{
  color: #ccc;
  font-size: 1.25rem;
  padding-bottom: 1rem;
  font-weight: 400;
  margin-bottom: 0;
  display: inline;
  span{ color: var(--primary); }
}
.b-sidebar-header{
  background: var(--primary);
  color: white;
}
</style>
