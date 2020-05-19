<template>
  <div class="user-list">
    <bread-crumb v-bind:title='title'></bread-crumb>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Full Name</th>
          <th scope="col">Email</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody v-if="searchUser">
        <tr v-for="user in users" v-bind:key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.fullName }}</td>
          <td>{{ user.email || 'N/a' }}</td>
          <td>
            <router-link :to="{ name: 'EditUser', params: { id: user.id }}" class="nav-item nav-link active">Edit</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'
import UserService from '../services/UserService'

export default {
  name: 'UserList',
  data () {
    return {
      title: ["Users"],
      users: []
    }
  },
  computed: {
    searchUser: function() {
      let search = this.$route.query.s

      let data = []
      UserService.getUserList(search)
      .then(response => this.users = response.data )
      .catch(error => {
        if(error.response || error.response.status) {
          console.log("Response error code : " + error.response.status)
        }
        this.users = []
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
