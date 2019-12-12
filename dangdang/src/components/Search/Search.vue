<template>
  <div>
    <section class="layout-search">
      <div
        data-v-7b59048f
        class="van-search van-search--show-action"
        style="background: rgb(255, 255, 255);"
      >
      <div class="back" @click="back"><span class="iconfont icon-zuobian"></span></div>
        <div data-v-7b59048f class="van-search__content van-search__content--round">
          <div data-v-7b59048f class="van-cell van-cell--borderless van-field">
            <div class="van-field__left-icon">
              <i class="van-icon van-icon-search">
              </i>
            </div>
            <div class="van-cell__value van-cell__value--alone">
              <div class="van-field__body">
                <input type="search" placeholder="请输入搜索关键词" class="van-field__control" />
              </div>
            </div>
          </div>
        </div>
        <div data-v-7b59048f role="button" tabindex="0" class="van-search__action">
          <div data-v-7b59048f>搜索</div>
        </div>
      </div>
      <p class="title">
        <span class="iconfont icon-huo"></span>热门搜索
      </p>
      <ul>
        <li v-for="(one,i) in list" :key="i">
          <a href="javascript:;">{{one.val}}</a>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          val: "庆余年"
        },
        {
          val: "永久记录"
        },
        {
          val: "森马"
        },
        {
          val: "LED化妆镜"
        },
        {
          val: "时间真好玩"
        },
        {
          val: "庚子千人历"
        },
        {
          val: "雅思真题"
        },
        {
          val: "汽车"
        },
        {
          val: "意林少年版"
        },
        {
          val: "贴纸书0 3岁"
        },
        {
          val: "哈姆雷特"
        }
      ]
    };
  },
  methods:{
      back(){
          this.$router.go(-1);
      }
  }
};
</script>
<style lang="scss" scoped>
.layout-search {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  .back{
      margin-right: 5px;
      font-size: 20px;
      color: #464646;
      margin-bottom: 5px;
  }
  .title {
    padding-left: 10px;
  }
  ul {
    padding-left: 10px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    li {
      margin-top: 5px;
      margin-right: 5px;
      background-color: #ffffff;
      padding: 4px 6px;
      text-align: center;
      a {
        font-size: 12px;
        color: #464646;
      }
    }
  }
}
</style>

