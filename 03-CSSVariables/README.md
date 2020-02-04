# 03 - CSS Variables

> 업로드 날짜 : 2020/02/05

✅[DEMO](https://sewonkimm.github.io/JavaScript30/03-CSSVariables/index.html)

## ✍️개발 순서

### 1. html, css 기본 구조 작성

1. title
2. spacing, blur, color 조절할 수 있는 input
3. 사진

### 2. javascript 적용

## 🖥️HTML

### label 태그

<label>태그는 <input>태그와 짝꿍!

## 🎮JS 문법

## 🎨CSS 문법

### :root

> [root MDN](https://developer.mozilla.org/ko/docs/Web/CSS/:root)

CSS 변수 선언(사용자 지정 속성)에 사용할 수 있다.  
`--`표기로 변수를 선언하고, `var()`함수로 접근가능하다.

```css
#선언 element {
  --main-bg-color: brown;
}

#사용 element {
  background-color: var(--main-bg-color);
}
```

### filter: blur()

> [filter MDN](https://developer.mozilla.org/ko/docs/Web/CSS/filter)

filter CSS 속성은 흐림 효과나 색상 변형 등 그래픽 효과를 요소에 적용한다.  
blur, brightness, contrast, drop shadow, grayscale, hue, invert, opacity 등 등 다양한 요소를 조절할 수 있다.

## 🩹내가 추가한 항목
