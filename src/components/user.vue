<template>
    <div>
        <md-card class="md-primary block">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-subhead">@{{ user.username }}</div>
                    <div class="md-title"> {{ user.name }}</div>
                </md-card-header-text>

                <md-list-item>
                    <div>
                        <md-icon>phone</md-icon>
                        <span>{{user.phone}}</span>
                    </div>
                </md-list-item>
                <md-list-item>
                    <div>
                        <md-icon>email</md-icon>
                        <span>{{user.email}}</span>
                    </div>
                </md-list-item>
            </md-card-header>
            <md-card-actions>
                <md-button @click="clicked">{{this.postButton}}</md-button>
            </md-card-actions>
        </md-card>
        <div v-if="postSeen">
            <div v-for="post in posts" :key="post.id">
                <post :post="post"/>
            </div>
        </div>
    </div>
</template>

<script>
    import getPosts from '../__data__/actions/get-posts'
    import Post from "../components/post.vue"
    export default {
        name: "User",
        components: {
            Post
        },
        props:{
          user: Object
        },
        data(){
            return{
                postButton: "Показать посты",
                text: 'Идет загрузка...',
                posts: [],
                postSeen: false,
            }
        },
        methods: {
            clicked: function () {
                if (this.postButton === "Показать посты"){
                    this.postButton = this.text;
                    getPosts(this.user.id).then((res) => this.posts = res);
                    this.postButton = "Скрыть посты"
                }else{
                    this.postButton = "Показать посты"
                }
                this.postSeen = !this.postSeen
            }
        }
    }
</script>

<style scoped>
    @import url('./style.css');
</style>