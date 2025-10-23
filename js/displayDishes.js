// displayDishes.js - обновленная версия
document.addEventListener('DOMContentLoaded', function() {
    // Сортируем блюда по названию в алфавитном порядке
    const sortedDishes = dishes.sort((a, b) => a.name.localeCompare(b.name));
    
    // Группируем блюда по категориям
    const dishesByCategory = {
        soup: sortedDishes.filter(dish => dish.category === 'soup'),
        main: sortedDishes.filter(dish => dish.category === 'main'),
        salad: sortedDishes.filter(dish => dish.category === 'salad'),
        drink: sortedDishes.filter(dish => dish.category === 'drink'),
        dessert: sortedDishes.filter(dish => dish.category === 'dessert')
    };
    
    // Отображаем блюда в соответствующих секциях
    displayDishesInSection('soups', dishesByCategory.soup);
    displayDishesInSection('main-dishes', dishesByCategory.main);
    displayDishesInSection('salads', dishesByCategory.salad);
    displayDishesInSection('drinks', dishesByCategory.drink);
    displayDishesInSection('desserts', dishesByCategory.dessert);
    
    // Инициализируем фильтрацию
    initFilters();
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

// В функции createDishElement в displayDishes.js
function createDishElement(dish) {
    const dishItem = document.createElement('div');
    dishItem.className = 'dish-item';
    dishItem.setAttribute('data-dish', dish.keyword);
    dishItem.setAttribute('data-kind', dish.kind);
    
    dishItem.innerHTML = `
        <img src="${dish.image}" alt="${dish.name}" class="dish-image">
        <p class="dish-price">${dish.price}Р</p>
        <p class="dish-name">${dish.name}</p>
        <p class="dish-weight">${dish.count}</p>
        <button class="dish-button">Добавить</button>
    `;
    
    return dishItem;
}

// Функция для инициализации фильтров
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = this.closest('section');
            const menuContainer = section.querySelector('.menu-container');
            const kind = this.getAttribute('data-kind');
            
            // Убираем активный класс со всех кнопок в этой секции
            const allButtons = section.querySelectorAll('.filter-btn');
            allButtons.forEach(btn => btn.classList.remove('active'));
            
            // Если кликнули на активный фильтр, снимаем фильтрацию
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                showAllDishes(menuContainer);
            } else {
                // Добавляем активный класс нажатой кнопке
                this.classList.add('active');
                filterDishes(menuContainer, kind);
            }
        });
    });
}

function showAllDishes(menuContainer) {
    const dishItems = menuContainer.querySelectorAll('.dish-item');
    dishItems.forEach(item => {
        item.style.display = 'block';
    });
}

function filterDishes(menuContainer, kind) {
    const dishItems = menuContainer.querySelectorAll('.dish-item');
    
    dishItems.forEach(item => {
        if (kind === 'all' || item.getAttribute('data-kind') === kind) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
