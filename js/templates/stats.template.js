export function renderStatistics(options) {

  let element = ``;
  let elementTop = `<div class="stats__block">
                      <p class="stats__title">Результаты:</p>
                      <table class="stats__table">
                        <tr>
                          <th>Имя пользователя</th>
                          <th>Время</th>
                        </tr>`;
  let elementBottom = `</table>
                     </div>`;

  if (options.length > 0) {
    for (let i = 0; i < options.length; i++) {
      element += `<tr>
                    <td>${i + 1}) ${options[i].name}</td>
                    <td>${options[i].timeResult}</td>
                  </tr>`;
    }

    element = `${elementTop}${element}${elementBottom}`;
  } else {
    element = `<div class="stats__block">
				        <p class="stats__title">Результатов нет.</p>
               </div>`;
  }
  return element;
}