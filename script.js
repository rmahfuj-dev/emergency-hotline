// functionalities for lifeCount
let lifeCount = 0;
let lifeButtons = document.getElementsByClassName("lives");
for (let life of lifeButtons) {
  life.addEventListener("click", () => {
    lifeCount++;
    document.getElementsByClassName("life-count")[0].innerText = lifeCount;
  });
}

// functionalities for callingButton
let callButtons = document.getElementsByClassName("call");
for (let callBtn of callButtons) {
  callBtn.addEventListener("click", () => {
    let coinCount = parseInt(document.getElementsByClassName("coin-count")[0].innerText);
    if (coinCount < 20) {
      alert(
        "\u274C You don't have enough coin\nYou need atleast 20 coin to make the call"
      );
      return;
    } else {
      const box = callBtn.closest(".box");
      const service = box.getElementsByClassName("service")[0].innerText;
      alert(`\u{1F4DE} Calling to ${service}....`);
      coinCount -= 20;
      document.getElementsByClassName("coin-count")[0].innerText = coinCount;

      // add call to history
      const historyWrapper = document.getElementsByClassName("history-wrapper")[0];
      const newHistory = document.createElement("div");
      newHistory.innerHTML = `
        <div class="history-box flex justify-between p-4 items-center bg-gray-50 rounded-2xl">
          <div class="details">
            <h2 class="service font-semibold text-[18px]">${service}</h2>
            <p class="number text-18px text-gray-400">${box.getElementsByClassName("number")[0].innerText}</p>
          </div>
          <p class="time text-[18px] text-gray-700 whitespace-nowrap">${new Date().toLocaleTimeString()}</p>
        </div>
      `;
      historyWrapper.prepend(newHistory.firstElementChild);
    }
  });
}

// functionalites for copyButton
let copyCount = 0;
let copyButtons = document.getElementsByClassName("copy");
for (let copyBtn of copyButtons) {
  copyBtn.addEventListener("click", () => {
    copyCount++;
    document.getElementsByClassName("copy-count")[0].innerText = copyCount;
    const box = copyBtn.closest(".box");
    let copiedNumber = box.getElementsByClassName("number")[0].innerText;
    navigator.clipboard.writeText(copiedNumber);
    alert(`Copied the number : ${copiedNumber}`);
  });
}


// Clear history functionality
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", () => {
  const historyWrapper = document.getElementsByClassName("history-wrapper")[0];
  historyWrapper.innerHTML = ""; // remove all history
});
