    // Создаем массив городов
    let cities = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Казань"];

    // Создаем пустой массив для хранения температур
    let temperatures = [];

    // Проходимся по массиву городов и запрашиваем температуры для каждого города
    for (let i = 0; i < cities.length; i++) {
        let temp = prompt(`Введите температуру в городе ${cities[i]}`);
        temperatures.push(Number(temp)); // преобразуем строку в число и добавляем в массив температур
    }

    // Создаем список для отображения информации о каждом городе и его температуре
    let list = document.createElement('ul');
    for (let i = 0; i < cities.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = `${cities[i]}: ${temperatures[i]}°C`;
        list.appendChild(listItem);
    }
    document.body.appendChild(list);

    // Находим максимальную и минимальную температуру
    let maxTemp = Math.max(...temperatures);
    let minTemp = Math.min(...temperatures);

    // Выводим информацию о погоде в разных городах и максимальной и минимальной температуре на экран
    document.write(`<p>Максимальная температура: ${maxTemp}°C</p>`);
    document.write(`<p>Минимальная температура: ${minTemp}°C</p>`);

