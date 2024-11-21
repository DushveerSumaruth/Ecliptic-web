const burgerBtn = document.querySelector('.burger-btn');
const burgerOpenImg = document.querySelector('.open-img');
const burgerCloseImg =  document.querySelector('.close-img');

const menuArea = document.querySelector('.resize-mobile-view');



burgerBtn.addEventListener('click', function() {
  if(menuArea.classList.toggle('revealed-element')) {
    burgerOpenImg.style.display = 'none';
    burgerCloseImg.style.display = 'block';
  } else {
    burgerOpenImg.style.display = 'block';
    burgerCloseImg.style.display = 'none';
  }
});

// +button
const plusButton = document.querySelector('.tech-speci-style');
const technologiesSection = document.querySelector('.technologies-section');
let lines = document.querySelectorAll('.lines');
let specialText = document.querySelector('.special-text-deco');



technologiesSection.style.display = 'none';

for (var i=0; i < lines.length; i++) {
  lines[i].style.display = 'none';
}

// if (screen.width != 675 || screen.width < 675 ) {
//   specialText.style.bottom = '-622px';
// }

plusButton.addEventListener('click', function() {
  plusButton.style.animation = 'smoothUp 0.4s'
  setTimeout(() => {

    if (screen.width < 675) {
      specialText.style.bottom = '-1030px';
    }

    if (screen.width < 532) {
      specialText.style.bottom = '-1070px';
    }

    if (screen.width < 455) {
      specialText.style.bottom = '-1088px';
    }
  
    if(technologiesSection.style.display = 'block') {
      for (var i=0; i < lines.length; i++) {
        lines[i].style.display = 'block';
      }
    };
}, 300);

});
