<template>
  <div>
    <b-col>
      <b-row>
        <b-col md="6">
          <b-form-input
            placeholder="First Name"
            autofocus
            class="mb-1"
          />
        </b-col>
        <b-col md="6">
          <b-form-input
            placeholder="Last Name"
            class="mb-1"
          />
        </b-col>
        <b-col md="6">
          <b-form-input
            placeholder="Your Email"
            class="mb-1"
          />
        </b-col>
        <b-col md="6">
          <b-form-input
            placeholder="Your Password"
            class="mb-1"
          />
        </b-col>
        <b-col>
          <b-button variant="outline-primary" class="ml-auto">
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
}
</script>

<style scoped>

</style>
