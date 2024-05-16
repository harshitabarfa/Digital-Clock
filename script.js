function showTime() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const number1 = document.querySelector(".number1");
  const number2 = document.querySelector(".number2");
  const number3 = document.querySelector(".number3");
  const number4 = document.querySelector(".number4");
  const number5 = document.querySelector(".number5");
  const number6 = document.querySelector(".number6");

  number1.textContent = hours[0];
  number2.textContent = hours[1];
  number3.textContent = minutes[0];
  number4.textContent = minutes[1];
  number5.textContent = seconds[0];
  number6.textContent = seconds[1];
}

setInterval(showTime, 1000);
