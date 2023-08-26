const countruesBtns = document.querySelector('.reproductions__btns'),
cardsParent = document.querySelector('.reproductions__cards');

const cardsInfo = {
    'france': [
        ['./img/reproductions/france/1.jpg', 
        'Марсель Руссо', 
        'Охота Амура', 
        'Холст, масло (50х80)',
        '14 500 руб'],
        ['./img/reproductions/france/2.jpg', 
        'Анри Селин', 
        'Дама с собачкой', 
        'Акрил, бумага (50х80)',
        '16 500 руб'],
        ['./img/reproductions/france/3.jpg', 
        'Франсуа Дюпон', 
        'Процедура', 
        'Цветная литография (40х60)',
        '20 000 руб'],
        ['./img/reproductions/france/4.jpg', 
        'Луи Детуш', 
        'Роза', 
        'Бумага, акрил (50х80)',
        '12 000 руб'],
        ['./img/reproductions/france/5.jpg', 
        'Франсуа Дюпон', 
        'Птичья трапеза', 
        'Цветная литография (40х60)',
        '22 500 руб'],
        ['./img/reproductions/france/6.jpg', 
        'Пьер Моранж', 
        'Пейзаж с рыбой', 
        'Цветная литография (40х60)',
        '20 000 руб'],
    ],
    'germany': [
        ['./img/reproductions/germany/1.jpg', 
        'Курт Вернер', 
        'Над городом', 
        'Цветная литография (40х60)',
        '16 000 руб'],
        ['./img/reproductions/germany/2.jpg', 
        'Макс Рихтер', 
        'Птенцы', 
        'Холст, масло (50х80)',
        '14 500 руб'],
        ['./img/reproductions/germany/3.jpg', 
        'Мартин Майер', 
        'Среди листьев', 
        'Цветная литография (40х60)',
        '20 000 руб'],
        ['./img/reproductions/germany/4.jpg', 
        'Герман Беккер', 
        'Яркая птица', 
        'Цветная литография (40х60)',
        '13 000 руб'],
        ['./img/reproductions/germany/5.jpg', 
        'Вульф Бауэр', 
        'Дятлы', 
        'Бумага, акрил (50х80)',
        '20 000 руб'],
        ['./img/reproductions/germany/6.jpg', 
        'Вальтер Хартманн', 
        'Большие воды', 
        'Бумага, акрил (50х80)',
        '23 000 руб'],
    ],
    'england': [
        ['./img/reproductions/england/1.jpg', 
        'Пол Смит', 
        'Дикий зверь', 
        'Акварель, бумага (50х80)',
        '19 500 руб'],
        ['./img/reproductions/england/2.jpg', 
        'Джон Уайт', 
        'Скалистый берег', 
        'Цветная литография (40х60)',
        '17 500 руб'],
        ['./img/reproductions/england/3.jpg', 
        'Джим Уотсон', 
        'Река и горы', 
        'Акварель, бумага (50х80)',
        '20 500 руб'],
        ['./img/reproductions/england/4.jpg', 
        'Юджин Зиллион', 
        'Белый попугай', 
        'Цветная литография (40х60)',
        '15 500 руб'],
        ['./img/reproductions/england/5.jpg', 
        'Эрик Гиллман', 
        'Ночная рыба', 
        'Бумага, акрил (50х80)',
        '12 500 руб'],
        ['./img/reproductions/england/6.jpg', 
        'Альфред Барр', 
        'Рыжий кот', 
        'Цветная литография (40х60) ',
        '21 000 руб'],
    ],
}

function btnTriggerCards(event) {
    colorButtons(event);
    renderCardsByBtn(event.target.innerText);
}

function renderCards(cardsInfo) {
    cardsParent.innerHTML = '';
    cardsInfo.forEach(cardInfo => {
        new Card(...cardInfo).render(cardsParent);
    })
}

function renderCardsByBtn(country) {
    switch(country) {
        case 'Франция': {
            renderCards(cardsInfo['france']);
            break;
        }
        case 'Германия': {
            renderCards(cardsInfo['germany']);
            break;
        }
        case 'Англия': {
            renderCards(cardsInfo['england']);
            break;
        }
    }
}

function colorButtons(event) {
    if (event.target.tagName == 'BUTTON') {
        [...countruesBtns.children].forEach(element => {
            element.classList.remove('reproductions__btn--active');
        });
        event.target.classList.add('reproductions__btn--active');
        console.log(event.target.innerText);
    }
}

class Card {
    constructor(src, author, name, desc, price) {
        this.src = src;
        this.author = author;
        this.name = name;
        this.desc = desc;
        this.price = price;
    }

    render(parent) {
        const code = document.createElement('div');
        code.classList.add('reproductions__card');
        code.innerHTML = 
        `
        <img src="${this.src}" alt="" class="card__img">
        <div class="card__text">
            <div class="card__author">${this.author}</div>
            <div class="card__name">${this.name}</div>
            <div class="card__desc">${this.desc}</div>
            <div class="card__price">${this.price}</div>
        </div>
        <button class="card__btn button">В корзину</button>
        `
        parent.append(code);
    }
}

countruesBtns.addEventListener('click', e => btnTriggerCards(e));

renderCards(cardsInfo['france']);