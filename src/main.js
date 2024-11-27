// import "./index.css";
// // dom targeting
// const BtnEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const ChipEl = document.querySelector(".chip");
// const copyEl=document.querySelector(".copyToClip")


// // fxn for reverse a user string
// function reverseString(){
//   const inpValue = inputEl.value;
//     const ReverseValue = inpValue.split("").reverse().join("");
//     console.log(ReverseValue);
//     inputEl.value=ReverseValue;
// }

// // fxn for copy text
// function copy() {
//   const inputVal = inputEl.value.trim(); 
//   const feedbackMessage = document.querySelector('.feedback-message');
//   const errorMessage = document.querySelector('.error-message');

//   feedbackMessage.style.display = 'none';
//   errorMessage.style.display = 'none';

//   if (inputVal === "") {
//     errorMessage.textContent = "Error: The input is empty! Please enter some text to copy.";
//     errorMessage.style.display = 'block';
//     setTimeout(() => {
//       errorMessage.style.display = 'none';
//     }, 2000);
//     return;
//   }

//   inputEl.select();
//   navigator.clipboard.writeText(inputVal).then(() => {
//     feedbackMessage.textContent = "Copied!";
//     feedbackMessage.style.display = 'block';
//     setTimeout(() => {
//       feedbackMessage.style.display = 'none';
//     }, 2000);
//     inputEl.value = '';
//   }).catch(err => {
//     console.error('Failed to copy: ', err);
//   });
// }


// inputEl.addEventListener("keypress", (event) => {
//   if (event.key ==="Enter") {
//     reverseString();
//   }
// });


// BtnEl.addEventListener("click", () => {
//   reverseString();

// });

// copyEl.addEventListener("click",()=>{
//   reverseString();
//   copy();
// })

// DOM targeting
const BtnEl = document.querySelector("#reverse-btn");
const inputEl = document.querySelector("#input-text");
const copyEl = document.querySelector("#copy-btn");
const feedbackMessage = document.querySelector('#feedback-message');
const errorMessage = document.querySelector('#error-message');

// Function to reverse the user string
function reverseString() {
  const inpValue = inputEl.value;
  const ReverseValue = inpValue.split("").reverse().join("");
  console.log(ReverseValue);
  inputEl.value = ReverseValue;
}

// Function to copy the text
function copy() {
  const inputVal = inputEl.value.trim();

  feedbackMessage.style.display = 'none';
  errorMessage.style.display = 'none';

  if (inputVal === "") {
    errorMessage.textContent = "Error: The input is empty! Please enter some text to copy.";
    errorMessage.style.display = 'block';
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 2000);
    return;
  }

  inputEl.select();
  navigator.clipboard.writeText(inputVal).then(() => {
    feedbackMessage.textContent = "Copied!";
    feedbackMessage.style.display = 'block';
    setTimeout(() => {
      feedbackMessage.style.display = 'none';
    }, 2000);
    inputEl.value = '';
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}

// Event listener for pressing "Enter"
inputEl.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    reverseString();
  }
});

// Event listener for clicking the "Reverse" button
BtnEl.addEventListener("click", () => {
  reverseString();
});

// Event listener for clicking the "Copy" button
copyEl.addEventListener("click", () => {
  reverseString();
  copy();
});
