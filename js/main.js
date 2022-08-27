document.getElementsByClassName('menu-open')[0].onclick = function () {
    let element = document.getElementsByClassName('menu');
    element[0].classList.toggle('show-menu');
}