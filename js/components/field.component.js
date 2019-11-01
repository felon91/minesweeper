import {Component} from "../core/component.js";
import {renderField as drawField} from "../templates/field.template.js";
import {BombGeneratorService} from "../service/bombgenerator.service.js";

export class FieldComponent extends Component {
  constructor(cls) {
    super(cls);
  }

  init() {
     this.field = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ];
    this.generateField();
  }

  generateField() {
    this.$el.innerHTML = '';
    this.$el.insertAdjacentHTML('afterBegin', drawField());
    new BombGeneratorService().generationBomb(this.field);
  }
}