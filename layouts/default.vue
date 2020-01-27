<template>
  <div :class="[ `wrapper-page-${routeName}` ]" class="be-wrapper">
    <app-content />

    <app-footer />
  </div>
</template>

<script>
import AppContent from '~/components/layout/Content'
import AppFooter from '~/components/layout/Footer'

export default {
  components: {
    AppContent,
    AppFooter
  },

  data () {
    return {
      showSidebar: true
    }
  },

  computed: {
    routeName () {
      return this.$route.name.replace(/[^0-9a-z]/gi, '-')
    }
  },

  mounted () {
    this.$nextTick(() => {
      // window.addEventListener('resize', () => {
      //   console.log(11, window)
      // });
    })
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.be-wrapper {
  margin: 20px;
}
</style>
