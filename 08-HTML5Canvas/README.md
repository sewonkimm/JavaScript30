# 08 - HTML5 Canvas

> 업로드 날짜 : 2020/03/07

✅[DEMO](https://sewonkimm.github.io/JavaScript30/08-HTML5Canvas/index.html)

## 👨‍🎓학습 목표

- canvas 익히기

## ✍️개발 순서

1. canvas 생성
2. 2D context 설정
3. 마우스를 누른채(mousedown)로 움직일 때(mousemove) 그림이 그려지도록 함

## 🎮JS 문법

### canvas tag

> [canvas tag MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Basic_usage)

```
<canvas> 엘리먼트는 고정 크기의 드로잉 영역을 생성하고 하나 이상의 렌더링 컨텍스(rendering contexts)를 노출하여, 출력할 컨텐츠를 생성하고 다루게 됩니다.
```

`getContext()` 메서드를 호출해서 2D나 3D 렌더링이 가능

> [CanvasRenderingContext2D MDN](https://developer.mozilla.org/ko/docs/Web/API/CanvasRenderingContext2D)

2D context의 여러 값들을 설정해줄 수 있다.

### [lastX, lastY] = [e.offsetX, e.offsetY]

```javascript
lastX = e.offsetX;
lastY = e.offsetY;
```

이 코드를 이렇게 `[lastX, lastY] = [e.offsetX, e.offsetY];` 한 줄로 표현 가능
