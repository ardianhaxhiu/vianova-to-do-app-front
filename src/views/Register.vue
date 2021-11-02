<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-6 mx-auto">
          <h1 class="mb-5">Register</h1>

          <form>
            <b-form-input v-model="register.name" type="text" placeholder="Enter your name" class="mb-2"></b-form-input>
            <b-form-input v-model="register.email" type="email" placeholder="Enter your email" class="mb-2"></b-form-input>
            <b-form-input v-model="register.password" type="password" placeholder="Enter your password" class="mb-2"></b-form-input>
            <b-form-input v-model="register.password_confirmation" type="password" placeholder="Confirm your password" class="mb-2"></b-form-input>
            <b-button variant="primary" @click="registerUser" class="float-right" :disabled="!!isRegistering">{{ isRegistering ? 'Loading': 'Register'}}</b-button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
export default {
  data() {
    return {
      register: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      isRegistering: false
    }
  },

  methods: {
    ...mapMutations(["setUser"]),
    async registerUser() {
      this.isRegistering = true;
      let register = await this.callApi('POST','https://to-do-app-vianova.herokuapp.com/api/v1/auth/register', this.register, {});

      console.log(register)
      if (register.status === 200){
        let me = await this.callApi('POST', 'https://to-do-app-vianova.herokuapp.com/api/v1/auth/me', '', {
          'Authorization': 'Bearer ' + register.data.access_token
        });

        this.setUser(me.data);

        localStorage.setItem('token', register.data.access_token);

        this.$router.push('/');
      }else if(register.status === 422){
        console.log(register)
        for (let key in register.data.errors) {
          for (let i = 0; i < register.data.errors[key].length; i++) {
            this.$toast.error(register.data.errors[key][i], {position: "top-right",});
          }
        }
      }
      this.isRegistering = false;
    }
  }
}
</script>