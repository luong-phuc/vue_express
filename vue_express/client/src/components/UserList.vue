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
      <tbody>
        <tr v-for="user in users">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.fullName }}</td>
          <td>{{ user.email }}</td>
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
import User from '../models/user'

export default {
  name: 'UserList',
  data () {
    return {
      title: ["Users"]
    }
  },
  computed: {
    users: function() {
      let users = []
      let search = this.$route.query.s

      if(!search || search == 'Phuc') {
        users.push(new User({
          id: "001",
          fullName: "Luong Phuc",
          email: "luong.phuc@mulodo.com",
          password: null
        }))
      }

      if(!search || search == 'Vinh') {
        users.push(new User({
            id: "002",
            fullName: "Luong Vinh",
            email: "luong.vinh@mulodo.com",
            password: null
        }))
      }

      let emptyUser = new User({})
      console.log(emptyUser)

      return users
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
