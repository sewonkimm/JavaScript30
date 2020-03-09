# 10 - Hold Shift and Check Checkboxes

> 업로드 날짜 : 2020/03/10

✅[DEMO](https://sewonkimm.github.io/JavaScript30/10-HoldShiftandCheckCheckboxes/index.html)

## 👨‍🎓학습 목표

- shift key를 누른채로 checkbox를 클릭하면 그 사이의 모든 checkbox 다 check하도록 만들기

## ✍️개발 순서

1. 모든 checkbox 선택 `querySelectorAll()`
2. 모든 checkbox에 click 이벤트 리스너 추가
3. shift key이 눌렸는지 안 눌렸는지 확인
4. shift key가 눌렸을 때 그 사이 checkbox를 인식
5. 인식한 checkbox들 check

## 🎮JS 핵심 포인트

```javascript
if (checkbox === this || checkbox === lastChecked) {
  inBetween = !inBetween;
}
```

shift key가 눌리든 안눌리든 마지막으로 클릭된 checkbox는 lastChecked에 저장해 놓고, shift key가 눌렸을 때 모든 checkbox를 돌면서 현재 클릭한 요소와 lastChecked 사이의 것들을 구분할 수 있도록 하는 코드
