document.querySelector('.burger').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.header_menu').classList.toggle('active');
    document.querySelector('.main_body').classList.toggle('active');
}