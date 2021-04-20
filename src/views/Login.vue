<template>
  <div class="bg-blue-50 min-h-screen items-center flex">

    <div class="w-96 mx-auto card py-2 px-4">
      <h4 class="mb-3 uppercase font-black text-2xl text-primary-light text-center">Login</h4>
      <form @submit.prevent="login()">
        <p class="bg-blue-200 text-blue-900 text-center text-sm rounded px-4 py-2">
          Remember to treat your password like a toothbrush, never share it with anyone!
        </p>
        <div class="form-floating ">
        <label for="username" :class="[ {'form-filled-label': focus.username }, 'form-label']">Username</label>
        <input
            id="username"
            v-model="credentials.username"
            type="text"
            class="form-control"
            @focus="focussed('username')"
            @blur="blurred('username')"
        />
      </div>

      <div class="form-floating">
        <label for="password" :class="[ {'form-filled-label': focus.password }, 'form-label']">Password</label>
        <input
            id="password"
            v-model="credentials.password"
            type="password"
            class="form-control"
            @focus="focussed('password')"
            @blur="blurred('password')"
        />
      </div>

        <button type="submit" class="w-full button bg-primary button-dark my-4 gap-2 uppercase font-semibold">
          <svg width="19" height="20" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10C10 13.517 8.991 16.799 7.247 19.571M3.807 17.531L3.861 17.441C5.26352 15.213 6.00523 12.6328 6 10C6 8.93916 6.42143 7.92175 7.17157 7.1716C7.92172 6.42145 8.93913 6.00003 10 6.00003C11.0609 6.00003 12.0783 6.42145 12.8284 7.1716C13.5786 7.92175 14 8.93916 14 10C14 11.017 13.93 12.019 13.797 13M11.679 19.844C12.2962 18.6125 12.7958 17.3255 13.171 16M17.01 17.132C17.655 14.866 18 12.473 18 10C18.0003 8.59558 17.6309 7.2158 16.9289 5.9994C16.2269 4.78299 15.217 3.77284 14.0008 3.07048C12.7846 2.36812 11.4049 1.99831 10.0004 1.99823C8.596 1.99815 7.21629 2.3678 6 3.07003M1 14.364C1.64 13.045 2 11.564 2 10C2 8.54303 2.39 7.17703 3.07 6.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          Login</button>
        <p class="text-center text-xs pb-3 text-primary-light">Use any credential combination for false login</p>
      </form>
    </div>

  </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";

@Component({
  components: {}
})
export default class Login extends Vue {

  credentials: object = {
    username: "",
    password: ""
  }
  focus: object = {
    username: this.credentials.username.length > 0,
    password: this.credentials.password.length > 0,
  }

  mounted () {
    this.focus = {
      username: this.credentials.username.length > 0,
      password: this.credentials.password.length > 0,
    }
  }

  focussed (field: string): void {
    this.focus[field] = true
  }

  blurred (field: string): void {
    this.focus[field] = (this.credentials[field]?.length  > 0 )|| false
  }

  login () {
    // mock auth state
    window.localStorage.setItem("isAuthenticated", "true")
    this.$router.push("/")
  }
}
</script>

<style scoped>

</style>