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
    <div class="nav_register_index">
      <p>
        <a href="javascript:;">注册新用户</a>
      </p>
      <div class="yz_login">
        <span class="iconfont icon-zhanghao nc"></span>
        <input type="text" placeholder="请输入昵称" v-model="username" />
      </div>
      <div class="yz_login">
        <span class="iconfont icon-mima"></span>
        <input type="password" placeholder="请输入密码" v-model="password" />
      </div>
      <div class="yz_login">
        <span class="iconfont icon-mima"></span>
        <input type="password" placeholder="确认密码" v-model="password1" />
      </div>
      <van-button type="primary" size="large" color="#F8ADB3" @click="registerTo">点击注册</van-button>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant';
import Jump from "../components/Jump/Jump.vue";
export default {
  data() {
    return {
      username: null,
      password: null,
      password1: null,
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
    registerTo() {
      if ((this.password = this.password1)) {
        this.$axios
          .get("http://106.15.204.183:5000/register", {
            params: {
              username: this.username,
              password: this.password
            }
          })
          .then(res => {
            window.console.log(res);
            // this.$router.push("/Login");
            if(res.data.code == 200){
              Toast('注册成功');
              this.$router.push("/login");
            }
          })
          .catch(err => {
            window.console.log(err);
            Toast('注册失败');
          });
      }
    }
  },
  components:{
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
.nav_register_index {
  width: 100%;
  padding: 80px 18px 0px 18px;
  p {
    text-align: center;
    margin-bottom: 40px;
    a {
      font-weight: bold;
      color: #323232;
      font-size: 16px;
    }
  }
  .yz_login {
    position: relative;
    width: 100%;
    .nc {
      font-size: 25px;
      padding-left: 2px;
    }
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
    margin-top: 50px;
  }
}
</style>