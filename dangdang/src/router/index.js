import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue"
import Category from "../views/Category.vue";
import Worth from "../views/Worth.vue";
import My from "../views/My.vue";
import Login from "../views/Login.vue";
import Guide from "../views/Guide.vue";
import Register from "../views/Register.vue";
import Likes from "../components/Like/Likes.vue";
import Comments from "../components/Detail/Comments.vue";
import Describe from "../components/Detail/Describe.vue";
import Goods from "../components/Detail/Goods.vue";
import Recommended from "../components/Detail/Recommended.vue";
import Detail from "../views/Detail.vue";
import Settlement from "../views/Settlement.vue";
import Search from "../components/Search/Search.vue";
import Repassword from "../views/Repassword.vue";
import Browse from "../views/My/Browse.vue"
import Store from "../views/My/Store.vue";
import Collection from "../views/My/Collection.vue";
import Vip from "../views/My/Vip.vue";
import Coupons from "../views/My/Coupons.vue";
import Intergration from "../views/My/Intergration.vue";
import Gift from "../views/My/Gift.vue";
import Order from "../views/My/Order.vue";
import Books from "../views/My/Books.vue";
import Call from "../views/My/Call.vue";
import Addres from "../views/My/ReAddres.vue";
import MyAddres from "../views/My/Myaddres.vue";
import Pay from "../views/Pay.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component:Guide 
  },
  {
    path: "/index",
    name:"主页",
    component:Index,
    children:[
      {
        path:"/likes",
        name:"根据喜好",
        component:Likes
      }
    ]
  },
  {
    path:"/category",
    name:"分类",
    component:Category
  },
  {
    path:"/worth",
    name:"值得买",
    component:Worth
  },
  {
    path:"/my",
    name:"个人中心",
    component:My
  },
  {
    path:"/login",
    name:"登录注册",
    component:Login,
  },
  {
    path:"/register",
    name:"注册页面",
    component:Register
  },
  {
    path:"/comments",
    name:"详情页",
    component:Comments
  },
  {
    path:"/describe",
    name:"商品介绍",
    component:Describe
  },
  {
    path:"/goods",
    name:"商品介绍",
    component:Goods
  },
  {
    path:"/recommended",
    name:"商品介绍",
    component:Recommended
  },
  {
    path:"/detail",
    name:"商品介绍",
    component:Detail
  },
  {
    path:"/settlement",
    name:"购物车",
    component:Settlement
  },
  {
    path:"/search",
    name:"搜索",
    component:Search
  },
  {
    path:"/repassword",
    name:"叮咚找回密码",
    component:Repassword
  },
  {
    path:"/browse",
    name:"浏览过的商品",
    component:Browse
  },
  {
    path:'/store',
    name:"关注的店铺",
    component:Store
  },
  {
    path:'/collection',
    name:"我的收藏",
    component:Collection
  },
  {
    path:"/vip",
    name:"会员中心",
    component:Vip
  },
  {
    path:"/coupons",
    name:"优惠卷",
    component:Coupons
  },
  {
    path:"/intergration",
    name:"叮咚积分规则",
    component:Intergration
  },
  {
    path:"/gift",
    name:"礼品卡",
    component:Gift
  },
  {
    path:"/order",
    name:"我的订单",
    component:Order
  },
  {
    path:"/books",
    name:"我的书房",
    component:Books
  },
  {
    path:"/call",
    name:"客服/帮助",
    component:Call
  },
  {
    path:"/addres",
    name:"修改地址",
    component:Addres
  },
  {
    path:"/myaddres",
    name:"我的地址",
    component:MyAddres
  },
  {
    path:"/pay",
    name:"订单结算",
    component:Pay
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  //页面跳转显示在顶部
    scrollBehavior (to, from, savedPosition){
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
});
export default router;

