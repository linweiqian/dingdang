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
        <div class="m_meau"></div>
      </div>
    </header>
    <!-- 联系人卡片 -->
    <van-contact-card
      :type="cardType"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="showList = true"
    />

    <!-- 联系人列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-contact-list
        v-model="chosenContactId"
        :list="list"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </van-popup>

    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
    <section class="nav_pay">
      <ul class="clearfix">
        <li v-for="(item,i) in payGoods" :key="i">
          <div class="fl">
            <img :src="item.thumb" alt />
          </div>
          <div class="fr">
            <p class="pirce">￥{{item.price|numFilter}}</p>
            <p class="yf">共1件，运费：￥6元</p>
            <span class="iconfont icon-youjiantou"></span>
          </div>
        </li>
      </ul>
    </section>
    <div @click="OrderTo">
      <van-submit-bar :price="total*100" button-text="去支付" />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { ContactCard, ContactList, ContactEdit } from "vant";
import { mapState } from "vuex";
import { Toast } from 'vant';
Vue.use(Toast);
Vue.use(ContactCard)
  .use(ContactList)
  .use(ContactEdit);
export default {
  data() {
    return {
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      json:{},
      list: [
        {
          name: "张三",
          tel: "13000000000",
          id: 0
        }
      ],
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    // 添加联系人
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map(item => (item.id === info.id ? info : item));
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    },
    OrderTo() {
      Toast('支付成功');
      this.$router.push("/order");
    }
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? "edit" : "add";
    },
    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    },
    ...mapState({
      payGoods: state => state.Cars.goodslists,
    }),
    total(){
      let tot = 0;
      this.json.forEach(val => {
          tot += val.price * val.num
      })
      return tot
    }
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
  },
  created(){
    this.json = this.$store.state.Cars.goodslists
    window.console.log(this.json)
  }
};
</script>
<style lang="scss">
.van-contact-card {
  margin-top: 46px;
}
.nav_pay {
  margin-top: 46px;
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
      }
    }
  }
}
</style>