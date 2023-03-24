var burger = document.querySelector('.header__burger');
var list = document.querySelector('.header__list');

burger.addEventListener('click', ()=>{
   burger.classList.toggle('active');
   list.classList.toggle('active');
   document.querySelector('body').classList.toggle('active');
});

// next

var number = document.querySelectorAll('.brows__btn1');
var label = document.querySelector('.brows__label');

number.forEach(item =>{
   item.addEventListener('click', (e) =>{
    number.forEach(el=>{ 
      el.classList.remove('active');
   });
   item.classList.add('active');
});
});
