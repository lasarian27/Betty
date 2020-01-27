<template>
  <div class="container-fluid">
    <div class="page-head page-head-v2 row">
      <!--      <div class="col-md-4">-->
      <!--        <home-top-ten />-->
      <!--      </div>-->
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Competition</th>
              <th scope="col">Home</th>
              <th scope="col">Away</th>
              <th scope="col">Score</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="game in games" v-if="game.mtd.t1Scr < 10 && game.mtd.t2Scr < 10">
              <th>{{ game.tn2.substring(0, game.tn2.indexOf('|')) }}</th>
              <td>{{ game.mn.substring(0, game.mn.indexOf('·')) }}</td>
              <td>{{ game.mn.substring(game.mn.indexOf('·') + 1, game.mn.length) }}</td>
              <td>{{ game.mtd.t1Scr + " - " + game.mtd.t2Scr }}</td>
              <td>{{ game.mtd.min }}</td>
              <td>{{ game.mtd.status }}</td>
              <td @click="getInfo(game.bri)" class="btn btn-danger">Stats</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 0,
      statistics: [],
      games: []
    }
  },

  mounted () {
    this.getLiveGames()
  },

  methods: {
    getLiveGames () {
      setInterval(() => {
        this.$axios
          .get(`https://offer.superbet.ro/offer/getOfferByDate?compression=true&langId=2&
            controller=offer&method=getOfferByDate&currentStatus=active&offerState=live&preselected=true
            &live=1&startDate=${this.$moment().format('YYYY-MM-DD')}+08:00:00`)
          .then(({ data }) => {
            this.games = data.data
          })

        if (this.id) {
          this.$axios
            .get(`https://ftv4.sa-api.info/api/s7tmoKq6oAOPlxNs/ro/events/statistics?id=${this.id}_0`)
            .then(({ data }) => {
              this.statistics = data ? data.Statistics : 0
            })
        }
      }
      , 10000)
    },

    getInfo (id) {
      this.id = id
    }
  }
}
</script>
