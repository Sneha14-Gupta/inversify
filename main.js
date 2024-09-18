const BtnEl = document.querySelector("button");
const InputEl = document.querySelector("input");
const ChipEl = document.querySelector(".chip");

BtnEl.addEventListener("click", () => {
  alert("hey");
});

InputEl.addEventListener("keypress", (event) => {
  if (event.key=== "Enter") {
    const InpValue = InputEl.value;
    const ReverseValue = InpValue.split("").reverse().join("");
    console.log(ReverseValue);
    InputEl.value=ReverseValue
    // console.log(event.code);
  }
});
