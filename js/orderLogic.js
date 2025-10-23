// orderLogic.js - добавляем обработку новых категорий
document.addEventListener('DOMContentLoaded', function() {
    let selectedDishes = {
        soup: null,
        main: null,
        salad: null,
        drink: null,
        dessert: null
    };
    
    // Инициализируем отображение заказа
    updateOrderDisplay();
    
    // Добавляем обработчики событий для кнопок "Добавить"
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('dish-button')) {
            const dishItem = e.target.closest('.dish-item');
            const dishKeyword = dishItem.getAttribute('data-dish');
            const dish = dishes.find(d => d.keyword === dishKeyword);
            
            if (dish) {
                selectDish(dish);
            }
        }
    });
    
    function selectDish(dish) {
        selectedDishes[dish.category] = dish;
        updateOrderDisplay();
    }
    
    function updateOrderDisplay() {
        const orderContainer = document.getElementById('order-summary');
        if (!orderContainer) return;
        
        const selectedArray = Object.values(selectedDishes).filter(dish => dish !== null);
        
        if (selectedArray.length === 0) {
            // Если ничего не выбрано
            orderContainer.innerHTML = `
                <div class="order-empty">
                    <h3>Ничего не выбрано</h3>
                </div>
            `;
            document.getElementById('order-total').style.display = 'none';
        } else {
            // Отображаем выбранные блюда по категориям
            let orderHTML = '<h3>Ваш заказ</h3>';
            let totalPrice = 0;
            
            // Супы
            if (selectedDishes.soup) {
                orderHTML += `<div class="order-category">
                    <strong>Суп</strong><br>
                    ${selectedDishes.soup.name} ${selectedDishes.soup.price}Р
                </div>`;
                totalPrice += selectedDishes.soup.price;
            }
            
            // Главные блюда
            if (selectedDishes.main) {
                orderHTML += `<div class="order-category">
                    <strong>Главное блюдо</strong><br>
                    ${selectedDishes.main.name} ${selectedDishes.main.price}Р
                </div>`;
                totalPrice += selectedDishes.main.price;
            }
            
            // Салаты
            if (selectedDishes.salad) {
                orderHTML += `<div class="order-category">
                    <strong>Салат или стартер</strong><br>
                    ${selectedDishes.salad.name} ${selectedDishes.salad.price}Р
                </div>`;
                totalPrice += selectedDishes.salad.price;
            }
            
            // Напитки
            if (selectedDishes.drink) {
                orderHTML += `<div class="order-category">
                    <strong>Напиток</strong><br>
                    ${selectedDishes.drink.name} ${selectedDishes.drink.price}Р
                </div>`;
                totalPrice += selectedDishes.drink.price;
            }
            
            // Десерты
            if (selectedDishes.dessert) {
                orderHTML += `<div class="order-category">
                    <strong>Десерт</strong><br>
                    ${selectedDishes.dessert.name} ${selectedDishes.dessert.price}Р
                </div>`;
                totalPrice += selectedDishes.dessert.price;
            }
            
            orderContainer.innerHTML = orderHTML;
            
            // Обновляем итоговую стоимость
            const totalElement = document.getElementById('order-total');
            totalElement.innerHTML = `<strong>Стоимость заказа</strong><br>${totalPrice}Р`;
            totalElement.style.display = 'block';
            
            // Обновляем скрытые поля формы
            updateFormFields();
        }
    }
    
    function updateFormFields() {
        // Создаем скрытые поля для новых категорий если их нет
        if (!document.getElementById('salad-select')) {
            const saladInput = document.createElement('input');
            saladInput.type = 'hidden';
            saladInput.id = 'salad-select';
            saladInput.name = 'salad';
            document.getElementById('order-form').appendChild(saladInput);
        }
        
        if (!document.getElementById('dessert-select')) {
            const dessertInput = document.createElement('input');
            dessertInput.type = 'hidden';
            dessertInput.id = 'dessert-select';
            dessertInput.name = 'dessert';
            document.getElementById('order-form').appendChild(dessertInput);
        }
        
        // Обновляем значения
        const soupSelect = document.getElementById('soup-select');
        const mainSelect = document.getElementById('main-course-select');
        const saladSelect = document.getElementById('salad-select');
        const drinkSelect = document.getElementById('drink-select');
        const dessertSelect = document.getElementById('dessert-select');
        
        if (soupSelect) soupSelect.value = selectedDishes.soup ? selectedDishes.soup.keyword : '';
        if (mainSelect) mainSelect.value = selectedDishes.main ? selectedDishes.main.keyword : '';
        if (saladSelect) saladSelect.value = selectedDishes.salad ? selectedDishes.salad.keyword : '';
        if (drinkSelect) drinkSelect.value = selectedDishes.drink ? selectedDishes.drink.keyword : '';
        if (dessertSelect) dessertSelect.value = selectedDishes.dessert ? selectedDishes.dessert.keyword : '';
    }
    
    // Делаем функцию глобальной для reset
    window.selectedDishes = selectedDishes;
    window.updateOrderDisplay = updateOrderDisplay;
});
