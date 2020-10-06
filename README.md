# 오늘 뭐 먹지? 사장님 광장

> '오늘 뭐 먹지? 사장님 광장' 홈페이지에서 등록한 가게 정보는 오늘 뭐먹지? 앱을 사용하는 고객들이 앱으로 확인할 수 있습니다.

<p align="center"><img src="https://user-images.githubusercontent.com/49308628/95081681-d957f680-0754-11eb-8a68-009437b30bef.png" width="200px" height="200px" style="zoom:50%;" text-align="center" /></p>

<p align="center"><img src="https://img.shields.io/badge/npm-6.14.8-red"/> <img src="https://img.shields.io/badge/vue--cli-4.4.6-blue"/> <img src="https://img.shields.io/badge/node-12.16.2-yellowgreen"/> <img src="https://img.shields.io/badge/license-MIT-green"/> </p>

### '오늘 뭐먹지?' 서비스

> 항상 오늘은 뭐 먹을 지 고민하는 대학생들을 위해 시작한 프로젝트입니다.
>
> 대학교 주변에 어떤 음식점에 어떤 메뉴가 있는지 그리고 오늘의 메뉴 추천 기능 서비스를 제공합니다.
>
> 배달 관련 앱에 나오지 않는 식당들도 사용자가 식당 정보를 파악할 수 있습니다.

------

### Domain

**WEB -** [https://owner.todaymenu.tk](https://owner.todaymenu.tk/)

**API Server** - [https://api.todaymenu.tk](https://api.todaymenu.tk/)

**APP** - 개발 진행 중

-----

[Back-end github](https://github.com/2020-capstone-design/back-end-server)

-----

### Feature

👉 **입력 창 validation 기능**

👉 **회원가입, 로그인, 로그아웃 기능**

- jwt 사용 (백엔드로부터 토큰 발급 및 ajax 요청 시 토큰 포함 등)

👉 **아이디 찾기, 비밀번호 찾기 기능**

- 가입 정보를 바탕으로 한 아이디 찾기 기능
- 이메일로 임시 랜덤 비밀번호 전송 기능

👉 **회원 정보 수정, 탈퇴 기능**

👉 **가게 정보 등록, 가게 정보 수정, 가게 정보 삭제 기능**

- 카카오 우편번호 API 사용 (vue-daum-postcode)

👉 **메뉴 정보 등록, 메뉴 정보 수정, 메뉴 정보 삭제 기능**

-----

### Demo

[https://owner.todaymenu.tk](https://owner.todaymenu.tk/)

> **일부 페이지 미리 보기**

**회원가입 및 가입 후 환영 페이지**

<span> <img src="https://user-images.githubusercontent.com/49308628/95079103-22a64700-0751-11eb-8294-4b397d5e1896.gif" width="400px" height="400px"/> <img src="https://user-images.githubusercontent.com/49308628/95079724-fc34db80-0751-11eb-8032-9da28677c68d.gif" width="400px" height="400px"/> 

**가게 등록 및 메뉴 등록 페이지**

<img src="https://user-images.githubusercontent.com/49308628/95080393-04d9e180-0753-11eb-81b7-3f5da4e35082.gif" width="400px" height="400px"/> <img src="https://user-images.githubusercontent.com/49308628/95081114-08219d00-0754-11eb-92b3-ad21c89a4054.gif" width="400px" height="400px"/> 

**회원 정보 관리 페이지**

<img src="https://user-images.githubusercontent.com/49308628/95081230-3901d200-0754-11eb-8bdd-311c147c2c69.gif" width="400px" height="400px"/> </span>

-----

### Usage

``` 
git clone https://github.com/2020-capstone-design/front-end-server.git
cd your-project-name
npm install (npm i / yarn)
npm run serve / npm run build
```

Go to http://localhost:8080/. If port 8080 is already in use on your machine, **the program will specify the available port (incremental) for you, for example, `8081` / `8082` ...**. 

-----

### Built With

- [Vue](https://vuejs.org/)

- [Vuetify](https://vuetifyjs.com/en/)
- [Kakao 우편번호 API](http://postcode.map.daum.net/guide)

-----

## License

> You can check out the full license **[here](https://github.com/2020-capstone-design/front-end-server/blob/master/LICENSE)**

This project is licensed under the terms of the **MIT** license.

