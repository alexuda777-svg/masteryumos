document.addEventListener('DOMContentLoaded', function() {
    
    // 🔥 ГЕО-ОПРЕДЕЛЕНИЕ ДЛЯ МЕТРИКИ (47 страниц)
    const geoTargets = [
        'podolsk', 'vidnoe', 'domodedovo', 'klimovsk', 'danilovskiy',
        'biryulevo-vostok', 'biryulevo-zapad', 'brateevo', 'zyablikovo',
        'nagatinskiy-zaton', 'nagatino-sadovniki', 'nagornyy', 'donskoy'
    ];
    
    const currentPath = window.location.pathname.toLowerCase();
    const currentGeo = geoTargets.find(geo => currentPath.includes(geo)) || 'yuao';
    
    console.log(`✅ Скрипт загружен: GEO=${currentGeo} | Страниц: 47 | Метрика: 105722511`);
    
    // 🎯 МЕТРИКА - ЗВОНКИ (все кнопки tel:)
    document.querySelectorAll('.btn-primary[href^="tel:"], .btn[href^="tel:"]').forEach(btn => {
        btn.addEventListener('click', () => {
            if (typeof ym !== 'undefined') {
                ym(105722511, 'reachGoal', `call_${currentGeo}`);
                console.log(`📞 Цель звонок: ${currentGeo}`);
            }
        });
    });
    
    // 🧮 КАЛЬКУЛЯТОР ПРИСТРОЙКИ (pristroyka.html + региональные)
    const calcBtn = document.getElementById('calcBtn');
    if (calcBtn) {
        calcBtn.onclick = function() {
            const area = parseFloat(document.getElementById('area')?.value) || 0;
            if (area > 0) {
                const pricePerM2 = 14666; // 220₽ / 15м² = 14,666₽/м²
                const total = Math.round(area * pricePerM2);
                const formatted = total.toLocaleString('ru-RU');
                
                document.getElementById('result').innerHTML = `
                    <strong>${formatted} ₽</strong><br>
                    <small>пристройка ${area}м² (работа без материала)</small>
                `;
                
                // 📊 Метрика калькулятора
                if (typeof ym !== 'undefined') {
                    ym(105722511, 'reachGoal', `calc_${currentGeo}`);
                }
            } else {
                document.getElementById('result').textContent = '⏳ Введите площадь (м²)';
            }
        };
    }
    
    // 📱 ФОРМА УВЕДОМЛЕНИЙ ПРИЛОЖЕНИЯ (только главная)
    const appNotify = document.getElementById('appNotify');
    if (appNotify) {
        appNotify.onclick = function() {
            const phone = document.getElementById('appPhone')?.value || '';
            if (phone.length > 10) {
                alert('✅ Спасибо! Уведомим о запуске Android-приложения на ' + phone);
                if (typeof ym !== 'undefined') {
                    ym(105722511, 'reachGoal', 'app_notify');
                }
                document.getElementById('appPhone').value = '';
            } else {
                alert('📱 Введите корректный телефон');
            }
        };
    }
    
    // 📊 МЕТРИКА - КЛИКИ ПО УСЛУГАМ (все service-card)
    document.querySelectorAll('.service-link-full, .service-card a, .service-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const serviceName = this.closest('.service-card')?.querySelector('h3')?.textContent 
                              || this.textContent || 'service';
            
            const service = serviceName.toLowerCase().includes('пристройк') ? 'pristroyka'
                              : serviceName.toLowerCase().includes('тепловизор') ? 'teplovizor'
                              : serviceName.toLowerCase().includes('балкон') ? 'balkony'
                              : serviceName.toLowerCase().includes('электрик') ? 'elektrika'
                              : serviceName.toLowerCase().includes('крыш') ? 'krysha'
                              : serviceName.toLowerCase().includes('отоплени') ? 'otoplenie'
                              : 'service';
            
            if (typeof ym !== 'undefined') {
                ym(105722511, 'reachGoal', `service_${service}_${currentGeo}`);
                console.log(`🎯 Услуга: ${service} | GEO: ${currentGeo}`);
            }
        });
    });
    
    // 📈 МОБИЛЬНЫЕ МЕНЮ (если есть)
    document.querySelectorAll('.mobile-menu-toggle')?.forEach(toggle => {
        toggle.addEventListener('click', function() {
            document.body.classList.toggle('mobile-menu-open');
            if (typeof ym !== 'undefined') {
                ym(105722511, 'reachGoal', 'mobile_menu');
            }
        });
    });
    
    // 🎨 SMOOTH SCROLL ДЛЯ ЯКОРНЫХ ССЫЛОК
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
});
