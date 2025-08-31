let lifeCount = 0;
document.querySelector("#life").addEventListener("click", () => {
  lifeCount++;
  document.querySelector("#life-count").innerText = lifeCount;
});

document.querySelector("#call").addEventListener("click", () => {
  let coinCount = parseInt(document.querySelector("#coin-count").innerText);
  if (coinCount < 20) {
    alert("You don't have enough coin\nYou need atleast 20 coin to make the call");
    return
  } else {
    const service = document.querySelector(".service").innerText;
    alert(`Calling to ${service}....`);
    coinCount = coinCount - 20
    document.querySelector("#coin-count").innerText=coinCount
  }
});
 