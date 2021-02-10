(function () {

  var menu = document.querySelector('.menu__sidebar'),
    mMenu = document.querySelector('.menu__mobile'),
    dropDown = document.querySelector('.is-dropdown'),
    mDropDown = document.querySelector('.menu__dropdown'),
    dropDownM = document.querySelector('.is-dropdown-m'),
    mDropDownM = document.querySelector('.menu__dropdown-m'),
    menuClose = document.querySelector('.menu__close'),
    menuCloseOverlay = document.querySelector('.mobile-menu-overlay');
  mMenu.addEventListener('click', function () {
    menu.classList.add('on');
    menuCloseOverlay.classList.add('on');
  });
  menuClose.addEventListener('click', function () {
    menu.classList.remove('on');
    menuCloseOverlay.classList.remove('on');
  });
  dropDown.addEventListener('click', function () {
    mDropDown.classList.toggle('show');
    dropDown.classList.toggle('open');
  });
  dropDownM.addEventListener('click', function () {
    mDropDownM.classList.toggle('show');
    dropDownM.classList.toggle('open')
    dropDown.classList.toggle('open')
    mDropDown.classList.toggle('show');
  });
  window.addEventListener('click', function (event) {
    if (event.target === menuCloseOverlay) {
      menu.classList.remove('on');
      menuCloseOverlay.classList.remove('on');
    }
  });


})();