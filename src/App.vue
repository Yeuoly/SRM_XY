<template>
  <VApp>
      <Header />
      <KeepAlive>
          <VSlideYTransition mode="out-in">
              <RouterView></RouterView>
          </VSlideYTransition>
      </KeepAlive>
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