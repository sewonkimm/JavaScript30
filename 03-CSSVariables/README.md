# 03 - CSS Variables

> 업로드 날짜 : 2020/02/05

✅[DEMO](https://sewonkimm.github.io/JavaScript30/03-CSSVariables/index.html)

## ✍️개발 순서

### 1. html, css 기본 구조 작성

1. title
2. spacing, blur, color 조절할 수 있는 input
3. 사진

### 2. javascript 적용

1. addEventListner로 value 변경 감지
2. 변경한 값을 CSS에 반영

## 🖥️HTML

### label 태그

<label>태그는 <input>태그와 짝꿍!

## 🎮JS 문법

### NodeList

> [NodeList MDN](https://developer.mozilla.org/ko/docs/Web/API/NodeList)

`document.querySelectorAll()`을 하면 NodeList가 반환된다. **Array랑은 다르다!**  
NodeList는 JS API가 아닌 브라우저 API 이며, DOM의 변경 사항을 실시간으로 반영한다.
이번 프로젝트에서는 굳이 Array로 변환시키지 않아도 되기 때문에 그냥 사용한다.

### dataset

> [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset)

data-\* 값을 모두 반환한다.

### style.setProperty()

> [stlye.setProperty MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)

The `CSSStyleDeclaration.setProperty()` method interface sets a new value for a property on a CSS style declaration object.  
css style 값을 새로 지정하는 메소드

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

### filter로 조절가능한 또 다른 그래픽 효과 적용

filter에 grayscale, opacity 항목 추가

```css
filter: blur(var(--blur)) grayscale(var(--grayscale)) opacity(var(--opacity));
```
