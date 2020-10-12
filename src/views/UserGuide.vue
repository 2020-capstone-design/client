<template>
  <div>
    <h1 class="page-header">이용 가이드</h1>
    <Guide></Guide>
    <h1 class="page-header">예상 문의 답변</h1>
    <QnA></QnA>
  </div>
</template>

<script>
import Guide from '@/components/guide/Guide.vue';
import QnA from '@/components/guide/QnA.vue';

export default {
  components: {
    Guide,
    QnA,
  },
};
</script>

<style></style>
