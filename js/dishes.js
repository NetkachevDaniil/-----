// dishes.js - добавляем свойство kind к существующим блюдам и новые блюда
const dishes = [
    // Существующие блюда с добавлением свойства kind
    {
        keyword: 'borshch',
        name: 'Борщ с говядиной и сметаной',
        price: 360,
        category: 'soup',
        count: '390 г',
        image: 'https://images-foodtech.magnit.ru/Vi9c8sZ71xEowQmhXDoOgvjTq7fd8hIyJXtClBeqG6U/rs:fit:1600:1600/plain/s3:/img-dostavka/uf/14b/14b73e28e5a70eefa93fc17d11deb780/81a9b360c20c979f9200fd87a30894d5.jpeg@webp?text=Борщ',
        kind: 'meat'
    },
    {
        keyword: 'pumpkin-soup',
        name: 'Тыквенный суп-пюре с гренками',
        price: 330,
        category: 'soup',
        count: '320 г',
        image: 'https://tsx.x5static.net/i/800x800-fit/xdelivery/files/10/82/dc3b5ca033d6b00cf13399200cd4.jpg?text=Тыквенный+суп',
        kind: 'veg'
    },
    {
        keyword: 'tom-yam',
        name: 'Том Ям с креветками и кокосовым молоком',
        price: 390,
        category: 'soup',
        count: '420 г',
        image: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-41/318/658/271/113/20/100069649357b0.jpg?text=Том+Ям',
        kind: 'fish'
    },
    // Добавляем недостающие супы
    {
        keyword: 'mushroom-soup',
        name: 'Грибной суп-пюре',
        price: 185,
        category: 'soup',
        count: '330 г',
        image: 'https://via.placeholder.com/300x200?text=Грибной+суп',
        kind: 'veg'
    },
    {
        keyword: 'chicken-soup',
        name: 'Куриный суп',
        price: 330,
        category: 'soup',
        count: '350 г',
        image: 'https://via.placeholder.com/300x200?text=Куриный+суп',
        kind: 'meat'
    },
    {
        keyword: 'fish-soup',
        name: 'Уха по-фински',
        price: 270,
        category: 'soup',
        count: '330 г',
        image: 'https://via.placeholder.com/300x200?text=Уха',
        kind: 'fish'
    },

    // Главные блюда
    {
        keyword: 'salmon-steak',
        name: 'Стейк из лосося с овощами гриль',
        price: 690,
        category: 'main',
        count: '320 г',
        image: 'https://img.freepik.com/premium-photo/plate-grilled-trout-steak-asparagus-with-ingredients-isolated-white-background-top-view_106885-3535.jpg?text=Стейк+лосося',
        kind: 'fish'
    },
    {
        keyword: 'chicken-curry',
        name: 'Куриное карри с рисом басмати',
        price: 490,
        category: 'main',
        count: '360 г',
        image: 'https://image.parool.nl/218269372/width/2480/indiase-afhaalmaaltijden-voor-het-goede-doel-amsterdammers?text=Куриное+карри',
        kind: 'meat'
    },
    {
        keyword: 'truffle-pasta',
        name: 'Паста с трюфельным кремом',
        price: 420,
        category: 'main',
        count: '310 г',
        image: 'https://avatars.mds.yandex.net/get-mpic/11695357/2a0000018c3967ef07ded4da6b3f5034f676/orig?text=Паста+трюфельная',
        kind: 'veg'
    },
    // Добавляем недостающие главные блюда
    {
        keyword: 'beef-stroganoff',
        name: 'Бефстроганов с картофельным пюре',
        price: 450,
        category: 'main',
        count: '350 г',
        image: 'https://via.placeholder.com/300x200?text=Бефстроганов',
        kind: 'meat'
    },
    {
        keyword: 'fish-cutlet',
        name: 'Рыбные котлеты с овощами',
        price: 320,
        category: 'main',
        count: '300 г',
        image: 'https://via.placeholder.com/300x200?text=Рыбные+котлеты',
        kind: 'fish'
    },
    {
        keyword: 'vegetable-stew',
        name: 'Овощное рагу',
        price: 280,
        category: 'main',
        count: '320 г',
        image: 'https://via.placeholder.com/300x200?text=Овощное+рагу',
        kind: 'veg'
    },

    // Напитки
    {
        keyword: 'cranberry-juice',
        name: 'Клюквенный морс',
        price: 140,
        category: 'drink',
        count: '320 мл',
        image: 'https://img-api.yumapos.ru/image/crop/original/129ff95a-4a83-97ad-df65-bb7086ea835c.png?text=Морс',
        kind: 'cold'
    },
    {
        keyword: 'mint-lemonade',
        name: 'Мятный лимонад с лаймом',
        price: 180,
        category: 'drink',
        count: '320 мл',
        image: 'https://png.pngtree.com/png-clipart/20240327/original/pngtree-mojitos-summer-cocktail-png-image_14687452.png?text=Лимонад',
        kind: 'cold'
    },
    {
        keyword: 'herbal-tea',
        name: 'Травяной чай с имбирем и лимоном',
        price: 160,
        category: 'drink',
        count: '350 мл',
        image: 'https://cdn1.ozone.ru/s3/multimedia-v/6398884747.jpg?text=Чай',
        kind: 'hot'
    },
    // Добавляем недостающие напитки
    {
        keyword: 'orange-juice',
        name: 'Апельсиновый сок',
        price: 120,
        category: 'drink',
        count: '300 мл',
        image: 'https://via.placeholder.com/300x200?text=Апельсиновый+сок',
        kind: 'cold'
    },
    {
        keyword: 'green-tea',
        name: 'Зеленый чай',
        price: 100,
        category: 'drink',
        count: '300 мл',
        image: 'https://via.placeholder.com/300x200?text=Зеленый+чай',
        kind: 'hot'
    },
    {
        keyword: 'espresso',
        name: 'Эспрессо',
        price: 150,
        category: 'drink',
        count: '50 мл',
        image: 'https://via.placeholder.com/300x200?text=Эспрессо',
        kind: 'hot'
    },

    // Новые категории - Салаты и стартеры
    {
        keyword: 'caesar-salad',
        name: 'Салат Цезарь с курицей',
        price: 370,
        category: 'salad',
        count: '220 г',
        image: 'https://via.placeholder.com/300x200?text=Цезарь',
        kind: 'meat'
    },
    {
        keyword: 'tuna-salad',
        name: 'Салат с тунцом',
        price: 480,
        category: 'salad',
        count: '250 г',
        image: 'https://via.placeholder.com/300x200?text=Салат+с+тунцом',
        kind: 'fish'
    },
    {
        keyword: 'greek-salad',
        name: 'Греческий салат',
        price: 350,
        category: 'salad',
        count: '300 г',
        image: 'https://via.placeholder.com/300x200?text=Греческий+салат',
        kind: 'veg'
    },
    {
        keyword: 'caprese',
        name: 'Капрезе с моцареллой',
        price: 350,
        category: 'salad',
        count: '235 г',
        image: 'https://via.placeholder.com/300x200?text=Капрезе',
        kind: 'veg'
    },
    {
        keyword: 'vegetable-salad',
        name: 'Овощной салат',
        price: 280,
        category: 'salad',
        count: '250 г',
        image: 'https://via.placeholder.com/300x200?text=Овощной+салат',
        kind: 'veg'
    },
    {
        keyword: 'french-fries',
        name: 'Картофель фри',
        price: 260,
        category: 'salad',
        count: '235 г',
        image: 'https://via.placeholder.com/300x200?text=Картофель+фри',
        kind: 'veg'
    },

    // Новые категории - Десерты
    {
        keyword: 'cheesecake',
        name: 'Чизкейк Нью-Йорк',
        price: 240,
        category: 'dessert',
        count: '125 г',
        image: 'https://via.placeholder.com/300x200?text=Чизкейк',
        kind: 'small'
    },
    {
        keyword: 'tiramisu',
        name: 'Тирамису',
        price: 270,
        category: 'dessert',
        count: '150 г',
        image: 'https://via.placeholder.com/300x200?text=Тирамису',
        kind: 'small'
    },
    {
        keyword: 'chocolate-cake',
        name: 'Шоколадный торт',
        price: 270,
        category: 'dessert',
        count: '140 г',
        image: 'https://via.placeholder.com/300x200?text=Шоколадный+торт',
        kind: 'small'
    },
    {
        keyword: 'apple-pie',
        name: 'Яблочный пирог',
        price: 220,
        category: 'dessert',
        count: '200 г',
        image: 'https://via.placeholder.com/300x200?text=Яблочный+пирог',
        kind: 'medium'
    },
    {
        keyword: 'pancakes',
        name: 'Блинчики с вареньем',
        price: 180,
        category: 'dessert',
        count: '250 г',
        image: 'https://via.placeholder.com/300x200?text=Блинчики',
        kind: 'medium'
    },
    {
        keyword: 'ice-cream-platter',
        name: 'Мороженое ассорти',
        price: 410,
        category: 'dessert',
        count: '350 г',
        image: 'https://via.placeholder.com/300x200?text=Мороженое',
        kind: 'large'
    }
];
