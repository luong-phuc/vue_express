<template>
  <div class="about">
    <bread-crumb v-bind:title='title'></bread-crumb>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'

export default {
  name: 'About',
  data () {
    return {
      title: ["About"],
      msg: 'About'
    }
  },
  computed: {
  },
  components: {
    'BreadCrumb': BreadCrumb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
