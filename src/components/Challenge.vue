<template>
  <div class="w-screen">
    <div class="sidenav" id="main-nav">

      <div class="w-full h-20 border-b border-secondary flex px-4 items-center ">
        <p class="font-bold flex items-center">
          <img src="@/assets/logo.png" class="h-12" />
          <span class="pl-2 uppercase text-secondary text-xl">Reporting</span>
        </p>
      </div>

      <nav class="sidebar__nav">
        <router-link to="/" class="sidenav__nav-item" exact-active-class="active">Dashboard</router-link>
        <router-link to="/accounts" class="sidenav__nav-item" exact-active-class="active">Account</router-link>
      </nav>

    </div>
    <div class="container-fluid">
      <Navbar />
      <main>
        <router-view />
      </main>
    </div>

  </div>
</template>
<script lang="ts">
import Navbar from "@/components/Navbar"
import {Component, Vue} from "vue-property-decorator";
@Component({
  components: {Navbar}
})
export default class Challenge extends Vue {
}
</script>