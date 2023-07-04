<template>
  <app-collapse>
    <app-collapse-item
      is-visible
      title="Category"
    >
      <b-col class="category-filter">
        <b-row v-for="(category, i) in categories" :key="i" @click="filterProducts(category.id)">
          <span>{{ category.name }}</span>
          <b-badge variant="primary">{{ productCount(category.id) || 0 }}</b-badge>
        </b-row>
      </b-col>
      <div v-if="showResetCategoryBtn" class="text-right">
        <b-button
          size="sm"
          class="ml-auto"
          variant="primary"
          @click="filterProducts(null)"
        >
          Reset
        </b-button>
      </div>
    </app-collapse-item>
<!--    <app-collapse-item-->
<!--      is-visible-->
<!--      title="Size"-->
<!--    >-->
<!--      <b-checkbox-->
<!--        v-for="(size, i) in sizes"-->
<!--        :key="i"-->
<!--        v-model="selectedSize"-->
<!--        :value="size"-->
<!--        class="mb-1"-->
<!--      >-->
<!--        {{ size }}-->
<!--      </b-checkbox>-->
<!--    </app-collapse-item>-->
<!--    <app-collapse-item-->
<!--      is-visible-->
<!--      title="Color"-->
<!--    >-->
<!--      <b-row style="grid-gap: 5px; padding: 0 15px;">-->
<!--        <div-->
<!--          v-for="color in colors"-->
<!--          :key="color"-->
<!--          :style="{ background: color }"-->
<!--          class="color-badge"-->
<!--        />-->
<!--      </b-row>-->
<!--    </app-collapse-item>-->
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
</template>

<script>
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  name: 'FilterSection',
  components: {
    AppCollapse,
    AppCollapseItem,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['red', 'black', 'yellow', 'blue', 'orange'],
    selectedSize: [],
    showResetCategoryBtn: false,
  }),
  methods: {
    productCount(id) {
      return this.products?.filter((prod) => prod?.Category === id)?.length
    },
    filterProducts(id) {
      this.showResetCategoryBtn = id !== null
      this.$emit('filter-by-category', id)
    },
  },
}
</script>

<style scoped lang="scss">
  .category-filter{
    .row{
      span {
        cursor: pointer;
        &:hover { color: var(--primary); }
      }
      justify-content: space-between;
      padding-bottom: .5rem;
    }
  }

</style>
