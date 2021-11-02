<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-6 mx-auto">
          <h1 class="mb-5">Log in</h1>

          <form>
            <b-form-input type="email" v-model="auth.email" placeholder="Enter your email"   class="mb-2" required></b-form-input>
            <b-form-input type="password" v-model="auth.password" placeholder="Enter your password" class="mb-2" required></b-form-input>
            <b-button variant="primary" @click="login" class="float-right" :disabled="!!isLogging">{{ isLogging ? 'Loading' : 'Log in'}}</b-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: 'Login',
  data() {
    return {
      auth: {
        email: '',
        password: ''
      },
      isLogging: false
    }
  },
  methods: {
    ...mapMutations(["setUser"]),
    async login(e) {
      e.preventDefault();
      this.isLogging = true;
      if (this.auth.email !== '' && this.auth.password !== ''){
        let login = await this.callApi('POST', 'https://to-do-app-vianova.herokuapp.com/api/v1/auth/login', this.auth);
        if (login.status === 200){
          let me = await this.callApi('POST', 'https://to-do-app-vianova.herokuapp.com/api/v1/auth/me', '', {
            'Authorization': 'Bearer ' + login.data.access_token
          });

          this.setUser(me.data);

          localStorage.setItem('token', login.data.access_token);

          this.$router.push('/');
          this.$toast.success('You are logged in!', {position: 'top-right'});

        }else if(login.status === 401){
          this.$toast.error(login.data.error + '!', {position: 'top-right'});
        }
      }else{
        this.$toast.error('Please fill the blank fields!', {position: 'top-right'});
      }
      this.isLogging = false;
    }
  },
}
</script>
