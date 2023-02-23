<template>
  <div>
    <bread-crumbs />
    <b-container>
        <b-tabs
          pills
          vertical
          class="settings-tab"
          active-nav-item-class="text-primary bg-white shadow-none border-0"
          content-class="col-12 col-lg-9 mt-1 mt-md-0 pt-1"
          nav-wrapper-class="col-lg-3 col-12"
          nav-class="nav-left"
        >
          <b-tab v-for="(tab,i) in settingsTabs" :key="i"
                 @click="$router.push(`/${tab.type}-settings`)"
          >
            <template #title>
              <feather-icon icon="CornerDownRightIcon" size="16" />
              {{ tab.tab }}
            </template>
            <router-view />
          </b-tab>
          <b-tab title="Sign Out" @click="$router.push(`/sign-out`)">
            <template #title>
              <feather-icon icon="CornerDownRightIcon" size="16" />
              Sign Out
            </template>
            <b-card-text><sign-out /></b-card-text>
          </b-tab>
        </b-tabs>
    </b-container>
  </div>
</template>

<script>
import BreadCrumbs from '@/views/modules/Products/components/BreadCrumbs.vue'
import SignOut from '@/views/modules/Account Settings/SignOut.vue'
import { settingsTabs } from '@/views/demoData'

export default {
  name: 'AccountSettings',
  components: {
    BreadCrumbs,
    SignOut,
  },
  data: () => ({
    settingsTabs,
  }),
}
</script>

<style scoped lang="scss">

</style>
