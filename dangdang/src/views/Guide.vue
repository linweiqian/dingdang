<template>
  <div>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/images/yd1.jpg" class="animated jackInTheBox" v-show="flag" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/yd2.jpg" class="animated bounceInDown" v-show="flag" alt />
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/yd3.jpg" class="animated zoomInUp" v-show="flag" alt />
          <van-button
            color="linear-gradient(to right, #4bb0ff, #6149f6)"
            class="animated bounceInDown"
            size="normal" v-show="flag" @click="go"
          >欢迎使用</van-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import Vue from 'vue';
import { Button } from 'vant';
Vue.use(Button);
export default {
  data() {
    return {
      flag:true
    };
  },
  methods: {
    go(){
      this.$router.push("/index")
    }
  },
  mounted() {
    let _this = this;
    new Swiper(".swiper-container", {
      on: {
        slideChangeTransitionStart: function() {
          _this.flag=false;
        },
        slideChangeTransitionEnd: function() {
          _this.flag=true;
        }
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
}
.swiper-slide {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 18px;
  background: #fff;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .van-button {
    position: absolute;
    bottom: 20%;
    left: 35%;
    opacity: 0.8;
  }
}
</style>
