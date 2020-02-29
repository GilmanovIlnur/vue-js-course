<template>
    <div>
        <md-field>
            <label>Показать альбом пользователя под id:</label>
            <md-input v-model="userId"></md-input>
            <md-button @click="showUserAlbum">Показать</md-button>
        </md-field>
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
            userAlbums: []
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