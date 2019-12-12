<template>
  <div>
    <div class="layout_detail">
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
    <section class="header_box">
      <van-tabs v-model="active">
        <van-tab title="商品">
          <Comments />
        </van-tab>
        <van-tab title="详情">
          <Describe/>
        </van-tab>
        <van-tab title="评论">
          <Goods/>
        </van-tab>
        <van-tab title="推荐">
          <Recommended/>
        </van-tab>
      </van-tabs>
    </section>
    </div>
  </div>
</template>
<script>
import Comments from "@/components/Detail/Comments.vue";
import Jump from "../components/Jump/Jump.vue";
import Describe from "../components/Detail/Describe.vue";
import Goods from "../components/Detail/Goods.vue";
import Recommended from "../components/Detail/Recommended.vue";

export default {
  data() {
    return {
      active: 0,
      flag:false
    };
  },
  components: {
    Comments,
    Jump,
    Describe,
    Goods,
    Recommended
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    show(){
      this.flag = !this.flag;
    }
  },
};
</script>
<style lang="scss">
.layout_detail{
  padding-top: 42px;
  padding-bottom: 40px;
}
.header_search{
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #fff;
  z-index: 10000;
}
.header_box {
  width: 100%;
  img {
    width: 85%;
  }
}
</style>