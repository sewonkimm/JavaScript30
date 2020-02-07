# 04 - Array Cardio Day1

> 업로드 날짜 : 2020/02/07

✅[DEMO](https://sewonkimm.github.io/JavaScript30/04-ArrayCardioDay1/index.html)

## 🎮JS 문법

### Array.prototype.filter()

> [filter MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

주어진 함수의 테스트를 통과한 것만 모아서 새로운 배열로 반환한다.

### Array.prototype.map()

> [map MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

배열 내 모든 요소에 대하여 주어진 함수의 return 값을 모아서 새로운 배열로 반환한다.

### Array.prototype.sort()

> [sort MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

`arr.sort([compareFunction])`

매개변수는 정렬 순서를 정의하는 함수가 들어간다.

### Array.prototype.reduce()

> [reduce MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환한다.

**reduce 활용법**

1. reduce vs map

```javascript
const reducer = (acc, value) => {
  acc.push(value * 2);
  return acc;
};

const result1 = data.reduce(reducer, val);
const result2 = data.map(x => x * 2);
```

2. reduce vs filter

```javascript
const reducer = (acc, value) => {
  if (value % 2 != 0) {
    acc.push(value);
  }
  return acc;
};

const result1 = data.reduce(reducer, val);
const result2 = data.filter(x => x % 2 != 0);
```

3. reduce vs map + filter

filter와 map을 따로 사용할 때에는 reduce를 쓰는 것보다 filter와 map을 사용하는 것이 훨씬 간편하지만 두 개를 동시에 사용할 경우에는 reduce가 더 사용하기 좋다.
reduce를 사용하면 배열을 한 번만 순회하면 되지만 filter와 map을 사용하면 2번 순회해야하기 때문이다.

```javascript
const reducer = (acc, value) => {
  if (value % 2 != 0) {
    acc.push(value);
  }
  return acc;
};

const result1 = data.reduce(reducer, val);

const result2 = data.filter(x => x % 2 != 0).map(x => x * 2);
```
