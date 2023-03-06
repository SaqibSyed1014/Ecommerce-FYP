<template>
  <div>
    <bread-crumbs />
    <div class="container">
      <b-row class="parent">
        <b-col md="6" class="product-gallery">
          <div class="product-image" v-for="(img, i) in product.image" :key="i">
            <img :src="img" :alt="product.name">
          </div>
        </b-col>
        <b-col md="6" class="product-info pl-md-0">
          <div class="sticky pb-1">
            <div class="product-title">{{ product.name }}</div>
            <div class="product-price">
              <span v-if="!product.sale">{{ `${product.price}.00$` }}</span>
              <div v-if="product.sale" class="new-price">{{ `${product.price}.00$` }}</div>
              <div v-if="product.sale" class="old-price">{{ `${product.oldPrice}.00$` }}</div>
            </div>
            <div class="product-description">{{ product.desc }}</div>
            <b-button variant="outline-primary">
              <feather-icon icon="ShoppingCartIcon" size="16" />
              <span>Add To Cart</span>
            </b-button>

            <h3 class="product-category">Category: {{ product.category }}</h3>

            <app-collapse class="info-collapses">
              <app-collapse-item
                title="Additional Information"
              >
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                <ul>
                  <li>Fabric & care</li>
                  <li>Gold tone metal hoop handles.</li>
                  <li>Faux suede fabric</li>
                  <li>RI branding</li>
                  <li>Snake print trim interior</li>
                  <li>Adjustable cross body strap</li>
                </ul>
              </app-collapse-item>
              <app-collapse-item
                is-visible
                title="Shipping & Returns"
              >
                <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our Delivery information
                  We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our Returns information</p>
              </app-collapse-item>
              <app-collapse-item
                is-visible
                :title="`Reviews (${product.reviews.length})`"
              >
                <div v-if="product.reviews.length" class="product-reviews">
                  <div class="product-review" v-for="(review, i) in product.reviews" :key="i">
                    <b-row>
                      <b-col
                        cols="3"
                      >
                        <h4>{{ review.user }}</h4>
                      </b-col>
                      <b-col
                        cols="9"
                      >
                        <h4>{{ review.subject }}</h4>
                        <p>{{ review.comment }}</p>
                      </b-col>
                    </b-row>
                  </div>
                </div>
                <h4 v-else class="text-center">No Reviews Posted Yet</h4>
              </app-collapse-item>
            </app-collapse>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '@/views/modules/Products/components/BreadCrumbs.vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  name: 'ProductDetails',
  components: {
    BreadCrumbs,
    AppCollapse,
    AppCollapseItem,
  },
  data: () => ({
    product: {},
  }),
  mounted() {
    this.product = JSON.parse(localStorage.getItem('view-details'))
    this.$route.meta.breadcrumb[2].text = this.product.name
  },
}
</script>

<style scoped lang="scss">
.parent{
  display: flex;
  flex: 1 0 auto;
  .product-gallery{
    flex: 1;
    overflow: auto;
    width: 100%;
    .product-image{
      width: 100%;
      height: 500px;
      max-height: fit-content;
      margin-bottom: 2rem;
      img{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .product-info{
    //height: 700px;
    .sticky{
      position: sticky;
      top: 0;
      //border-bottom: 0.1rem solid #ebebeb;
    }
    .product-title{
      font-weight: 500;
      font-size: 2.1rem;
      letter-spacing: -.025em;
      margin-bottom: .7rem;
      margin-top: -0.5rem;
      padding-right: 1rem;
    }
    .product-price{
      display: flex;
      align-items: center;
      flex-flow: wrap;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.25;
      margin-bottom: .5rem;
      .new-price{ color: #ef837b; }
      .old-price{
        color: #ccc;
        margin-left: 1rem;
        text-decoration: line-through;
      }
    }
    .product-description{
      font-size: 1.4rem;
      font-weight: 300;
      color: #777;
      margin-bottom: 1.5rem;
    }
    .product-category{
      font-weight: 400;
      font-size: 1.2rem;
      text-transform: capitalize;
      padding: 1.2rem 0;
    }
    .info-collapses{
      border: 1px solid #ebe9f1;
      & .card{ background: #fafafa; }
    }
    .product-review{
      h4{
        color: #333;
        font-weight: 400;
        font-size: 1.3rem;
        margin-bottom: .6rem;
      }
    }
  }
}

</style>
