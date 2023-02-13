<template>
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
</template>

<script>
export default {
  name: 'BreadCrumbs',
}
</script>

<style scoped>

</style>
