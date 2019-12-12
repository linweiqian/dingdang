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
        <div class="m_meau">
          <div class="m_meau" @click="show">
            <span class="iconfont icon-gengduo" v-show="!flags"></span>
            <span class="iconfont icon-cross-fill" v-show="flags"></span>
          </div>
        </div>
      </div>
    </header>
          <!-- 导航跳转 -->
      <Jump v-show="flags"></Jump>
    <!-- 有商品时内容 -->
    <section class="checkbox">
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox class="card-goods__item" v-for="(item,z) in goods" :key="z" :name="item.id">
          <van-card
            :title="item.title"
            :desc="item.desc"
            :num="item.num"
            :price="formatPrice(item.price)"
            :thumb="item.thumb"
          />
          <van-button class="del" type="default" style="float:right" size="mini" @click="del(z)">删除</van-button>
        </van-checkbox>
      </van-checkbox-group>
      <van-submit-bar
        :price="totalPrice*100"
        :disabled="!checkedGoods.length"
        :button-text="submitBarText"
        @submit="onSubmit"
      />
    </section>
    <!-- 无商品时内容 -->
    <section class="g_box" v-if="flag">
      <div class="g_content">
        <div class="list-null">
          <p class="title">您还没有购买任何商品</p>
          <p class="select">
            <a href="javascript:;" @click="go">逛一逛</a>
            <a href="javascript:;">我的收藏</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from "vant";
import { mapState } from "vuex";
import Jump from "../components/Jump/Jump.vue";
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup,
    Jump
  },
  data() {
    return {
      flags:false,
      checkedGoods: this.$store.state.Cars.checkedGoods,
      active: 0
    };
  },
  computed: {
    ...mapState({
      goods: state => state.Cars.goodslists,
    }),
    submitBarText() {
      const count = this.checkedGoods.length;
      return "提交订单" + (count ? `(${count})` : "");
    },
    totalPrice() {
      return this.goods.reduce(
        (total, item) =>
          total +
          (this.checkedGoods.indexOf(item.id) !== -1
            ? item.price * item.num
            : 0),
        0
      );
    },
    flag() {
      return this.goods.length > 0 ? false : true;
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    formatPrice(price) {
      return (price / 1).toFixed(2);
    },
    onSubmit() {
      Toast("进入结算");
      this.$router.push("/pay");
    },
    del(i) {
      // window.console.log(this.goods);
      this.goods.splice(i, 1);
    },
    go() {
      this.$router.push("/index");
    },
    show(){
      this.flags = !this.flags;
    }
  }
};
</script>

<style lang="scss">
// 有商品时内容
.card-goods {
  margin-top: 46px;
  padding: 10px 0;
  background-color: #fff;
  .del {
    position: absolute;
    bottom: 15px;
    right: 8px;
  }
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
// 无商品时内容
.g_box {
  width: 100%;
  background-color: #f2f2f2;
  position: fixed;
  top: 46px;
  bottom: 0px;
  .g_content {
    width: 100%;
    height: 200px;
    background: no-repeat url("../assets/images/cars-bg.gif") center;
    background-size: 33%;
    .list-null {
      width: 100%;
      padding: 200px 0 22px;
      .title {
        width: 100%;
        height: 36px;
        text-align: center;
        font-size: 12px;
        color: #777;
      }
      .select {
        width: 100%;
        text-align: center;
        line-height: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        a {
          float: left;
          font-size: 12px;
          display: block;
          width: 130px;
          height: 40px;
          border-radius: 12px;
          color: #777;
          border: 1px solid #777;
          margin: 0 15px;
        }
      }
    }
  }
}
</style>