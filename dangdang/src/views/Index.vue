<template>
  <div>
    <div class="layout">
      <!-- 搜索框 -->
      <header class="header_search">
        <div class="m_header_box">
          <div class="m_logo">
            <span class="iconfont icon-tushu"></span>
          </div>
          <div class="m_search">
            <span class="m_icon_search"></span>
            <span class="iconfont icon-sousuo"></span>
            <input type="text" placeholder="了不起的中国"  @click="search"/>
          </div>
          <div class="m_meau">
            <span class="iconfont icon-icon-" @click="go"></span>
          </div>
        </div>
      </header>
      <!-- 轮播图 -->
      <section class="m_player">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <a href="javascript:;">
              <img src="../assets/images/lunbo1-img.jpg" alt />
            </a>
          </van-swipe-item>
          <van-swipe-item>
            <a href="javascript:;">
              <img src="../assets/images/lunbo2-img.jpg" alt />
            </a>
          </van-swipe-item>
          <van-swipe-item>
            <a href="javascript:;">
              <img src="../assets/images/lunbo3-img.jpg" alt />
            </a>
          </van-swipe-item>
        </van-swipe>
      </section>

      <!-- 导航栏 -->
      <section class="m_navigation">
        <div class="selection">
          <ul v-for="(item1,index) in list" :key="index">
            <li v-for="(item2,li) in item1.list" :key="li">
              <a href="javascript:;">
                <img :src="item2.src" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <!-- 今日秒杀 -->
      <section class="m_miaosha">
        <div class="m_miaosha_box">
          <div class="top">
            <a href="javascript:;">
              <img src="../assets/images/miaosha-logo.jpg" alt />
            </a>
          </div>
          <div class="time">
            <span class="bgblack">00</span>
            <span class="color">时</span>
            <span class="bgblack">00</span>
            <span class="color">分</span>
            <span class="bgred">00</span>
            <span class="color">秒</span>
          </div>
          <div class="foot">
            <!-- Swiper -->
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,one) in listWrap" :key="one">
                  <li >
                    <a href="javascript:;">
                      <img :src="item.img1" alt />
                      <span class="text">{{item.text}}</span>
                      <span class="now_money">{{item.money}}</span>
                      <span class="before_money">{{item.old}}</span>
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="guanggao">
          <a href="javascript:;">
            <img src="../assets/images/gaunggao11-img.jpg" alt />
          </a>
        </div>
      </section>
      <!-- 全球最大中文图书城 -->
      <section class="m_shop_liebiao">
        <div class="m_shop_box">
          <div class="header">
            <a href>
              <img src="../assets/images/tushucheng.jpg" alt />
            </a>
          </div>
          <div class="selection">
            <ul>
              <li>
                <a href="javascript:;">当当书城</a>
              </li>
              <li>
                <a href="javascript:;">电子书</a>
              </li>
              <li>
                <a href="javascript:;">网络文学</a>
              </li>
            </ul>
          </div>
          <div class="guanggao">
            <a href="javascript:;">
              <img src="../assets/images/gaunggao22-img.jpg" alt />
            </a>
          </div>
          <div class="section">
            <ul v-for="(item1,j) in listBooks" :key="j">
              <li v-for="(item2,z) in item1.listBooks" :key="z">
                <a href="javascript:;">
                  <span class="shuming">{{item2.txt1}}</span>
                  <span class="daze">{{item2.txt2}}</span>
                  <img :src=item2.img alt />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- 服装鞋包 -->
      <section class="m_xiebao">
        <div class="m_xiebao_box">
          <div class="header">
            <a href>
              <img src="../assets/images/fuzhuang.jpg" alt />
            </a>
          </div>
          <div class="selection">
            <ul>
              <li>
                <a href="javascript:;">当当书城</a>
              </li>
              <li>
                <a href="javascript:;">电子书</a>
              </li>
              <li>
                <a href="javascript:;">网络文学</a>
              </li>
            </ul>
          </div>
          <div class="guanggao">
            <a href="javascript:;">
              <img src="../assets/images/guanggao3.jpg" alt />
            </a>
          </div>
          <div class="nav_footer">
            <div class="fl_box right_line">
              <div class="text">
                <b>莱曼女装</b>
                <i>低至1折起</i>
              </div>
              <div class="img">
                <img src="../assets/images/nvzhuang.jpg" alt />
              </div>
            </div>
            <div class="fr_box bottom_line">
              <div class="text">
                <b>莱曼女装</b>
                <i>低至1折起</i>
              </div>
              <div class="img">
                <img src="../assets/images/xiezi.jpg" alt />
              </div>
            </div>
            <div class="fr_box top_line right_line">
              <div class="text">
                <b>莱曼女装</b>
                <i>低至1折起</i>
              </div>
              <div class="img">
                <img src="../assets/images/xiezi.jpg" alt />
              </div>
            </div>
            <div class="fr_box top_line">
              <div class="text">
                <b>莱曼女装</b>
                <i>低至1折起</i>
              </div>
              <div class="img">
                <img src="../assets/images/xiezi.jpg" alt />
              </div>
            </div>
            <ul>
              <li class="top_line right_line">
                <a href="javascript:;">
                  <b>碧迪碧迪</b>
                  <i>3件2折</i>
                  <img src="../assets/images/tongzhuang.jpg" alt />
                </a>
              </li>
              <li class="top_line right_line">
                <a href="javascript:;">
                  <b>碧迪碧迪</b>
                  <i>3件2折</i>
                  <img src="../assets/images/tongzhuang.jpg" alt />
                </a>
              </li>
              <li class="top_line right_line">
                <a href="javascript:;">
                  <b>碧迪碧迪</b>
                  <i>3件2折</i>
                  <img src="../assets/images/tongzhuang.jpg" alt />
                </a>
              </li>
              <li class="top_line">
                <a href="javascript:;">
                  <b>碧迪碧迪</b>
                  <i>3件2折</i>
                  <img src="../assets/images/tongzhuang.jpg" alt />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- 聚特惠 -->
      <section class="m_xiebao">
        <div class="m_xiebao_box">
          <div class="header">
            <a href>
              <img src="../assets/images/jutehui.jpg" alt />
            </a>
          </div>
          <div class="selection">
            <ul>
              <li>
                <a href="javascript:;">当当书城</a>
              </li>
              <li>
                <a href="javascript:;">电子书</a>
              </li>
              <li>
                <a href="javascript:;">网络文学</a>
              </li>
            </ul>
          </div>
          <div class="guanggao">
            <a href="javascript:;">
              <img src="../assets/images/guanggao33.jpg" alt />
            </a>
          </div>
          <div class="nav_footer">
            <div class="fr_box top_line right_line">
              <div class="text">
                <b>莱曼女装</b>
                <i>低至1折起</i>
              </div>
              <div class="img">
                <img src="../assets/images/songshu.jpg" alt />
              </div>
            </div>
            <div class="fr_box top_line">
              <div class="text">
                <b>莱曼女装</b>
                <i>低至1折起</i>
              </div>
              <div class="img">
                <img src="../assets/images/songshu.jpg" alt />
              </div>
            </div>
            <ul>
              <li class="top_line right_line">
                <a href="javascript:;">
                  <b>碧迪碧迪</b>
                  <i>3件2折</i>
                  <img src="../assets/images/chide.jpg" alt />
                </a>
              </li>
              <li class="top_line right_line">
                <a href="javascript:;">
                  <b>碧迪碧迪</b>
                  <i>3件2折</i>
                  <img src="../assets/images/chide.jpg" alt />
                </a>
              </li>
              <li class="top_line right_line">
                <a href="javascript:;">
                  <b>碧迪碧迪</b>
                  <i>3件2折</i>
                  <img src="../assets/images/chide.jpg" alt />
                </a>
              </li>
              <li class="top_line">
                <a href="javascript:;">
                  <b>碧迪碧迪</b>
                  <i>3件2折</i>
                  <img src="../assets/images/chide.jpg" alt />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Likes />
      <!-- 底部提示 -->
      <section class="m_end_title">
        <p>
          <span></span>
          <em>到底啦，再拉裤子要掉了</em>
        </p>
      </section>
      <!-- 底部信息 -->
      <section class="m_message">
        <span>
          <a href="javascript:;">登录</a>
        </span>
        <span>
          <a href="javascript:;">注册</a>
        </span>
        <div class="top">
          <span class="clear_span iconfont icon-icon-1"></span>
          <span class="clear_margin">TOP</span>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import Likes from "../components/Like/Likes";
export default {
  data() {
    return {
      src: null,
      // 导航栏
      list: [
        {
          list: [
            {
              src:
                "http://img61.ddimg.cn/upload_img/00803/1/chagnxiao-1562827477.png"
            },
            {
              src:
                "http://img60.ddimg.cn/upload_img/00803/1/xinshubang2-1562825207.png"
            },
            {
              src:
                "http://img62.ddimg.cn/upload_img/00702/B/SY-iCON-3-5.10-1557488951.png"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00702/B/icon-jrcx-1559563476.png"
            },
            {
              src:
                "http://img62.ddimg.cn/upload_img/00705/B/icon-5.28-1559032809.png"
            }
          ]
        },
        {
          list: [
            {
              src:
                "http://img50.ddimg.cn/116550067538580_y.jpg"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00528/000/7chaoshi-1545121233.png"
            },
            {
              src:
                "http://img61.ddimg.cn/upload_img/00528/000/00000-1564393723.png"
            },
            {
              src:
                "http://img62.ddimg.cn/upload_img/00528/000/9zhongxin-1545121233.png"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00528/0000/12311-1556245256.jpg"
            }
          ]
        },
      ],
      listWrap:[
        {
          img1:require("../assets/images/liebiao1.jpg"),
          text:"《茶道》，从喝茶到懂茶的茶类书籍",
          money:"￥1",
          old:"￥99"
        },
        {
          img1:"http://img3m9.ddimg.cn/67/1/1544293939-1_h_1.jpg",
          text:"《茶道》，从喝茶到懂茶的茶类书籍",
          money:"￥1",
          old:"￥99"
        },
        {
          img1:"http://img3m4.ddimg.cn/29/33/1320948614-1_h_11.jpg",
          text:"《茶道》，从喝茶到懂茶的茶类书籍",
          money:"￥1",
          old:"￥99"
        },
        {
          img1:"http://img3m4.ddimg.cn/87/32/1565857644-1_h_1.jpg",
          text:"《茶道》，从喝茶到懂茶的茶类书籍",
          money:"￥1",
          old:"￥99"
        },
        {
          img1:"http://img3m8.ddimg.cn/41/30/1369914818-1_h_1.jpg",
          text:"《茶道》，从喝茶到懂茶的茶类书籍",
          money:"￥1",
          old:"￥99"
        },
        {
          img1:"http://img3m4.ddimg.cn/26/31/23961194-1_h_10.jpg",
          text:"《茶道》，从喝茶到懂茶的茶类书籍",
          money:"￥1",
          old:"￥99"
        },
        {
          img1:"http://img3m5.ddimg.cn/29/29/1530079085-1_h_1.jpg",
          text:"《茶道》，从喝茶到懂茶的茶类书籍",
          money:"￥1",
          old:"￥99"
        },
        {
          img1:"http://img3m9.ddimg.cn/96/21/26922849-1_h_2.jpg",
          text:"《茶道》，从喝茶到懂茶的茶类书籍",
          money:"￥1",
          old:"￥99"
        },
        {
          img1:"http://img3m2.ddimg.cn/81/34/1552768452-1_h_2.jpg",
          text:"《茶道》，从喝茶到懂茶的茶类书籍",
          money:"￥1",
          old:"￥99"
        },
        {
          img1:"http://img3m0.ddimg.cn/12/15/1396442730-1_h_6.jpg",
          text:"《茶道》，从喝茶到懂茶的茶类书籍",
          money:"￥1",
          old:"￥99"
        },
      ],
      listBooks:[
        {
          listBooks:[
            {
              txt1:"文学栖息",
              txt2:"5折封顶",
              img:"http://img61.ddimg.cn/upload_img/00796/1/8.7-1570700432.png"
            },
            {
              txt1:"文学栖息",
              txt2:"5折封顶",
              img:"http://img60.ddimg.cn/ddreader/dangebook/11y5b_500x500.jpg"
            },
            {
              txt1:"文学栖息",
              txt2:"5折封顶",
              img:"http://img63.ddimg.cn/upload_img/00803/1/9.12-1569494186.png"
            },
          ]
        },
        {
          listBooks:[
            {
              txt1:"文学栖息",
              txt2:"5折封顶",
              img:"http://img60.ddimg.cn/upload_img/00796/1/8.20-1566202565.png"
            },
            {
              txt1:"文学栖息",
              txt2:"5折封顶",
              img:"http://img60.ddimg.cn/upload_img/00803/1/9.27-1569635125.png"
            },
            {
              txt1:"文学栖息",
              txt2:"5折封顶",
              img:"http://img60.ddimg.cn/upload_img/00796/1/8.20-1566202650.png"
            },
          ]
        },
        {
          listBooks:[
            {
              txt1:"文学栖息",
              txt2:"5折封顶",
              img:"http://img62.ddimg.cn/upload_img/00796/1/kaoshi1-1562725170.png"
            },
            {
              txt1:"文学栖息",
              txt2:"5折封顶",
              img:"http://img61.ddimg.cn/upload_img/00796/1/8.20-1566202740.png"
            },
            {
              txt1:"文学栖息",
              txt2:"5折封顶",
              img:"http://img61.ddimg.cn/upload_img/00803/1/9.27-1570429047.png"
            },
          ]
        },
      ]
    };
  },
  components: {
    Likes
  },
  methods: {
    go() {
      this.$router.push("/category");
    },
    search(){
      this.$router.push("/search");
    }
  },
  mounted() {
    new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      }
    });
  }
};
</script>
<style lang="scss" scoped>
$color: #f0374e;
$background: #ffffff;
$font-background: #879299;

// 搜索框
.header_search {
  // padding-top: 10px;
  width: 100%;
  height: 46px;
  background-color: $background;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  z-index: 10000;
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
        color: $color;
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
        color: $font-background;
        font-size: 20px;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
// 轮播图
.m_player {
  width: 100%;
  padding-top: 46px;
  .van-swipe-item {
    height: 90px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.guanggao {
  width: 100%;
  float: left;
  a {
    width: 100%;
    display: block;
    img {
      width: 100%;
      display: block;
    }
  }
}
// 导航栏
.m_navigation {
  width: 100%;
  text-align: center;
  margin-top: 0px;
  .selection {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      li {
        width: 100%;
        flex: 1;
        a {
          width: 100%;
          display: block;
          img {
            width: 100%;
            display: block;
          }
        }
      }
    }
  }
}
// 今日秒杀
.m_miaosha {
  width: 100%;
  background-color: #eff4fa;
  padding-top: 10px;
  .m_miaosha_box {
    width: 100%;
    background-color: #ffffff;
    .top {
      width: 100%;
      a {
        display: block;
        width: 100%;
        img {
          width: 100%;
          display: block;
        }
      }
    }
    .time {
      width: 100%;
      text-align: center;
      margin-bottom: 30px;
      span {
        display: inline-block;
        width: 15px;
        height: 20px;
        font-size: 12px;
        color: #ffffff;
        text-align: center;
        vertical-align: middle;
      }
      .bgblack {
        background-color: black;
        border-radius: 25%;
      }
      .bgred {
        border-radius: 25%;
        background-color: #f3344a;
      }
      .color {
        color: black;
      }
    }
    .foot {
      width: 100%;
      text-align: left;
      padding-bottom: 5px;
      .swiper-container {
        width: 100%;
      }
      .swiper-slide {
        width: 88px;
        margin-right: 0px !important;
        height: 160px;
        text-align: left;
        li {
          padding: 5px 5px 0px 5px;
          height: 152px;
          width: 88px;
          a {
            width: 100%;
            display: block;
            img {
              width: 100%;
              display: block;
            }
            span {
              width: 100%;
              display: block;
              font-size: 12px;
            }
            .text {
              margin-top: 10px;
              color: black;
              height: 25px;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              margin-bottom: 5px;
            }
            .now_money {
              color: #f66273;
            }
            .before_money {
              display: inline-block;
              color: #bababa;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
  .guanggao {
    padding-top: 10px;
    width: 100%;
    a {
      width: 100%;
      display: block;
      img {
        width: 100%;
        display: block;
      }
    }
  }
}
// 全球最大中文图书城
.m_shop_liebiao {
  width: 100%;
  background-color: #eff4fa;
  padding-top: 10px;
  .m_shop_box {
    width: 100%;
    background-color: #ffffff;
    .header {
      width: 100%;
      a {
        width: 100%;
        display: block;
        img {
          width: 100%;
          display: block;
        }
      }
    }
    .selection {
      width: 100%;
      text-align: ceter;
      // height: 21px;
      ul {
        width: 100%;
        li {
          width: 33.3%;
          float: left;
          position: relative;
          margin-bottom: 10px;
          a {
            width: 100%;
            font-size: 12px;
            color: black;
          }
        }
      }
    }
  }
}
.guanggao {
  width: 100%;
  a {
    width: 100%;
    display: block;
    img {
      width: 100%;
      display: block;
    }
  }
}
.section {
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    li {
      width: 100%;
      flex: 1;
      a {
        display: block;
        width: 100%;
        span {
          display: block;
          width: 100%;
          text-align: center;
        }
        .shuming {
          padding-top: 10px;
          font-size: 12px;
          color: black;
        }
        .daze {
          font-size: 10px;
          color: #ef2933;
        }
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
}
// 服装鞋包
.m_xiebao {
  width: 100%;
  background-color: #eff4fa;
  padding-top: 10px;
  .m_xiebao_box {
    width: 100%;
    background-color: #ffffff;
    .header {
      width: 100%;
      a {
        width: 100%;
        display: block;
        img {
          width: 100%;
          display: block;
        }
      }
    }
    .selection {
      width: 100%;
      text-align: ceter;
      // height: 21px;
      ul {
        width: 100%;
        li {
          width: 33.3%;
          float: left;
          position: relative;
          margin-bottom: 10px;
          a {
            width: 100%;
            font-size: 12px;
            color: black;
          }
        }
      }
    }
    .guanggao {
      width: 100%;
      a {
        width: 100%;
        display: block;
        img {
          width: 100%;
          display: block;
        }
      }
    }
    .nav_footer {
      width: 100%;
      clear: both;
      .fl_box {
        width: 50%;
        float: left;
        .text {
          width: 50%;
          b {
            display: block;
            width: 100%;
            text-align: left;
            font-size: 12px;
            color: black;
            padding: 5px 5px 0px 5px;
          }
          i {
            font-size: 13px;
            text-align: left;
            display: block;
            width: 100%;
            font-style: normal;
            color: #bb2197;
            padding: 0 5px;
          }
        }
        .img {
          float: right;
          width: 50%;
          img {
            width: 88%;
            display: block;
          }
        }
      }
      .fr_box {
        width: 50%;
        float: left;
        text-align: center;
        .text {
          width: 50%;
          float: left;
          b {
            display: inline-block;
            width: 100%;
            text-align: left;
            font-size: 11px;
            color: black;
            padding: 5px 5px 0px 5px;
          }
          i {
            font-size: 12px;
            text-align: left;
            display: inline-block;
            width: 100%;
            font-style: normal;
            color: #bb2197;
            padding: 0 5px;
          }
        }
        .img {
          float: left;
          width: 50%;
          img {
            width: 62%;
            display: block;
          }
        }
      }
      ul {
        text-align: center;
        width: 100%;
        display: flex;
        li {
          flex: 1;
          width: 100%;
          a {
            width: 100%;
            display: block;
            b {
              padding-top: 10px;
              width: 100%;
              display: block;
              font-size: 12px;
              color: black;
            }
            i {
              font-size: 11px;
              color: #c72895;
              width: 100%;
              display: block;
              font-style: normal;
            }
            img {
              width: 100%;
              display: block;
            }
          }
        }
      }
    }
  }
}
//提示信息
.m_end_title {
  width: 100%;
  height: 20px;
  background-color: #eff4fa;
  p {
    text-align: center;
    position: relative;
    span::after {
      width: 15px;
      display: block;
      height: 1px;
      background-color: #9ca8b6;
      content: " ";
      position: absolute;
      top: 10px;
      left: 70px;
    }
    span::before {
      width: 15px;
      display: block;
      height: 1px;
      background-color: #9ca8b6;
      content: " ";
      position: absolute;
      top: 10px;
      left: 230px;
    }
    em {
      font-size: 8px;
      color: #9ca8b6;
      font-style: normal;
    }
  }
}
//底部信息
.m_message {
  width: 100%;
  height: 40px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  span {
    display: block;
    height: 40px;
    width: 40px;
    line-height: 40px;
    float: left;
    margin-left: 10px;
    a {
      font-size: 12px;
      color: #4d525d;
    }
  }
  .top {
    float: right;
    span {
      font-size: 12px;
    }
    span.clear_span {
      width: 0;
      font-weight: bold;
    }
    span.clear_margin {
      margin-left: 10px;
    }
  }
}
</style>