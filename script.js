let button = document.querySelector(".button");
button.addEventListener("click", function () {
  let result = document.querySelector(".result");
  let initialPricePaid = Number(document.querySelector(".initial-price").value);
  let initialShares = Number(document.querySelector(".initial-shares").value);
  let currentPrize = Number(document.querySelector(".current-prize").value);
  let desiredaverage = Number(document.querySelector(".avg-needed").value);
  let divider = (desiredaverage * 10 - currentPrize * 10) / 10;
  let value =
    initialPricePaid * initialShares -
    (desiredaverage * initialShares) / divider;
  console.log(value);
  result.textContent = value;
});
