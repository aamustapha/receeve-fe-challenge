<template>
  <div class="sticky top-0 z-40 relative">
    <div class="w-full h-20 px-6 bg-white border-b-2 flex items-center justify-between">

      <div class="flex">

        <div class="relative text-gray-600">
          <input type="search" @search="search" placeholder="Search..."
                 class="bg-white h-10 w-full xl:w-64 px-5 rounded-lg border text-sm focus:outline-none">
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                 viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                 width="512px" height="512px">
                      <path
                          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                    </svg>
          </button>
        </div>
      </div>

      <button id="drop" class="flex items-center relative" @focus="dropDownOpen = true" @blur="dropDownOpen = false">
        <img src="https://ik.imagekit.io/hooli/tr:w-307,h-307,cm-extract,x-82,y-16/my-pic-no-bg_nCv-YDCui.webp "
             class="w-12 h-12 rounded-full shadow-lg"/>
        <div for="drop" :class="['absolute right-0 top-8']" v-show="dropDownOpen">
          <ul class=" bg-blue-50 border border-t-0 shadow-xl text-gray-700 rounded-lg w-48 bottom-10">
            <li><a @click.prevent="logout" class="block px-4 text-left py-2 hover:bg-blue-100 cursor-pointer">Logout</a></li>
          </ul>
        </div>
      </button>
    </div>


  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {RawLocation} from "vue-router";

@Component
export default class Navbar extends Vue {
  dropDownOpen = false

  logout() {
    console.log("Logging out")
    window.localStorage.removeItem("isAuthenticated")
    this.$router.replace("/login")
  }

  search(v: Event) {
    this.$router.replace({
      name: this.$route.name,
      params: this.$route.params,
      query: {search: v.target.value}
    } as RawLocation)
  }

}
</script>