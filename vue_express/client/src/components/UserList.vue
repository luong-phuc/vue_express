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
      title: ["Users"]
    }
  },
  computed: {
    users: function() {
      let search = this.$route.query.s
      return UserService.getUserList(search)
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
