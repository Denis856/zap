var filterItem = document.querySelectorAll('.brows__block_up');
var filterImage = document.querySelectorAll('.brows__item');
var brown = document.querySelectorAll('.brows__btn1');

window.onload = () => { 
   filterItem.forEach(iten3 => {
      iten3.onclick = (selectedItem) => {
         if(selectedItem.target.classList.contains('brows__btn')) {
            let filterName = selectedItem.target.getAttribute('data-name'); 
            filterImage.forEach((image) => {
               let filterImages = image.getAttribute('data-name');
               if((filterImages == filterName) || filterName == 'all') {
                  image.classList.remove('hide');
                  image.classList.add('show');
               } else {
                  image.classList.add('hide');
                  image.classList.remove('show');
               }
            });
         }
      };
   });
};

