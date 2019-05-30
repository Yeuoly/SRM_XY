<template>
  <v-app>
    <VToolbar app dark color="grey">
      <VToolbarTitle class="headline text-uppercase">
        <span>SRM_XY</span>
      </VToolbarTitle>
      <VSpacer></VSpacer>
    </VToolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      //
    }
  }
}
</script>
