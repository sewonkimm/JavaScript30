# 02 - JS and CSS Clock

> 업로드 날짜 : 2020/01/21

[DEMO](https://sewonkimm.github.io/JavaScript30/02-JSandCSSClock/index.html)

## 개발 순서

### 1. 시침, 분침, 초침 그리기

셋 다 `hand` class로 묶어서 동일 css 적용

### 2. javascript 적용

`setInterval(setData, 1000);` 명령어로 매 초마다 시간데이터를 가져옴

### 3. css 변경

시간 데이터를 이용해 css를 변경  
`element.style.transform` 항목을 변경하는 코드 작성

## JS 문법

### let & const

### Date()

### setInterval()

## CSS 문법

### transform-origin

### transform:rotate()

### transition-timing-function:cubic-bezier()

## 내가 추가한 항목

### 59분에서 60분으로 넘어갈 때 분침이 시계 반대 방향으로 도는 문제

시간 데이터를 degree로 계산한 값이 449dgree에서 90degreee로 계산되기 때문에 59분에서 60분으로 넘어갈 때 애니메이션이 반시계방향으로 도는 문제가 생긴다.  
degree값이 90이 될 때, transisiton을 일시적으로 없애준 다음 다시 transition을 설정해주면 문제가 해결된다.

```javascript
if (secondDegrees == 90) {
  secondHand.style.transition = `all 0s`;
} else {
  secondHand.style.transition = "all 0.5s";
}
```

### 시침과 분침 구분

기본 예제는 시침, 분침, 초침 모두 class명 `hand`로 css가 적용되기 때문에 시침과 분침이 구분이 안간다. 그래서 시침의 길이를 분침보다 짧게 조절해주었다.

```css
.hour-hand {
  width: 40%;
  margin-left: 10%;
}
```
