<template>
<div class="zone-icons">
    <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content"
            src="https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" >
        </div>
         <p class="icon-desc">景点门票</p>
    </div>
    <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content"
            src="https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png" >
        </div>
         <p class="icon-desc">故宫</p>
    </div>
    <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content"
            src="https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png" >
        </div>
         <p class="icon-desc">北京必游</p>
    </div>
    <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content"
            src="https://imgs.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png" >
        </div>
         <p class="icon-desc">水上乐园</p>
    </div>
    <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content"
            src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/2a529bd379b0f54da0a97b49e9798a65.png" >
        </div>
         <p class="icon-desc">大明宫</p>
    </div>
    <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content"
            src="https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" >
        </div>
         <p class="icon-desc">动植物园</p>
    </div>
    <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content"
            src="https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png" >
        </div>
         <p class="icon-desc">华清池</p>
    </div>
    <div class="icon">
        <div class="icon-img">
            <img class="icon-img-content"
            src="https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png" >
        </div>
         <p class="icon-desc">兵马俑</p>
    </div>
</div>
</template>
<script>
export default {
  name: 'HomeZoneIcons'
}
</script>
<style lang="stylus" scoped>
.zone-icons
    overflow : hidden
    width : 100%
    height : 0
    padding-bottom : 50%
    .icon
        position : relative
        overflow : hidden
        width : 25%
        height : 0
        float : left
        padding-bottom : 25%
        .icon-img
            position : absolute
            top : 0
            left : 0
            right : 0
            bottom : 0.44rem
            box-sizing : border-box
            padding : .1rem
            .icon-img-content
                display : block
                margin : 0 auto
                height : 100%
        .icon-desc
            position : absolute
            left : 0
            right : 0
            bottom : 0
            line-height : .44rem
            height : .44rem
            color : #333
            text-align : center
</style>
