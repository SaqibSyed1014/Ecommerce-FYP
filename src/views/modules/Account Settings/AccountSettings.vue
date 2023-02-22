<template>
  <div>
    <bread-crumbs />
    <b-container>
      <b-col>
        <b-tabs
          pills
          vertical
          class="settings-tab"
          active-nav-item-class="text-primary bg-white shadow-none border-0"
          content-class="col-12 col-lg-9 mt-1 mt-md-0 pt-1"
          nav-wrapper-class="col-lg-3 col-12"
          nav-class="nav-left"
        >
          <b-tab v-for="(tab,i) in settingsTabs" :key="i" :title="tab.tab"
                 @click="$router.push(`/${tab.type}-settings`)"
          >
            <router-view />
          </b-tab>
          <b-tab title="Sign Out">
            <b-card-text>Sign Out Here</b-card-text>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import BreadCrumbs from '@/views/modules/Products/components/BreadCrumbs.vue'
import { settingsTabs } from '@/views/demoData'

export default {
  name: 'AccountSettings',
  components: {
    BreadCrumbs,
  },
  data: () => ({
    settingsTabs,
  }),
}
</script>

<style scoped lang="scss">

</style>
