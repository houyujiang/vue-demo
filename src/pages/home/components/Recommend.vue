<template>
<div class="wrapper">
    <div class="top-title-wrapper">
        <img class="top-title-icon" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="热销推荐">
        <span class="top-title-desc">热销推荐</span>
    </div>
</div>
</template>
<script>
export default {
  name: 'Recommend'
}
</script>
<style lang="stylus" scoped>
.wrapper
    margin-top : .2 rem
    .top-title-wrapper
        position relative
        padding : .24rem 0rem .26rem
        .top-title-icon
            display inline-block
            overflow hidden
            width: .3 rem
            height : .3 rem
            margin-left : .2 rem
            vertical-align : top
        .top-title-desc
            font-size : .32 rem
            color : #212121
            margin-left : .08 rem
            line-height : .44 rem
</style>
