import {Component} from "../core/component.js";
import {renderField as drawField} from "../templates/field.template.js";
import {BombGeneratorService} from "../service/bombgenerator.service.js";
import * as config from "../config.js";

export class FieldComponent extends Component {
  constructor(cls) {
    super(cls);
  }

  init() {
    let countCell = +document.querySelector('#field-size').value;

    if (countCell >= config.FIELD_GAME.fieldNine) {
      countCell = config.FIELD_GAME.fieldNine;
    } else if (countCell <= config.FIELD_GAME.fieldOne) {
      countCell = config.FIELD_GAME.fieldOne;
    }

    this.field = new Array(countCell).fill(0).map(el => new Array(countCell).fill(0));
    this.generateField(countCell);
  }

  generateField(countCell) {
    this.$el.innerHTML = '';
    this.$el.insertAdjacentHTML('afterBegin', drawField(countCell));
    const bombGeneratorService = new BombGeneratorService();
    bombGeneratorService.generationBomb(this.field);
    bombGeneratorService.fillField(this.field);
    console.log(this.field);
  }
}