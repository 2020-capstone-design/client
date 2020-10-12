<template>
  <v-container align-v="center" class="question-container">
    <v-row text-content="center">
      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header
            >앱에서 어떻게 보이나요?</v-expansion-panel-header
          >
          <v-expansion-panel-content> </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header
            >OPEN & CLOSE 버튼이 뭔가요?</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            OPEN & CLOSE 버튼으로 앱에서 사용자가 가게가 오픈 상태인지 아닌지 볼
            수 있게됩니다.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header
            >이미지 등록이 안 돼요</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            이미지 파일 크기가 3MB가 넘어갈 경우 등록이 제한됩니다.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header
            >회원 탈퇴 하고 싶어요</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            홈페이지 상단 메뉴 내정보 관리 > 회원 탈퇴 클릭
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
#add-restaurant-guide {
  margin: 10px;
  width: 400px;
}
</style>
