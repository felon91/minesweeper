import {Component} from "../core/component.js";
import {renderField as drawField} from "../templates/field.template.js";
import {BombGeneratorService} from "../service/bombgenerator.service.js";
import {PopupComponent} from "../components/popup.component.js";
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
    this.countBomb = null;
    this.field = new Array(countCell).fill(0).map(el => new Array(countCell).fill(0));
    this.generateField(countCell);
    this.evt = this.openCell.bind(this);
    this.evtRightBtn = this.markCell;
    this.$el.addEventListener('click', this.evt);
    this.$el.addEventListener('contextmenu', this.evtRightBtn);
  }

  destroy() {
    this.$el.removeEventListener('click', this.evt);
    this.$el.removeEventListener('contextmenu', this.evtRightBtn);
  }

  generateField(countCell) {
    this.$el.innerHTML = '';
    this.$el.insertAdjacentHTML('afterBegin', drawField(countCell));
    const bombGeneratorService = new BombGeneratorService();
    this.countBomb = bombGeneratorService.generationBomb(this.field);
    bombGeneratorService.fillField(this.field);
    return this.countBomb;
  }

  markCell(evt) {
    evt.preventDefault();
    let evtTarget = evt.target;
    if (evt.target.classList.contains('open') || evt.target.parentElement.classList.contains('open')) return;
    if (evtTarget.tagName == 'SPAN') evtTarget = evtTarget.parentElement;
    evtTarget.classList.toggle(config.CLASS_GAME.eleven);
    evtTarget.insertAdjacentHTML('afterBegin', '<span></span>');
  }


  openCell(evt) {
    const obj = {
      'el': evt.target,
      'data': evt.target.dataset,
    };

    this.checkCell({field: this.field}, obj);
    this.isWinner(this.$el);
  }

  checkCell(field, params) {
    if (params.el.classList.contains('open') || params.el.tagName != 'DIV') return;

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
        new PopupComponent('.popup', {'type': 'end', 'fieldComponent': this});
        break;
      }
    }
  }

  isWinner(field) {
    let countOpenCell = field.querySelectorAll('div.open').length;
    let needToOpen = field.querySelectorAll('div').length - this.countBomb;
    if (countOpenCell === needToOpen) {
      new PopupComponent('.popup', {'type': 'winner', 'fieldComponent': this});
    }
  }
}