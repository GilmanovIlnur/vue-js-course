<template>
    <div class="users" >
        <div v-for="user in users" :key="user.id">
            <user :user="user"/>
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

</style>