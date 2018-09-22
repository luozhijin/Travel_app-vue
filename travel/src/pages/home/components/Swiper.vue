<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      // 对引入的VueAwesomeSwiper插件的轮播图组件进行相关的配置
      swiperOption: {
        // 加上滚动的小点
        pagination: '.swiper-pagination',
        // 可以循环轮播图
        loop: true
      }
    }
  },
  props:{
    swiperList:Array
  },
   computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>
/* 通过对height=0,overflow:hidden,padding-bottom:31.2,就是设置高和宽的比例
   .wrapper >>>表示这个组件的样式不受局限只要它下面包含的这个类 这个就可以
*/
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
