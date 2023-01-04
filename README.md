### 📌 목차

[🔗 배포 링크](#🔗_배포_링크)

[👨‍👩‍👧‍👦 팀원 소개](#👨‍👩‍👧‍👦_팀원_소개)

[💻 역할 분담](#👩🏻‍💻_역할_분담)

[📁 폴더 구조](#📁_폴더_구조)

[⚙️ 기술 및 개발환경](#⚙️_기술_및_개발환경)

- [Git Flow](#git-flow)
- [컨벤션](#컨벤션)

[🖥 기능 시연](#🖥_기능_시연)

[🔥 개발\_기간](#🔥_개발_기간)

![ㅋㅋㅋ](https://user-images.githubusercontent.com/100748721/204194115-695a34c9-00e8-492e-87e5-f99ca1f34c5d.jpg)

## 새벽 공부 하는 사람들을 위한 공간, Dawn, With Me? 🌙

> `스터디 매칭` `노래 추천` `ASMR` `공부 꿀팁`
>
> #### 새벽에 집중안될 때, 다른 사람은 어떻게 할까?
>
> 새벽에 혼자 하는 공부, 집중 안될 때 어떻게 하시나요?  
> DawnWithMe에서 새벽반 사람들과 공부 꿀팁과 공부할 때 듣기 좋은 노래를 공유하고 스터디 매칭을 해보세요!

### [🔗 배포 링크](https://www.naver.com)

링크 변경해야합니다.

#### 테스트 계정

- ID :
- PW :

## 👨‍👩‍👧‍👦 팀원 소개

<table>
  <thead>
    <tr style='text-align:center'>
      <td>안정음 (Front-End)</td>
      <td>유윤우 (Front-End)</td>
      <td>이재호 (Front-End)</td>
      <td>제지해 (Front-End)</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src='https://avatars.githubusercontent.com/u/77143425?v=4' /></td>
      <td><img src='https://avatars.githubusercontent.com/u/100748721?v=4' /></td>
      <td><img src='https://avatars.githubusercontent.com/u/110362730?v=4' /></td>
      <td><img src='https://avatars.githubusercontent.com/u/99248204?v=4' /></td>
    </tr>
    <tr style='text-align:center'>
      <td>
      gitHub : <a href='https://github.com/Jeongeum'>Jeongeum</a><br/>
      Blog : <a href='https://jeongeum1202.tistory.com/'>바른소리</a>
      </td>
      <td>
      gitHub : <a href='https://github.com/yunwoo-yu'>YunCow</a><br/>
      Blog : <a href='https://frontend-development.tistory.com/'>FE 개발자 기록</a>
      </td>
      <td>
      gitHub : <a href='https://github.com/STRONGSHARK'>LEEJAEHO</a><br/>
      </td>
      <td>
      gitHub : <a href='https://github.com/jejeday'>jejeday</a><br/>
      </td>
    </tr>
  </tbody>
</table>

### 👩🏻‍💻 역할 분담

#### 안정음

- 자유 게시판 페이지
  - 팔로워가 올린 게시물 목록 기능 구현
  - 게시물 상세 페이지 기능 구현
  - 게시물 생성, 수정, 삭제, 신고 기능 구현
  - 댓글 입력, 삭제, 신고 기능 구현
- 유저 검색 페이지
  - 유저 검색 기능 구현
- 디자인
  - 메인 캐릭터 디자인
  - 로고 디자인

#### 유윤우 (**👑 프로젝트 리드**)

- 전체 코드 리드 및 관리
  - 프로젝트 시작 준비 Setting
  - 협업 프로세스 구축 (Issues, Project칸반보드, ESlint, prettier)
  - 라이브 쉐어로 팀원의 코드 기능 문제 해결
  - 이슈 템플릿 생성
  - 팀 레포지토리 관리 컨플릭 및 자잘한 충돌 해결
  - 프로젝트 아토믹 패턴 폴더구조 정의
- 로그인 페이지 구현
  - 라이브 쉐어 & 방송을 이용해 팀원 모두가 참여하여 기능구현의 흐름을 파악할 수 있도록 코드리드
- 카테고리 게시판 페이지 구현
  - 기존 상품등록 api 변형하여 카테고리 게시판 기능 구현
  - Read 기능 구현
  - Delete 기능 구현
- 카테고리 게시물 생성 페이지 구현
  - Create 기능 구현
- 카테고리 게시물 수정 페이지 구현
  - Update 기능 구현
- 카테고리 상세 페이지 구현
  - Read 기능 구현
  - Delete 기능 구현
- 내 프로필 페이지 구현
  - 프로필 Update 기능구현
  - 내 카테고리 게시물 렌더링 구현
  - 내 게시물 album, list 형식으로 보여주기 구현
- 유저 프로필 페이지 구현
  - 카테고리 게시물 렌더링 구현
  - 게시물 album, list 형식으로 보여주기 구현
  - 팔로우 기능구현
  - 언팔로우 기능구현
- 404에러 페이지 구현
- 팔로워 페이지, 팔로잉 페이지 구현
  - 팔로우 & 취소 버튼 기능 구현
- 전체 페이지 데이터 Loading 시 LoadingSpinner 구현
- 전체 페이지 Error 핸들링 구현 (진행 중)
- 재사용 가능한 UI 컴포넌트 생성
  - Button, P, Input, Img....
- Recoil을 이용한 전역 모달 생성
- Axios 베이스 설정
  - 데이터 요청 별 Instance,interceptors 생성
- Router 인증상태 별 접근제한 구현
- GlobalStyled 이용한 전역 스타일 관리
- theme Provider를 이용하여 유지보수 시 스타일 변경점 고려
- 프로젝트 배포 & 관리 (예정)

#### 이재호

- 회원가입 페이지 구현
   - 이메일 회원가입 페이지 기능 구현
   - 프로필설정 페이지 기능 구현 
- 타이머 기능구현
- 지도 카테고리 기능구현 

#### 제지해

-

## 📁 폴더 구조

### Atomic Design 패턴

  <img width="750" alt="image" src="https://user-images.githubusercontent.com/77143425/210522116-69e7c428-9d21-4dfb-8c8d-a211d39a10bc.jpg">
- 아토믹 디자인 패턴을 사용하여 컴포넌트 재사용을 극대화 (설명 추가 필요)

```
폴더구조 넣기
```

## ⚙️ 기술 및 개발환경

<table>
  <thead>
    <tr style='text-align:center'>
      <td>Front-End</td>
      <td>Back-End</td>
      <td>협업 및 디자인</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
      <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=React Query&logoColor=black"/>
      <img src="https://img.shields.io/badge/Recoil-0075EB?style=flat-square&"/>
      <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled components&logoColor=ffffff"/>
      </td>
      <td>부트캠프를 통해 제공 받은 API 사용</td>
      <td>
      <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=ffffff"/>
      <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=ffffff"/>
      <img src="https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=Discord&logoColor=ffffff"/>
      <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=ffffff"/>
      </td>
    </tr>
  </tbody>
</table>

### Git Flow

  <img width="750" alt="image" src="https://user-images.githubusercontent.com/77143425/210522145-d358a45b-578e-46fe-ac3a-a5237728f883.jpg">

설명 필요

### 컨벤션

- 커밋메시지 컨벤션
  <img width="750" alt="image" src="https://user-images.githubusercontent.com/77143425/210523777-9e1f1bcd-7bf2-46f8-b9d3-08fa568cd60e.jpg">

- 깃허브 이슈, pr 템플릿 사용

## 🖥 각 페이지 별 기능 시연

### 1) 시작화면

|                🔗[splash](https://github.com/nurimeansworld/strawberry_market/wiki/페이지-기능-상세-설명#-splash)                |         🔗[로그인 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/페이지-기능-상세-설명#-로그인-페이지)         |       🔗[회원가입 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/페이지-기능-상세-설명#-회원가입-페이지)       |
| :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img width="390px;" src="https://user-images.githubusercontent.com/86909942/153747664-ff315846-7e38-4079-8eae-429167206a54.gif"> | <img width="390px;" src="https://user-images.githubusercontent.com/89337955/154147004-5ca2bffd-9221-422c-beaf-9d6d96433e58.gif"> | <img width="390px;" src="https://user-images.githubusercontent.com/89337955/154147035-9b44eb92-f879-4601-8200-5fe0f153d0e3.gif"> |

### 2) 카테고리

|                                                       🔗[스터디 매칭 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%9E%91%EC%84%B1-%ED%8E%98%EC%9D%B4%EC%A7%80)                                                       |                                                           🔗[채팅 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%8C%EC%8B%9C%EB%AC%BC-%EC%83%81%EC%84%B8-%ED%8E%98%EC%9D%B4%EC%A7%80)                                                            |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                               <img width="390px;" src="https://user-images.githubusercontent.com/89337955/154149525-4f2279be-dc6e-4051-bcf8-1e4f44b5a2b7.gif">                                                                                                                |                                                                                                                <img width="390px;" src="https://user-images.githubusercontent.com/89337955/154147122-b190781a-020e-48fa-b745-076958aaa0b8.gif">                                                                                                                 |
| 🔗[음악 추천 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%88%98%EC%A0%95-or-%EC%8B%A0%EA%B3%A0-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%8C%93%EA%B8%80-%EC%88%98%EC%A0%95-or-%EC%8B%A0%EA%B3%A0-%ED%8E%98%EC%9D%B4%EC%A7%80) | 🔗[공부법 공유 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%88%98%EC%A0%95-or-%EC%8B%A0%EA%B3%A0-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%8C%93%EA%B8%80-%EC%88%98%EC%A0%95-or-%EC%8B%A0%EA%B3%A0-%ED%8E%98%EC%9D%B4%EC%A7%80) |
|                                                                                                               <img width="390px;" src="https://user-images.githubusercontent.com/89337955/155879884-90eb92dc-a53e-4f4b-98aa-de655f5e4b8e.gif">                                                                                                                |                                                                                                                <img width="390px;" src="https://user-images.githubusercontent.com/89337955/154809365-fd7feb77-780f-4009-81ed-2b8d1b011b5e.gif">                                                                                                                 |

### 3) 스터디카페 찾기 및 타이머

| 🔗[지도 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%9E%91%EC%84%B1-%ED%8E%98%EC%9D%B4%EC%A7%80) | 🔗[타이머 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%9E%91%EC%84%B1-%ED%8E%98%EC%9D%B4%EC%A7%80) |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                      <img width="390px;" src="https://user-images.githubusercontent.com/89337955/154149525-4f2279be-dc6e-4051-bcf8-1e4f44b5a2b7.gif">                                                      |                                                       <img width="390px;" src="https://user-images.githubusercontent.com/89337955/154149525-4f2279be-dc6e-4051-bcf8-1e4f44b5a2b7.gif">                                                       |

### 4) 자유게시판

|                       🔗[게시판 목록](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EB%A7%88%EC%9D%B4-%ED%94%84%EB%A1%9C%ED%95%84-%ED%8E%98%EC%9D%B4%EC%A7%80)                       | 🔗[유저 검색 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%9C%A0%EC%A0%80-%ED%94%84%EB%A1%9C%ED%95%84-%ED%8E%98%EC%9D%B4%EC%A7%80) | 🔗[게시글 작성 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%ED%8C%94%EB%A1%9C%EC%9B%8C-%ED%8E%98%EC%9D%B4%EC%A7%80-%ED%8C%94%EB%A1%9C%EC%9E%89-%ED%8E%98%EC%9D%B4%EC%A7%80) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                            <img width="390px;" src="https://user-images.githubusercontent.com/89337955/155853160-889c8826-455a-43ce-90ad-6ffdb0c10a72.gif">                                                                            |                                                        <img width="390px;" src="https://user-images.githubusercontent.com/89337955/155852974-ee932d5d-d1f0-44d8-87f9-0263f1622685.gif">                                                         |                                                                            <img width="390px;" src="https://user-images.githubusercontent.com/89337955/155879188-637fb973-e9d7-405e-846c-1cca544eeba1.gif">                                                                            |
| 🔗[게시글 상세 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%ED%8C%94%EB%A1%9C%EC%9B%8C-%ED%8E%98%EC%9D%B4%EC%A7%80-%ED%8C%94%EB%A1%9C%EC%9E%89-%ED%8E%98%EC%9D%B4%EC%A7%80) |      🔗[게시글 삭제&신고](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83-%ED%8E%98%EC%9D%B4%EC%A7%80)      |                     🔗[댓글 삭제&신고](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%ED%94%84%EB%A1%9C%ED%95%84-%EC%88%98%EC%A0%95-%ED%8E%98%EC%9D%B4%EC%A7%80)                      |
|                                                                            <img width="390px;" src="https://user-images.githubusercontent.com/89337955/155879191-6d45f339-75f3-4353-a3e4-7a864ca3341c.gif">                                                                            |                                                        <img width="390px;" src="https://user-images.githubusercontent.com/89337955/154150447-2feca0af-dcf5-4101-8d6c-f4f0c81cc575.gif">                                                         |                                                                            <img width="390px;" src="https://user-images.githubusercontent.com/89337955/154147590-6343cb56-5a60-4a15-bf94-e6805d7e8bb3.gif">                                                                            |

### 5) 프로필

|        🔗[마이 프로필 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EB%93%B1%EB%A1%9D-%ED%8E%98%EC%9D%B4%EC%A7%80)        |        🔗[유저 프로필 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%88%98%EC%A0%95-%ED%8E%98%EC%9D%B4%EC%A7%80)        |     🔗[프로필 수정 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%88%98%EC%A0%95-%ED%8E%98%EC%9D%B4%EC%A7%80)      |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                            <img width="390px;" src="https://user-images.githubusercontent.com/89337955/154147633-4842d449-544d-4268-b3ef-361a031bb964.gif">                                                            |                                                            <img width="390px;" src="https://user-images.githubusercontent.com/89337955/154154506-7f492ae0-31cd-4da3-bf11-43a3b1608306.gif">                                                            |                                                         <img width="390px;" src="https://user-images.githubusercontent.com/89337955/154154506-7f492ae0-31cd-4da3-bf11-43a3b1608306.gif">                                                          |
| 🔗[팔로워 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%82%AD%EC%A0%9C-%EC%9D%B4%EB%8F%99-%ED%8E%98%EC%9D%B4%EC%A7%80) | 🔗[팔로잉 페이지](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%82%AD%EC%A0%9C-%EC%9D%B4%EB%8F%99-%ED%8E%98%EC%9D%B4%EC%A7%80) | 🔗[로그아웃](https://github.com/nurimeansworld/strawberry_market/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B8%B0%EB%8A%A5-%EC%83%81%EC%84%B8-%EC%84%A4%EB%AA%85#-%EC%83%81%ED%92%88-%EC%82%AD%EC%A0%9C-%EC%9D%B4%EB%8F%99-%ED%8E%98%EC%9D%B4%EC%A7%80) |
|                                                            <img width="390px;" src="https://user-images.githubusercontent.com/89337955/154155295-5c75bcb8-82cd-4b9b-930d-fb380e5b8218.gif">                                                            |                                                            <img width="390px;" src="https://user-images.githubusercontent.com/89337955/155849036-8466debe-7267-454b-8f4b-4f74b1eac7be.gif">                                                            |                                                         <img width="390px;" src="https://user-images.githubusercontent.com/89337955/155849036-8466debe-7267-454b-8f4b-4f74b1eac7be.gif">                                                          |

## 🔥 개발 기간

2022.11.24 ~ 진행중
