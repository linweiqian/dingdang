<template>
  <div>
    <div class="layout-worth">
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
      <!-- 导航 -->
      <div class="m_navigation">
        <ul>
          <li v-for="(one,a) in list" :key="a">
            <a href="javacript:;">
              <img :src=one.src alt />
            </a>
          </li>
        </ul>
        <ul>
          <li v-for="(two,b) in lists" :key="b">
            <a href="javacript:;">
              <img :src=two.src alt />
            </a>
          </li>
        </ul>
      </div>
      <!-- 促销专场 -->
      <div class="m_cx">
        <div class="c_box">
          <div class="header">
            <h1>促销专场</h1>
            <a href="javascript:;">
              更多
              <span class="iconfont icon-youjiantou"></span>
            </a>
          </div>
          <ul>
            <li v-for="(three,c) in item" :key="c">
              <a href="javascript:;">
                <p class="title">{{three.txt}}</p>
                <p class="piece">{{three.pirce}}</p>
                <img :src=three.src alt />
              </a>
            </li>
          </ul>
          <ul>
            <li v-for="(four,c) in items" :key="c">
              <a href="javascript:;">
                <p class="title">{{four.txt}}</p>
                <p class="piece">{{four.pirce}}</p>
                <img :src=four.src alt />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 即刻秒杀 -->
      <div class="m_ms">
        <div class="c_box">
          <div class="header">
            <h1>
              <img src="../assets/images/zdm-logo-header.png" alt />
            </h1>
            <a href="javascript:;">
              更多
              <span class="iconfont icon-youjiantou"></span>
            </a>
          </div>
          <!-- Swiper -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(six,f) in val" :key="f">
                <a href="javascript:;">
                  <img :src=six.src alt />
                </a>
                <div class="bottom">
                  <p class="text">{{six.txt}}</p>
                  <p class="piece">￥{{six.pirce}}</p>
                  <p class="old-piece">￥{{six.old}}</p>
                </div>
              </div>
              <div class="swiper-slide">
                <a href="javascript:;" class="c_more">
                  <span class="iconfont icon-youjiantou-tianchong"></span>
                  <p>查看更多</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 畅销排行 -->
      <div class="m_ph clearfix">
        <div class="m_box" v-for="(seven,g) in soild" :key="g">
          <div class="header">
            <a href="javascript:;" class="left">
              <span class="c_pm">{{seven.pm}}</span>
            </a>
            <a href="javascript:;" class="right">
              更多
              <span class="iconfont icon-youjiantou"></span>
            </a>
          </div>
          <ul>
            <li class="img">
              <a href="javascript:;">
                <img :src=seven.src alt />
              </a>
            </li>
            <li class="content">
              <p class="title">{{seven.title}}</p>
              <p class="mej">
                <span>满额减</span>
              </p>
              <p class="dz">
                <span>折后价</span>
                <span class="active">￥{{seven.dz}}</span>
              </p>
              <P class="piece">
                <span>￥{{seven.pirce}}</span>
                <span class="active">￥{{seven.old}}</span>
              </P>
              <P class="bottom">
                <a href="javascript:;">
                  <span class="iconfont icon-liaotian"></span>
                  <span>{{seven.ly}}</span>
                </a>
                <a href="javascript:;">
                  <span class="iconfont icon-star_full"></span>
                  <span>{{seven.pj}}</span>
                </a>
                <a href="javascript:;">
                  <span class="iconfont icon-gouwuche active"></span>
                </a>
              </P>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import Jump from "../components/Jump/Jump.vue";
export default {
  data() {
    return {
      active: 0,
      list:[
        {
          src:"https://img61.ddimg.cn/2018/8/25/20180825153505715.png"
        },
        {
          src:"https://img61.ddimg.cn/2018/8/25/2018082515383576435.png"
        },
        {
          src:"https://img61.ddimg.cn/2018/8/25/2018082515395286917.png"
        },
        {
          src:"https://img63.ddimg.cn/2018/8/31/2018083116044590576.png"
        },
        {
          src:"http://img63.ddimg.cn/upload_img/00660/h5/ddpp-1537350824.png"
        },
      ],
      lists:[
        {
          src:"https://img62.ddimg.cn/2018/8/31/2018083116355544875.png"
        },
        {
          src:"https://img62.ddimg.cn/2018/8/31/2018083116363087335.png"
        },
        {
          src:"https://img61.ddimg.cn/2018/8/31/2018083116365438226.png"
        },
        {
          src:"https://img62.ddimg.cn/2018/8/31/2018083116373380162.png"
        },
        {
          src:"http://img60.ddimg.cn/upload_img/00782/h5/coupon-1537505152.png"
        },
      ],
      item:[
        {
          txt:"图书",
          pirce:"每50减100",
          src:"http://img3m3.ddimg.cn/43/36/28470463-1_b_15.jpg"
        },
        {
          txt:"图书",
          pirce:"每50减100",
          src:"http://img3m2.ddimg.cn/1/20/27939682-1_b_3.jpg"
        },
        {
          txt:"图书",
          pirce:"每50减100",
          src:"http://img3m7.ddimg.cn/87/31/25272807-1_b_3.jpg"
        },
      ],
      items:[
        {
          txt:"图书",
          pirce:"每50减100",
          src:"http://img3m6.ddimg.cn/23/26/1901112566-1_b_3.jpg"
        },
        {
          txt:"图书",
          pirce:"每50减100",
          src:"http://img3m3.ddimg.cn/20/24/25257593-1_b_8.jpg"
        },
        {
          txt:"图书",
          pirce:"每50减100",
          src:"http://img3m4.ddimg.cn/27/16/1523687544-1_b_2.jpg"
        },
      ],
      val:[
        {
          src:"https://img3x3.ddimg.cn/77/34/1152326813-1_h.jpg",
          txt:"宝宝女包...",
          pirce:"1.00",
          old:"159.00"
        },
        {
          src:"https://img3x4.ddimg.cn/55/24/1571351914-1_h.jpg",
          txt:"宝宝女包...",
          pirce:"1.00",
          old:"159.00"
        },
        {
          src:"https://img3x4.ddimg.cn/53/25/1280243204-1_h.jpg",
          txt:"宝宝女包...",
          pirce:"1.00",
          old:"159.00"
        },
        {
          src:"https://img3x3.ddimg.cn/77/34/1152326813-1_h.jpg",
          txt:"宝宝女包...",
          pirce:"1.00",
          old:"159.00"
        },
        {
          src:"https://img3x4.ddimg.cn/55/24/1571351914-1_h.jpg",
          txt:"宝宝女包...",
          pirce:"1.00",
          old:"159.00"
        },
        {
          src:"https://img3x4.ddimg.cn/53/25/1280243204-1_h.jpg",
          txt:"宝宝女包...",
          pirce:"1.00",
          old:"159.00"
        },
        {
          src:"https://img3x3.ddimg.cn/77/34/1152326813-1_h.jpg",
          txt:"宝宝女包...",
          pirce:"1.00",
          old:"159.00"
        },
        {
          src:"https://img3x4.ddimg.cn/55/24/1571351914-1_h.jpg",
          txt:"宝宝女包...",
          pirce:"1.00",
          old:"159.00"
        },
        {
          src:"https://img3x4.ddimg.cn/53/25/1280243204-1_h.jpg",
          txt:"宝宝女包...",
          pirce:"1.00",
          old:"159.00"
        },
      ],
      soild:[
        {
          pm:"畅销排行第三名",
          src:"https://img3x3.ddimg.cn/3/13/23812473-1_h.jpg",
          title:"神奇校车大家族（全73册）",
          dz:"506.00",
          pirce:"786.00",
          old:"828.00",
          ly:"1757398",
          pj:"4.59"
        },
        {
          pm:"畅销排行第三名",
          src:"https://img3x2.ddimg.cn/85/4/25353292-1_h.jpg",
          title:"神奇校车大家族（全73册）",
          dz:"506.00",
          pirce:"786.00",
          old:"828.00",
          ly:"1757398",
          pj:"4.59"
        },
        {
          pm:"畅销排行第三名",
          src:"https://img3x0.ddimg.cn/95/1/27887900-1_h.jpg",
          title:"神奇校车大家族（全73册）",
          dz:"506.00",
          pirce:"786.00",
          old:"828.00",
          ly:"1757398",
          pj:"4.59"
        },
        {
          pm:"畅销排行第三名",
          src:"https://img3x3.ddimg.cn/63/16/27909153-1_h.jpg",
          title:"神奇校车大家族（全73册）",
          dz:"506.00",
          pirce:"786.00",
          old:"828.00",
          ly:"1757398",
          pj:"4.59"
        },
      ],
      flag:false,
    };
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    show(){
      this.flag = !this.flag;
    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
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
// 导航
.m_navigation {
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    li {
      flex: 1;
      a {
        border-right: 1px solid #f6f6f6;
        border-bottom: 1px solid #f6f6f6;
        display: block;
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
}
// 促销
.m_cx {
  width: 100%;
  background: url("../assets/images/九宫格.5e5e35d.png") no-repeat center center;
  .c_box {
    width: 100%;
    padding: 0 11px;
    .header {
      width: 100%;
      line-height: 32px;
      position: relative;
      h1 {
        width: 100%;
        line-height: 35px;
        height: 32px;
        font-size: 15px;
        font-weight: 700;
        text-align: center;
        color: #ffffff;
      }
      a {
        display: inline-block;
        text-align: right;
        font-size: 10px;
        color: #ffffff;
        position: absolute;
        right: 2px;
        top: 1px;
      }
    }
    ul {
      width: 100%;
      display: flex;
      li {
        flex: 1;
        text-align: center;
        border-radius: 8px;
        background-color: #ffffff;
        float: left;
        margin-left: 5px;
        margin-bottom: 5px;
        a {
          display: block;
          padding: 8px 8px 4px;
          .title {
            font-size: 12px;
            color: #565656;
          }
          .piece {
            color: #943dff;
            font-size: 12px;
          }
          img {
            width: 85%;
          }
        }
      }
    }
  }
}
// 即刻秒杀
.layout-worth{
  margin-bottom: 50px;
  margin-top: 46px;
}
.m_ms {
  width: 100%;
  background: url("../assets/images/zdm-jk-bg.png") no-repeat center;
  .c_box {
    width: 100%;
    padding: 0 11px;
    .header {
      width: 100%;
      height: 32px;
      line-height: 32px;
      position: relative;
      h1 {
        width: 100%;
        line-height: 35px;
        height: 32px;
        text-align: center;
        img {
          height: 14.5px;
        }
      }
      a {
        display: inline-block;
        text-align: right;
        font-size: 10px;
        color: #ffffff;
        position: absolute;
        right: 2px;
        top: 1px;
      }
    }
    .swiper-container {
      width: 100%;
      height: 163px;
      margin-top: 10px;
    }
    .swiper-slide {
      overflow: hidden;
      text-align: center;
      font-size: 18px;
      background: #ffffff;
      width: 85px;
      z-index: 10000;
      height: 152px;
      border-radius: 10px;
      margin-right: 10px !important;
      align-items: flex-start !important;
      a {
        width: 100%;
        display: block;
        img {
          width: 100%;
          height: 88px;
        }
      }
      .bottom {
        position: absolute;
        bottom: 5px;
        p {
          text-align: center;
        }
        .text {
          color: #323232;
          font-size: 12px;
        }
        .piece {
          color: red;
          font-size: 12px;
        }
        .old-piece {
          font-size: 12px;
          text-decoration: line-through !important;
        }
      }
      .c_more {
        display: block;
        height: 100%;
        line-height: 50px;
        text-align: center;
        background-color: #fc6a4a !important;
        span {
          font-size: 12px;
          color: #ffffff;
          display: block;
        }
        p {
          font-size: 14px;
          color: #ffffff;
        }
      }
    }
  }
}
// 畅销排行
.m_ph {
  width: 100%;
  background-color: #f5f5f5;
  .m_box {
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
    background-color: #fff;
    padding-right: 10px;

    .header {
      width: 100%;
      a.left {
        margin-top: 5px;
        display: block;
        width: 85px;
        height: 20px;
        background-image: linear-gradient(133deg, #f296bd, #ee3b31);
        border-bottom-right-radius: 20%;
        padding-bottom: 3px;
        padding: 0 3px;
        float: left;
        .c_pm {
          font-size: 12px;
          color: #fff;
        }
      }
      a.right {
        margin-top: 5px;
        text-align: right;
        display: block;
        width: 85px;
        height: 20px;
        font-size: 12px;
        color: #a1a1a1;
        float: right;
      }
    }
    ul {
      width: 100%;
      display: flex;
      li.img {
        flex: 1;
        text-align: center;
        a {
          display: block;
          img {
            width: 85%;
          }
        }
      }
      li.content {
        flex: 2;
        .title {
          width: 100%;
          height: 17px;
          font-size: 12px;
          color: #383838;
        }
        .mej {
          width: 100%;
          span {
            width: 36px;
            height: 18px;
            background-color: #f2303c;
            color: #fff;
            font-size: 12px;
          }
        }
        .dz {
          width: 100%;
          height: 17px;
          margin-bottom: 6px;
          span {
            font-size: 12px;
            color: #f2303c;
          }
          .active {
            font-weight: bold;
            color: #f2303c;
            font-size: 14px;
            margin-left: 5px;
          }
        }
        .piece {
          width: 100%;
          span {
            font-size: 12px;
            color: #f2303c;
          }
          .active {
            text-decoration: line-through;
            color: #777;
            margin-left: 8px;
          }
        }
        .bottom {
          width: 100%;
          height: 20px;
          text-align: right;
          margin-bottom: 20px;
          padding-top: 10px;
          a {
            display: inline-block;
            margin-left: 10px;
            color: #98a6aa;
            span {
              font-size: 12px;
            }
            .active {
              color: #f23440;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
}
</style>