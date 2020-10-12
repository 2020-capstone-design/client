<template>
  <v-container align-v="center" class="question-container">
    <v-row text-content="center">
      <v-expansion-panels focusable>
        <v-expansion-panel>
          <v-expansion-panel-header>가게 정보 등록</v-expansion-panel-header>
          <v-expansion-panel-content>
            <img
              src="https://user-images.githubusercontent.com/49308628/95706912-18c19e00-0c93-11eb-8271-a49294dceb0a.gif"
              class="guide"
            />
            <br />
            메인 페이지 우측 '가게 등록' 버튼 클릭 > 정보 입력 후 등록
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>가게 정보 관리</v-expansion-panel-header>
          <v-expansion-panel-content>
            <img
              src="https://user-images.githubusercontent.com/49308628/95722018-597ae080-0cae-11eb-9b05-c87300b7e61f.png"
              class="guide"
            />
            <br />
            1. 가게 정보 관리는 가게 정보 박스 안에 관련 버튼들이 모두 있습니다.
            <br />
            2. 가게 로고를 클릭하면 가게의 이미지들을 관리할 수 있는 페이지로
            이동합니다.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>가게 메뉴 등록</v-expansion-panel-header>
          <v-expansion-panel-content>
            <img
              src="https://user-images.githubusercontent.com/49308628/95722443-ea51bc00-0cae-11eb-9f9b-6edb70f04017.png"
              class="guide"
            />
            <br />
            가게 정보란에서 가게 명 클릭 시 메뉴 관리 페이지로 이동합니다.
            <br />
            <img
              src="https://user-images.githubusercontent.com/49308628/95722892-7b289780-0caf-11eb-8253-560165b22f58.png"
              class="guide"
            />
            <br />
            메뉴를 한 개씩 추가할 수 있습니다.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>가게 메뉴 관리</v-expansion-panel-header>
          <v-expansion-panel-content>
            <img
              src="https://user-images.githubusercontent.com/49308628/95732540-d791b400-0cbb-11eb-9530-b7e956abe184.png"
              class="guide"
            />
            <br />
            1. 가게 정보란에서 가게 명 클릭 시 메뉴 관리 페이지로 이동합니다.
            <br />
            2. 메뉴 등록 시 하단에 등록한 메뉴가 표시됩니다. (정렬 됨)
            <br />
            3. 각 메뉴의 우측 연필 모양의 버튼을 누르면 수정 할 수 있습니다.
            <br />
            4. 각 메뉴의 우측 쓰레기통 모양의 버튼을 누르면 삭제 할 수 있습니다.
            <br />
            5. 메인 메뉴, 세트 메뉴, 사이드 메뉴, 음료 순으로 정렬되며, 그
            중에서도 가격 순으로 정렬됩니다.
            <br />
            6. 앱에서도 메뉴 카테고리별로 정렬됩니다.
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>회원 정보 관리</v-expansion-panel-header>
          <v-expansion-panel-content>
            <img
              src="https://user-images.githubusercontent.com/49308628/95734277-3ce6a480-0cbe-11eb-8084-dfd352681724.png"
              class="guide"
            />
            <br />
            1. 페이지 상단 '내 정보 관리' 클릭
            <br />
            2. 비밀번호 입력
            <br />
            3. 정보 변경 가능
            <br />
            4. 비밀번호 변경 버튼 클릭 시 해당 페이지로 이동
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
.guide {
  margin: 10px;
  width: 700px;
}
</style>
