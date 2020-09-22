<template>
  <li class="post-container">
    <div class="menu-list">
      <span class="post-contents">
        <b>{{ menuItem.menu_name }}</b> &nbsp; | {{ menuItem.menu_category }} |
        {{ menuItem.menu_intro }} | {{ menuItem.menu_price }}원&nbsp;
        <i class="menu-icon ion-md-create" @click="routeEditPage"></i>&nbsp;
        <i class="menu-icon ion-md-trash" @click="deleteItem"></i>
      </span>
    </div>
    <div v-if="isEdit">
      <form class="menuEdit-form-wrapper" @submit.prevent="submitEditForm">
        <span class="menuEdit-form-contents">
          <input type="text" v-model="menu_name" size="10" />
        </span>
        <span class="menuEdit-form-contents">
          <select
            name="menu_category"
            type="text"
            v-model="menu_category"
            id="menu-eidt-select"
          >
            <option value="메인메뉴" selected="selected">메인 메뉴</option>
            <option value="세트메뉴">세트 메뉴</option>
            <option value="사이드메뉴">사이드 메뉴</option>
            <option value="음료">음료</option>
          </select>
        </span>
        <span class="menuEdit-form-contents">
          <input type="text" v-model="menu_intro" size="30" />
        </span>
        <span class="menuEdit-form-contents">
          <input type="text" v-model="menu_price" size="10" />
        </span>
        <p class="validation-text">
          <span class="warning" v-if="isNumberValid && menu_price">
            숫자만 입력가능합니다.
          </span>
        </p>
        <span>
          <button type="submit" id="menu-edit-btn">
            메뉴 등록
          </button>
        </span>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </li>
</template>

<script>
import { deleteMenu, editMenu } from '@/api/menus';
import { chechNumber } from '@/utils/validation';

export default {
  props: {
    menuItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isEdit: false,
      menu_name: '',
      menu_category: '',
      menu_intro: '',
      menu_price: '',
      logMessage: '',
    };
  },
  methods: {
    async deleteItem() {
      try {
        if (confirm('해당 메뉴를 삭제하시겠습니까?')) {
          const res = await deleteMenu(this.menuItem.menu_num);
          console.log(res);
          this.$router.go();
        }
      } catch (error) {
        console.log(error);
      }
    },
    async routeEditPage() {
      try {
        this.isEdit = !this.isEdit;
        console.log(this.isEditView);
      } catch (error) {
        console.log(error);
      }
    },
    async submitEditForm() {
      try {
        if (
          this.menu_name === '' ||
          this.menu_category === '' ||
          this.menu_price === '' ||
          this.isNumberValid === true
        ) {
          this.logMessage = '올바르지 않은 입력입니다. 다시 확인해주세요.';
          return;
        }
        const menuData = {
          menuNum: this.menu_num,
          newMenuName: this.menu_name,
          newMenuCategory: this.menu_category,
          newMenuIntro: this.menu_intro,
          newMenuPrice: this.menu_price,
        };
        const response = await editMenu(menuData);
        console.log(response);
        this.isEditView = !this.isEditView;
        this.$router.go();
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          this.logMessage = error.response.data;
        } else {
          this.logMessage = '에러발생';
          console.log(error);
        }
      }
    },
  },
  created() {
    this.menu_num = this.menuItem.menu_num;
    this.menu_name = this.menuItem.menu_name;
    this.menu_category = this.menuItem.menu_category;
    this.menu_intro = this.menuItem.menu_intro;
    this.menu_price = this.menuItem.menu_price;
  },
  computed: {
    isNumberValid() {
      return chechNumber(this.menu_price);
    },
    isContentsValid() {
      return this.menu_intro.length <= 100;
    },
  },
};
</script>

<style>
b {
  color: #9ab4d4;
}
.post-title:hover {
  color: #5caaef;
}

.post-container:hover {
  color: #9ab4d4;
}
.menuEdit-form-wrapper {
  border-style: solid;
}
.menuEdit-form-contents {
  font-family: 'Jua', sans-serif;
}

#menu-edit-btn {
  background: #9ab4d4;
  color: white;
  font-weight: bold;
  border: 1px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;
}
</style>
