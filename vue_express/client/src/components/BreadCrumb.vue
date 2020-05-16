<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb" v-if="isArray">
      <li v-for="item in title" class="breadcrumb-item" aria-current="page">{{item}}</li>
    </ol>
    <ol class="breadcrumb" v-else>
      <li class="breadcrumb-item active" aria-current="page">{{title}}</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    title: [String, Array]
  },
  computed: {
    isArray: function () {
      return _.isArray(this.title)
    }
  },
}
</script>
