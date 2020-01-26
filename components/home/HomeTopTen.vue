<template>
  <div class="items">
    <div class="group-header__wrapper">
      <div class="group-header">
        <div class="group-header__details">
          <span title="Top 10" class="group-header__details-title">
            Top 10
          </span>
        </div>
      </div>

      <div v-for="game in games">
        <div class="details-header">
          <div class="details-header__event-collection">
            <span class="details-header__event-collection-wrapper">
              <span class="details-header__event-collection-title">
                {{ game.tn2.substring(0, game.tn2.indexOf('|')) }}
              </span>
            </span>
          </div>
        </div>

        <div class="event-row-container">
          <div class="event-row" style="height: auto; min-height: auto">
            <div class="event-row__layout">
              <div class="event-summary">
                <div class="event-summary__match-indicator-wrapper">
                  <span class="event-summary__match-indicator-day">{{ $moment(game.mld).format('dddd') }}</span>
                  <span class="event-summary__match-indicator-time">{{ $moment(game.mld).format('LT') }}</span>
                </div>
                <div class="event-summary__competitors-and-scores">
                  <div class="event-summary__competitors-wrapper" style="height: auto; min-height: auto">
                    <span class="event-summary__competitors-team1">{{ game.mn.replace('·', ' vs ') }}</span>
                  </div>
                </div>
              </div>
              <div class="event-row___markets">
                <div class="primary-market__wrapper">
                  <div class="primary-market" style="max-width: none">
                    <div class="pick__click-buffer">
                      <button title="Final" class="pick actionable">
                        <span class="indicator actionable"></span>
                        <span title="1" class="market actionable">1</span>
                        <span class="odd actionable">
                          <span class="value old actionable">{{ findOdd(game.odds, '11') }}</span>
                          <span class="value new actionable">{{ findOdd(game.odds, '11') }}</span>
                        </span>
                      </button>
                    </div>
                    <div v-if="findOdd(game.odds, '10')" class="pick__click-buffer">
                      <button title="Final" class="pick actionable">
                        <span class="indicator actionable"></span>
                        <span title="X" class="market actionable">X</span>
                        <span class="odd actionable">
                          <span class="value old actionable">{{ findOdd(game.odds, '10') }} </span>
                          <span class="value new actionable">{{ findOdd(game.odds, '10') }}</span>
                        </span>
                      </button>
                    </div>
                    <div class="pick__click-buffer">
                      <button title="Final" class="pick actionable">
                        <span class="indicator actionable"></span>
                        <span title="2" class="market actionable">2</span>
                        <span class="odd actionable">
                          <span class="value old actionable">{{ findOdd(game.odds, '12') }}</span>
                          <span class="value new actionable">{{ findOdd(game.odds, '12') }}</span></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    games: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    findOdd (odds, type) {
      const found = odds.find(odd => odd.oc === type)
      return found ? found.ov : null
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  margin-top: 50px;
  max-width: 270px;
  text-align: center;

  .details-header {
    .details-header__event-collection {
      width: 100%;
      height: auto;
    }
  }

  .event-summary__match-indicator-wrapper {
    width: 100%;
    justify-content: center;
  }

  .event-summary__competitors-wrapper {
    width: 100%;
  }

  .group-header, .details-header {
    top: 0;
  }

  .event-row___markets {
    justify-content: center;
  }
}
</style>
