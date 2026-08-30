(function() {
    'use strict';

    // Элементы
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('mainContent');
    const mainTitle = document.getElementById('mainTitle');
    const progressBar = document.getElementById('progressBar');
    const word1 = document.getElementById('word1');
    const word2 = document.getElementById('word2');
    const word3 = document.getElementById('word3');
    const cardMain = document.getElementById('cardMain');
    const cardPhoto = document.getElementById('cardPhoto');
    const consultationTitle = document.getElementById('consultationTitle');
    const cardSteps = document.getElementById('cardSteps');
    const stepItems = document.querySelectorAll('.step-item');
    const telegramWrapper = document.getElementById('telegramWrapper');

    // ===== 1. Анимация прогресс-бара =====
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 3 + 1;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
        }
        progressBar.style.width = progress + '%';
    }, 100);

    // ===== 2. Запускаем заливку текста =====
    setTimeout(() => {
        mainTitle.classList.add('filled');
    }, 200);

    // ===== 3. Функция показа слов =====
    const showWord = (element, delay) => {
        setTimeout(() => {
            element.classList.add('show');
        }, delay);
    };

    showWord(word1, 2800);
    showWord(word2, 3600);
    showWord(word3, 4400);

    // ===== 4. Переход на основной контент =====
    const showMainContent = () => {
        loader.style.transition = 'opacity 0.7s ease';
        loader.style.opacity = '0';

        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.style.display = 'flex';
            
            // Показываем большую красную карточку
            setTimeout(() => {
                cardMain.classList.add('show');
                
                // Показываем карточку с фото
                setTimeout(() => {
                    cardPhoto.classList.add('show');
                }, 300);
                
                // Показываем текст Консультация
                setTimeout(() => {
                    consultationTitle.classList.add('show');
                }, 500);
                
                // Показываем карточку с шагами
                setTimeout(() => {
                    cardSteps.classList.add('show');
                    
                    // Показываем шаги по очереди
                    stepItems.forEach((item) => {
                        const delay = parseInt(item.dataset.delay);
                        setTimeout(() => {
                            item.classList.add('show');
                        }, delay);
                    });
                }, 700);
                
                // Показываем иконку Telegram
                setTimeout(() => {
                    telegramWrapper.classList.add('show');
                }, 1200);
                
            }, 300);
            
        }, 700);
    };

    setTimeout(showMainContent, 5800);

    console.log('Загрузка завершена, страница готова!');
})();