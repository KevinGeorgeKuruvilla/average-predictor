let button = document.querySelector(".button");
button.addEventListener("click", function () {
  let result = document.getElementById("Stocks-to-buy");
  let initialPricePaid = Number(document.getElementById("Initial-prize").value);

  let initialShares = Number(document.getElementById("Initial-shares").value);

  let currentPrize = Number(document.getElementById("current-prize").value);

  let desiredaverage = Number(document.getElementById("desired-average").value);

  let divider = (desiredaverage * 10 - currentPrize * 10) / 10;
  let value =
    initialPricePaid * initialShares -
    (desiredaverage * initialShares) / divider;
  console.log(value);
  result.textContent = value;
  console.log(typeof result.textContent);
});
