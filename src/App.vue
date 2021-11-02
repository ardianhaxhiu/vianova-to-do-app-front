<template>
  <div id="app">
    <div id="nav">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item v-if="!isLoggedIn">
            <router-link to="/login">Login</router-link>
          </b-nav-item>
          <b-nav-item v-if="!isLoggedIn">
            <router-link to="/register">Register</router-link>
          </b-nav-item>
          <b-nav-item v-if="isLoggedIn">
            <router-link to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item-dropdown :text="getUser.name" right class="float-right" v-if="isLoggedIn">
            <b-dropdown-item @click="logOut">Log out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
      <router-view/>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
export default {
  components: {
  },
  data() {
    return { }
  },

  methods: {
    ...mapMutations(['setUser']),

    logOut() {
      this.setUser(null);
      localStorage.removeItem('token')
      this.$router.push('/login');
    }
  },

  async created() {
    let me = await this.callApi('POST','https://to-do-app-vianova.herokuapp.com/api/v1/auth/me', '', {
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    });

    if (me.status === 200){
      this.setUser(me.data);
    }else if(me.status === 401){
      localStorage.removeItem('token');
      this.setUser(null);
      this.$router.push('/login');
    }
  },

  computed: {
    ...mapGetters(['isLoggedIn', 'getUser']),

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



#nav a {
  font-weight: bold;
  color: #c4c9cc;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

#nav a {
  text-decoration: none;
}
</style>
