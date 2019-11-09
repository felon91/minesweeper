import {Component} from "../core/component.js";

export class TimerComponent extends Component {
  constructor(cls) {
    super(cls);

    if(!TimerComponent.instance) {
      TimerComponent.instance = this;
    }

    TimerComponent.instance.intervalId = TimerComponent.instance.renderTimer(TimerComponent.instance.$el);
    return TimerComponent.instance;
  }

  init() {}

  renderTimer(timer) {
    clearInterval(TimerComponent.instance.intervalId);

    const timerSpan = timer.querySelector('span');

    let i = 1;

    let minutes = '00';
    let seconds = 0;
    let result = null;
    const prevResult = `00:00`;
    timerSpan.innerHTML = prevResult;

    let timerId = setInterval(() => {

      if (i < 60) {
        seconds = (seconds < 9) ? `0${++seconds}` : ++seconds;
      } else {
        i = 0;
        seconds = '00';
        minutes = (minutes < 9) ? `0${++minutes}` : ++minutes;
      }
      i++;

      result = `${minutes}:${seconds}`;
      timerSpan.innerHTML = result;
    }, 1000);

    return timerId;
  }
}