const historyList = document.getElementById("historyList");
const history = JSON.parse(localStorage.getItem("history")) || [];


historyList.innerHTML = history.map(value => {
return `<li class="time-value">${value.date} - ${value.time}</li>`;
  })
  .join("");