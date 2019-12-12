<template>
  <div>
      <header class="header_search">
        <div class="m_header_box">
          <div class="m_logo">
            <span class="iconfont icon-zuobian" @click="back"></span>
          </div>
          <div class="m_search">
            <p>{{this.$route.name}}</p>
          </div>
          <div class="m_meau">
          </div>
        </div>
      </header>
    <section class="big_box">
      <img src="../../assets/images/guanzhu-shop.png" alt="">
      <p class="top">您还没有收藏哟~~</p>
      <van-button type="default" to="/index">马上去逛逛</van-button>
    </section>
  </div>
</template>
<script>
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
    },
}
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
      p{
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
.big_box {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 45px;
  left: 0px;
  bottom: 0px;
  background-color: #f2f2f2;
  img {
    width: 57px;
    height: 57px;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: 100px auto;
  }
  p.top{
      text-align: center;
      font-size: 16px;
      color: #929292;
      margin-top: 180px;
  }
  .van-button{
      margin: 50px auto;
      margin-left: 35%;
      background-color:#ffffff;
      border-radius: 10px;
      font-size: 13px;
      color: #777;
  }
}
</style>