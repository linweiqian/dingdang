<template>
  <div>
    <div class="layout-my">
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
      <!-- 导航跳转 -->
      <Jump v-show="flag"></Jump>
      <!-- 登录注册 -->
      <section class="gr_login">
        <div class="login_link">
          <van-button type="default" class="login" to="./Login" v-show="mylogin">登录/注册</van-button>
          <div class="wraper" v-show="myindex">
            <div class="person">
              <img :src="info.img" alt />
            </div>
            <div class="detail">
              <p>
                <a href="javascript:;">{{info.name}}</a>
              </p>
              <p>
                <a href="javascript:;">性别:男</a>
              </p>
              <p>
                <a href="javascript:;">余额:100</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- 用户记录 -->
      <section class="user-start">
        <div class="gr_sel">
          <ul>
            <li @click="collectionTo">
              <a href="javascript:;">
                <p class="num">0</p>
                <p class="sm">收藏的商品</p>
              </a>
            </li>
            <li @click="storeTo">
              <a href="javascript:;">
                <p class="num">0</p>
                <p class="sm">关注的店铺</p>
              </a>
            </li>
            <li @click="browseTo">
              <a href="javascript:;">
                <p class="num">0</p>
                <p class="sm">我的足迹</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <!-- 我的订单 -->
      <section class="my-dd clearfix" @click="orderTo">
        <div class="my-con">
          <a href="javascript:;">
            <div class="left">
              <img src="../assets/images/my-dd-logo.png" alt />
              <span>我的订单</span>
            </div>
            <div class="right">
              <span>查看全部购买商品</span>
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </a>
        </div>
      </section>
      <!-- 购物情况 -->
      <section class="order-section">
        <ul>
          <li>
            <a href="javascript:;">
              <span class="iconfont icon-gerenzhongxindingdandaifukuan"></span>
              <router-link to="/Order" tag="p">代付款</router-link>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="iconfont icon-daishouhuo"></span>
              <router-link to="/Order" tag="p">代收货</router-link>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="iconfont icon-tuihuanhuo"></span>
              <router-link to="/Order" tag="p">退换货</router-link>
            </a>
          </li>
        </ul>
      </section>
      <!-- 会员中心 -->
      <section class="my-vip" @click="vipTo">
        <div class="my-con">
          <a href="javascript:;">
            <div class="left">
              <img src="../assets/images/my-hy-logo.png" alt />
              <span>会员中心</span>
            </div>
            <div class="right">
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </a>
        </div>
      </section>
      <!-- 礼券 -->
      <section class="my-dd clearfix" @click="couponsTo">
        <div class="my-con">
          <a href="javascript:;">
            <div class="left">
              <img src="../assets/images/my-lj-logo.png" alt />
              <span>我的礼券</span>
            </div>
            <div class="right">
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </a>
        </div>
      </section>
      <!-- 积分折现 -->
      <section class="my-dd clearfix" @click="intergrationTo">
        <div class="my-con">
          <a href="javascript:;">
            <div class="left">
              <img src="../assets/images/my-jf-logo.png" alt />
              <span>积分折现</span>
            </div>
            <div class="right">
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </a>
        </div>
      </section>
      <!-- 我的电子书 -->
      <section class="my-dd clearfix" @click="booksTo">
        <div class="my-con">
          <a href="javascript:;">
            <div class="left">
              <img src="../assets/images/my-dzs-logo.png" style="width:18%" />
              <span>我的电子书</span>
            </div>
            <div class="right">
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </a>
        </div>
      </section>
      <!-- 我的礼品卡 -->
      <section class="my-dd clearfix" @click="giftTo">
        <div class="my-con">
          <a href="javascript:;">
            <div class="left">
              <img src="../assets/images/my-lpk-logo.png" style="width:18% " />
              <span>我的礼品卡</span>
            </div>
            <div class="right">
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </a>
        </div>
      </section>
      <!-- 收货地址 -->
      <section class="my-dd clearfix" @click="AddresTo">
        <div class="my-con">
          <a href="javascript:;">
            <div class="left">
              <img src="../assets/images/my-dw-logo.png" alt />
              <span>收货地址</span>
            </div>
            <div class="right">
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </a>
        </div>
      </section>
      <!-- 抢购 -->
      <section class="my-qg clearfix">
        <div class="my-con">
          <a href="javascript:;">
            <div class="left">
              <img src="../assets/images/my-qiang-logo.jpg" alt />
            </div>
            <span>爆品童书，限时48小时秒杀</span>
            <div class="right">
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </a>
        </div>
        <div class="my-con">
          <a href="javascript:;">
            <div class="left">
              <img src="../assets/images/my-qiang-logo.jpg" alt />
            </div>
            <span>爆品童书，限时48小时秒杀</span>
            <div class="right">
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </a>
        </div>
        <div class="my-con">
          <a href="javascript:;">
            <div class="left">
              <img src="../assets/images/my-qiang-logo.jpg" alt />
            </div>
            <span>爆品童书，限时48小时秒杀</span>
            <div class="right">
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </a>
        </div>
      </section>
      <!-- 客服反馈 -->
      <section class="my-kf clearfix" @click="callTo">
        <div class="my-con">
          <a href="javascript:;">
            <div class="left">
              <img src="../assets/images/my-kf-logo.png" style="width:18% " />
              <span>客服反馈</span>
            </div>
            <div class="right">
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </a>
        </div>
      </section>
      <section class="my-kf clearfix" @click="exit">
        <div class="my-con">
          <a href="javascript:;">
            <div class="left">
              <span class="iconfont icon-caozuo_zhuxiao_tuichudenglu icon"></span>
              <span>退出登录</span>
            </div>
            <div class="right">
              <span class="iconfont icon-youjiantou"></span>
            </div>
          </a>
        </div>
      </section>
      <Likes />
    </div>
  </div>
</template>
<script>
import Likes from "../components/Like/Likes";
import Vue from 'vue';
import { Toast } from 'vant';
import Jump from "../components/Jump/Jump.vue";
Vue.use(Toast);
export default {
  data() {
    return {
      active: 0,
      mylogin: true,
      myindex: false,
      flag:false,
      info: {}
    };
  },
  components: {
    Likes,
    Jump
  },
  created() {
    this.$axios
      .get(" http://106.15.204.183:5000/getdata", {
        params: {
          token: localStorage.logins
        }
      })
      .then(res => {
        this.info = res.data.result;
        if(localStorage.logins){
          this.myindex = true;
          this.mylogin=false;
        }else{
          this.myindex = false;
          this.mylogin = true;
        }
      });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    browseTo(){
      this.$router.push("/browse");
    },
    storeTo(){
      this.$router.push("/store");
    },
    exit() {
      localStorage.removeItem("logins");
      this.myindex = false;
      this.mylogin = true;
      Toast('退出登录');
      this.$router.push("/login")
    },
    show(){
      this.flag = !this.flag;
    },
    collectionTo(){
      this.$router.push("/collection")
    },
    vipTo(){
      this.$router.push("/vip")
    },
    couponsTo(){
      this.$router.push("/coupons")
    },
    intergrationTo(){
      this.$router.push("/intergration")
    },
    giftTo(){
      this.$router.push("/gift")
    },
    orderTo(){
      this.$router.push("/order");
    },
    booksTo(){
      this.$router.push("/books")
    },
    callTo(){
      this.$router.push("/call")
    },
    AddresTo(){
      this.$router.push("/myaddres")
    }
  }
};
</script>
<style lang="scss" scoped>
.layout-my {
  padding-bottom: 44px;
  padding-top: 42px;
}
// 头部
.header_search {
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #e5e5e5;
  .m_header_box {
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
        position: absolute;
        z-index: 100;
        top: 10px;
        left: 10px;
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
//登录注册
.gr_login {
  width: 100%;
  height: 97px;
  background: no-repeat url("../assets/images/user-bg.jpg") center;
  background-size: 100%;
  .login_link {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    .wraper {
      width: 100%;
      .person {
        width: 63px;
        height: 63px;
        float: left;
        overflow: hidden;
        border-radius: 10px;
        margin: 15px 0px 0px 15px;
        img {
          width: 100%;
        }
      }
      .detail {
        margin-top: 15px;
        margin-left: 15px;
        float: left;
        p {
          text-align: left;
          a {
            font-size: 12px;
            color: #ffffff;
          }
        }
      }
    }
    .login {
      display: inline-block;
      width: 100px;
      height: 32px;
      border-radius: 10px;
      border: 1px solid #ffffff;
      line-height: 32px;
      font-size: 14px;
      color: white;
      background-color: transparent;
      margin-top: 33px;
    }
  }
}
.user-start {
  width: 100%;
  .gr_sel {
    width: 100%;
    ul {
      width: 100%;
      li {
        float: left;
        width: 33.3%;
        position: relative;
        border-bottom: 1px solid #e5e5e5;
        a {
          display: block;
          width: 100%;
          padding: 6px 0;
        }

        p {
          text-align: center;
          font-size: 12px;
          color: #000000;
        }
      }
      li:nth-child(1)::after,
      li:nth-child(2)::after {
        content: "";
        display: block;
        position: absolute;
        height: 30px;
        width: 1px;
        background-color: #e5e5e5;
        right: 0px;
        top: 10px;
      }
    }
  }
}
// 我的订单
.my-dd,
.my-kf,
.my-lj,
.my-qg,
.my-vip {
  width: 100%;
  padding: 5px;
  .my-con {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #f6f6f6;
    a {
      width: 100%;
      display: block;
      line-height: 40px;
      .left {
        display: inline-block;
        img {
          width: 20%;
          margin-right: 5px;
        }
      }
      span {
        font-size: 12px;
        color: #4d525d;
      }
      .right {
        float: right;
        span {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
//会员中心
.my-vip {
  background-color: #eeeeee;
  padding: 6px 0px;
  .my-con {
    background-color: #ffffff;
    padding: 0px 5px;
    img {
      width: 10% !important;
    }
  }
}
//购物情况
.order-section {
  width: 100%;
  ul {
    width: 100%;
    height: 45px;
    li {
      width: 33.3%;
      height: 45px;
      float: left;
      text-align: center;
      a {
        display: block;
        color: #4d525d;
        span {
          font-size: 15px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
}
//抢购
.my-qg {
  font-size: 12px !important;
  width: 100%;
  background-color: #eeeeee;
  padding: 6px 0px;
  .my-con {
    background-color: #ffffff;
    width: 100%;
    padding: 0px 5px;
    position: relative;
    span {
      position: absolute;
      display: block;
      top: 0px;
      left: 30px;
    }
    img {
      display: inline-block;
      width: 30% !important;
    }
  }
}
.icon {
  margin-right: 5px;
}
</style>