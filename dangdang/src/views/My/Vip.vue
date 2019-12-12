<template>
  <div>
    <!-- 头部 -->
    <header class="header_search">
      <div class="m_header_box">
        <div class="m_logo">
          <span class="iconfont icon-zuobian" @click="back"></span>
        </div>
        <div class="m_search">
          <p>{{this.$route.name}}</p>
        </div>
        <div class="m_meau" @click="show">
          <span class="iconfont icon-gengduo" v-show="!flag"></span>
          <span class="iconfont icon-cross-fill" v-show="flag"></span>
        </div>
      </div>
    </header>
    <Jump v-show="flag"></Jump>
    <section class="big_box">
      <img  class="img" src="../../assets/images/hyk-img.jpg" alt />
      <p class="val">您是尊贵的VIP会员，全场享受1折哟~~</p>
      <van-button type="default" to="/index">马上去逛逛</van-button>
    </section>
  </div>
</template>
<script>
import Jump from "./../../components/Jump/Jump.vue";
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    show() {
      this.flag = !this.flag;
    },
    back() {
      this.$router.go(-1);
    }
  },
  components: {
    Jump
  }
};
</script>
<style lang="scss">
.big_box {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 45px;
  left: 0px;
  bottom: 0px;
  background-color: #f2f2f2;
  img.img {
    padding: 0 20px;
    width: 100%;
    height: 380px;
    height: 160px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: 100px auto;
  }
  p.val {
    text-align: center;
    font-size: 16px;
    color: #929292;
    margin-top: 280px;
  }
  .van-button {
    margin: 50px auto;
    margin-left: 35%;
    background-color: #ffffff;
    border-radius: 10px;
    font-size: 13px;
    color: #777;
  }
}
</style>