<template>
  <div class="be-content">

    <div v-show="false" class="page-head">
      <h2 v-show="title" class="page-head-title">{{ title }}</h2>

      <nav v-if="false" aria-label="breadcrumb" role="navigation">
        <ol class="breadcrumb page-head-nav">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Pages</a></li>
          <li class="breadcrumb-item active">Blank Page Header</li>
        </ol>
      </nav>
    </div>

    <div class="main-content">
      <nuxt />
    </div>

  </div>
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
