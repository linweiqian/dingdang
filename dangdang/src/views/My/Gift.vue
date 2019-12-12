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
    <section class="nav_gift">
      <div class="box">
        <p class="ye">
          <span>账户余额</span>
          <span>(元)</span>
        </p>
        <p class="je">0</p>
        <p class="lbk_box">
           <span class="text">激活礼品卡</span>
        </p>
      <div class="endbox">
          <img src="../../assets/images/nocard.png" alt="">
          <p class="text">您还没有礼品卡</p>
          <a href="javascript:;">去礼品卡中心购买>></a>
      </div>
      </div>
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
    .nav_gift{
        width: 100%;
        .box{
            padding-top: 50px;
            width: 100%;
            background-color: #4F4949;
            padding-bottom: 50px;
            p{
                margin: 15px 0px;
            }
            .ye{
                text-align: center;
                width: 100%;
                span{
                    font-size: 14px;
                    color: #ffffff;
                }
            }
            .je{
                text-align: center;
                width: 100%;
                font-size: 28px;
                color: #ffffff;
                font-weight: bold;
            }
            .lbk_box{
                width: 100%;
                text-align: center;
                .text{
                    padding: 5px 10px;
                    display: inline-block;
                    border: 1px solid #ffffff;
                    font-size: 14px;
                    color: #ffffff;
                    border-radius: 15px;
                }
            }
        }
        .endbox{
            width: 100%;
            border-radius: 10px;
            background-color: #ffffff;
            text-align: center; 
            padding: 20px 0px;
            img{
                width: 82px;
                height: 52px;
                margin-top: 20px;
            }
        }
    }
</style>