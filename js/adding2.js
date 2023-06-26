var favoritIcon = document.querySelectorAll('.favorit_icon');
var favorit = document.querySelector('.favorit');
var close2 = document.querySelector('.favorit__close');
var count01 = document.querySelector('.favorit__loc21 span');
var count02 = document.querySelector('.favorit__loc22 span');
var buy2 = document.querySelector('.favorit__btn');
var items12 = document.querySelector('.favorit__items');

favoritIcon.forEach(item => {
   item.onclick = () => {
      favorit.classList.add('active');
      body.classList.add('active');
   };
});

close2.onclick = () => {
   favorit.classList.remove('active');
   body.classList.remove('active');
};

// next

var btn_all2 = document.querySelectorAll('.like_click');
var block012 = document.querySelector('.favorit__items');

btn_all2.forEach(item =>{
   item.addEventListener('click', (e)=> {
      count01.classList.add('active');
      count02.classList.add('active');
      buy2.classList.add('active');

		var parent = e.target.closest('.sale__item');
      var block = document.createElement('div');
      block.classList.add('favorit__item');

      var img = document.createElement('img');
      img.classList.add('item3__img');
      img.setAttribute('src',parent.querySelector('.sale__item_img').currentSrc);

      var title = document.createElement('p');
      title.classList.add('item3__title');
      title.innerText = parent.querySelector('.sale__item_title').innerText;
      var price = document.createElement('p');
      price.classList.add('item3__price');
      price.innerText = parent.querySelector('.sale__item_price1 b').innerText.replaceAll(' ', '');

      
      var btn = document.createElement('button');
      btn.classList.add('item3__del');
      btn.textContent = 'del';

      var btn_add = document.createElement('button');
      btn_add.classList.add('btn_add');
      btn_add.classList.add('basket__put');
      btn_add.textContent = 'Add';

      block012.appendChild(block);
      block.appendChild(img);
      block.appendChild(title);
      block.appendChild(price);
      block.appendChild(btn);
      
      updatetotal2();
      
      btn.addEventListener('click', ()=> {
         block012.removeChild(block);
         block.removeChild(img);
         block.removeChild(title);
         block.removeChild(price);
         block.removeChild(btn);
         updatetotal2();
      });

      
      buy2.onclick = () => {
         items12.innerHTML = '';
         count01.innerHTML = '';
         count01.classList.remove('active');
         count02.innerHTML = '';
         count02.classList.remove('active');
         document.getElementsByClassName('favorit__result')[0].innerText = '$' + 0;
         buy2.classList.remove('active');
         body.classList.remove('active');
         favorit.classList.remove('active');
      };
      
      close01.onclick = () => {
         basket.classList.remove('active');
      };
   });
});

function updatetotal2(){
   var cartContent = document.getElementsByClassName('favorit__items')[0];
   var carboxes = cartContent.getElementsByClassName('favorit__item');
   count01.innerHTML = carboxes.length;
   count02.innerHTML = carboxes.length;
   if (carboxes.length == 0) {
      count01.innerHTML = '';
      count01.classList.remove('active');
      count02.innerHTML = '';
      count02.classList.remove('active');
      buy2.classList.remove('active');
      document.getElementsByClassName('favorit__result')[0].innerText = '₽' + 0;
   }
   var total = 0;
   for(var i = 0; i < carboxes.length; i++){
      var cartBox = carboxes[i];
      var priceElem = cartBox.getElementsByClassName('item3__price')[0];
      var price = parseFloat(priceElem.innerText.replace('₽', ' '));
      total = total + price;
   }
      // if price has some cents

      document.getElementsByClassName('favorit__result')[0].innerText = total + '₽';
}