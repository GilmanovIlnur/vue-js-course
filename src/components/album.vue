<template>
    <div class="album">
        <md-card class="md-primary block3">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-title"> {{ album.title }}</div>
                </md-card-header-text>
            </md-card-header>
            <md-card-actions>
                <md-button @click="clicked">{{seenButton}}</md-button>
            </md-card-actions>
        </md-card>
        <div v-if="seenAlbum">
            <div v-for="photo in photos" :key="photo.id">
                <div class="images-row">
                    <img :src="photo.url" alt=""/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import getPhotos from '../__data__/actions/get-photos'
    export default {
        name: "album",
        props: {
            album: Object
        },
        data(){
            return {
                seenAlbum: false,
                seenButton: 'Показать альбом',
                photos: []
            }
        },
        methods:{
            clicked(){
                if (this.seenButton === "Показать альбом"){
                     getPhotos(this.album.id).then((res) => this.photos = res);
                    this.seenButton = "Скрыть альбом"
                }else{
                    this.seenButton = "Показать альбом"
                }
                this.seenAlbum = !this.seenAlbum
            },
        }
    }
</script>

<style scoped>
    @import url('./style.css');
</style>