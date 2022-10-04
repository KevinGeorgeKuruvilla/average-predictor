let button = document.querySelector(".button");
button.addEventListener("click", function () {
  let initialPricePaid = Number(document.querySelector("#Initial-prize").value);

  let initialShares = Number(document.querySelector("#Initial-shares").value);

  let currentPrize = Number(document.querySelector("#current-prize").value);

  let desiredaverage = Number(document.querySelector("#desired-average").value);

  let result = document.querySelector("#Stocks-to-buy");
  let divider = (desiredaverage * 10 - currentPrize * 10) / 10;
  let value =
    initialPricePaid * initialShares -
    (desiredaverage * initialShares) / divider;
  console.log(value);
  result.value = value;
});
