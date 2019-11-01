import {Component} from './../core/component.js';
import {FieldComponent} from "./field.component.js";

export class StartComponent extends Component {
  constructor(cls) {
    super(cls);
  }

  init() {
    this.$el.addEventListener(`click`, this.renderFieldHandler);
  }

  renderFieldHandler() {
    const field = new FieldComponent('.minesweeper__field');
  }
}