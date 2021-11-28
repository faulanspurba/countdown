const [day, hour, minute, second] = document.querySelectorAll(".time");
const title = document.querySelector("h1");
const target = "1 Jan 2022, 00:00:00";

let countdown = () => {
  const current_date = new Date();
  const target_date = new Date(target);

  const diff = (target_date - current_date) / 1000;

  const days = Math.floor(diff / (24 * 3600));
  const hours = Math.floor((diff % (24 * 3600)) / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = Math.floor(diff % 60);

  function formatTIme(time) {
    return time < 10 ? `0${time}` : time;
  }
  if (diff <= 0) {
    title.innerHTML = `HAPPY NEW YEAR 2022`;
    clearInterval(interval);
  } else {
    day.innerHTML = formatTIme(days);
    hour.innerHTML = formatTIme(hours);
    minute.innerHTML = formatTIme(minutes);
    second.innerHTML = formatTIme(seconds);
  }
};

let interval = setInterval(countdown, 1000);
