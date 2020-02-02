# 01 - JavaScript Drum Kit

> 업로드 날짜 : 2020/01/20

✅[DEMO](https://sewonkimm.github.io/JavaScript30/01-JavaScriptDrumKit/index.html)

## ✍️개발 순서

### 1. keyboard 버튼 그리기, sound 배치

> [data-\*](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/data-*) 속성을 사용해서 어떤 키를 입력받을 때 어떤 요소가 반응하게 할 지 설정

### 2. javascript 적용

1. `addEventListener`를 적용해 keydown event가 일어나면 sound를 재생하도록 함(playSound 함수)
2. sound를 재생할 때 key class에 `playing` class를 추가해 css가 변경될 수 있도록 함
3. transitioned event를 감지하면 2에서 추가한 `playing` class를 제거해서 다시 css가 원상태로 돌아올 수 있도록 함
4. 키를 여러번 눌러도 오디오가 계속 처음부터 재생될 수 있도록 함

## 🎮JS 문법

### element.classList

> [element.classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)

classList 사용으로 엘리먼트의 클래스 목록에 접근할 수 있다.  
`classList.add()`, `classList.remove()`로 클래스를 추가하거나 지울 수 있다.  
contains()으로 해당 클래스 값이 존재하는지 확인, replace(old, new)로 클래스를 대체할 수 도 있다.

### forEach

> [forEach MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

`forEach(callback)`의 형태로 사용  
callback은 배열에 있는 각 요소에 대해 한 번씩 실행된다.

```javascript
const array1 = ["a", "b", "c"];

// for문
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

// forEach문
array1.forEach(element => console.log(element));
```

### addEventListener

> [EventTarget.addEventListener() MDN](https://developer.mozilla.org/ko/docs/Web/API/EventTarget/addEventListener)  
> [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정할 수 있다.

- keydown : ANY key is pressed. 아무 키나 눌렸을 때 호출.
- transitionend event : A CSS transition has completed. CSS transition이 끝난 순간 호출.
