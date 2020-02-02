# 02 - JS and CSS Clock

> 업로드 날짜 : 2020/01/21

✅[DEMO](https://sewonkimm.github.io/JavaScript30/02-JSandCSSClock/index.html)

## ✍️개발 순서

### 1. 시침, 분침, 초침 그리기

셋 다 `hand` class로 묶어서 동일 css 적용

### 2. javascript 적용

`setInterval(setData, 1000);` 명령어로 매 초마다 시간데이터를 가져옴

### 3. css 변경

시간 데이터를 이용해 css를 변경  
`element.style.transform` 항목을 변경하는 코드 작성

## 🎮JS 문법

### let & const

변수의 선언방식
1. [var](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/var)
2. [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
3. [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const) 

- var는 ES6 이전의 문법, let과 const는 ES6 문법
- var : 기본적으로 어떤 형태의 변수든 선언 가능하다. *호이스팅*이 실행된다. 함수를 먼저 선언하고, 변수를 나중에 선언해도 변수 선언이 맨 위로 끌어올려지는 것!
- let : 블록 단위의 변수 선언(선언된 블록 내에서만 유효하다, var는 함수 블록 이외의 블록은 무시하고 선언된다), 변수 재선언 불가능(같은 이름의 변수 선언할 수 없음), 값 재정의 가능, 호이스팅이 일어나지 않는다.     
- const : 블록 단위의 상수 선언, 값 재할당&재정의 불가능

### Date()

[Date MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Date)

`Date: Wed, 21 Oct 2015 07:28:00 GMT`      
년도, 월, 일, 요일, 시, 분, 초를 표준시로 반환 

### setInterval()

[setInterval(func, delay)](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)


- javascript를 주기적으로 실행할 때 사용
- It repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. 일정 시간마다 반복적으로 함수를 call 한다.
- `clearInterval()`로 해제


setTimeout은 지정한 시간이 지난 후 **한 번만**이벤트를 발생시킨다. setTimeout과 setInterval의 차이는 setTimeout은 동작이 한 번만 일어나고, setInterval은 동작이 반복적으로 일어난다는 것이다.


## 🎨CSS 문법

### transform-origin

[transform-origin MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)

rotate 시킬 때 어디를 중심으로 rotate 시킬지 설정해주는 속성     
default 값은 center

### transform:rotate()

[rotate() MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate)

transform-origin에서 설정한 fixed point로 부터 얼마나 rotate할 것인지 설정해주는 속성       
시계방향으로 회전하고, 각도를 음수로 작성한 경우 시계반대방향으로 회전한다.

### transition-timing-function:cubic-bezier()

[transition-timing-function MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)

transition이 실행될 때, 애니메이션을 조정해준다. linear, ease-in, ease-out, cubic-bezier, steps 등 설정해주면 더 예쁜 애니메이션을 만들 수 있다.

## 🩹내가 추가한 항목

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
### 디지털 시간 추가

기본 예제에 없는 디지털 시간을 아날로그 시계 상단에 추가해주었다.

```javascript
const digital = `${hour}:${min}:${second}`;

const digitalDiv = document.querySelector('.clock-digital');
digitalDiv.innerHTML = digital;
```

Date에서 받아온 값들을 합쳐서 innerHTML로 div에 붙여넣었다.