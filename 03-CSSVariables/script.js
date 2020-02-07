const inputs = document.querySelectorAll(".controls input");

console.log(inputs);

function handleUpdate() {
  const suffix = this.dataset.sizing || "";

  // CSS :root 요소 값들을 변경
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(input => input.addEventListener("change", handleUpdate)); // 변수를 바꾸고나서 적용
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate)); // 실시간으로 적용
