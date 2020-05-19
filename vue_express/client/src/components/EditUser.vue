<template>
  <div class="edit-user">
      <bread-crumb v-bind:title='title'></bread-crumb>

      <form v-if="getUserById">
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
        <button type="button" class="btn btn-primary" v-on:click="editUser">Submit</button>
    </form>

    <pre>
      <span> Your information : </span>
      <span> id : {{user.id}} </span>
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
  name: 'EditUser',
  data () {
    return {
      title: ["Users", "Edit"],
      user: {}
    }
  },
  methods: {
    editUser: function() {
      UserService.updateUser(this.user)
    }
  },
  computed: {
    getUserById: function() {
      let id = this.$route.params.id

      let data = []
      UserService.getUserById(id)
      .then(response => this.user = new User(response.data))
      .catch(error => {
        if(error.response || error.response.status) {
          console.log("Response error code : " + error.response.status)
        }
        this.user = new User({})
      })

      return true
    }
  },
  components: {
    'BreadCrumb': BreadCrumb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
