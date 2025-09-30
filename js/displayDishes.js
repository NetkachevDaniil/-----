// displayDishes.js
document.addEventListener('DOMContentLoaded', function() {
    // Сортируем блюда по названию в алфавитном порядке
    const sortedDishes = dishes.sort((a, b) => a.name.localeCompare(b.name));
    
    // Группируем блюда по категориям
    const dishesByCategory = {
        soup: sortedDishes.filter(dish => dish.category === 'soup'),
        main: sortedDishes.filter(dish => dish.category === 'main'),
        drink: sortedDishes.filter(dish => dish.category === 'drink')
    };
    
    // Отображаем блюда в соответствующих секциях
    displayDishesInSection('soups', dishesByCategory.soup);
    displayDishesInSection('main-dishes', dishesByCategory.main);
    displayDishesInSection('drinks', dishesByCategory.drink);
});

function displayDishesInSection(sectionId, dishesArray) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const menuContainer = section.querySelector('.menu-container');
    if (!menuContainer) return;
    
    // Очищаем контейнер
    menuContainer.innerHTML = '';
    
    // Создаем карточки для каждого блюда
    dishesArray.forEach(dish => {
        const dishElement = createDishElement(dish);
        menuContainer.appendChild(dishElement);
    });
}

function createDishElement(dish) {
    const dishItem = document.createElement('div');
    dishItem.className = 'dish-item';
    dishItem.setAttribute('data-dish', dish.keyword);
    
    dishItem.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" class="dish-image">
        <p class="dish-price">${dish.price}Р</p>
        <p class="dish-name">${dish.name}</p>
        <p class="dish-weight">${dish.count}</p>
        <button class="dish-button">Добавить</button>
    `;
    
    return dishItem;
}