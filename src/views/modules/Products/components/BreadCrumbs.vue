<template>
  <div class="breadcrumb-wrapper mb-1">
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
</template>

<script>
export default {
  name: 'BreadCrumbs',
}
</script>

<style scoped lang="scss">
.breadcrumb-wrapper{
  padding: .5rem 0;
  border-bottom: 0.1rem solid hsla(0,0%,92.2%,.55);
  .breadcrumb{
    padding: .3rem 0;
    .breadcrumb-item{
      font-weight: 500;
      & a{
        color: #777;
        &:hover{ color: var(--primary); }
      }
      &.active{ color: var(--primary); }
    }
  }
}
</style>
