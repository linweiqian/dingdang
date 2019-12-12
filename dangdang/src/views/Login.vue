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
    <!-- 导航跳转 -->
      <Jump v-show="flag"></Jump>
    <!-- 登录界面 -->
    <div class="nav_login_index">
      <ul class="index_box">
        <li @click="num=0" :class="{actives:num == 0}" class="van_button active">
          <a href="javascript:;" :class="{actives:num == 0}">账号密码登录</a>
        </li>
        <li @click="num=1" :class="{actives:num == 1}" class="van_button">
          <a href="javascript:;" :class="{actives:num == 1}">短信快捷登录</a>
        </li>
      </ul>
      <!-- 账号密码登录 -->
      <div :class="{login_box:true,actives:num == 0}">
        <div class="zh_login">
          <span class="iconfont icon-zhanghao"></span>
          <input type="text" v-model="username" placeholder="请输入手机号/邮箱/昵称" />
        </div>
        <div class="mm_login">
          <span class="iconfont icon-mima active"></span>
          <input type="password" v-model="password" placeholder="请输入密码" />
        </div>
        <van-button type="primary" size="large" color="#F8ADB3" @click="login">登录</van-button>
        <p class="title">
          <router-link to="/repassword" tag="a" href="javascript:;" class="mm">忘记密码?</router-link>
          <a href="javascript:;" class="zc" @click="register">立即注册</a>
        </p>
        <ul class="sel_login">
          <li>
            <a href="javascript:;">
              <span class="iconfont icon-qq qq"></span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="iconfont icon-weibo wb"></span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="iconfont icon-zhifubao zfb"></span>
            </a>
          </li>
        </ul>
        <p class="over_text">
          <span>安全问题</span>
          <span>|</span>
          <span class="sel">登录代表您同意</span>
          <span>
            <a href="javascript:;">《当当隐私政策》</a>
          </span>
        </p>
      </div>
      <!-- 验证码登录 -->
      <div :class="{message_box:true,actives:num == 1}">
        <div class="yz_login">
          <span class="iconfont icon-shouji"></span>
          <input type="text" placeholder="请输入手机号" />
        </div>
        <van-button type="primary" size="large" color="#F8ADB3">获取验证码</van-button>
        <p class="title clearfix">
          <router-link to="/repassword" tag="a" href="javascript:;" class="mm">忘记密码?</router-link>
          <router-link to="/register" tag="a" href="javascript:;" class="zc">立即注册</router-link>
        </p>
        <ul class="sel_login">
          <li>
            <a href="javascript:;">
              <span class="iconfont icon-qq qq"></span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="iconfont icon-weibo wb"></span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <span class="iconfont icon-zhifubao zfb"></span>
            </a>
          </li>
        </ul>
        <p class="over_text">
          <span>安全问题</span>
          <span>|</span>
          <span class="sel">登录代表您同意</span>
          <span>
            <a href="javascript:;">《当当隐私政策》</a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { Toast } from 'vant';
import Jump from "../components/Jump/Jump.vue";
Vue.use(Toast);
export default {
  data() {
    return {
      num: 0,
      username: null,
      password: null,
      flag:false
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    show(){
      this.flag = !this.flag;
    },
    register() {
      this.$router.push("/register");
    },
    login() {
      if(this.username==null|| this.password==null){
        Toast('登录失败');
        return
      }
      this.$axios
        .get("http://106.15.204.183:5000/login", {
          params: {
            username: this.username,
            password: this.password,
          },
        })
        .then(res => {
          window.console.log(res, "登录成功");
          let token = res.data.result.token;
          localStorage.logins = token;
          if (localStorage.logins == token) {
            Toast('登录成功');
            this.$router.push("/my");
          }
        })
        .catch(err => {
          window.console.log(err, "登录失败");
          if(this.username==null || this.password==null){
            return
          }
            Toast('登录失败');
        });
    }
  },
  components:{
    Jump
  }
};
</script>
<style lang="scss" scoped>
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
// 登录界面
.nav_login_index {
  margin-top: 40px;
  width: 100%;
  padding: 36px 18px 0px 18px;
  ul.index_box {
    width: 100%;
    height: 55px;
    li {
      border-bottom: 1px solid #afafaf;
      width: 50%;
      height: 55px;
      text-align: center;
      line-height: 55px;
      float: left;
      a {
        color: #afafaf;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  // <!-- 账号密码登录 -->
  .login_box {
    display: none;
    width: 100%;
    .zh_login,
    .mm_login {
      position: relative;
      width: 100%;
      span {
        font-size: 24px;
        display: block;
        position: absolute;
        left: 0px;
        top: 0px;
      }
      .active {
        font-size: 18px;
        display: block;
        position: absolute;
        padding-left: 3px;
        left: 0px;
        top: 0px;
        line-height: 40px;
      }
      input {
        text-indent: 3em;
        width: 100%;
        height: 46px;
        background-color: #fafafa;
        border-bottom: 1px solid #ebebeb;
      }
    }
    .van-button {
      margin: 30px 0;
    }
    p.title {
      width: 100%;
      margin-bottom: 20px;
      a {
        color: #f3344a;
        font-size: 12px;
        display: inline-block;
      }
      .mm {
        float: left;
      }
      .zc {
        float: right;
      }
    }
    ul.sel_login {
      margin: 45px 0;
      width: 100%;
      height: 50px;
      li {
        height: 50px;
        width: 33.3%;
        text-align: center;
        float: left;
        a {
          width: 100%;
          display: block;
          span {
            font-size: 40px;
          }
          .qq {
            color: #98d4f7;
          }
          .wb {
            color: #ff999b;
          }
          .zfb {
            color: #a3baef;
          }
        }
      }
    }
    p.over_text {
      text-align: center;
      width: 100%;
      a,
      span {
        font-size: 12px;
        color: #999;
      }
      span {
        display: inline-block;
        margin: 0 5px;
      }
      .sel {
        color: #333;
      }
    }
  }
  // <!-- 验证码登录 -->
  .message_box {
    width: 100%;
    display: none;
    .yz_login {
      position: relative;
      width: 100%;
      span {
        font-size: 20px;
        display: block;
        position: absolute;
        left: 0px;
        top: 0px;
        line-height: 40px;
        padding-left: 5px;
      }
      .active {
        font-size: 18px;
        display: block;
        position: absolute;
        padding-left: 3px;
        left: 0px;
        top: 0px;
        line-height: 40px;
      }
      input {
        text-indent: 3em;
        width: 100%;
        height: 46px;
        background-color: #fafafa;
        border-bottom: 1px solid #ebebeb;
      }
    }
    .van-button {
      margin: 30px 0;
    }
    p.title {
      width: 100%;
      margin-bottom: 20px;
      a {
        color: #f3344a;
        font-size: 12px;
      }
      .mm {
        float: left;
      }
      .zc {
        float: right;
      }
    }
    ul.sel_login {
      margin: 45px 0;
      width: 100%;
      height: 50px;
      li {
        height: 50px;
        width: 33.3%;
        text-align: center;
        float: left;
        a {
          width: 100%;
          display: block;
          span {
            font-size: 40px;
          }
          .qq {
            color: #98d4f7;
          }
          .wb {
            color: #ff999b;
          }
          .zfb {
            color: #a3baef;
          }
        }
      }
    }
    p.over_text {
      text-align: center;
      width: 100%;
      a,
      span {
        font-size: 12px;
        color: #999;
      }
      span {
        display: inline-block;
        margin: 0 5px;
      }
      .sel {
        color: #333;
      }
    }
  }
  .actives {
    color: #323232 !important;
    font-weight: bold;
    display: block;
  }
  // li:hover,li:focus{
  //   border-bottom: 3px solid #323232 !important;
  // }
}
</style>