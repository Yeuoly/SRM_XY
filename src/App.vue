<template>
  <VApp>
      <Header />
      <RouterView />
  </VApp>
</template>

<script>

  import Header from './components/items/Header';

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      //
    }
  }
}
</script>
<style lang="scss">
    @import "style/index.scss";
</style>