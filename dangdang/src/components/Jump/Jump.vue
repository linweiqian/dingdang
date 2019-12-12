<template>
  <div>
    <!-- 导航跳转 -->
    <section class="jump">
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
  </div>
</template>
<style lang="scss">
// 导航跳转
.jump {
  transition: all 2s ease;
  width: 100%;
  background-color: #eee;
  z-index: 100000;
  height: 49px;
  position: fixed;
  left: 0px;
  top: 46px;
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
</style>