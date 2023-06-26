var productContainers2 = document.querySelectorAll('.sales__items');
var item201 = document.querySelectorAll('.sales__item')[0];
var preBtn2 = document.querySelector('.arrow_left');
var nextBtn3 = document.querySelector('.arrow_right');


productContainers2.forEach((item, i) => {
   let containerWidth = item201.clientWidth + 30;

   nextBtn3.addEventListener('click', () => {
      item.scrollLeft += containerWidth;
      document.querySelector('.arrow_left').classList.add('active');
   });
   preBtn2.addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
   });
   
});