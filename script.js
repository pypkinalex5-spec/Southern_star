// телефон можно менять здесь:
const PHONE_NUMBER = "+380951859077";

// функция смены языка
function applyLanguage(lang) {
  document.body.dataset.lang = lang;

  // переключаем текст, если указаны атрибуты
  document.querySelectorAll("[data-i18n-en]").forEach(el => {
    if (lang === "en") {
      el.textContent = el.dataset.i18nEn;
    }
  });

  document.querySelectorAll("[data-i18n-en-html]").forEach(el => {
    if (lang === "en") {
      el.innerHTML = el.dataset.i18nEnHtml;
    }
  });

  // назад на русский
  if (lang === "ru") {
    window.location.reload();
  }

  // делаем активную кнопку подсветкой
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.setLang === lang);
  });
}

// выставляем телефон во все элементы js-phone
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js-phone").forEach(el => {
    el.textContent = PHONE_NUMBER;
  });

  // ставим язык по умолчанию RU
  applyLanguage("ru");

  // обрабатываем клик по lang-кнопкам
  document.querySelectorAll("[data-set-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.setLang;
      applyLanguage(lang);
    });
  });
});
