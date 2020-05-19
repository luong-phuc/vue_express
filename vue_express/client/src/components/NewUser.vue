<template>
  <div class="new-user">
      <bread-crumb v-bind:title='title'></bread-crumb>

      <form>
        <div class="form-group">
          <label for="inputFullName">Full Name</label>
          <input type="text" class="form-control" id="inputFullName" aria-describedby="fullNameHelp" placeholder="Enter full name" v-model="user.fullName" name="fullName">
          <small id="fullNameHelp" class="form-text text-muted">Please input your full name</small>
        </div>
        <div class="form-group">
          <label for="inputEmail">Email address</label>
          <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" v-model="user.email" name="email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="user.password" name="password">
        </div>
        <button type="button" class="btn btn-primary" v-on:click="createUser">Submit</button>
    </form>

    <pre>
      <span> Your information : </span>
      <span> full name : {{user.fullName}} </span>
      <span> email : {{user.email}} </span>
      <span> password : ********* </span>
    </pre>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'
import User from '../models/user'
import UserService from '../services/UserService'

export default {
  name: 'NewUser',
  data () {
    return {
      title: ["Users", "Create"],
      user: new User()
    }
  },
  methods: {
    createUser: function() {
      UserService.createUser(this.user)
    }
  },
  computed: {

  },
  watch: {

  },
  created: function () {

  },
  components: {
    'BreadCrumb': BreadCrumb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
