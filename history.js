const historyList = document.getElementById("historyList");
const history = JSON.parse(localStorage.getItem("history")) || [];


historyList.innerHTML = history.map(value => {
return `<li class="time-value">${value.time} created on ${value.date} </li>`;
  })
  .join("");