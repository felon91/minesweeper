import {Component} from './../core/component.js';
import {FieldComponent} from "./field.component.js";
import {TimerComponent} from "./timer.component.js";

export class StartComponent extends Component {
  constructor(cls) {
    super(cls);
    this.activeField = null;
  }

  init() {
    this.$el.addEventListener(`click`, this.renderFieldHandler);
  }

  renderFieldHandler() {
    if (this.activeField) {
      this.activeField.destroy();
      delete this.activeField;
    }
    this.activeField = new FieldComponent('.minesweeper__field');
    new TimerComponent('.minesweeper__timer');
  }

  stopGame() {
    this.activeField.destroy();
    delete this.activeField;
  }
}