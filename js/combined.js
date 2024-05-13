document.addEventListener('DOMContentLoaded', function() {
    // Находим все карточки продуктов
    const productCards = document.querySelectorAll('.catalog-content__block__card');

    // Добавляем обработчик события для каждой карточки продукта
    productCards.forEach(function(card) {
        // Находим кнопку "Подробнее" в текущей карточке
        const button = card.querySelector('.catalog-content__block__card__picture');

        // Находим заголовок (title) текущей карточки
        const title = card.querySelector('.card-title').textContent;

        // Добавляем обработчик события при клике на кнопку "Подробнее"
        button.addEventListener('click', function(event) {
            // Предотвращаем переход по ссылке по умолчанию
            event.preventDefault();

            // Получаем выбранный язык из localStorage
            const selectedLang = localStorage.getItem('selectedLang');

            // Получаем данные о продукте из соответствующих атрибутов в зависимости от выбранного языка
            let price1, price7, price30, status, videoId, processor, screens, windows, security, description, purchase1, purchase7, purchase30;
            if (selectedLang === 'en') {
                price1 = card.getAttribute('data-price1-usd');
                price7 = card.getAttribute('data-price7-usd');
                price30 = card.getAttribute('data-price30-usd');
                status = card.getAttribute('data-status');
                videoId = card.getAttribute('data-video-id');
                processor = card.getAttribute('data-processor-eng');
                screens = card.getAttribute('data-screens-eng');
                windows = card.getAttribute('data-windows-eng');
                security = card.getAttribute('data-security-eng');
                description = card.getAttribute('data-description-eng');
                purchase1 = card.getAttribute('data-purchase1');
                purchase7 = card.getAttribute('data-purchase7');
                purchase30 = card.getAttribute('data-purchase30');
                
            } else if (selectedLang === 'ru') {
                price1 = card.getAttribute('data-price1-rub');
                price7 = card.getAttribute('data-price7-rub');
                price30 = card.getAttribute('data-price30-rub');
                status = card.getAttribute('data-status');
                videoId = card.getAttribute('data-video-id');
                processor = card.getAttribute('data-processor-ru');
                screens = card.getAttribute('data-screens-ru');
                windows = card.getAttribute('data-windows-ru');
                security = card.getAttribute('data-security-ru');
                description = card.getAttribute('data-description-ru');
                purchase1 = card.getAttribute('data-purchase1');
                purchase7 = card.getAttribute('data-purchase7');
                purchase30 = card.getAttribute('data-purchase30');
            }

            // Сохраняем данные о продукте и заголовок в sessionStorage
            const productData = {
                title: title,
                price1: price1,
                price7: price7,
                price30: price30,
                status: status,
                videoId: videoId,
                processor: processor,
                screens: screens,
                windows: windows,
                security: security,
                description: description,
                purchase1: purchase1,
                purchase7: purchase7,
                purchase30: purchase30
            };
            sessionStorage.setItem('productData', JSON.stringify(productData));

            // Переходим на страницу с продуктом
            window.location.href = "product.html";
        });
    });
});

// Добавляем обработчик события при нажатии на кнопку "Купить"
document.addEventListener('DOMContentLoaded', function() {
    const cardButton = document.getElementById('card-button');
    if (cardButton) {
        cardButton.addEventListener('click', function(event) {
            event.preventDefault();

            // Получаем данные о продукте из sessionStorage
            const productData = JSON.parse(sessionStorage.getItem('productData'));

            // Получаем значение выбранной радио кнопки
            const selectedRadio = document.querySelector('.card-radio__wrapper input[type="radio"]:checked');
            const selectedRadioValue = selectedRadio.getAttribute('data-price');

            // Определяем, к какому атрибуту data-purchase привязать ссылку
            let purchaseId;
            if (selectedRadioValue === productData.price1) {
                purchaseId = productData.purchase1;
            } else if (selectedRadioValue === productData.price7) {
                purchaseId = productData.purchase7;
            } else if (selectedRadioValue === productData.price30) {
                purchaseId = productData.purchase30;
            }

            // Переходим на страницу покупки с учетом выбранного атрибута data-purchase
            const purchaseLink = "https://funpay.com/lots/offer?id=" + purchaseId;
            window.open(purchaseLink, '_blank');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const productData = JSON.parse(sessionStorage.getItem('productData'));

    document.getElementById('main__product__wrapper__info__video').src = 'https://kinescope.io/embed/' + productData.videoId;
    document.getElementById('card-cpu').textContent = productData.processor;
    document.getElementById('card-screen').textContent = productData.screens;
    document.getElementById('card-win').textContent = productData.windows;
    document.getElementById('card-spoofer').textContent = productData.security;
    document.getElementById('card-title').textContent = productData.title; // Устанавливаем заголовок из данных продукта
    document.getElementById('card-description').textContent = productData.description;
    document.getElementById('card-status').textContent = productData.status;

    const radioInputs = document.querySelectorAll('.card-radio__wrapper input[type="radio"]');
    radioInputs[0].setAttribute('data-price', productData.price1);
    radioInputs[1].setAttribute('data-price', productData.price7);
    radioInputs[2].setAttribute('data-price', productData.price30);

    // Добавляем обработчик событий для радио-кнопок
    radioInputs.forEach(function(input) {
        input.addEventListener('click', handleRadioClick);
    });

    // Добавляем обработчик событий для оболочек радио-кнопок
    const radioWrappers = document.querySelectorAll('.card-radio__wrapper');
    radioWrappers.forEach(function(wrapper) {
        wrapper.addEventListener('click', function(event) {
            const input = wrapper.querySelector('input[type="radio"]');
            input.click();
        });
    });

    // Получаем выбранный язык из localStorage
    const selectedLang = localStorage.getItem('selectedLang');

    // Устанавливаем символ валюты по умолчанию в зависимости от выбранного языка
    const currencySymbol = selectedLang === 'en' ? '$' : '₽';

    // Устанавливаем радио-кнопку с индексом 0 по умолчанию выбранной и активной
    radioInputs[0].checked = true;
    radioInputs[0].classList.add('_active');

    // Устанавливаем цену по умолчанию
    const defaultPrice = radioInputs[0].getAttribute('data-price');
    if (!isNaN(defaultPrice)) {
        document.getElementById('card-price').textContent = defaultPrice + ' ' + currencySymbol;
    } else {
        document.getElementById('card-price').textContent = defaultPrice;
    }
});

function handleRadioClick(event) {
    const clickedInput = event.target;
    const price = clickedInput.getAttribute('data-price');

    // Снимаем класс _active_ и снимаем checked со всех радио-кнопок
    const radioInputs = document.querySelectorAll('.card-radio__wrapper input[type="radio"]');
    radioInputs.forEach(function(input) {
        input.classList.remove('_active');
        input.checked = false;
    });

    // Добавляем класс _active_ и устанавливаем checked только на кликнутую радио-кнопку
    clickedInput.classList.add('_active');
    clickedInput.checked = true;

    // Получаем выбранный язык из localStorage
    const selectedLang = localStorage.getItem('selectedLang');

    // Устанавливаем символ валюты в зависимости от выбранного языка
    const currencySymbol = selectedLang === 'en' ? '$' : '₽';

    // Проверяем, является ли цена числом или строкой
    if (!isNaN(price)) {
        document.getElementById('card-price').textContent = price + ' ' + currencySymbol; // Если цена - число, добавляем символ валюты
    } else {
        document.getElementById('card-price').textContent = price; // Если цена - строка, оставляем как есть
    }
}

/* -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.querySelector(".back-btn");
    if (backButton) {
      backButton.addEventListener("click", function (event) {
        event.preventDefault();
        history.back();
      });
    }
  });

// Загружаем сохраненный язык при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const selectedLang = localStorage.getItem('selectedLang');
    if (selectedLang) {
        changeLanguage(selectedLang);
    }
});





  
