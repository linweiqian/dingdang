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
      <section class="jf_box">
        <div class="wrap_box">
          <img src="../../assets/images/jf-img1.png" alt />
          <img src="../../assets/images/jf-img2.png" alt />
          <img src="../../assets/images/jf-img3.png" alt />
        </div>
        <div class="wrap_box">
          <img src="../../assets/images/jf-img1.png" alt />
          <img src="../../assets/images/jf-img2.png" alt />
          <img src="../../assets/images/jf-img3.png" alt />
        </div>
      </section>
    </header>
    <Jump v-show="flag"></Jump>
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
    back() {
      this.$router.go(-1);
    },
    show() {
      this.flag = !this.flag;
    }
  },
  components: {
    Jump
  }
};
</script>
<style lang="scss">
// 头部
.header_search {
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #e5e5e5;
  .m_header_box {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    display: flex;
    background-color: #ffffff;
    .m_logo {
      flex: 1;
      text-align: center;
      padding-top: 4px;
      span {
        font-size: 24px;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .m_search {
      flex: 5;
      height: 36px;
      position: relative;
      padding-top: 3px;
      p {
        text-align: center;
        font-size: 16px;
        line-height: 42px;
      }
      span.m_icon_search {
        width: 100%;
        border-radius: 18px;
      }
      span.iconfont {
        display: block;
        z-index: 100;
        font-size: 20px;
      }
      input {
        width: 100%;
        background-color: #e8ecf0;
        border-radius: 18px;
        height: 30px;
        font-size: 12px;
        color: #a7b2ba;
        padding: 0 10px 0 27px;
        margin: 5px;
        position: relative;
      }
    }
    .m_meau {
      flex: 1;
      text-align: center;
      vertical-align: middle;
      span {
        padding-top: 10px;
        font-size: 20px;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
.jf_box {
  width: 100%;
  .wrap_box {
    width: 100%;
    margin-top: 50px;
    img {
      width: 100%;
      display: block;
    }
  }
}
</style>