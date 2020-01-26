<template>
  <nav class="navbar navbar-expand fixed-top be-top-header">
    <div class="container-fluid">
      <div class="be-navbar-header"><a class="navbar-brand" href="/"></a></div>

      <div v-show="title" class="page-title"><span>{{ title }}</span></div>
    </div>

  </nav>
</template>

<script>
import { get } from 'lodash-es'

export default {
  computed: {
    title () {
      return get(this.$route, 'meta.title')
    }
  }
}
</script>
