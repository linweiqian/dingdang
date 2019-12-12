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
        <ul class="clearfix">
            <li>
                <span class="txt">常见问题</span>
                <span class="iconfont icon-youjiantou"></span>
            </li>
            <li>
                <span class="txt">在线客服</span>
                <span class="iconfont icon-youjiantou"></span>
            </li>
            <li>
                <span class="txt">问题反馈</span>
                <span class="iconfont icon-youjiantou"></span>
            </li>
        </ul>
    </section>
    </div>
</template>
<script>
import Jump from "./../../components/Jump/Jump.vue";
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
    }
}
</script>
<style lang="scss">
    .nav_order{
        width: 100%;
        text-align: center;
        ul{
            width: 100%;
            li{
                background-color: #ffffff;
                width: 100%;
                height: 63px;
                padding: 0px 15px;
                line-height: 31px;
                border-bottom: 1px solid #e6e6e6;
                border-top: 1px solid #e6e6e6;
                span{
                    font-size: 12px;
                    color: #505050;
                }
                .txt{
                    float: left;
                }
                .iconfont{
                    float: right;
                }
            }
        }
    }
</style>