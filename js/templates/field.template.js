export function renderField(countCell) {
  const numberOfCells = Math.pow(countCell, 2) - 1;
  const percentCSS = 100 / countCell;
  let field = `<div style="padding-bottom: ${percentCSS}%; flex-basis: ${percentCSS}%;" class="minesweeper__item"></div>`;

  for (let i = 0; i < numberOfCells; i++) {
    field += `<div style="padding-bottom: ${percentCSS}%; flex-basis: ${percentCSS}%;" class="minesweeper__item"></div>`;
  }
  return field;
}