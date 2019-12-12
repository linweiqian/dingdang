<template>
  <div>
    <div class="more_goods">
      <div class="header">
        <p class="top">
          <span class="iconfont icon-MBEfenggeduosetubiao-xihuan"></span>
          <a href="javascript:;">根据你的喜好猜您喜欢</a>
        </p>
      </div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="nav_content">
          <ul class="ul_index clearfix">
            <li v-for="(item,i) in list" :key="i">
              <router-link :to="'/detail?id='+i" href="javascript:;">
                <img :src="item.src" alt />
                <p>
                  <span class="name">{{item.name}}</span>
                </p>
                <p>
                  <span class="label">{{item.label}}</span>
                </p>
                <p>
                  <span class="piece">{{item.piece}}</span>
                </p>
              </router-link>
            </li>
          </ul>
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      good:{},
      list:[],
      finished: false,
      loading: false,
      num: 0
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        this.num++;
        let list = [
          { 
            src: "http://img3m8.ddimg.cn/68/25/27924998-1_h_12.jpg",
            name:
              "知识日历：名画日历2020（顾爷作品！每日一名画，秒变艺术达人）111",
            label: "叮咚自营",
            piece: "￥27.00"
          },
          {
            src: "http://img3m1.ddimg.cn/62/32/27877571-1_h_1.jpg",
            name:
              "小熊和最好的爸爸（全7册）222",
            label: "叮咚自营",
            piece: "￥27.00"
          },
          {
            src: "http://img3m3.ddimg.cn/86/25/28472783-1_h_6.jpg",
            name:
              "作文课（阎连科、周国平、刘瑜、邢立达及多所知名小学语文老师诚挚推荐）333",
            label: "叮咚自营",
            piece: "￥27.00"
          },
          {
            src: "http://img3m9.ddimg.cn/78/30/28480299-1_h_3.jpg",
            name:
              "射雕英雄传（青少版） 金庸作品  入选全国多地中小学阅读推荐书目444",
            label: "叮咚自营",
            piece: "￥27.00"
          },
        ];
        for (let i = 0; i < list.length; i++) {
          this.list.push(list[i]);
        }
        this.loading = false;
        if (this.list.length >= 12) {
          this.finished = true;
        }
      }, 1000);
    }
  },
};
</script>
<style lang="scss" scoped>
.more_goods {
  background-color: #eff4fa;
  .header {
    width: 100%;
    .top {
      width: 100%;
      width: 100%;
      text-align: center;
      padding: 15px 0px;
      position: relative;
      span {
        font-size: 20px;
        color: #a87dff;
        position: absolute;
        left: 80px;
        top: 10px;
      }
      a {
        display: block;
        color: #313c47;
        font-size: 12px;
        display: block;
      }
    }
  }
  .nav_content {
    width: 100%;
    .ul_index {
      width: 100%;
      li {
        background-color: #ffffff;
        float: left;
        margin-bottom: 5px;
        a {
          text-align: center;
          display: block;
          img {
            width: 100%;
          }
          p {
            width: 100%;
            padding: 5px;
            text-align: left;
            span {
              font-size: 12px;
            }
            .name {
              display: block;
              color: #232323;
              overflow: hidden;
              text-overflow: ellipsis;
              word-break: break-all;
              white-space: nowrap;
            }
            .label {
              font-size: 12px;
              width: 54px;
              height: 13px;
              color: #e53e30;
              border: 1px solid #e53e30;
              display: block;
              padding: 1px;
            }
            .piece {
              color: #e53e30;
            }
          }
        }
      }
      li:nth-child(even) {
        width: 49%;
        margin-left: 5px;
      }
      li:nth-child(odd) {
        width: 49%;
      }
    }
  }
}
</style>