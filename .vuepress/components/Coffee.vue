<template lang="pug">
  .foo Hello {{ name }}!
</template>

<script lang="coffee">
# export default
#   data: ->
#     return name: 'Coffee'
export default data: ->
  { name: 'Coffee' }
</script>

<style lang="stylus">
.foo
  color: aqua
</style>