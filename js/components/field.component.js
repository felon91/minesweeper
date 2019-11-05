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
    //Баг
    if (!FieldComponent.exists) {
      this.$el.addEventListener('click', this.openCell.bind(this, {'field': this.field}));
    }
    FieldComponent.exists = true;

  }

  generateField(countCell) {
    this.$el.innerHTML = '';
    this.$el.insertAdjacentHTML('afterBegin', drawField(countCell));
    const bombGeneratorService = new BombGeneratorService();
    bombGeneratorService.generationBomb(this.field);
    bombGeneratorService.fillField(this.field);
  }

  openCell(options, evt) {
    const obj = {
      'el': evt.target,
      'data': evt.target.dataset,
    };

    this.checkCell(options, obj);
  }

  checkCell(field, params) {
    const el = `<span>${field.field[params.data.x][params.data.y]}</span>`;
    switch (field.field[params.data.x][params.data.y]) {
      case 0: {
        params.el.classList.add(config.CLASS_GAME.zero);
        params.el.insertAdjacentHTML('afterBegin', el);
        break;
      }
      case 1: {
        params.el.classList.add(...config.CLASS_GAME.one);
        params.el.insertAdjacentHTML('afterBegin', el);
        break;
      }
      case 2: {
        params.el.classList.add(...config.CLASS_GAME.two);
        params.el.insertAdjacentHTML('afterBegin', el);
        break;
      }
      case 3: {
        params.el.classList.add(...config.CLASS_GAME.three);
        params.el.insertAdjacentHTML('afterBegin', el);
        break;
      }
      case 4: {
        params.el.classList.add(...config.CLASS_GAME.four);
        params.el.insertAdjacentHTML('afterBegin', el);
        break;
      }
      case 5: {
        params.el.classList.add(...config.CLASS_GAME.five);
        params.el.insertAdjacentHTML('afterBegin', el);
        break;
      }
      case 6: {
        params.el.classList.add(...config.CLASS_GAME.six);
        params.el.insertAdjacentHTML('afterBegin', el);
        break;
      }
      case 7: {
        params.el.classList.add(...config.CLASS_GAME.seven);
        params.el.insertAdjacentHTML('afterBegin', el);
        break;
      }
      case 8: {
        params.el.classList.add(...config.CLASS_GAME.eight);
        params.el.insertAdjacentHTML('afterBegin', el);
        break;
      }
      case 10: {
        params.el.classList.add(config.CLASS_GAME.ten);
        const el = `<span></span>`;
        params.el.insertAdjacentHTML('afterBegin', el);
        break;
      }
    }
  }
}