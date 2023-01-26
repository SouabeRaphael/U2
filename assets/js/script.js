
let menu_burger = document.querySelector('.circle_menu_burger');
let full_screen_menu = document.querySelector('.menu_full_screen');
let line_menu_top = document.querySelector('.container_line_menu .line_top');
let line_menu_bottom = document.querySelector('.container_line_menu .line_bottom');

menu_burger.addEventListener('click', openMenu);

function openMenu(){
    full_screen_menu.classList.toggle('isOpen');
    line_menu_top.classList.toggle('isOpen');
    line_menu_bottom.classList.toggle('isOpen');
}