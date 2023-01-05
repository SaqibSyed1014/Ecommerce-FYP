<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
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
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
      <h3>
        Manage My Dojo - Dashboard
      </h3>
    </div>
    <b-navbar-nav class="nav align-items-center ml-auto">
      User Dropdown
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
