<template>
    <div>
        <md-field>
            <label>Показать альбом пользователя под id:</label>
            <md-input name="userId" v-model="userId" v-validate="{ required: true, regex: /^[0-9]+$/ }"></md-input>
            <md-button @click="showUserAlbum" :disabled="errors.has('userId')">Показать</md-button>
        </md-field>
        <span v-if="errors.has('userId')">{{errors.first('userId')}}</span>
        <div v-for="album in userAlbums">
            <album :album="album"/>
        </div>
    </div>
</template>

<script>
import Album from '../components/album.vue'
import getAlbums from '../__data__/actions/get-albums'
export default {
    name: "userAlbums"
    ,
    components:{
       Album
    },
    data() {
        return {
            userId: 1,
            userAlbums: [],
        }
    },
    created: function () {
         this.getAlbums();
    },

    methods:{
        getAlbums(){
            getAlbums(this.userId).then((res) => this.userAlbums = res)

        },
        showUserAlbum(){
            this.getAlbums()
        }
    }
}
</script>

<style scoped>

</style>