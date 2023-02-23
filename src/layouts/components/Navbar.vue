<template>
  <div class="navbar-container d-flex align-items-center justify-content-between p-1">

    <!-- Nav Menu Toggler -->
    <b-row class="align-items-center" style="padding: 0 15px;">
      <ul class="nav navbar-nav d-xl-none mr-1">
        <li class="nav-item">
          <b-link
            class="nav-link"
            @click="toggleVerticalMenuActive"
          >
            <feather-icon
              icon="MenuIcon"
              size="21"
            />
          </b-link>
        </li>
      </ul>
      <!-- Left Col -->
      <div class="bookmark-wrapper align-items-center">
        <h3 class="mb-0">Eco-shop</h3>
      </div>
    </b-row>
    <div class="search-products w-50 d-none d-xl-flex">
      <b-input-group class="input-group-merge">
        <b-form-input placeholder="Search products" />
        <b-input-group-append is-text>
          <feather-icon icon="SearchIcon" />
        </b-input-group-append>
      </b-input-group>
    </div>
    <b-navbar-nav class="nav align-items-center">
      <b-col>
        <b-row class="menu-options">
          <div class="user-account" @click="$router.push({ name: 'orders-settings' })">
            <feather-icon
              icon="UserIcon"
              size="25"
            />
            <p>Account</p>
          </div>
          <div class="user-wishlist" @click="$router.push({ name: 'user-wishlist' })">
            <b-badge class="wishlist-badge" variant="primary">0</b-badge>
            <feather-icon
              icon="HeartIcon"
              size="25"
            />
            <p>Wishlist</p>
          </div>
          <div class="user-cart">
            <b-badge variant="primary">0</b-badge>
            <feather-icon
              icon="ShoppingCartIcon"
              size="25"
            />
            <p>Cart</p>
          </div>
        </b-row>
      </b-col>
    </b-navbar-nav>
  </div>
</template>

<script>
// import UserDropdown from '@core/layouts/components/app-navbar/components/UserDropdown.vue'

export default {
  components: {
    // UserDropdown,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style scoped lang="scss">
.settings-tab{

}
</style>
