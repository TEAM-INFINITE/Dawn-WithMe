# 새벽 공부 하는 사람들을 위한 공간, Dawn, With Me? 🌙

![DawnWithMe-Banner](https://user-images.githubusercontent.com/77143425/211853755-1c2c845f-4f46-4cd9-ba3a-b4f2bf224f0e.png)

> `스터디 매칭` `노래 추천` `ASMR` `공부 꿀팁`
>
> #### 새벽에 집중안될 때, 다른 사람은 어떻게 할까? 🤔
>
> Dawn With Me는 조용한 새벽에 공부하는 올빼미들을 위한 공부 커뮤니티입니다.
>
> Dawn With Me에서 새벽반 사람들과 함께 공부 꿀팁, 공부할 때 듣기 좋은 노래를 공유하고 스터디 매칭을 해보세요!
>
> **❗️해당 서비스는 모바일에 최적화 되어있습니다.**

<br><br>

**✅ 개발 기간** : 2022.11.24 ~ 2023.01.05

**🔗 배포 링크** : https://dawn-with-me.vercel.app

**👩🏻‍💻 테스트 계정**

```
ID : dawn@test.com
PW : 123123
```

<br><br>

## 📌 목차

1. [팀원 소개](#팀원-소개)

2. [역할 분담](#역할-분담)

3. [기술 및 개발환경](#기술-및-개발환경)

4. [폴더 구조](#폴더-구조)

5. [기능 시연](#각-페이지-별-기능-시연)

<br><br>

## 팀원 소개

|                                                안정음                                                 |                                                 유윤우 (👑 팀 리더)                                                  |                                           이재호                                           |                                          제지해                                           |
| :---------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: |
|       <img src="https://avatars.githubusercontent.com/u/77143425?v=4" width="210" height="210">       |              <img src="https://avatars.githubusercontent.com/u/100748721?v=4" width="210" height="210">              | <img src="https://avatars.githubusercontent.com/u/110362730?v=4" width="210" height="210"> | <img src="https://avatars.githubusercontent.com/u/99248204?v=4" width="210" height="210"> |
| 🔗[ GitHub](https://github.com/Jeongeum) <br/>🔗[ Blog - 바른소리](https://jeongeum1202.tistory.com/) | 🔗[ GitHub](https://github.com/yunwoo-yu) <br/>🔗[ Blog - FE 개발자 기록](https://frontend-development.tistory.com/) |                        🔗[ GitHub](https://github.com/STRONGSHARK)                         |                          🔗[ GitHub](https://github.com/jejeday)                          |

<br>

## 역할 분담

### 안정음

- 자유 게시판 페이지
  - 팔로우된 사용자들의 게시물 목록 기능 구현
  - 게시물 상세 페이지 기능 구현
  - 게시물 생성 페이지 기능 구현
  - 게시물 수정, 삭제, 신고 기능 구현
  - 댓글 입력, 삭제, 신고 기능 구현
  - 모달 기능
- 유저 검색 페이지
  - 유저 검색 기능 구현
- 디자인
  - 메인 캐릭터 디자인 (시작화면, 프로필, 404)
  - 로고 디자인
- pr 템플릿 생성

### 유윤우

- 전체 코드 리드 및 관리
  - 프로젝트 시작 준비 Setting
  - 협업 프로세스 구축 (Issues, Project칸반보드, ESlint, prettier)
  - 라이브 쉐어로 팀원의 코드 기능 문제 해결
  - 이슈 템플릿 생성
  - 팀 레포지토리 관리 컨플릭 및 자잘한 충돌 해결
  - 프로젝트 아토믹 패턴 및 전체 폴더구조 구축
- 로그인 페이지 구현
  - 라이브 쉐어 & 방송을 이용해 팀원 모두가 참여하여 기능구현의 흐름을 파악할 수 있도록 코드리드
- 카테고리 게시판 페이지
  - 기존 상품등록 api 변형하여 카테고리 게시판 기능 구현
  - 카테고리 게시물 생성 페이지 구현
  - 카테고리 게시물 수정 페이지 구현
  - 카테고리 게시물 상세 페이지 구현
  - 카테고리 게시물 CRUD 기능 구현
- 프로필 페이지 구현
  - 유저 프로필 페이지 구현
  - 내 프로필 페이지 구현
  - 내 프로필 수정 기능 구현
  - 유저 팔로우 & 언팔로우 기능 구현
  - 게시물 Album, List 형식 카테고리 기능구현
- 404 페이지 구현
- 팔로우 페이지 구현
  - 팔로잉 페이지 구현
  - 팔로워 페이지 구현
  - 팔로우 & 취소 버튼 기능 구현
- 전체 페이지 Data Loading 시 보여줄 LoadingSpinner 구현
- 전체 페이지 서버 문제 시 Error Toast Modal 구현
- 재사용 가능한 UI 컴포넌트 생성
- Recoil을 이용한 전역 모달 생성
- Axios 베이스 설정
  - 데이터 요청 별 Instance,interceptors 생성
- router 인증상태 별 접근제한 기능 구현
- 유지보수 고려하기 위해 GlobalStyled,theme 이용한 전역 스타일 관리
- 프로젝트 배포 & 관리

### 이재호

- 회원가입 페이지 구현
  - 이메일 회원가입 페이지 기능 구현
  - 프로필설정 페이지 기능 구현
- 타이머 페이지 기능구현
  - 타이머 기능 구현
- 지도 카테고리 구현
  - 카카오맵 API를 활용한 지도 검색 기능 구현

### 제지해

- 회원가입 페이지 구현
  - 이메일 회원가입 페이지 기능 구현
- 스플래쉬 구현
- 채팅 레이아웃

<br>

## 기술 및 개발환경

### ⚙️ 기술

Front-End :
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
<img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=React Query&logoColor=black"/>
<img src="https://img.shields.io/badge/Recoil-0075EB?style=flat-square&"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled components&logoColor=ffffff"/>

Back-End : 부트캠프를 통해 제공 받은 API 사용

협업 및 디자인 :
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=ffffff"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=ffffff"/>
<img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=ffffff"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=ffffff"/>

### ⚙️ 개발환경

정적 코드 분석 도구 : Eslint

Code Formatter : Prettier

이슈 관리 : Github-Issues (Feature, Error 템플릿 사용)

브랜치 전략 : Git-flow

|                                                                  Git-flow                                                                  |
| :----------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/77143425/210522145-d358a45b-578e-46fe-ac3a-a5237728f883.jpg" width="750" height="250"> |

컨벤션 : 커밋메시지 컨벤션

|                                                                   컨벤션                                                                   |
| :----------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/77143425/211862805-113f9226-7772-47d0-81b6-a75d968425da.jpg" width="750" height="250"> |

<!-- #### Git Flow

  <img width="750" alt="image" src="https://user-images.githubusercontent.com/77143425/210522145-d358a45b-578e-46fe-ac3a-a5237728f883.jpg">

#### 컨벤션

  <img width="750" alt="image" src="https://user-images.githubusercontent.com/77143425/210523777-9e1f1bcd-7bf2-46f8-b9d3-08fa568cd60e.jpg">
![컨벤션](https://user-images.githubusercontent.com/77143425/211862805-113f9226-7772-47d0-81b6-a75d968425da.jpg)
-->

<br>

## 폴더 구조

### Atomic Design 패턴 사용

아토믹 디자인 패턴을 사용하여 컴포넌트 재사용을 극대화
<img width="750" alt="image" src="https://user-images.githubusercontent.com/77143425/210522116-69e7c428-9d21-4dfb-8c8d-a211d39a10bc.jpg">

```
📦dawn-with-me
 ┣ 📂.github
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂 // ...해당 기능별 api 폴더 나눔
 ┃ ┃ ┗ 📜axios-api.js // instance, interceptors 등..
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂fonts
 ┃ ┃ ┗ 📂images
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📂molecules
 ┃ ┃ ┣ 📂organisms
 ┃ ┃ ┗ 📂template
 ┃ ┣ 📂pages
 ┃ ┣ 📂recoil
 ┃ ┣ 📂router
 ┃ ┣ 📂styles
 ┃ ┣ 📜App.jsx
 ┃ ┣ 📜index.css
 ┃ ┗ 📜index.jsx
 ┣ 📜.eslintrc.js
 ┣ 📜.gitattributes
 ┣ 📜.gitignore
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc.json
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

<br>

## 각 페이지 별 기능 시연

### 1) 시작화면

| splash                                                                                                                  | 회원가입                                                                                                                 | 로그인                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| ![스플래쉬](https://user-images.githubusercontent.com/77143425/211829467-516b92f8-3b29-4f0f-b603-57bda2edc354.gif) | ![회원가입](https://user-images.githubusercontent.com/77143425/211829482-096245c4-2035-4418-9c27-b74eb1652f09.gif) | ![로그인](https://user-images.githubusercontent.com/77143425/211829493-fbb7b737-6172-4a51-ac6a-633a4c70cc9c.gif) |

### 2) 카테고리 & 자유게시판

| 스터디 매칭                                                                                                                | 음악 추천                                                                                                                 | 공부 꿀팁                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![스터디매칭](https://user-images.githubusercontent.com/77143425/211888722-df0d1b2b-9f5d-4a7a-a078-c2ac163067ca.gif) | ![음악추천](https://user-images.githubusercontent.com/77143425/211888777-836ad122-cd3c-49d2-9bb7-f9db8770181f.gif) | ![공부법 공유](https://user-images.githubusercontent.com/77143425/211830984-6bd84208-5b1d-488f-bca6-bd6562e12952.gif) |

| 지도 페이지                                                                                                                     | 타이머 페이지                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| <img width="370px" src="https://user-images.githubusercontent.com/77143425/211999807-1308f490-ddad-44eb-83ff-76b6f397af80.gif"> | <img width="370px" src="https://user-images.githubusercontent.com/77143425/211864591-e217d6a7-808f-48a3-b049-867b3ae9fdc6.gif"> |

| 게시판 목록                                                                                                                   | 유저 검색                                                                                                                           | 게시글 작성                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![게시판 목록](https://user-images.githubusercontent.com/77143425/211888368-ebc156c4-a408-42d7-a294-e2661ffe74f3.gif) | ![유저 검색 페이지](https://user-images.githubusercontent.com/77143425/211865787-f8885335-b367-4834-932b-5001ef579f1e.gif) | ![게시글 등록](https://user-images.githubusercontent.com/77143425/211888535-808a365b-36cf-4451-b881-c37cdf5de2d7.gif) |

| 수정                                                                                                              | 삭제                                                                                                              | 신고                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![수정](https://user-images.githubusercontent.com/77143425/211890743-381b6717-c8ed-47c0-9c9b-476bd263bc85.gif) | ![삭제](https://user-images.githubusercontent.com/77143425/211890838-654cdf5d-1df2-47b2-8f6c-cbc616c4885e.gif) | ![신고](https://user-images.githubusercontent.com/77143425/211890855-9eb8b344-f140-4f1f-a845-25a5d90fc6cc.gif) |

### 3) 프로필

| 마이 프로필                                                                                                                | 유저 프로필                                                                                                                | 프로필 수정                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ![마이프로필](https://user-images.githubusercontent.com/77143425/211887820-127f9572-9ec9-4849-adce-07fd5a4dd2ec.gif) | ![유저프로필](https://user-images.githubusercontent.com/77143425/211887910-94875bc4-8e3b-4bf6-a287-657cc2c6093c.gif) | ![프로필수정](https://user-images.githubusercontent.com/77143425/211887960-94db6eb2-cee7-40c5-b257-8fa1d47ca3d0.gif) |

| 팔로워                                                                                                               | 팔로잉                                                                                                                | 로그아웃                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| ![팔로워](https://user-images.githubusercontent.com/77143425/211887985-90583130-bf0e-4925-9a60-028550bf4029.gif) | ![팔로잉](https://user-images.githubusercontent.com/77143425/211888018-28e55dcd-821b-4fa6-80f2-eb9a03f834ed.gif) | ![로그아웃](https://user-images.githubusercontent.com/77143425/211888046-b51d690f-6701-4cee-812d-b00865c7cd7a.gif) |
