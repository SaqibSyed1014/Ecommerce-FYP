<template>
  <div>
    <b-col>
      <b-row>
        <b-col md="6">
          <b-form-input
            v-model="fullName"
            placeholder="Full Name"
            autofocus
            class="mb-1"
          />
        </b-col>
        <b-col md="6">
          <b-form-input
            v-model="userEmail"
            placeholder="Email"
            class="mb-1"
          />
        </b-col>
        <b-col md="6">
          <b-form-input
            v-model="username"
            placeholder="Username"
            class="mb-1"
          />
        </b-col>
        <b-col
          md="6"
          class="d-flex align-items-center"
          style="padding-bottom: .5rem;"
        >
          <label class="mb-0 mr-1">Account Type:</label>
          <b-badge variant="primary">
            {{ accType }}
          </b-badge>
        </b-col>
        <b-col>
          <b-button
            variant="outline-primary"
            class="ml-auto"
          >
            <span>Save Changes</span>
          </b-button>
        </b-col>
      </b-row>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'AccountDetails',
  data() {
    return {
      fullName: this.$store.getters['auth/getUser']?.full_name || '',
      userEmail: this.$store.getters['auth/getUser']?.email || '',
      username: this.$store.getters['auth/getUser']?.username || '',
      accType: this.$store.getters['auth/getUser']?.account_type || '',
    }
  },
}
</script>

<style scoped>

</style>
