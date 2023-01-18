<template>
  <div class="navbar-container d-flex align-items-center justify-content-between px-2 py-1">

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
      <user-dropdown />
    </b-navbar-nav>
  </div>
</template>

<script>
import UserDropdown from '@core/layouts/components/app-navbar/components/UserDropdown.vue'

export default {
  components: {
    UserDropdown,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
