var burger = document.querySelector('.header__burger');
var list1 = document.querySelector('.header__list1');
var body = document.querySelector('body');
var blocks = document.querySelectorAll('.footer__block');
var title01 = document.querySelectorAll('.footer__title');

burger.onclick = () => {
   burger.classList.toggle('active');
   list1.classList.toggle('active');
   body.classList.toggle('active');
   blocks.forEach(item => {
      item.classList.remove('active');
   });
   title01.forEach(item => {
      item.classList.remove('active');
   });
};

// footer

title01.forEach(item => {
   item.addEventListener('click', (e)=> {
      item.classList.toggle('active');
      var parent = e.target.parentNode;
      parent.querySelector('.footer__block').classList.toggle('active');
   });
});

// smooth move

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      
      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
}