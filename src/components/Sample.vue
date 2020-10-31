<template>
  <button id="sample-btn" @click="alert">샘플용 아이디, 비밀번호</button>
</template>

<script>
export default {
  methods: {
    alert() {
      alert('샘플용 아이디 : test, 비밀번호 : testpwd@1');
    },
  },
};
</script>

<style>
#sample-btn {
  position: relative;
  left: 50%;
  margin-top: 20px;
  transform: translateX(-50%);
  background-position: left;
  background-size: 200%;
  color: white;
  background: #9ab4d4;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;
  display: inline;
}
</style>
