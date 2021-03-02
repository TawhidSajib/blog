<template>
    <v-card>
        <h3>{{ singleData.tilte }}</h3>
    </v-card>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios)

export default {
    data(){
        return{
        singleData: {}
        }
    },
    created(){
   this.getData()
    },
    methods: {
        getData(){
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
            .then(response=>{
                console.log(response)
                this.singleData = response.data
            })
            
        }
    }
}
</script>