import {Component} from "../core/component.js";
import {TimerComponent} from "./timer.component.js";
import {renderPopup} from "../templates/popup.template.js";
import {POPUP_MESSAGES} from "../config.js";
import {StartComponent} from "./start.component.js";

export class PopupComponent extends Component {
  constructor(cls, options) {
    super(cls);
    this.type = options.type;
    this.fieldComponent = options.fieldComponent;
    this.openPopup(this.type);
  }

  openPopup(text) {
    this.$el.insertAdjacentHTML('afterBegin', renderPopup(POPUP_MESSAGES[text]));
    this.$el.querySelector('.popup__button--cancel').addEventListener('click', this.cancelPopup.bind(this));
    this.$el.querySelector('.popup__button--yes').addEventListener('click', this.newGame.bind(this));
    this.$el.classList.add('popup--active');
    clearInterval(TimerComponent.instance.intervalId);
  }

  cancelPopup() {
    this.$el.classList.remove('popup--active');
    this.fieldComponent.destroy();
  }

  newGame() {
    this.$el.classList.remove('popup--active');
    const start = new StartComponent('.minesweeper__start');
    start.renderFieldHandler.bind(start.$el)();
  }

}