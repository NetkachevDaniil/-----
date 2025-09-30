// orderLogic.js
document.addEventListener('DOMContentLoaded', function() {
    let selectedDishes = {
        soup: null,
        main: null,
        drink: null
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
            orderHTML += `<div class="order-category">
                <strong>Суп</strong><br>
                ${selectedDishes.soup ? `${selectedDishes.soup.name} ${selectedDishes.soup.price}Р` : 'Блюдо не выбрано'}
            </div>`;
            if (selectedDishes.soup) totalPrice += selectedDishes.soup.price;
            
            // Главные блюда
            orderHTML += `<div class="order-category">
                <strong>Главное блюдо</strong><br>
                ${selectedDishes.main ? `${selectedDishes.main.name} ${selectedDishes.main.price}Р` : 'Блюдо не выбрано'}
            </div>`;
            if (selectedDishes.main) totalPrice += selectedDishes.main.price;
            
            // Напитки
            orderHTML += `<div class="order-category">
                <strong>Напиток</strong><br>
                ${selectedDishes.drink ? `${selectedDishes.drink.name} ${selectedDishes.drink.price}Р` : 'Напиток не выбран'}
            </div>`;
            if (selectedDishes.drink) totalPrice += selectedDishes.drink.price;
            
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
        const soupSelect = document.getElementById('soup-select');
        const mainSelect = document.getElementById('main-course-select');
        const drinkSelect = document.getElementById('drink-select');
        
        if (soupSelect) soupSelect.value = selectedDishes.soup ? selectedDishes.soup.keyword : '';
        if (mainSelect) mainSelect.value = selectedDishes.main ? selectedDishes.main.keyword : '';
        if (drinkSelect) drinkSelect.value = selectedDishes.drink ? selectedDishes.drink.keyword : '';
    }
});