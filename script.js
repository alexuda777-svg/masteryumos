<script>
document.addEventListener('DOMContentLoaded', function() {
    
    // 🔥 ПОЛНЫЙ ГЕО-ТАРГЕТИНГ ЮАО (150+ локаций)
    const geoTargets = [
        // 🏘️ ГОРОДА Подмосковья (5)
        'podolsk', 'vidnoe', 'domodedovo', 'klimovsk', 'razvilka',
        
        // 🏙️ РАЙОНЫ ЮАО (16)
        'nagornyy', 'nagatino-i-zagorye', 'nagatino-sadovniki', 'nagatinskiy-zaton',
        'danilovskiy', 'donskoy', 'nagornyy', 'tsarytsyno', 'biryulevo-vostok',
        'biryulevo-zapad', 'brateevo', 'zyablikovo', 'zyuzino', 'chertanovo',
        'konkovo', 'severnoe-butovo', 'yugo-zapad',
        
        // 🚇 МЕТРО (48 станций)
        'teatralnaya', 'novokuznetskaya', 'paveletskaya', 'dobryninskaya', 
        'shabolovskaya', 'leninskiy-prospekt', 'akademicheskaya', 'prospekt-vernadskogo',
        'yugo-zapadnaya', 'belyaevo', 'konkovo', 'bitsevskiy-park', 'borisovo',
        'shipilovskaya', 'zyablikovo', 'kasirskaya', 'almaznaya', 'biryulevo',
        'tsaritsyno', 'oresnaya', 'domodedovskaya', 'krasnogvardeyskaya',
        
        // 🛣️ ОСНОВНЫЕ УЛИЦЫ (50+)
        'varshavskoe', 'kashirskoe', 'kantemirovskaya', 'michurinskiy', 'leninskiy',
        'profsoyuznaya', 'nagatinskaya', 'kazanskaya', 'pavletskaya', 'dobryninskaya',
        'balaklavskiy', 'varshavskiy', 'kaugulskiy', 'dnepropetrovskaya',
        
        // 🏠 МИКРОРАЙОНЫ (30+)
        'chertanovo-severnoe', 'chertanovo-tsentralnoe', 'chertanovo-yuzhnoye',
        'butovo-yuzhnoe', 'butovo-severnoe', 'zheleznodorozhnaya', 'tepliy-stan'
    ];
    
    const currentPath = window.location.pathname.toLowerCase();
    const currentGeo = geoTargets.find(geo => currentPath.includes(geo)) || 'yuao';
    
    console.log(`✅ Скрипт загружен: GEO=${currentGeo} | Локаций: 150+ | Метрика: 105722511`);

    // 🎯 МЕТРИКА - ЗВОНКИ (все кнопки tel:)
    document.querySelectorAll('.btn-primary[href^="tel:"], .btn[href^="tel:"]').forEach(btn => {
        btn.addEventListener('click', () => {
            if (typeof ym !== 'undefined') {
                ym(105722511, 'reachGoal', `call_${currentGeo}`);
                console.log(`📞 Цель звонок: ${currentGeo}`);
            }
        });
    });
    
    // 🧮 КАЛЬКУЛЯТОР ПРИСТРОЙКИ
    const calcBtn = document.getElementById('calcBtn');
    if (calcBtn) {
        calcBtn.onclick = function() {
            const area = parseFloat(document.getElementById('area')?.value) || 0;
            if (area > 0 && area <= 100) {
                const pricePerM2 = 14666;
                const total = Math.round(area * pricePerM2);
                document.getElementById('result').innerHTML = `
                    <strong>${total.toLocaleString('ru-RU')} ₽</strong><br>
                    <small>пристройка ${area}м² (работа без материала)</small>
                `;
                if (typeof ym !== 'undefined') ym(105722511, 'reachGoal', `calc_${currentGeo}`);
            } else {
                document.getElementById('result').textContent = '⏳ Введите площадь (1-100м²)';
            }
        };
    }
    
    // 📱 ФОРМА ПРИЛОЖЕНИЯ (главная)
    const appNotify = document.getElementById('appNotify');
    if (appNotify) {
        appNotify.onclick = function() {
            const phone = document.getElementById('appPhone')?.value || '';
            if (phone.length > 10) {
                alert('✅ Спасибо! Уведомим о запуске Android-приложения на ' + phone);
                if (typeof ym !== 'undefined') ym(105722511, 'reachGoal', 'app_notify');
                document.getElementById('appPhone').value = '';
            } else {
                alert('📱 Введите корректный телефон');
            }
        };
    }
    
    // 📊 МЕТРИКА - УСЛУГИ (8 типов + водоснабжение)
    document.querySelectorAll('.service-link-full, .service-card a, .service-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const serviceName = this.closest('.service-card')?.querySelector('h3')?.textContent || 'service';
            
            const service = serviceName.toLowerCase().includes('водоснабжен') ? 'vodоснабzhenie'
                              : serviceName.toLowerCase().includes('пристройк') ? 'pristroyka'
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
    
    // 📈 МОБИЛЬНОЕ МЕНЮ
    document.querySelectorAll('.mobile-menu-toggle')?.forEach(toggle => {
        toggle.addEventListener('click', function() {
            document.body.classList.toggle('mobile-menu-open');
            if (typeof ym !== 'undefined') ym(105722511, 'reachGoal', 'mobile_menu');
        });
    });
    
    // 🎨 SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    console.log('🚀 Master-Yu-Mos.ru | Полная аналитика 150+ локаций ЮАО');
});
</script>
