<template>
  <div>
    <button @click="getTopGames" class="btn btn-primary">Search games</button>
    <div class="page-head page-head-v2">
      <home-top-ten :games="games"></home-top-ten>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      games: []
    }
  },

  methods: {
    getTopGames () {
      this.$axios.get('https://offer.superbet.ro/offer/getTopTenOffer?compression=true&langId=2&controller=offer&method=getTopTenOffer')
        .then(({ data }) => {
          this.games = data.data
          console.log(data)
        })
    }

  }
}
</script>
