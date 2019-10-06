console.log('worked');

const food = {
    id: 2379,
    name: 'hot dog chiken',
    photoUrl: 'https://s82079.cdn.ngenix.net/Wyvkk6X2vsQ7jGr8c84MzfK1.png',
    contents: 'Куринная колбаска с травами, сладкий горячий соус, кетчуп, маринованный огурчик, лук и халапеньо',
    protein: '9.6 г',
    fats: '10.1 г',
    carbohydrates: '24.3 г',
    kilocalories: '226 ккал',
    weight: '124 г',
    price: '79 рублей',
    addToBasket: function () {
        return this.name + ' ' + ('в корзине');
    },
        
};

console.log(food.addToBasket());

const photoEl = document.getElementById('photo-1');
photoEl.src = food.photoUrl;

const nameEl = document.getElementById('hot-dog-chiken');
nameEl.textContent = food.name;

const contentsEl = document.getElementById('contents-1');
contentsEl.textContent = food.contents;

const priceEl = document.getElementById('price-1');
priceEl.textContent = food.price;

const food2 = {
    id: 2382,
    name: 'cheeseburger de luxe',
    photoUrl: 'https://s82079.cdn.ngenix.net/MXahUbKht6Q6D2wGRYrAz7nu.png',
    contents: 'Пряный горчичный соус, кетчуп, сочное филе в оригинальной панировке, лук, сыр Чеддер, огурцы на пшеничной булочке с кукурузной посыпкой, свежий салат и ломтики помидора',
    protein: '12.6 г',
    fats: '6.6 г',
    carbohydrates: '20.7 г',
    kilocalories: '193 ккал',
    weight: '226 г',
    price: '124 рубля',
    addToBasket: function ()  {
        return this.name + ' ' + ('в корзине');
    },
};

console.log(food2.addToBasket());

const photoEl2 = document.getElementById('photo-2');
photoEl2.src = food2.photoUrl;

const nameEl2 = document.getElementById('cheeseburger-de-luxe');
nameEl2.textContent = food2.name;

const contentsEl2 = document.getElementById('contents-2');
contentsEl2.textContent = food2.contents;

const priceEl2 = document.getElementById('price-2');
priceEl2.textContent = food2.price;