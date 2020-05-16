<template>
  <div class="new-user">
      <bread-crumb v-bind:title='title'></bread-crumb>

      <form>
        <div class="form-group">
          <label for="inputFullName">Full Name</label>
          <input type="email" class="form-control" id="inputFullName" aria-describedby="fullNameHelp" placeholder="Enter full name" v-model="fullName" name="fullName">
          <small id="fullNameHelp" class="form-text text-muted">Please input your full name</small>
        </div>
        <div class="form-group">
          <label for="inputEmail">Email address</label>
          <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" v-model="email" name="email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="password" name="password">
        </div>
        <button type="button" class="btn btn-primary">Submit</button>
    </form>

    <pre>
      <span> Your information : </span>
      <span> full name : {{fullName}} </span>
      <span> email : {{email}} </span>
      <span> password : ********* </span>
    </pre>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'

export default {
  name: 'NewUser',
  data () {
    return {
      title: ["Home", "Create User"],
      fullName: null,
      email: null,
      password: null
    }
  },
  methods: {

  },
  computed: {

  },
  watch: {

  },
  created: function () {
    this.id = 1
    this.name = 'LuongPhuc'
    this.sex = 'male'
  },
  components: {
    'BreadCrumb': BreadCrumb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new-user {

}
</style>
