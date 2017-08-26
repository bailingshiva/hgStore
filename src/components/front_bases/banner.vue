<template>
  <div class="banner" ref="slider">
    <div class="banner-img" ref="sliderGroup"><a v-for="item in sliders" :href="item.linkUrl"><img ref="sItem"
                                                                                                   :src="item.imgUrl"></a>
    </div>
    <div class="banner-list">
      <div ref="dotsList"><span :class="{active: currentPageIndex===(index-1) }" v-for="(item, index) in sliders"></span></div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  export default{
    props: {
      sliders: {
        type: Array,
        default: []
      },
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    },
    data(){
      return {
        currentPageIndex:0
      }
    },
    mounted (){
      setTimeout(() => {
        this._initSlider()
        this._setSlider()
        if (this.autoPlay) {
          this._play()
        }
      }, 20)
      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
        this._initSlider()
        this.slider.refresh()
      })
    },
    activated() {
      if (this.autoPlay) {
        this._play()
      }
    },
    deactivated() {
      clearTimeout(this.timer)
    },
    beforeDestroy() {
      clearTimeout(this.timer)
    },
    methods: {
      _initSlider(){
        if (!this.sliders) {
          return
        }
        this.children = this.$refs.sliderGroup.children
        let width = 0
        let sliderWidth = this.$refs.slider.clientWidth
        for (var i = 0; i < this.children.length; i++) {
          let child = this.children[i];
          child.style.width = sliderWidth + 'px'
          width += sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
        this.$refs.slider.style.height = this.$refs.sItem[0].height + 'px'
        this.d_chidren = this.$refs.dotsList.children
        var d_width = 0
        for (var i = 0; i < this.d_chidren.length; i++) {
          d_width += 20
        }
        this.$refs.dotsList.style.width = d_width + 'px'
      },
      _setSlider(){
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: true,
          snapLoop: this.loop,
          snapThreshold: 0.3,
          snapSpeed: 400
        })
        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX
          if (this.loop) {
            pageIndex -= 1
          }
          this.currentPageIndex = pageIndex
          if (this.autoPlay) {
            this._play()
          }
        })
        this.slider.on('beforeScrollStart', () => {
          if (this.autoPlay) {
            clearTimeout(this.timer)
          }
        })
      },
      _play() {
        let pageIndex = this.currentPageIndex + 1
        if (this.loop) {
          pageIndex += 1
        }
        this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 400)
        }, this.interval)
      }
    }
  }
</script>
<style>
  .banner {
    width: 100%;
    overflow: hidden;
    min-height: 100px;
    position: relative
  }

  .banner-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .banner-img a {
    display: block;
    float: left;
  }

  .banner-img img {
    width: 100%;
  }

  .banner-list {
    position: absolute;
    bottom: 5px;
    height: 20px;
    width: 100%;
    left: 0;
  }

  .banner-list div {
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    height: 20px;
    padding: 0 5px;
  }

  .banner-list span {
    display: block;
    width: 10px;
    margin: 5px;
    float: left;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5)
  }
  .banner-list  .active{background: rgba(255, 255, 255, 1)}
</style>
