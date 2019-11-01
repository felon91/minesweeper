export class Component {
  constructor(cls) {
    this.$el = document.querySelector(`${cls}`);
    this.init();
  }

  init() {}
}