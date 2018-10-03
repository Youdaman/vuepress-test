<template lang="pug">
  div
    h1.foo this is a test {{ foo }}
    Content
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'

Vue.use(Buefy)

export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
</script>

<style lang="sass">
// Import Bulma's core
@import ../../node_modules/bulma/sass/utilities/_all

// Set your colors
$primary: #8c67ef
$primary-invert: findColorInvert($primary)
$twitter: #4099FF
$twitter-invert: findColorInvert($twitter)

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: ("white": ($white, $black), "black": ($black, $white), "light": ($light, $light-invert), "dark": ($dark, $dark-invert), "primary": ($primary, $primary-invert), "info": ($info, $info-invert), "success": ($success, $success-invert), "warning": ($warning, $warning-invert), "danger": ($danger, $danger-invert), "twitter": ($twitter, $twitter-invert))

// Links
$link: $primary
$link-invert: $primary-invert
$link-focus-border: $primary

// Import Bulma and Buefy styles
@import ../../node_modules/bulma/bulma
@import ../../node_modules/buefy/src/scss/buefy
</style>