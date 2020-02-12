# 05 - Flex Panel Gallery

> 업로드 날짜 : 2020/02/11

✅[DEMO](https://sewonkimm.github.io/JavaScript30/05-FlexPanelGallery/index.html)

## 👨‍🎓학습 목표

- Flex 익히기

## ✍️개발 순서

### 1. HTML, CSS 작성

### 2. display: flex 로 내부 텍스트 바르게 배치하기

### 3. click하면 flex 조정

`addEventListener("click", 동작))`

### 4. transition이 완료되면 텍스트 위치 이동

`addEventListener("transitionend", 동작))`

## 🎨CSS 문법

### flex

> [flex 3분만에 배우기](https://joshuajangblog.wordpress.com/2016/09/19/learn-css-flexbox-in-3mins/)

- flex-direction: column은 수직 row는 수평

### justify-content & align-items

- justify-content: 중심축 정렬
- align-items: 교차축 정렬

### flex-grow

> [flex-grow MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-grow)

flex-container 내부에서 flex-item이 할당 받는 공간을 설정한다.
transitionend 이벤트가 발생할 때, 이벤트 항목중에 propertyName 항목이 있는데 Safari에서는 flex라고 표시되고, Chrome에서는 flex-grow라고 표시된다.
