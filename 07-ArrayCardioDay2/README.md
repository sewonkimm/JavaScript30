# 07 - Array Cardio Day2

> 업로드 날짜 : 2020/02/15

✅[DEMO](https://sewonkimm.github.io/JavaScript30/07-ArrayCardioDay2/index.html)

## 🎮JS 문법

### Array.prototype.some()

> [Array.prototype.some() MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

배열 안의 **어떤 요소라도** 주어진 판별 함수를 통과하는지 테스트  
callback이 참인 경우 true를 반환, 거짓인 경우 false를 반환

`is at least one person 19 or older?`  
한명이라도 19세 이상이면 true를 반환

### Array.prototype.every()

> [Array.prototype.every() MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

배열 안의 **모든 요소가** 주어진 판별 함수를 통과하는지 테스트

`is everyone 19 or older?`  
모든 사람이 19세 이상이면 true를 반환

### Array.prototype.find()

> [Array.prototype.find() MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

주어진 판별 함수를 만족하는 **첫 번째** 요소의 값을 반환

`find the comment with the ID of 823423`  
ID가 823423인 사람의 댓글 1개 반환

### Array.prototype.findIndex()

> [Array.prototype.findIndex() MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

주어진 판별 함수를 만족하는 배열의 **첫 번재 요소에 대한 인덱스**를 반환

`delete the comment with the ID of 823423`  
ID가 823423인 사람의 댓글 인덱스를 반환 후 삭제(Array.prototype.splice() 사용)

### Array.prototype.splice()

> [Array.prototype.splice() MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

배열의 기존 요소를 삭제 or 교차 or 새 요소 추가

### Spread Operator

> [전개구문 MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)  
> [전개구문 블로그](https://joshua1988.github.io/es6-online-book/spread-operator.html#%EC%8A%A4%ED%94%84%EB%A0%88%EB%93%9C-%EC%98%A4%ED%8D%BC%EB%A0%88%EC%9D%B4%ED%84%B0-%EC%82%AC%EC%9A%A9%EB%B2%95)

배열의 값을 다른 배열로 복사할 때 Spread Operator를 사용해서 배열을 _'SPREAD'_ 해준다.
