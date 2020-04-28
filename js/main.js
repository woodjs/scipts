window.onload = () => {
  let burger = document.querySelector('.menu-burger');

  burger.addEventListener('click', function () {
    this.classList.toggle('menu-burger__active');
    let menu_block = document.querySelector('.menu-burger-list');
    //  menu_list = document.querySelector('.menu-list');
    if (this.classList.contains('menu-burger__active')) {
      menu_block.classList.add('popup__active');
    } else {
      menu_block.classList.remove('popup__active');
    }
  });
}