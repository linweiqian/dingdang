<template>
  <div>
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
    <van-address-list class="van-address-list" v-model="chosenAddressId">
      <div role="radiogroup" class="van-radio-group">
        <div role="button" tabindex="0" class="van-cell van-cell--clickable van-address-item">
          <div class="van-cell__value van-cell__value--alone van-address-item__value">
            <div role="radio" tabindex="-1" aria-checked="false" class="van-radio">
              <div class="van-radio__icon van-radio__icon--round" style="font-size: 16px;">
                <i class="van-icon van-icon-success">
                  <!---->
                </i>
              </div>
              <span class="van-radio__label">
                <div class="van-address-item__name">张三，13000000000</div>
                <div class="van-address-item__address">浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室</div>
              </span>
            </div>
          </div>
          <i class="van-icon van-icon-edit van-address-item__edit">
            <!---->
          </i>
        </div>
        <div role="button" tabindex="0" class="van-cell van-cell--clickable van-address-item">
          <div class="van-cell__value van-cell__value--alone van-address-item__value">
            <div role="radio" tabindex="0" aria-checked="true" class="van-radio">
              <div
                class="van-radio__icon van-radio__icon--round van-radio__icon--checked"
                style="font-size: 16px;"
              >
                <i class="van-icon van-icon-success">
                  <!---->
                </i>
              </div>
              <span class="van-radio__label">
                <div class="van-address-item__name">李四，1310000000</div>
                <div class="van-address-item__address">浙江省杭州市拱墅区莫干山路 50 号</div>
              </span>
            </div>
          </div>
          <i class="van-icon van-icon-edit van-address-item__edit">
            <!---->
          </i>
        </div>
      </div>
      <div class="van-address-list__disabled-text">以下地址超出配送范围</div>
      <div class="van-cell van-address-item van-address-item--disabled">
        <div class="van-cell__value van-cell__value--alone van-address-item__value">
          <div class="van-address-item__name">王五，1320000000</div>
          <div class="van-address-item__address">浙江省杭州市滨江区江南大道 15 号</div>
        </div>
        <i class="van-icon van-icon-edit van-address-item__edit">
          <!---->
        </i>
      </div>
      <button
      @click="addresTo"
        class="van-button van-button--danger van-button--large van-button--square van-address-list__add"
      >
        <span class="van-button__text" tag="span">新增地址</span>
      </button>
    </van-address-list>
  </div>
</template>
<script>
import Vue from "vue";
import { AddressList } from "vant";
Vue.use(AddressList);
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      chosenAddressId: 1,
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000",
          address: "浙江省杭州市拱墅区莫干山路 50 号"
        }
      ],
      disabledList: [
        {
          id: "3",
          name: "王五",
          tel: "1320000000",
          address: "浙江省杭州市滨江区江南大道 15 号"
        }
      ]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    onAdd() {
        Toast("新增地址");
    },
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
    addresTo(){
        this.$router.push("/addres");
    }
  }
};
</script>
<style lang="scss">
.van-address-list {
  margin-top: 46px;
}
</style>