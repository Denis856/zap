
var productContainers = [...document.querySelectorAll('.home__parts')];
var nxtBtn = [...document.querySelectorAll('.left')];
var preBtn = [...document.querySelectorAll('.right')];
var item20 = document.querySelectorAll('.home__part1')[0];

productContainers.forEach((item, i) => {
   let containerWidth = item20.clientWidth;


    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});