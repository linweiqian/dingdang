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
        <a href="javascript:;">请输入要找回的账号</a>
      </p>
      <div class="yz_login">
        <span class="iconfont icon-zhanghao nc"></span>
        <input type="text" placeholder="手机号或邮箱" />
      </div>
      <van-button type="primary" size="large" color="#F8ADB3">获取验证码</van-button>
    </div>
    </div>
</template>
<script>
import Jump from "../components/Jump/Jump.vue";
export default {
    data(){
        return{
            flag:false
        }
    },
    methods:{
        back(){
          this.$router.go(-1);
        },
        show(){
            this.flag = !this.flag;
        }
    },
    components:{
        Jump
    }
}
</script>
<style lang="scss">
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