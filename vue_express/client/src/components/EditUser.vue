<template>
  <div class="edit-user">
      <bread-crumb v-bind:title='title'></bread-crumb>

      <form>
        <div class="form-group">
          <label for="inputFullName">Full Name</label>
          <input type="text" class="form-control" id="inputFullName" aria-describedby="fullNameHelp" placeholder="Enter full name" v-model="fullName" name="fullName">
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
        <button type="button" class="btn btn-primary" v-on:click="editUser">Submit</button>
    </form>

    <pre>
      <span> Your information : </span>
      <span> id : {{id}} </span>
      <span> full name : {{fullName}} </span>
      <span> email : {{email}} </span>
      <span> password : ********* </span>
    </pre>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'
import User from '../models/user'

export default {
  name: 'EditUser',
  data () {
    return {
      title: ["Users", "Edit"],
      id: this.$route.params.id || null,
      fullName: null,
      email: null,
      password: null
    }
  },
  methods: {
    editUser: function() {
      let user = new User(this.id, this.fullName, this.email, this.password)
      console.log(user)
    }
  },
  computed: {

  },
  watch: {

  },
  created: function () {
    if(this.$route.params.id == '001') {
      this.id = "001"
      this.fullName = "luong-phuc-mulodo"
      this.email = "luong.phuc@mulodo.com"
    }
  },
  components: {
    'BreadCrumb': BreadCrumb
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.edit-user {

}
</style>
