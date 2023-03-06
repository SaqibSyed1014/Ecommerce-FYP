<template>
  <footer>
    <div :class="[ $route.name === 'home' ? 'footer-slope':'footer-container']">
      <b-container class="footer-middle">
        <b-row>
          <b-col md="6">
            <div class="site-info">
              <h2>Eco-Shop</h2>
              <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
              <b-row>
                <b-col md="4">
                  <span>Got a Question? Call us</span>
                  <a href="tel:12345678">+92 308 12345679</a>
                </b-col>
                <b-col md="8">
                  <span>Payment Methods</span>
                  <img src="../../assets/images/payments.png" alt="">
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col md="2">
            <h4>Information</h4>
            <ul>
              <li><router-link to="#">How to shop on Molla</router-link></li>
              <li><router-link to="#">FAQ</router-link></li>
              <li><router-link to="#">Contact us</router-link></li>
              <li><router-link to="#">Log in</router-link></li>
            </ul>
          </b-col>
          <b-col md="2">
            <h4>Customer Service</h4>
            <ul>
              <li><router-link to="#">Payment Methods</router-link></li>
              <li><router-link to="#">Returns</router-link></li>
              <li><router-link to="#">Shipping</router-link></li>
              <li><router-link to="#">Terms and conditions</router-link></li>
              <li><router-link to="#">Privacy Policy</router-link></li>
            </ul>
          </b-col>
          <b-col md="2">
            <h4>My Account</h4>
            <ul>
              <li><router-link to="#">Sign in</router-link></li>
              <li><router-link to="#">View Cart</router-link></li>
              <li><router-link to="#">My Wishlist</router-link></li>
              <li><router-link to="#">Help</router-link></li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped lang="scss">
footer{
  margin-top: 5rem;
  .footer-container, .footer-slope{
    background: #222;
    padding: 5rem 0;
    position: relative;
    overflow:hidden;
    transform-origin: bottom;
    &.footer-slope{
      padding: 6rem 0 3rem;
      clip-path: polygon(0 30px, 100% 0, 100% 100%, 0 100%);
    }
    .footer-middle{
      margin: 0 auto;
      h2{ color: white; }
      .site-info{
        p{
          color: #919191;
        };
        span{
          display: block;
          color: white;
          margin-bottom: .5rem;
        }
        a{  }
      }
      h4{
        color: white;
        font-weight: 600;
        margin-bottom: 1rem;
      }
      ul {
        padding: 0;
        li {
          list-style: none;
          padding-bottom: .5rem;
          a{
            color: #919191;
            &:hover{
              color: var(--primary);
            }
          }
        }
      }
    }
  }
}
</style>
