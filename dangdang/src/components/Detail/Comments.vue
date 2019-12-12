<template>
  <div>
    <!-- 头部 -->
    <section class="header-content">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="http://img3m5.ddimg.cn/31/10/24195235-3_e_6.jpg" alt />
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="http://img3m5.ddimg.cn/31/10/24195235-1_e_7.jpg" alt />
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <img src="http://img3m5.ddimg.cn/31/10/24195235-4_e_3.jpg" alt />
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </section>

    <section class="text_content">
      <p class="top">
        <span class="dangdang">叮咚自营</span>
        <span class="title">{{list.title}}</span>
      </p>
      <p class="detail">
        <a href="javascript:;">傅雷经典传世之作，打开艺术鉴赏之门。全新修订，彩色典藏版。如果去博物馆只能带一本书，那么就带这一本。艺术是人类热情的流露，生活的自白。</a>
      </p>
      <p class="link">
        <a href="javascript:;">艺术传记每满100减50，点击进入>></a>
      </p>
      <p class="cost">
        <span class="piece">{{list.price}}</span>
        <span class="dz">(4.75折)</span>
        <span class="tz">降价通知</span>
        <span class="dzs">电子书￥21.59</span>
      </p>
      <p class="dj">
        定价
        <span>￥68.00</span>
      </p>
      <p class="xs">
        <span>限时抢</span>
      </p>
    </section>
    <section class="score">
      <div class="fl">
        <div class="df">
          <span class="num">9.1</span>
          <van-rate v-model="value" name="star-o" />
        </div>
        <div class="pf">
          <span>0人评分</span>
          <span>精彩评分送积分</span>
        </div>
      </div>
      <div class="fr">
        <a href="javascript:;">我要写评论</a>
      </div>
    </section>
    <!-- 根据喜好 -->
    <Likes />
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="carsTo" />
      <van-goods-action-button type="warning" text="加入购物车" @click="cars" />
      <van-goods-action-button type="danger" text="立即购买" @click="go" />
    </van-goods-action>
  </div>
</template>
<script>
import Swiper from "swiper";
import Likes from "../Like/Likes.vue";
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      value: 3,
      list: null,
      ajaxlist: [
        {
          title: "世界美术名作二十讲0",
          desc: "约600g",
          price: 100.00,
          num: 1,
          thumb:
            "http://img3m5.ddimg.cn/31/10/24195235-3_e_6.jpg"
        },
        {
          title: "知识日历：名画日历2020",
          desc: "约600g",
          price: 200.00,
          num: 1,
          thumb:
            "http://img3m8.ddimg.cn/68/25/27924998-1_h_12.jpg"
        },
        {
          title: "小熊和最好的爸爸",
          desc: "约600g",
          price: 300.00,
          num: 1,
          thumb:
            "http://img3m1.ddimg.cn/62/32/27877571-1_h_1.jpg"
        },
        {
          title: "作文课",
          desc: "约600g",
          price: 300.00,
          num: 1,
          thumb:
            "http://img3m3.ddimg.cn/86/25/28472783-1_h_6.jpg"
        },
        {
          title: "世界美术名作二十讲2",
          desc: "约600g",
          price: 300.00,
          num: 1,
          thumb:
            "http://img3m9.ddimg.cn/78/30/28480299-1_h_3.jpg"
        },
        {
          title: "射雕英雄传（青少版） 金庸作品",
          desc: "约600g",
          price: 300.00,
          num: 1,
          thumb:
            "http://img3m8.ddimg.cn/68/25/27924998-1_h_12.jpg"
        },
        {
          title: "知识日历：名画日历2020",
          desc: "约600g",
          price: 300.00,
          num: 1,
          thumb:
            "http://img3m1.ddimg.cn/62/32/27877571-1_h_1.jpg"
        },
        {
          title: "小熊和最好的爸爸",
          desc: "约600g",
          price: 300.00,
          num: 1,
          thumb:
            "http://img3m3.ddimg.cn/86/25/28472783-1_h_6.jpg"
        },
        {
          title: "作文课",
          desc: "约600g",
          price: 300.00,
          num: 1,
          thumb:
            "http://img3m9.ddimg.cn/78/30/28480299-1_h_3.jpg"
        },
      ]
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  components: {
    Likes
  },
  methods: {
    cars() {
      this.$store.commit("add", {
        id: this.$route.query.id,
        num:this.list.num,
        title: this.list.title,
        price: this.list.price,
        thumb:this.list.thumb
      });
      Toast("加入成功");
    },
    go() {
      this.$router.push("/settlement");
    },
    carsTo() {
      this.$router.push("/settlement");
    }
  },
  created() {
    // window.console.log(this.$route.query.id)
    this.list = this.ajaxlist[this.$route.query.id];
    // window.console.log(this.list)
  }
};
</script>
<style lang="scss" scoped>
.header-content {
  width: 100%;
  border-bottom: 1px solid #dddddd;
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  }
}
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
.text_content {
  width: 100%;
  padding: 5px;
  .top {
    width: 100%;
    span.dangdang {
      margin-right: 5px;
      background-color: rgb(255, 70, 60);
      display: inline-block;
      border-radius: 10px;
      width: 60px;
      height: 17px;
      font-size: 12px;
      text-align: center;
      color: #fff;
    }
    span.title {
      font-size: 13px;
      color: #4d525d;
    }
  }
  .detail {
    padding: 5px;
    a {
      font-size: 12px;
      color: rgb(150, 150, 150);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .link {
    width: 100%;
    padding-left: 5px;
    a {
      font-size: 12px;
      text-decoration: underline;
      color: rgb(255, 70, 60);
    }
  }
  .cost {
    width: 100%;
    .piece {
      font-size: 20px;
      color: #ff463c;
    }
    .dz {
      font-size: 13px;
      color: #969696;
      margin: 10px;
    }
    .tz {
      display: inline-block;
      text-align: center;
      width: 77px;
      height: 22px;
      border-radius: 10px;
      line-height: 22px;
      border: 1px solid #222222;
      color: #222222;
      padding: 0 5px;
      font-size: 12px;
    }
    .dzs {
      margin-top: 10px;
      float: right;
      font-size: 13px;
      color: #ff8161;
    }
  }
  .dj {
    width: 100%;
    color: #969696;
    font-size: 12px;
    padding-left: 5px;
    span {
      text-decoration: line-through;
      color: #969696;
    }
  }
  .xs {
    width: 100%;
    padding-left: 5px;
    span {
      display: inline-block;
      border: 1px solid #ff463c;
      width: 42px;
      height: 14px;
      text-align: center;
      font-size: 12px;
      margin: 10px 0px;
      color: #ff463c;
      line-height: 14px;
    }
  }
}
.score {
  background-color: #f8f8f8;
  overflow: hidden;
  padding: 5px;
  .fl {
    padding-left: 10px;
    float: left;
    .df {
      font-size: 15px;
      color: #ff8161;
      .num {
        font-size: 15px;
        font-weight: bold;
      }
    }
    .pf {
      color: #b4b4b4;
      font-size: 12px;
    }
  }
  .fr {
    float: right;
    padding-right: 10px;
    margin: 10px;
    a {
      display: inline-block;
      border: 1px solid #ff8161;
      color: #ff8161;
      border-radius: 10px;
      width: 82px;
      height: 26px;
      background-color: #fff2ef;
      text-align: center;
      line-height: 26px;
    }
  }
}
</style>