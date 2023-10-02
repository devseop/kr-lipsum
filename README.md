# 한글 로렘 입숨 생성기

본 사이트는 [한글입숨](http://hangul.thefron.me)을 클론코딩한 프로젝트입니다.

![kr-lipsum](https://github.com/devseop/kr-lipsum/assets/102455161/0f36e8da-99e8-4adf-92fe-a395f17b09db)

## 🧑🏻‍💻 프로젝트 정보

### 실행 방법

- 배포 링크: [한글 로렘 입숨 생성기 (https://kr-lipsum.netlify.app/)](https://kr-lipsum.netlify.app/)
- 링크가 실행되지 않는 경우 아래 명령어를 차례대로 입력하여 실행해주세요.

```
git clone https://github.com/devseop/kr-lipsum
yarn install && yarn dev
```

### 프로젝트 구조

```jsx
📦 src
┣ 📂 components // ParagraphContainer를 구성하는 컴포넌트 폴
┃ ┣ DummyParagraphs.tsx
┃ ┣ Header.tsx
┃ ┗ ParagraphForm.tsx
┣ 📂 constants
┃ ┣ constants.ts // 컬러 사용을 위한 상수 선언 파일
┃ ┗ poems.ts // 한글 로렘 입숨 생성을 위한 시 모음 파일
┣ 📂 pages
┃ ┗ ParagraphContainer.tsx
┣ 📂 rtk // Redux-toolkit 적용을 위한 전용 폴더
┃ ┣ slice.ts
┃ ┗ store.ts
┣ 📂 styles
┃ ┣ reset.css
┃ ┗ styled.ts
┣ 📂 types
┃ ┗ types.ts
┣ 📂 utils // 로렘 입숨 생성을 위한 문장 재조립 유틸리티 함수
┃ ┗ getRandomParagraphs.ts
┣ App.tsx
┣ main.tsx
┗ vite-env.d.ts
```

### 사용 라이브러리

```javascript
  "dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@reduxjs/toolkit": "^1.9.6",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.11.0",
    "react-redux": "^8.1.2"
  },
  "devDependencies": {
    "eslint": "^8.45.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "husky": "^8.0.3",
    "lint-staged": "^14.0.1",
    "prettier": "^3.0.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  },

```

## 🫱🏻‍🫲🏿 Commit Convention

커밋 컨벤션과 브랜치 전략은 1주차 팀 과제 진행시 결정된 팀 컨벤션을 따랐습니다.

e.g. FEAT: 로그인 유효성 검증 기능 구현

| 태그      | 설명 (한국어로만 작성하기)                                     |
| --------- | -------------------------------------------------------------- |
| FEAT:     | 새로운 기능 추가 (변수명 변경 포함)                            |
| FIX:      | 버그 해결                                                      |
| DESIGN:   | CSS 등 사용자 UI 디자인 변경                                   |
| STYLE:    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우          |
| REFACTOR: | 프로덕션 코드 리팩토링                                         |
| COMMENT:  | 필요한 주석 추가 및 변경                                       |
| DOCS:     | 문서를 수정한 경우                                             |
| CHORE:    | 빌드 테스크 업데이트, 패키지 매니저 설정(프로덕션 코드 변경 X) |
| RENAME:   | 파일 혹은 폴더명을 수정하거나 옮기는 작업                      |
| REMOVE:   | 파일을 삭제하는 작업만 수행한 경우                             |
| INIT:     | 초기 커밋을 진행한 경우                                        |
