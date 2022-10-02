let button = document.querySelector(".button");
let result = Number(document.querySelector(".result"));
button.addEventListener("click", function () {
  let initialPricePaid = Number(document.querySelector(".initial-price").value);
  let initialShares = Number(document.querySelector(".initial-shares").value);
  let currentPrize = Number(document.querySelector(".current-prize").value);
  let desiredaverage = Number(document.querySelector(".avg-needed").value);
  let n;
  console.log(
    String(
      (initialPricePaid * initialShares + currentPrize * n) /
        (initialShares + n)
    )
  );

  result.textContent = initialPricePaid;
});
