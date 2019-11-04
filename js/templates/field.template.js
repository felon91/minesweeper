export function renderField(countCell) {
  const options = {
    'x': 0,
    'y': 0,
    'numberOfCells': Math.pow(countCell, 2) - 1,
    'percentCSS': 100 / countCell,
  };

  let field = `<div 
                  data-x="${options.x}" 
                  data-y="${options.y}" 
                  style="padding-bottom: ${options.percentCSS}%; flex-basis: ${options.percentCSS}%;"
                  class="minesweeper__item"></div>`;

  for (let i = 0; i < options.numberOfCells; i++) {
    options.y++;

    if (options.y == countCell) {
      options.x++;
      options.y = 0;
    }

    field += `<div 
                data-x="${options.x}" 
                data-y="${options.y}" 
                style="padding-bottom: ${options.percentCSS}%; flex-basis: ${options.percentCSS}%;"
                class="minesweeper__item"></div>`;
  }
  return field;
}