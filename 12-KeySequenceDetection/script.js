const pressed = [];
const secretCode = "secret";

window.addEventListener("keyup", e => {
  // 입력받은 key 배열에 넣기
  pressed.push(e.key);

  // 배열 자르기
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join("").includes(secretCode)) {
    console.log("🎉");
    cornify_add();
  }
});
