<template>
    <div>
        <md-card class="md-transparent block2">
            <md-card-header>
                <md-card-header-text>
                    <div class="md-display-1 title">{{ post.title }}</div>
                    <div class="md-title"> {{ post.body }}</div>
                </md-card-header-text>
            </md-card-header>
        </md-card>
    </div>
</template>

<script>
    export default {
        name: "post",
        props:{
            post: Object
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    @import url('./style.css');
</style>