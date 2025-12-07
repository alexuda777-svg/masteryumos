document.getElementById('calcBtn').onclick = function() {
    const area = document.getElementById('area').value;
    if (area && !isNaN(area) && area > 0) {
        const pricePerM2 = 5000;
        const total = (area * pricePerM2).toLocaleString('ru-RU');
        document.getElementById('result').innerHTML = `
            <strong>${total} ₽</strong><br>
            <small>примерная стоимость пристройки ${area}м²</small>
        `;
    } else {
        document.getElementById('result').textContent = 'Введите площадь';
    }
};

document.getElementById('appNotify').onclick = function() {
    const phone = document.getElementById('appPhone').value;
    if (phone.length > 10) {
        alert('✅ Спасибо! Уведомим о запуске приложения на ' + phone);
    } else {
        alert('📱 Введите телефон для уведомления');
    }
};
