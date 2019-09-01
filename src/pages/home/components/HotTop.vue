<template>
  <div class="top-group">
    <div class="top-group-tilte">
      <img class="group-img" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
      <span class="group-title">本周热门榜单</span>
    </div>
    <ul class="top-group-item-list">
      <li class="list-item">
        <a class="item-link" href="">
          <div class="item-top-img"><img class="top-img" src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png"></div>
          <div class="item-img"><img class="top-img" src="http://img1.qunarzz.com/sight/p0/1411/1a/5582f9f24bc50b475a8cbda4c5ac8d24.water.jpg_250x250_c30b25dc.jpg"></div>
          <div class="item-img-desc">秦始皇陵博物院</div>
          <div class="item-price-desc">
            <span class="price-color">¥108</span>
            起
          </div>
        </a>
      </li>
      <li class="list-item">
        <a class="item-link" href="">
          <div class="item-top-img"><img class="top-img" src="http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png"></div>
          <div class="item-img"><img class="top-img" src="http://img1.qunarzz.com/sight/p0/1411/b8/f5fd5955bdecc923ce6d40ce453160eb.water.jpg_250x250_de106da6.jpg"></div>
          <div class="item-img-desc">陕西历史博物馆</div>
          <div class="item-price-desc">
            <span class="price-color">¥30</span>
            起
          </div>
        </a>
      </li>
      <li class="list-item">
        <a class="item-link" href="">
          <div class="item-top-img"><img class="top-img" src="http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png"></div>
          <div class="item-img"><img class="top-img" src="http://img1.qunarzz.com/sight/p0/1505/18/18ffcca94b1b7ca2.water.jpg_250x250_70d9c70e.jpg"></div>
          <div class="item-img-desc">长恨歌</div>
          <div class="item-price-desc">
            <span class="price-color">¥223</span>
            起
          </div>
        </a>
      </li>
      <li class="list-item">
        <a class="item-link" href="">
          <div class="item-top-img"><img class="top-img" src="http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png"></div>
          <div class="item-img"><img class="top-img" src="http://img1.qunarzz.com/sight/p0/1411/67/272c374a876b2f9ec9860551c993c521.water.jpg_250x250_af5e53bc.jpg"></div>
          <div class="item-img-desc">西安钟楼</div>
          <div class="item-price-desc">
            <span class="price-color">¥15</span>
            起
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeHotTop'
}
</script>
<style lang="stylus" scoped>
.top-group
    width : 100%
    background : #fff
    margin-top : 0.2rem
    .top-group-tilte
        position relative
        padding  : .24rem 0 .24rem
        .group-img
            display : inline-block
            overflow hidden
            width: .3rem
            height: .3rem
            margin-left: .2rem
            vertical-align :top
        .group-title
            display: inline-block
            margin-left: .08rem
            height: .44rem
            color: #212121
            font-size: .32rem
            line-height: .44rem
    .top-group-item-list
        padding: 0 .24rem
        overflow-x: scroll
        white-space: nowrap
        .list-item
            position: relative;
            display: inline-block;
            padding: .06rem 0 .2rem
            width: 2rem
            .item-link
                display: block
                width: 100%
                height: 100%
              .item-top-img
                  position: absolute
                  top: 0
                  left: 0
                  z-index: 1
                  overflow: hidden
                  width: .84rem
                  height: .4rem
                .top-img
                  width: 100%
              .item-img
                  overflow: hidden
                  width: 2rem
                  height: 0
                  padding-bottom: 100%
              .item-img-desc
                  margin-top: .12rem
                  color: #212121;
                  font-size: .24rem
                  ine-height: .32rem
                  text-align: center
              .item-price-desc
                  color: #616161
                  font-size: .24rem
                  line-height: .36rem
                  text-align: center
                  .price-color
                      color: #ff8300
</style>
