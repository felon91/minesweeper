export function renderField() {
  let field = `<div class="minesweeper__item"></div>`;
  for (let i = 0; i < 48; i++) {
    field += `<div class="minesweeper__item"></div>`;
  }
  return field;
}