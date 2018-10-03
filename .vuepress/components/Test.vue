<template lang="pug">
  pre {{ foo }}
</template>

<!-- eslint-disable -->
<!--script lang="coffee">
# eslint-disable
export default {
  data: ->
    return { foo: 'bar' }
}
# eslint-enable
</script-->
<!-- eslint-enable -->

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