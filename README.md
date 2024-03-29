# 👖 h&m 쇼핑몰 사이트 (hnm-redux-thunk)

<img width="1532" alt="image" src="https://github.com/sjh709/react-study-hnm/assets/42454759/d41be939-b8ee-4766-a027-3120ed8592a9">

- 배포 URL :

<br>

## 1. 프로젝트 소개

- h&m 쇼핑몰 사이트 입니다.
- 홈 화면을 통해 상품 전체 리스트를 볼 수 있습니다.
- 상품을 클릭하면 상품 상세 페이지로 이동합니다.
- 상품 상세 페이지는 로그인 후 볼 수 있습니다.
- 홈 화면에서 로그인 버튼을 클릭하면 로그인 화면으로 이동합니다.
- 홈 화면에서 상품을 검색할 수 있습니다.

<br>

## 2. 개발 환경

- Front-end : React
- 버전 관리 : Github
- 서비스 배포 환경 : Netlify

<br>

## 3. 프로젝트 구조

```
📦src
 ┣ 📂component
 ┃ ┣ 📜Navbar.js
 ┃ ┗ 📜ProductCard.js
 ┣ 📂page
 ┃ ┣ 📜Login.js
 ┃ ┣ 📜ProductAll.js
 ┃ ┗ 📜ProductDetail.js
 ┣ 📂redux
 ┃ ┣ 📂actions
 ┃ ┃ ┣ 📜authenticateAction.js
 ┃ ┃ ┗ 📜productAction.js
 ┃ ┣ 📂reducers
 ┃ ┃ ┣ 📜authenticateReducer.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜productReducer.js
 ┃ ┗ 📜store.js
 ┣ 📂route
 ┃ ┗ 📜PrivateRoute.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┗ 📜setupTests.js
```

<br>
