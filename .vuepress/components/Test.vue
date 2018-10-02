<template lang="pug">
  pre {{ foo }}
</template>

<!--script lang="coffee">
export default {
  data: ->
    return { foo: 'bar' }
}
</script-->
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