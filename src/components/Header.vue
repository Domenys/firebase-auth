<template>
  <div class="dt-header-wrap w-full h-24">
    <div>
      <div 
        v-if="store.state.authUser !== null"
        class="dt-not-registered flex flex-row justify-between items-center w-1/4 h-24 mx-auto pl-4 pr-4 text-center border-4 border-solid border-gray-300 rounded-lg"
      >
        {{ authUserArray.email }}
        
        <button 
          @click="signOut"
          class="px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
        >
          Выход
        </button>
      </div>
      <div 
        v-else 
        class="dt-not-registered w-1/4 h-24 mx-auto pt-8 text-center border-4 border-solid border-gray-300 rounded-lg"
      >
        Вы не зарегистрированы
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

import firebase from 'firebase'
import { auth } from '@/firebase'
import router from '@/router'
export default {
  setup() {
    const store = useStore()

    const authUserArray = computed(() => {
      return ( store.state.authUser || [])
    });

    const signOut = () => {
      firebase.auth().signOut()
        .then(() => {
          store.dispatch('saveAuthUser')
          console.log('store')
          console.log(store.state)
          router.push('/auth')
        })
        .catch((error) => {
          // An error happened.
        })
    }

    

    return {
      store,
      authUserArray,
      signOut
    }
  }

}
</script>

<style>

</style>