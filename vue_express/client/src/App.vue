<template>
  <div id="app">
    <!-- Menu -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Menu</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-item nav-link active">Home</router-link>
          <router-link to="/user" class="nav-item nav-link active">User List</router-link>
          <router-link to="/new-user" class="nav-item nav-link active">New User</router-link>
          <router-link to="/about" class="nav-item nav-link active">About</router-link>
        </div>
      </div>

      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model='s'>
        <button class="btn btn-secondary my-2 my-sm-0" v-on:click="search()" >Search</button>
      </form>
    </nav>

    <!-- Content -->
    <main role="main" class="container-fluid pt-2">
      <div class="swatch-light">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      s: ""
    }
  },
  methods: {
    search: function() {
      this.$router.push({ name: 'UserList', query: { s: this.s } })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
