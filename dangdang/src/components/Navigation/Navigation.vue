<template>
  <div>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" class="van-tabbar" v-if="isGuide">
      <van-tabbar-item to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="qr-invalid">分类</van-tabbar-item>
      <van-tabbar-item to="/worth" icon="bag-o">值得买</van-tabbar-item>
      <van-tabbar-item to="/settlement" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="contact">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  computed: {
    isGuide() {
      return this.$route.path == "/" ||
        this.$route.path == "/cars" ||
        this.$route.path == "/Login" ||
        this.$route.path == "/register" ||
        this.$route.path == "/login" ||
        this.$route.path == "/detail" ||
        this.$route.path == "/settlement" ||
        this.$route.path == "/search" ||
        this.$route.path == "/repassword" ||
        this.$route.path == "/browse" ||
        this.$route.path == "/store" ||
        this.$route.path == "/collection"||
        this.$route.path == "/vip"||
        this.$route.path == "/coupons"||
        this.$route.path == "/intergration"||
        this.$route.path == "/gift"||
        this.$route.path == "/order"||
        this.$route.path == "/books"||
        this.$route.path == "/call"||
        this.$route.path == "/addres"||
        this.$route.path == "/myaddres"||
        this.$route.path == "/pay"||
        this.$route.path == "/Order"

        ? false
        : true;
    }
  }
};
</script>
  <style lang="scss" scoped>
.van-tabbar {
  border-top: 1px solid #e5e5e5;
}
.van-tabbar-item--active {
  color: #7d7e80;
}
</style>
  