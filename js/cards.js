const product = [
   {
      id: 0,
      image: '../img/img31.jpg',
      title: 'Burger Dreams',
      price: 9,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      btn: 'Add to card',
      data: 'burger',
   },
   {
      id: 1,
      image: '../img/img32.jpg',
      title: 'Burger Waldo',
      price: 10,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      btn: 'Add to card',
      data: 'burger',
   },
   {
      id: 2,
      image: '../img/img33.jpg',
      title: 'Burger Cali',
      price: 8,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      btn: 'Add to card',
      data: 'burger',
   },
   {
      id: 3,
      image: '../img/img34.jpg',
      title: 'Burger Bacon Buddy',
      price: 9,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      btn: 'Add to card',
      data: 'burger',
   },
   {
      id: 4,
      image: '../img/img35.jpg',
      title: 'Burger Spicy',
      price: 9,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      btn: 'Add to card',
      data: 'burger',
   },
   {
      id: 5,
      image: '../img/img36.jpg',
      title: 'Burger Classic',
      price: 8,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      btn: 'Add to card',
      data: 'burger',
   },
   {
      id: 6,
      image: '../img/img31.jpg',
      title: 'Burger Classic',
      price: 8,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      btn: 'Add to card',
      data: 'sides',
   },
   {
      id: 7,
      image: '../img/img32.jpg',
      title: 'Burger Classic',
      price: 8,
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      btn: 'Add to card',
      data: 'drinks',
   },
];


const categories = [... new Set(product.map((item) => {return item;}))];
let i = 0;
document.getElementById('brows__items').innerHTML = categories.map((item)=>{
   var {image, title, price, text, data} = item;
   return (
      `
      <div class="brows__item item2" data-name='${data}'>
         <img alt="icon" class="item2__img" src='${image}'>
         <div class="item2__block">
            <div class="item2__up">
               <p class="item2__title">${title}</p>
               <p class="item2__price">$ ${price} .00</p>
            </div>
            <p class="item2__text">${text}</p>
            <div class="item2__down">
               <input type="number" class="item2__count" min="1" max="99" value="1">`+
               "<button class='item2__btn' onclick='addtocard("+(i++)+")'>Add to card</button>"+`
            </div>
         </div>
      </div>
      `
      );
}).join('');



var cart = [];

function addtocard(a){
   cart.push({...categories[a]});
   displayCard();
}
function delElem(a) {
   cart.splice(a, 1);
   displayCard();
}

function displayCard(a){
   let j = 0, total = 0;
   document.getElementById('count').innerHTML = cart.length;
   if(cart.length == 0) {
      document.querySelector('.basket').classList.remove('active');
      document.getElementById('my_item').innerHTML = 'Your card is empty';
      document.getElementById('total').innerHTML = "$ "+0+" .00";
   } else {
      document.getElementById('my_item').innerHTML = cart.map((items)=>{
         document.querySelector('.basket').classList.add('active');
         var {image, title, price} = items;
         total = total + price;
         document.getElementById('total').innerHTML = "$ "+ total +" .00";
         return (
            `
            <div class="cart__item">
               <img alt="icon" class="cart__img" src=${image}>
               <p class="cart__title">${title}</p>
               <p class="cart__price">$ ${price} .00</p>
               <p class="cart__text"></p>` +
               "<button class='cart__btn' onclick='delElem("+ (j++) +")'>DELETE</button>"+`
            </div>
            `)
      }).join('');
   }
}

// next 

$(function(){
   $('a[href^="#"]').click(function(){
   var target = $(this).attr('href');
   $('html, body').animate({scrollTop: $(target).offset().top}, 800);//800 - длительность скроллинга в мс
   return false;
   });
   });

// next

function consoleBG() {
   if ($(window).scrollTop() == 0) {
     $('.header').removeClass('active');
   } else {
      $('.header').addClass('active');
   }
 }
 consoleBG();
 
 $(window).scroll(function() {
   consoleBG();
 });

