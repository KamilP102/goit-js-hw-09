import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateEl = document.querySelector('input[type=text]');
const startBtnEl = document.querySelector('button[data-start]');
startBtnEl.disabled = true;
let timeleft = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      window.alert('Please choose a date in the future');
    } else {
      startBtnEl.disabled = false;
      startBtnEl.addEventListener('click', () => {
        const update = setInterval(() => {
          const date = selectedDates[0].getTime();
          console.log(`Wybrana data ${date}`);
          const actualDate = new Date().getTime();
          console.log(`Aktualna data ${actualDate}`);
          const timeLeft = date - actualDate;
          console.log(`różnica ${timeLeft}`);
          const counter = convertMs(timeLeft);
          console.log(` count ${counter.days}`);
          document.querySelector('.value[data-days]').innerHTML = counter.days;
          document.querySelector('.value[data-hours]').innerHTML =
            counter.hours;
          document.querySelector('.value[data-minutes]').innerHTML =
            counter.minutes;
          document.querySelector('.value[data-seconds]').innerHTML =
            counter.seconds;
        }, 1000);
      });
    }
  },
};

flatpickr(dateEl, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
