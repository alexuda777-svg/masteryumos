document.addEventListener('DOMContentLoaded', function() {
    
    // 🎯 МЕТРИКА - ЦЕЛИ (звонки)
    document.querySelectorAll('.btn-primary[href^="tel:"]').forEach(btn => {
        btn.addEventListener('click', () => {
            if (typeof ym !== 'undefined') {
                ym(105722511, 'reachGoal', 'call');
            }
        });
    });
    
    // 🧮 КАЛЬКУЛЯТОР ПРИСТРОЙКИ (если есть на странице)
    const calcBtn = document.getElementById('calcBtn');
    if (calcBtn) {
        calcBtn.onclick = function() {
            const area = document.getElementById('area').value;
            if (area && !isNaN(area) && area > 0) {
                const pricePerM2 = 5000; // ₽/м² пристройки
                const total = (area * pricePerM2).toLocaleString('ru-RU');
                document.getElementById('result').innerHTML = `
                    <strong>${total} ₽</strong><br>
                    <small>примерная стоимость пристройки ${area}м²</small>
                `;
            } else {
                document.getElementById('result').textContent = 'Введите площадь';
            }
        };
    }
    
    // 📱 ФОРМА УВЕДОМЛЕНИЙ О ПРИЛОЖЕНИИ (если есть на главной)
    const appNotify = document.getElementById('appNotify');
    if (appNotify) {
        appNotify.onclick = function() {
            const phone = document.getElementById('appPhone').value;
            if (phone.length > 10) {
                alert('✅ Спасибо! Уведомим о запуске приложения на ' + phone);
                if (typeof ym !== 'undefined') {
                    ym(105722511, 'reachGoal', 'app_form');
                }
            } else {
                alert('📱 Введите телефон для уведомления');
            }
        };
    }
    
    // 📊 МЕТРИКА - КЛИКИ ПО УСЛУГАМ
    document.querySelectorAll('.service-link, .service-card a').forEach(link => {
        link.addEventListener('click', function(e) {
            const service = this.textContent.trim().toLowerCase();
            if (typeof ym !== 'undefined') {
                ym(105722511, 'reachGoal', `service_${service}`);
            }
        });
    });
    
    console.log('✅ Скрипт мастера Подольск загружен! 8 страниц + Метрика');
});
