# 12 - Key Sequence Detection

> 업로드 날짜 : 2020/03/25

✅[DEMO](https://sewonkimm.github.io/JavaScript30/12-KeySequenceDetection/index.html)

## 👨‍🎓학습 목표

- Konami Code (コナミコマンド) 구현 (이스터 에그 같은 것)

## ✍️개발 순서

1. key 입력받아 배열에 넣기
2. 입력받은 배열이 설정한 secret code와 같은지 확인

## 🎮JS 핵심 포인트

### keyup event

> [keyup event MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event)

키보드가 눌리고 올라올 때를 감지

### Array.prototype.splice()

> [Array.prototype.splice() MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

배열의 기존 요소를 삭제 or 교차 or 새 요소 추가

매개변수

1. 배열 변경을 시작할 인덱스 (음수인 경우 배열의 끝에서부터 요소를 세어나간다. -n이면 요소 끝의 n번째 요소를 가리킴)
2. 배열에서 제거할 요소 수 (array.length - start index 보다 크면 start index 부터 모든 요소를 제거)
3. 배열에 추가할 요소 (아무 요소도 지정하지 않으면 요소 제거만 수행)

명령을 수행한 새로운 배열을 반환한다.

**핵심 코드**

```javascript
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
```

### Array.prototype.join()

> [Array.prototype.join() MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

배열의 모든 요소를 연결해 하나의 문자열로 반환
