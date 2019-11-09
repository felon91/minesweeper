export function renderPopup(options) {
  const element = `<div class="popup__center">
                      <div class="popup__block">
                        <p>${options}</p>
                        <div class="popup__buttons">
                          <button class="popup__button popup__button--yes">Да</button>
                          <button class="popup__button popup__button--gray popup__button--cancel">Отмена</button>
                        </div>
                      </div>
                    </div>`;
  return element;
}