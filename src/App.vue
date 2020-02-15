<template>
  <div id="app">
      <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">

            <span class="md-title">Пользователи</span>
          </div>

        </div>

        <div class="md-toolbar-row">
          <md-tabs md-sync-route class="md-primary">
            <md-tab id="tab-rick" to="/" md-label="Пользователи" exact></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {}
}
</script>
