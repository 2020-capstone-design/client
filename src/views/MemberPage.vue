<template>
  <div class="contents">
    <h1 class="page-header">내 정보 관리</h1>
    <small>변경하시려는 부분을 변경한 후 '정보 변경'을 클릭해주세요.</small>
    <br /><br />
    <div class="form-wrapper">
      <form
        class="form"
        @submit.prevent="submitForm"
        enctype="multipart/form-data"
      >
        <div>
          <label for="title">이름</label>
          <input
            id="title"
            type="text"
            v-model="title"
            v-validate="'required'"
          />
        </div>
        <div>
          <label for="phone">생년월일</label>
          <input id="phone" type="text" v-model="phone" />
        </div>
        <div>
          <label for="location">전화번호</label>
          <input id="location" type="text" v-model="location" />
        </div>
        <button type="submit" class="btn">
          정보 변경
        </button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      birth: '',
      phone: '',
      logMessage: '',
    };
  },
};
</script>

<style>
small {
  text-align: center;
}
</style>
