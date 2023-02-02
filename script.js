const starValues = document.querySelectorAll("#star-value");
const submit = document.querySelector("#submit");
const card = document.querySelector("#card");
const cardThankYou = document.querySelector("#card-thank-you");
const givenRating = document.querySelector("#given-rating");
let lastIndex = -1;
let ratingValue = 0;

starValues.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.classList.toggle("unselected-rate");
    element.classList.toggle("selected-rate");
    if (lastIndex !== -1) {
      starValues[lastIndex].classList.toggle("unselected-rate");
      starValues[lastIndex].classList.toggle("selected-rate");
    }
    lastIndex = index;
    ratingValue = element.textContent;
  });
});

submit.addEventListener("click", () => {
  if (ratingValue === 0) {
    alert("Please select any rating");
  } else {
    givenRating.textContent = `You selected ${ratingValue} out of 5`;
    card.classList.toggle("hidden");
    cardThankYou.classList.toggle("hidden");
  }
});
