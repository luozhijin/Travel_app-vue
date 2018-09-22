<template>
  <div>
    <home-header ></home-header>
    <home-swiper :swiperList='swiperList'></home-swiper>
    <home-icons :iconList='iconList'></home-icons>
    <home-recommend :recommendList='recommendList'></home-recommend>
    <home-weekend :weekendList='weekendList'></home-weekend>
  </div>
</template>

<script>
// 导入首页组件
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
//用来法ajax请求的插件
import axios from 'axios'

//引入vuex插件
import { mapState } from 'vuex'
export default {
  name: 'Home',
   data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
   computed: {
    ...mapState(['city'])
  },
  created() {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        // console.log(data)
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  activated() {//当页面发生变化时数据并没有变化那么则会触发这个函数
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
    // this.getHomeInfo()不能通过数据更新来做否则会进入死循环
  }
}
</script>
<style>

</style>
