<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-5">

      <!-- Register v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />
          <h2 class="brand-text text-primary ml-1">
            Eco-Shop
          </h2>
        </b-link>

        <b-card-title class="mb-1">
          Adventure starts here 🚀
        </b-card-title>
        <b-card-text class="mb-2">
          Make your app management easy and fun!
        </b-card-text>

        <!-- form -->
        <validation-observer ref="registerForm">
          <b-form
            class="auth-register-form mt-2"
            @submit.prevent="registeringUser"
          >
            <!-- username -->
            <b-form-group
              label="Username"
              label-for="username"
            >
              <validation-provider
                #default="{ errors }"
                name="Username"
                rules="required"
              >
                <b-form-input
                  id="username"
                  v-model="form.username"
                  :state="errors.length > 0 ? false:null"
                  name="register-username"
                  type="text"
                  placeholder="johndoe123"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- email -->
            <b-form-group
              label="Email"
              label-for="email"
            >
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  id="email"
                  v-model="form.email"
                  :state="errors.length > 0 ? false:null"
                  name="register-email"
                  type="email"
                  placeholder="john@example.com"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- email -->
            <b-form-group
              label="Full Name"
              label-for="fullName"
            >
              <validation-provider
                #default="{ errors }"
                name="Full Name"
                rules="required"
              >
                <b-form-input
                  id="fullName"
                  v-model="form.full_name"
                  :state="errors.length > 0 ? false:null"
                  placeholder="John Doe"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group
              label="Password"
              label-for="password"
            >
              <validation-provider
                #default="{ errors }"
                name="Password"
                rules="required|min:8"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                    id="password"
                    v-model="form.password"
                    :type="passwordFieldType"
                    :state="errors.length > 0 ? false:null"
                    class="form-control-merge"
                    name="register-password"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      :icon="passwordToggleIcon"
                      class="cursor-pointer"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox
                id="register-privacy-policy"
                v-model="status"
                name="checkbox-1"
              >
                I agree to
                <b-link>privacy policy & terms</b-link>
              </b-form-checkbox>
            </b-form-group>

            <!-- submit button -->
            <b-button
              variant="primary"
              block
              type="submit"
            >
              <b-spinner
                v-if="loading"
                small
                label="Loading..."
              />
              <span v-else>Sign up</span>
            </b-button>
          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
          <span>Already have an account? </span>
          <b-link :to="{name:'auth-login'}">
            <span>Sign in instead</span>
          </b-link>
        </b-card-text>

        <div class="divider my-2">
          <div class="divider-text">
            or
          </div>
        </div>

        <!-- social buttons -->
        <div class="auth-footer-btn d-flex justify-content-center">
          <b-button
            variant="facebook"
            href="javascript:void(0)"
          >
            <feather-icon icon="FacebookIcon" />
          </b-button>
          <b-button
            variant="twitter"
            href="javascript:void(0)"
          >
            <feather-icon icon="TwitterIcon" />
          </b-button>
          <b-button
            variant="google"
            href="javascript:void(0)"
          >
            <feather-icon icon="MailIcon" />
          </b-button>
        </div>
      </b-card>
      <!-- /Register v1 -->
    </div>
  </div>

</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import { required, email, min } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    VuexyLogo,
    // validations
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      form: {
        email: '',
        username: '',
        full_name: '',
        password: '',
        phone_number: '',
      },
      status: '',
      // validation rules
      required,
      email,
      min,
      loading: false,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    registeringUser() {
      this.$refs.registerForm.validate().then(async (success) => {
        if (success) {
          this.loading = true
          const formData = new FormData()
          const entries = Object.entries(this.form)
          entries.forEach(([key, value]) => {
            formData.append(`${key}`, value)
          })
          await this.$store.dispatch('auth/registerUser', formData)
          this.loading = false
          // this.$toast({
          //   component: ToastificationContent,
          //   props: {
          //     title: 'Form Submitted',
          //     icon: 'EditIcon',
          //     variant: 'success',
          //   },
          // })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
