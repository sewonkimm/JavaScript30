# 06 - Ajax Type Ahead

> 업로드 날짜 : 2020/02/14

✅[DEMO](https://sewonkimm.github.io/JavaScript30/06-AjaxTypeAhead/index.html)

입력한 검색어와 매치되는 정보 모두 가져오는 프로그램

## 👨‍🎓학습 목표

- data fetch 익히기
- filter & match

## ✍️개발 순서

### 1. search bar html, css 구성

### 2. cities.json fetch해서 도시 목록 받아오기

`fetch()`로 데이터 불러와 Array 형태로 저장하기

### 3. search bar에 입력된 값과 match되는 도시 목록 찾고, 화면에 표시하기

search bar에 입력된 값과 도시 목록에서 match되는 것만 filtering

## 🎮JS 문법

### Fetch API

> [Fetch API MDN](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)

Request와 Response로 네트워크 통신을 한다.

### Array.push

`Array.push(...data)`  
ES6문법으로 data 앞에 `...`을 붙여주면 데이터 뭉치를 펼쳐서(Spread) 배열에 하나씩 넣어줄 수 있다.

### 정규표현식과 RegExp

> [RegExp MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

**정규 표현식(正規表現式, regular expression/regexp)**  
텍스트의 패턴을 표현하는 방법

- `g`: 문자열 전체 판별
- `i`: 대소문자 무시

## 🎨CSS 문법
