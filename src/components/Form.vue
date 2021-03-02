<template>
<div>
    <router-view></router-view>
  <v-card class="ma-3 pa-2" v-for="post in posts" :key="post.id" @click="detail(post)">
      <h2 class="text-center">{{ post.title }}</h2>
       <p>{{ post.body }}</p>
  </v-card>
  </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    data(){
        return{
         posts: null
        }
    },
    created(){
        this.getData()
    },
    methods: {
        getData(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                this.posts = response.data
                console.log(response)
            })
        },
        detail(data){
            this.$router.push('' + data.id)
            
        }
    }
}
</script>