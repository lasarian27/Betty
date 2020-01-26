import Vue from 'vue'
import infiniteScroll from 'vue-infinite-scroll'
import HomeTopTen from '../components/home/HomeTopTen'

Vue.component('home-top-ten', HomeTopTen)

Vue.use(infiniteScroll)
