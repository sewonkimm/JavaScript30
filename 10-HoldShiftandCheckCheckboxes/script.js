const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"');

let lastChecked;

function handleCheck(e) {
  // Check shift key is down
  // Check that they are check or uncheck
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    // Check inbetween checkboxes
    // Loop over every single checkbox
    checkboxes.forEach(checkbox => {
      //console.log(checkbox);

      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        //console.log("Starting to check");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));
