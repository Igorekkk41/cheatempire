

document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопки для переключения языка
    const langButtons = document.querySelectorAll('.lang-button');

    // Добавляем обработчик события для каждой кнопки
    langButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Предотвращаем переход по ссылке по умолчанию
            event.preventDefault();

            // Получаем выбранный язык (например, через атрибут data-lang)
            const lang = button.getAttribute('data-lang');

            // Сохраняем выбранный язык в localStorage
            localStorage.setItem('selectedLang', lang);

            // Вызываем функцию для изменения текста на странице в соответствии с выбранным языком
            changeLanguage(lang);
        });
    });
});


function setTextContentSafely(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = text;
    }
}

function changeLanguage(lang) {
    if (lang === 'en') {
        //! HEADER
        setTextContentSafely('tl-header-telegram', 'Telegram Channel');
        setTextContentSafely('tl-header-support', 'Support');
        setTextContentSafely('tl-header-catalog', 'Catalog');

        //! MAIN-PAGE
        setTextContentSafely('tl-main-choose-the-best', ' — choose the best ');
        setTextContentSafely('tl-main-private', ' PRIVATE ');
        setTextContentSafely('tl-main-cheats', ' cheats ');
        setTextContentSafely('tl-main-button', ' Go to products catalog ');

        //! WHY-WE
        setTextContentSafely('tl-whyWe-title', ' Why we? ');
        setTextContentSafely('tl-why-rewiews', ' 700+ positive rewiews ');
        setTextContentSafely('tl-why-prices', ' Affordable prices ');
        setTextContentSafely('tl-why-support', ' Free technical support ');

        //! CATALOG
        setTextContentSafely('tl-catalog-title', ' Catalog ');
        setTextContentSafely('tl-catalogBAR-HWID', ' HWID Spoofers ');
        setAllTextContent(document.querySelectorAll('.product-btn'), ' More details ');
        setAllTextContent(document.querySelectorAll('.tl-product-priceFROM'), ' From: ');

        //! product page
        setTextContentSafely('tl-card-1day', ' 1 day ');
        setTextContentSafely('tl-card-7days', ' 7 days ');
        setTextContentSafely('tl-card-30days', ' 30 days ');
        setTextContentSafely('card-button', ' Purchase ');

    } else if (lang === 'ru') {
        //! ШАПКА
        setTextContentSafely('tl-header-support', 'Тех поддержка');
        setTextContentSafely('tl-header-telegram', 'Телеграм канал');
        setTextContentSafely('tl-header-catalog', 'Каталог');

        //! ГЛАВНАЯ СЕКЦИЯ
        setTextContentSafely('tl-main-choose-the-best', ' — выбор лучших ');
        setTextContentSafely('tl-main-private', ' приватных ');
        setTextContentSafely('tl-main-cheats', ' читов ');
        setTextContentSafely('tl-main-button', ' Перейти к каталогу товаров ');

        //! ПОЧЕМУ МЫ
        setTextContentSafely('tl-whyWe-title', ' Почему мы? ');
        setTextContentSafely('tl-why-rewiews', ' 700+ положительных отзывов ');
        setTextContentSafely('tl-why-prices', ' Доступные цены ');
        setTextContentSafely('tl-why-support', ' Бесплатная тех помощь ');

        //! КАТАЛОГ
        setTextContentSafely('tl-catalog-title', ' Каталог ');
        setTextContentSafely('tl-catalogBAR-HWID', ' HWID Спуферы ');
        setAllTextContent(document.querySelectorAll('.product-btn'), ' Подробнее ');
        setAllTextContent(document.querySelectorAll('.tl-product-priceFROM'), ' От: ');

        //! product page
        setTextContentSafely('tl-card-1day', ' 1 день ');
        setTextContentSafely('tl-card-7days', ' 7 дней ');
        setTextContentSafely('tl-card-30days', ' 30 дней ');
        setTextContentSafely('card-button', ' Купить ');
    }
}

// Функция для установки текстового содержимого для всех элементов массива
function setAllTextContent(elements, text) {
    elements.forEach(function(element) {
        element.textContent = text;
    });
}

// Загружаем сохраненный язык при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const selectedLang = localStorage.getItem('selectedLang');
    if (selectedLang) {
        changeLanguage(selectedLang);
    }
});
