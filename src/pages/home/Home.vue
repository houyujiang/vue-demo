<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-zone-icons></home-zone-icons>
    <home-hot-top></home-hot-top>
    <recommend></recommend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeZoneIcons from './components/HomeZoneIcons'
import HomeHotTop from './components/HotTop'
import Recommend from './components/Recommend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeZoneIcons,
    HomeHotTop,
    Recommend
  }
}
</script>
<style>
</style>
