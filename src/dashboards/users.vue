<template>
  <div class="users" >
      <user/>
    <div v-for="user in users" :key="user.id">
            <md-card class="md-primary block">
                <md-card-header>
                    <md-card-header-text>
                        <div class="md-subhead">{{ user.username }}</div>
                        <div class="md-title"> @{{ user.name }}</div>
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
                    <md-button @click="clicked">Показать посты</md-button>
                </md-card-actions>
            </md-card>
        </div>
    </div>
</template>

<script>
import getUsers from '../__data__/actions/get-users'
import User from '../components/user.vue'

export default {
    name: 'Users',
    components:{
      User
    },
    data() {
      return {
          text: 'Идет загрузка...',
          users: []
      }
  },
  created: function () {
    getUsers().then((res) => this.users = res)
  }

}
</script>

<style scoped>
  @import url('./style.css');
</style>