export class Component {
  constructor(cls) {
    this.$el = document.querySelector(`${cls}`);
    this.activeField = null;
    this.init();
  }

  init() {}
}