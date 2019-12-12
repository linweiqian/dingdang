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
    <!-- 无订单 -->
    <section class="nav_order" v-show="temp">
      <span class="iconfont icon-sign103"></span>
      <span>您暂无订单哟~~</span>
    </section>
    <!-- 有订单 -->
    <section class="box_order">
      <section class="nav_pay">
        <ul class="clearfix">
          <li v-for="(items,i) in payGoods" :key="i">
            <div class="fl">
              <img :src="items.thumb" alt />
            </div>
            <div class="fr">
              <p class="pirce">￥{{items.price|numFilter}}</p>
              <p class="yf">共1件，运费：￥6元</p>
              <span class="iconfont icon-youjiantou"></span>
               <p class="end">
                   <a class="iconfont icon-distribution">配送中:</a>
               已支付
              </p> 
              </div>

          </li>
        </ul>
      </section>
    </section>
  </div>
</template>
<script>
import Jump from "./../../components/Jump/Jump.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      flag: false,
      temp:false
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
  },
  computed: {
    ...mapState({
      payGoods: state => state.Cars.goodslists
    })
  },
  filters: {
    numFilter(value) {
      let realVal = "";
      if (value) {
        // 截取当前数据到小数点后三位
        let tempVal = parseFloat(value).toFixed(3);
        realVal = tempVal.substring(0, tempVal.length - 1);
      } else {
        realVal = "--";
      }
      return realVal;
    }
  }
};
</script>
<style lang="scss">
.nav_order {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  padding-top: 80px;
  width: 100%;
  background-color: #eff4fa;
  text-align: center;
  span {
    font-size: 12px;
    color: #676767;
    display: block;
  }
}
.box_order {
  width: 100%;
  .nav_pay {
    width: 100%;
    ul {
      width: 100%;
      margin-top: 10px;
      li {
        position: relative;
        margin-top: 5px;
        padding: 5px 15px;
        width: 100%;
        background-color: #fafafa;
        border-bottom: 1px solid #f0f0f0;
        height: 82px;
        .fl {
          float: left;
          img {
            width: 52px;
            height: 52px;
          }
        }
        .fr {
          float: right;
          p {
            margin: 5px 0px;
            text-align: right;
            padding-right: 18px;
          }
          p.pirce {
            font-size: 16px;
            color: #ff2832;
          }
          p.yf {
            font-size: 13px;
            color: #000;
          }
          span {
            display: block;
            font-size: 20px;
            position: absolute;
            right: 3px;
            top: 20px;
          }
          p.end{
              width: 100%;
              font-size: 12px;
              color: #676767;
          }
          a{
              font-size: 12px;
              color: #676767;
          }
        }
      }
    }
  }
}
</style>