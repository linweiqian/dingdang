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
    <section class="nav_order">
        <img class="sc-img" src="../../assets/images/sc-bg.png" alt="">
        <span>您暂无阅读记录哟~~</span>
        <router-link to="/index" tag="a">去书城逛逛</router-link>
        <Likes></Likes>
    </section>
    </div>
</template>
<script>
import Jump from "./../../components/Jump/Jump.vue";
import Likes from "./../../components/Like/Likes.vue";
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
        Jump,
        Likes
    }
}
</script>
<style lang="scss">
    .nav_order{
        padding-top: 80px;
        width: 100%;
        background-color:#EFF4FA;
        text-align: center;
        img.sc-img{
            width: 20%;
        }
        span{
            font-size: 12px;
            color: #676767;
            display: block;
            margin: 15px 0px;
        }
        a{
            font-size: 12px;
            color: #00c29a;
        }
    }
</style>