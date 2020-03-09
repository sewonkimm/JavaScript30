# 09 - Dev Tools Domination

> 업로드 날짜 : 2020/03/09

✅[DEMO](https://sewonkimm.github.io/JavaScript30/09-DevToolsDomination/index.html)

## 👨‍🎓학습 목표

- chrome의 dev tool 사용
- 다양한 `console.` 사용법 익히기

## 🎮JS 문법 - CONSOLE.

### 1. console.log()

기본적으로 제일 많이 사용하는 것!

### 2. console.log('%s', value)

%s에 값을 대입할 수 있다.

### 3. console.log('%c', font-style)

%c뒤의 log에 css 스타일 지정 가능하다.

### 4. console.warning()

경고 로그

### 5. console.error()

에러 로그

### 6. console.info()

정보 로그

> 내 chrome에는 console.log와 동일하게 나왔음.

### 7. console.assert()

assert 안에 테스트하려는 내용을 넣고, 테스트가 실패하면 경고 로그가 출력된다.

### 8. console.clear()

콘솔 내용을 지우기

### 9. console.dir()

오브젝트 의 interactive list를 출력한다.

```javascript
console.log(p);
console.dir(p);
```

console.log는 HTML이 출력되지만 console.dir은 오브젝트의 모든 프로퍼티를 출력한다.

### 10.console.groupCollapsed() & console.groupEnd()

groupCollapsed ~ groupEnd 사이의 요소를 하나의 그룹으로 묶어서 출력한다.

### 11. console.count()

특정 로그가 몇번 출력되었는지 카운트한다.

### 12.console.time() & console.timeEnd()

time ~ timeEnd 사이의 소요시간을 출력한다.

### 13.console.table()

자료를 표 형태로 출력한다.
