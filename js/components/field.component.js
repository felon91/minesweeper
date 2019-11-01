import {Component} from "../core/component.js";
import {renderField as drawField} from "../templates/field.template.js";

export class FieldComponent extends Component {
  constructor(cls) {
    super(cls);
  }

  init() {
    this.generateField();
  }

  generateField() {
    this.$el.innerHTML = '';
    this.$el.insertAdjacentHTML('afterBegin', drawField());
  }
}