<template lang="pug">
  pre {{ foo }}
</template>

<script>
export default {
  data () {
    return { foo: 'bar' }
  }
}
</script>

<style lang="stylus">
.foo
  color: red
</style>