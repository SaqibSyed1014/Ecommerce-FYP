<template>
  <b-card no-body class="product shadow-none">
    <figure class="product-media">
      <div @click="navigateDetails">
        <b-card-img v-if="product.image" :src="product.image" :alt="product.name" />
        <img v-else src="../../../../assets/images/imgMockup.jpg" style="object-fit: cover;" />
      </div>
      <div class="product-left-action">
        <div class="icon-bubble">
          <feather-icon icon="HeartIcon" size="15" />
        </div>
        <div class="icon-bubble">
          <feather-icon icon="ZoomInIcon" size="15" />
        </div>
      </div>
      <div class="product-action">
        <feather-icon icon="ShoppingCartIcon" size="16" />
        <span>Add To Cart</span>
      </div>
    </figure>
    <b-card-body class="product-body">
      <div class="product-cat">
        <span>{{ category }}</span>
      </div>
      <h3 class="product-title"><a href="" class="">{{ product.name }}</a></h3>
      <div class="product-price">
        <span >{{ `${product.Price}.00$` }}</span>
<!--        <span  class="new-price">{{ `${product.price}.00$` }}</span>-->
<!--        <span  class="old-price">{{ `${product.oldPrice}.00$` }}</span>-->
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true,
    },
    category: {
      type: String,
    },
  },
  methods: {
    navigateDetails() {
      localStorage.setItem('view-details', JSON.stringify(this.product))
      this.$router.push({ name: 'product-details', params: { name: this.product.name } })
    },
  },
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/mixins";
.product{
  position: relative;
  margin-bottom: 1.8rem;
  transition: box-shadow .35s ease;
  background-color: #fff;
  border: 1px solid #eae8e8;
  &:hover{
    box-shadow: 0 15px 20px rgb(0 0 0 / 5%) !important;
    & .product-media .product-action{
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
    & .product-media .product-left-action{
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
    }
    & img:nth-child(2) {
      opacity: 1 !important;
    }
  }
  .product-media{
    position: relative;
    display: block;
    background-color: transparent;
    margin-bottom: 0;
    overflow: hidden;
    width: 100%;
    height: 250px;
    cursor: pointer;
    border-bottom: 1px solid #eae8e8;
    .product-left-action{
      position: absolute;
      top: 20px;
      right: 15px;
      display: flex;
      flex-direction: column;
      grid-gap: 10px;
      z-index: 10;
      transition: all .35s ease;
      opacity: 0;
      visibility: hidden;
      transform: translateX(100%);
    }
    .product-action{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      padding: 10px 0;
      justify-content: center;
      align-items: center;
      grid-gap: 10px;
      background-color: white;
      z-index: 10;
      transition: all .35s ease;
      opacity: 0;
      visibility: hidden;
      transform: translateY(100%);
      color: var(--primary);
      &:hover{
        background: var(--primary);
        cursor: pointer;
        & span, .feather{ color: white; }
      }
      span, .feather{ color: inherit; }
    }
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      z-index: 2;
    }
    img:nth-child(2){
      opacity: 0;
      transition: opacity .35s ease;
    }
  }
  .product-body{
    .product-cat{
      color: #777;
      font-weight: 300;
      font-size: 1.1rem;
      line-height: 1.2;
      letter-spacing: -.01em;
      margin-bottom: 0.3rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-transform: capitalize;
      text-align: center;
      a{
        color: inherit;
      }
    }
    .product-title{
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.25;
      letter-spacing: -.01em;
      margin-bottom: 0.2rem;
      text-transform: capitalize;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      a { color: black; }
    }
    .product-price{
      text-align: center;
      color: var(--primary);
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.25;
      margin-bottom: 1.3rem;
      .new-price{ color: #ef837b; }
      .old-price{
        color: #ccc;
        margin-left: .8rem;
        text-decoration: line-through;
      }
    }
  }
}

.icon-bubble{
  width: 35px;
  border: 1px solid var(--primary);
  height: 35px;
  border-radius: 50%;
  background: white;
  @include flex-box(center, center, null);
  .feather{ color: var(--primary); }
  &:hover{
    background: var(--primary);
    cursor: pointer;
    & span, .feather{ color: white; }
  }
}
</style>
