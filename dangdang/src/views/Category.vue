<template>
  <div>
    <!-- 搜索框 -->
    <header class="header_search">
      <div class="m_header_box">
        <div class="m_logo">
          <span class="iconfont icon-zuobian" @click="back"></span>
        </div>
        <div class="m_search">
          <span class="m_icon_search"></span>
          <span class="iconfont icon-sousuo"></span>
          <input type="text" placeholder="搜索商品/店铺/种类" @click="search"/>
        </div>
        <div class="m_meau" @click="show">
          <span class="iconfont icon-gengduo" v-show="!flags"></span>
          <span class="iconfont icon-cross-fill" v-show="flags"></span>
        </div>
      </div>
    </header>
     <!-- 导航跳转 -->
    <section class="jump" v-show="flags" >
      <ul class="jumpbox">
        <li>
          <router-link to="/index" tag="a">
            <span class="iconfont icon-shouye"></span>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/category">
            <span class="iconfont icon-shouye"></span>
            <span>分类</span>
          </router-link>
        </li>
        <li>
          <router-link to="/worth">
            <span class="iconfont icon-shouye"></span>
            <span>值得买</span>
          </router-link>
        </li>
        <li>
          <router-link to="/settlement">
            <span class="iconfont icon-shouye"></span>
            <span>购物车</span>
          </router-link>
        </li>
        <li>
          <router-link to="/my">
            <span class="iconfont icon-shouye"></span>
            <span>我的叮咚</span>
          </router-link>
        </li>
      </ul>
    </section>
    <section class="c_content">
      <van-tree-select height="100%" :items="items" :main-active-index.sync="activeIndex">
        <template slot="content">
          <div v-for="(one,a) in items" v-show="activeIndex == a" class="wrapper" :key="a">
            <swiper :options="swiperOption" class="swiper-container">
              <!-- slides -->
              <!-- 轮播 -->
              <swiper-slide class="swiper-item" v-for="item of one.images" :key="item">
                <img class="swiper-img" :src="item" />
              </swiper-slide>
              <!-- Optional controls ,显示小点-->
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <!-- 更多 -->
            <div class="nav_more">
              <ul class="nav_box">
                <li v-for="(two,b) in one.list" :key="b">
                  <a href="javascript:;">
                    <p class="title">{{two.title}}</p>
                    <p class="txt">{{two.txt}}</p>
                    <span class="icon iconfont icon-youjiantou"></span>
                  </a>
                </li>
              </ul>
            </div>
            <!-- 榜单 -->
            <div class="nav_bd">
              <p class="header">榜单</p>
              <ul>
                <li v-for="(three,c) in one.val" :key="c">
                  <a href="javascript:;">
                    <img :src="three.src" alt />
                    <p>{{three.text}}</p>
                  </a>
                </li>
              </ul>
            </div>
            <!-- 分类 -->
            <div class="nav_type" v-for="(four,d) in one.type" :key="d">
              <div class="header clearfix">
                <a class="left_title">{{four.typeHeader}}</a>
                <a class="right_title">
                  {{four.title}}
                  <span class="iconfont icon-youjiantou"></span>
                </a>
              </div>
              <ul class="clearfix">
                <li v-for="(fifth,e) in four.sel" :key="e">
                  <a href="javascript:;">{{fifth.txt}}</a>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </van-tree-select>
    </section>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      activeIndex: 0,
      flags:false,
      items: [
        {
          id: "item0",
          text: "图书",
          images: [
            "http://img63.ddimg.cn/upload_img/00478/0609/886-315-wy-1574333970.jpg",
            "http://img61.ddimg.cn/upload_img/00796/1/886x315_wzh_20191121-1574329848.jpg"
          ],
          list: [
            {
              title: "进入叮咚",
              txt: "特价低至1折"
            },
            {
              title: "进入童书馆",
              txt: "精选少儿读物"
            }
          ],
          val: [
            {
              src:
                "http://img62.ddimg.cn/upload_img/00779/xmj/zong-1574317432.png",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00779/xmj/new-1574317474.png",
              text: "总榜"
            },
            {
              src:
                "http://img62.ddimg.cn/upload_img/00779/xmj/kid-1565680692.png",
              text: "总榜"
            },
            {
              src:
                "http://img61.ddimg.cn/upload_img/00678/zsts/1changxiaobang-1529564612.png",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00678/zsts/2xinshubang-1529564612.png",
              text: "总榜"
            },
            {
              src:
                "http://img61.ddimg.cn/upload_img/00678/zsts/30-2sbang-1529564612.png",
              text: "总榜"
            }
          ],
          type:[
            {
              typeHeader:"文艺",
              title:"畅销榜",
              sel:[
                {
                  txt:"小说"
                },
                {
                  txt:"文学"
                },
                {
                  txt:"传记"
                },
                {
                  txt:"青春文学"
                },
                {
                  txt:"动漫/幽默"
                },
                {
                  txt:"艺术"
                },
              ]
            }
          ]
        },
        {
          id: "item0",
          text: "童书",
          images: [
            "http://img62.ddimg.cn/upload_img/00785/ts1118_1127/886x315_dl_1121-1574327313.jpg",
            "http://img61.ddimg.cn/ddreader/dangebook/11ynew886x315.jpg",
          ],
          list: [
            {
              title: "进入叮咚",
              txt: "特价低至1折"
            },
            {
              title: "进入童书馆",
              txt: "精选少儿读物"
            }
          ],
          val: [
            {
              src:
                "http://img60.ddimg.cn/upload_img/00625/1/WENJUHE-1533196228.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img60.ddimg.cn/upload_img/00625/1012pinpai/BIDAI-1533196182.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img62.ddimg.cn/upload_img/00625/FENLEI/JUANBIDAO160160.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00625/FENLEI/LIANZITIE160160.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img62.ddimg.cn/upload_img/00625/1028/SHUPI-1533196239.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img61.ddimg.cn/upload_img/00625/FENLEI/SHILIBAOHUQI160160.jpg",
              text: "总榜"
            }
          ],
          type:[
            {
              typeHeader:"文艺",
              title:"畅销榜",
              sel:[
                {
                  txt:"小说"
                },
                {
                  txt:"文学"
                },
                {
                  txt:"传记"
                },
                {
                  txt:"青春文学"
                },
                {
                  txt:"动漫/幽默"
                },
                {
                  txt:"艺术"
                },
              ]
            }
          ]
        },
        {
          id: "item0",
          text: "女装",
          images: [
            "http://img60.ddimg.cn/upload_img/00817/ershoushu/100-1564985916.jpg",
            "http://img54.ddimg.cn/206620109527364_y.jpg",
          ],
          list: [
            {
              title: "进入叮咚",
              txt: "特价低至1折"
            },
          ],
          val: [
            {
              src:
                "http://img58.ddimg.cn/4890034408938_y.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img60.ddimg.cn/upload_img/00625/1012pinpai/BIDAI-1533196182.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img55.ddimg.cn/4890034408925_y.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img50.ddimg.cn/4890034408940_y.png",
              text: "总榜"
            },
            {
              src:
                "http://img53.ddimg.cn/4890034408893_y.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img53.ddimg.cn/116550032980613_y.jpg",
              text: "总榜"
            }
          ],
          type:[
            {
              typeHeader:"文艺",
              title:"畅销榜",
              sel:[
                {
                  txt:"小说"
                },
                {
                  txt:"文学"
                },
                {
                  txt:"传记"
                },
                {
                  txt:"青春文学"
                },
                {
                  txt:"动漫/幽默"
                },
                {
                  txt:"艺术"
                },
              ]
            }
          ]
        },
        {
          id: "item0",
          text: "男装",
          list: [
            {
              title: "进入叮咚",
              txt: "特价低至1折"
            },
            {
              title: "进入童书馆",
              txt: "精选少儿读物"
            }
          ],
          val: [
            {
              src:
                "http://img62.ddimg.cn/upload_img/00727/123/y-1574664318.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img60.ddimg.cn/upload_img/00738/123/160X160-MF-1572925316.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img61.ddimg.cn/upload_img/00727/123/ms-1574664337.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00727/123/wy-1567756069.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00727/123/xxk-1567756111.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img60.ddimg.cn/upload_img/00727/123/nzk-1567756099.jpg",
              text: "总榜"
            }
          ],
          type:[
            {
              typeHeader:"文艺",
              title:"畅销榜",
              sel:[
                {
                  txt:"小说"
                },
                {
                  txt:"文学"
                },
                {
                  txt:"传记"
                },
                {
                  txt:"青春文学"
                },
                {
                  txt:"动漫/幽默"
                },
                {
                  txt:"艺术"
                },
              ]
            }
          ]
        },
        {
          id: "item0",
          text: "男女鞋",
          images: [
            "http://img59.ddimg.cn/85250080730889_y.jpg",
            "http://img57.ddimg.cn/186920109395347_y.jpg",
          ],
          list: [
            {
              title: "进入叮咚",
              txt: "特价低至1折"
            },
            {
              title: "进入童书馆",
              txt: "精选少儿读物"
            }
          ],
          val: [
            {
              src:
                "http://img61.ddimg.cn/upload_img/00673/0/1.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img60.ddimg.cn/upload_img/00625/1012pinpai/BIDAI-1533196182.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img60.ddimg.cn/upload_img/00673/0/4.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00673/0/2.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img62.ddimg.cn/upload_img/00673/0/5.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00673/0/6.jpg",
              text: "总榜"
            }
          ],
          type:[
            {
              typeHeader:"文艺",
              title:"畅销榜",
              sel:[
                {
                  txt:"小说"
                },
                {
                  txt:"文学"
                },
                {
                  txt:"传记"
                },
                {
                  txt:"青春文学"
                },
                {
                  txt:"动漫/幽默"
                },
                {
                  txt:"艺术"
                },
              ]
            }
          ]
        },
        {
          id: "item0",
          text: "母婴玩具",
          list: [
            {
              title: "进入叮咚",
              txt: "特价低至1折"
            },
            {
              title: "进入童书馆",
              txt: "精选少儿读物"
            }
          ],
          val: [
            {
              src:
                "http://img61.ddimg.cn/upload_img/00359/ly3/logo_01-1517563671.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img61.ddimg.cn/upload_img/00359/ly3/logo_01-1517563671.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00359/ly3/logo_07-1517563671.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00359/ly3/logo_04-1517563671.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img50.ddimg.cn/79140057851430_y.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img53.ddimg.cn/79140057851433_y.jpg",
              text: "总榜"
            }
          ],
          type:[
            {
              typeHeader:"文艺",
              title:"畅销榜",
              sel:[
                {
                  txt:"小说"
                },
                {
                  txt:"文学"
                },
                {
                  txt:"传记"
                },
                {
                  txt:"青春文学"
                },
                {
                  txt:"动漫/幽默"
                },
                {
                  txt:"艺术"
                },
              ]
            }
          ]
        },
        {
          id: "item0",
          text: "食品生鲜",
          images: [
            "http://img52.ddimg.cn/84110053438412_y.jpg",
            "http://img55.ddimg.cn/85030064292525_y.jpg",
          ],
          list: [
            {
              title: "进入叮咚",
              txt: "特价低至1折"
            },
          ],
          val: [
            {
              src:
                "http://img62.ddimg.cn/upload_img/00759/lily/lyl-1560938228.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img53.ddimg.cn/14540041678073_y.png",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00769/lily/180-180-1570675975.jpg",
              text: "总榜"
            },
          ],
          type:[
            {
              typeHeader:"文艺",
              title:"畅销榜",
              sel:[
                {
                  txt:"小说"
                },
                {
                  txt:"文学"
                },
                {
                  txt:"传记"
                },
                {
                  txt:"青春文学"
                },
                {
                  txt:"动漫/幽默"
                },
                {
                  txt:"艺术"
                },
              ]
            }
          ]
        },
        {
          id: "item0",
          text: "手机数码",
          list: [
            {
              title: "进入叮咚",
              txt: "特价低至1折"
            },
            {
              title: "进入童书馆",
              txt: "精选少儿读物"
            }
          ],
          val: [
            {
              src:
                "http://img63.ddimg.cn/upload_img/00265/124/160.png",
              text: "总榜"
            },
            {
              src:
                "http://img51.ddimg.cn/173090044193141_y.png",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00265/yg4161/huawei-3.png",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00265/yg4161/oppo-6.png",
              text: "总榜"
            },
            {
              src:
                "http://img61.ddimg.cn/upload_img/00265/456/M1.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img60.ddimg.cn/upload_img/00265/456/vivo-1.jpg",
              text: "总榜"
            }
          ],
          type:[
            {
              typeHeader:"文艺",
              title:"畅销榜",
              sel:[
                {
                  txt:"小说"
                },
                {
                  txt:"文学"
                },
                {
                  txt:"传记"
                },
                {
                  txt:"青春文学"
                },
                {
                  txt:"动漫/幽默"
                },
                {
                  txt:"艺术"
                },
              ]
            }
          ]
        },
        {
          id: "item0",
          text: "电脑办公",
          images: [
            "http://img50.ddimg.cn/198970072428500_y.jpg",
            "http://img53.ddimg.cn/93640063383303_y.jpg",
          ],
          list: [
            {
              title: "进入叮咚",
              txt: "特价低至1折"
            },
            {
              title: "进入童书馆",
              txt: "精选少儿读物"
            }
          ],
          val: [
            {
              src:
                "http://img63.ddimg.cn/upload_img/00359/ly_1/think.png",
              text: "总榜"
            },
            {
              src:
                "http://img60.ddimg.cn/upload_img/00359/ly_1/apple.png",
              text: "总榜"
            },
            {
              src:
                "http://img62.ddimg.cn/upload_img/00359/jinping/lenvov.png",
              text: "总榜"
            },
          ],
          type:[
            {
              typeHeader:"文艺",
              title:"畅销榜",
              sel:[
                {
                  txt:"小说"
                },
                {
                  txt:"文学"
                },
                {
                  txt:"传记"
                },
                {
                  txt:"青春文学"
                },
                {
                  txt:"动漫/幽默"
                },
                {
                  txt:"艺术"
                },
              ]
            }
          ]
        },
        {
          id: "item0",
          text: "叮咚优课",
          list: [
            {
              title: "进入叮咚",
              txt: "特价低至1折"
            },
            {
              title: "进入童书馆",
              txt: "精选少儿读物"
            }
          ],
          val: [
            {
              src:
                "http://img54.ddimg.cn/93640054555754_y.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img58.ddimg.cn/219110046749858_y.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img59.ddimg.cn/199660120287399_y.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img55.ddimg.cn/69980070077205_y.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img59.ddimg.cn/62460120285929_y.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img51.ddimg.cn/94300061778891_y.jpg",
              text: "总榜"
            }
          ],
          type:[
            {
              typeHeader:"文艺",
              title:"畅销榜",
              sel:[
                {
                  txt:"小说"
                },
                {
                  txt:"文学"
                },
                {
                  txt:"传记"
                },
                {
                  txt:"青春文学"
                },
                {
                  txt:"动漫/幽默"
                },
                {
                  txt:"艺术"
                },
              ]
            }
          ]
        },
        {
          id: "item0",
          text: "叮咚优课",
          images: [
            "http://img54.ddimg.cn/117110052447404_y.jpg",
            "http://img60.ddimg.cn/upload_img/00271/jy/886-315-1573634110.jpg",
          ],
          list: [
            {
              title: "进入叮咚",
              txt: "特价低至1折"
            },
            {
              title: "进入童书馆",
              txt: "精选少儿读物"
            }
          ],
          val: [
            {
              src:
                "http://img63.ddimg.cn/upload_img/00271/jiangyan/2-wxfenlei-171128.png",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00271/jiangyan/8-wxfenlei-171128.png",
              text: "总榜"
            },
            {
              src:
                "http://img62.ddimg.cn/upload_img/00271/jiangyan/12-wxfenlei-171128.png",
              text: "总榜"
            },
            {
              src:
                "http://img63.ddimg.cn/upload_img/00271/jiangyan/9-wxfenlei-171128.png",
              text: "总榜"
            },
            {
              src:
                "http://img62.ddimg.cn/upload_img/00271/jiangyan/19-wxfenlei-171128.png",
              text: "总榜"
            },
            {
              src:
                "http://img60.ddimg.cn/upload_img/00271/jiangyan/61861568-1227liangxi.png",
              text: "总榜"
            }
          ],
          type:[
            {
              typeHeader:"文艺",
              title:"畅销榜",
              sel:[
                {
                  txt:"小说"
                },
                {
                  txt:"文学"
                },
                {
                  txt:"传记"
                },
                {
                  txt:"青春文学"
                },
                {
                  txt:"动漫/幽默"
                },
                {
                  txt:"艺术"
                },
              ]
            }
          ]
        },
        {
          id: "item0",
          text: "厨房用品",
          list: [
            {
              title: "进入叮咚",
              txt: "特价低至1折"
            },
          ],
          val: [
            {
              src:
                "http://img61.ddimg.cn/upload_img/00496/ddyp/60573293.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img61.ddimg.cn/upload_img/00496/ddyp/60573293.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img62.ddimg.cn/upload_img/00496/ddyp/60604596.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img62.ddimg.cn/upload_img/00496/ddyp/60604596.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img62.ddimg.cn/upload_img/00452/ddyp/0228-yp-yj-1.jpg",
              text: "总榜"
            },
            {
              src:
                "http://img61.ddimg.cn/upload_img/00496/ddyp/60617983.jpg",
              text: "总榜"
            }
          ],
          type:[
            {
              typeHeader:"文艺",
              title:"畅销榜",
              sel:[
                {
                  txt:"小说"
                },
                {
                  txt:"文学"
                },
                {
                  txt:"传记"
                },
                {
                  txt:"青春文学"
                },
                {
                  txt:"动漫/幽默"
                },
                {
                  txt:"艺术"
                },
              ]
            }
          ]
        },
      ],
      swiperOption: {
        // 参数选项,显示小点
        pagination: ".swiper-pagination",
        //循环
        loop: true,
        //每张播放时长3秒，自动播放
        autoplay: 2000,
        //滑动速度
        speed: 300
        // delay:300
      }
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    search(){
      this.$router.push("/search")
    },
    show(){
      this.flags = !this.flags;
    }
  },
  components: {
    swiper,
    swiperSlide,
  }
};
</script>
<style lang="scss" scoped>
@import "../../node_modules/swiper/dist/css/swiper.css";

$color: #f0374e;
$background: #ffffff;
$font-background: #879299;
// 导航跳转
.jump {
  transition: all 2s ease;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  margin-top: 46px;
  background-color: #eee;
  z-index: 100000;
  ul.jumpbox{
    width: 100%;
    li {
      width: 20%;
      float: left;
      text-align: center;
      padding: 5px 0px;
      a {
        width: 100%;
        display: block;
        font-size: 12px;
        span {
          display: block;
          color: #4d525d;
        }
      }
    }
  }
}
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
// 内容
.c_content {
  padding-top: 46px;
  .van-tree-select__nav {
    flex: 0.6;
    padding-bottom: 100px;
    z-index: 1000;
  }
  .van-sidebar-item--select {
    background-color: #eff4fa;
    color: #e53e30;
  }
  .van-swipe-item {
    img {
      width: 100%;
    }
  }
  .van-sidebar-item--select::-webkit-scrollbar {
    display: none !important;
  }
  .van-tree-select__content {
    padding-left: 8px;
    background-color: #eff4fa;
    padding-bottom: 100px;
  }
  .van-tree-select {
    position: fixed;
    top: 46px;
    left: 0px;
    width: 100%;
    bottom: 49px;
  }
  a {
    border-color: transparent;
    display: block;
    height: 47px;
    line-height: 47px;
    padding: 0;
    text-align: center;
  }
  .class_box_inner {
    margin-left: 8px;
  }
}
.swiper-container {
  width: 240px;
}
.swiper-slide {
  width: auto !important;
  display: inline-block;
  height: 80px;
  line-height: 80px;
  font-size: 32px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  color: #fff;
  cursor: pointer;

  img {
    width: 240px;
    height: auto;
  }
}
.swiper-container .swiper-slide .active {
  color: #666;
  background-color: #fff8eb;
  box-shadow: 0 3px 13px 0 rgba(94, 94, 94, 0.5);
}
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
//更多
.nav_more {
  width: 100%;
  .nav_box {
    display: flex;
    li {
      margin-top: 10px;
      flex: 1;
      background-color: #fff;
      padding-left: 10px;
      padding-bottom: 10px;
      position: relative;
      a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-right: 30px;
        p.title {
          font-size: 14px;
          color: #212121;
          height: 18px;
          text-align: left;
        }
        p.txt {
          color: #a6a6a6;
          font-size: 12px;
          height: 18px;
          text-align: left;
        }
        span.icon {
          display: block;
          position: absolute;
          right: 2px;
          top: 3px;
          font-size: 20px;
          color: #000;
        }
      }
    }
    li:nth-child(2) {
      margin-left: 10px;
    }
  }
}
//榜单
.nav_bd {
  width: 100%;
  padding: 8px;
  background-color: #fff;
  margin-top: 10px;
  p.header {
    width: 100%;
    text-align: left;
    font-size: 13px;
    color: #1e1e1e;
    font-weight: bold;
    padding-left: 13px;
  }
  ul {
    margin-top: 5px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 33.3%;
      display: block;
      height: 120px;
      a {
        width: 100%;
        display: block;
        text-align: center;
        img {
          width: 100%;
          padding: 10px 5px;
        }
        p {
          text-align: center;
          width: 100%;
          font-size: 11px;
          color: #4d525d;
        }
      }
    }
  }
}
//分类
.nav_type {
  width: 100%;
  margin-top: 10px;
  background-color: #fff;
  .header {
    width: 100%;
    padding: 0 10px;
    .left_title {
      font-size: 13px;
      color: #000;
      float: left;
      font-weight: bold;
    }
    .right_title {
      font-size: 12px;
      color: #969696;
      float: right;
    }
  }
  ul {
    padding: 0 10px;
    width: 100%;
    li {
      position: relative;
      width: 33.3%;
      float: left;
      border-bottom: 1px solid #f0f0f0;
      a {
        font-size: 12px;
        color: #4d525d;
      }
    }
    li::after{
      height: 18px;
      display: block;
      width: 2px;
      background-color:#f0f0f0;
      content: "";
      position: absolute; 
      top: 18px;
      right: 0px;
    }
    li:nth-child(3n)::after{
      height: 0px;
      display: block;
      width: 0px;
      background-color:#f0f0f0;
      content: "";
      position: absolute; 
      top: 18px;
      right: 0px;
    }
  }
}
</style>