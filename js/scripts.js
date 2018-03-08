// menu buttons
const openMenu = document.getElementById('open-menu');

const closeMenu = document.getElementById('close-menu');

// menu
const leftMenu = document.getElementById('left-menu');

// menu links
const links = document.querySelectorAll('.left-menu a');

// close menu after click one of nav links
Array.from(links).forEach(function (item) {
    item.addEventListener('click', closeSlideMenu);
});

// listen for click to show side menu
openMenu.addEventListener('click', openSlideMenu);

// listen for click to hide side menu
closeMenu.addEventListener('click', closeSlideMenu);


function openSlideMenu() {
    leftMenu.style.width = '250px';
    //  document.getElementById('slide-main').style.marginLeft = '250px';
}

function closeSlideMenu() {
    leftMenu.style.width = '0';
    //    document.getElementById('slide-main').style.marginLeft = '0';
}

// smooth scroll 
$('#link-00').click(function () {
    $.scrollTo($('#start'), 1000);
});

$('#link-01').click(function () {
    $.scrollTo($('#about-me'), 1000);
});

$('#link-02').click(function () {
    $.scrollTo($('#technology'), 1000);
});

$('#link-03').click(function () {
    $.scrollTo($('#portfolio'), 1000);
});

$('.btn-top').click(function () {
    $.scrollTo($('#start'), 1000);
});

// show/hide got to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.btn-top').show();
    } else {
        $('.btn-top').hide();
    }
});


// modal
const myModal = document.querySelector('#mySimpleModal');

// open modal button
const openModalBtn = document.querySelector('#contact-btn');

// close modal button
const closeModalBtn = document.querySelectorAll('.closeBtn');

// listen for click to open modal
openModalBtn.addEventListener('click', openModal);

// listen for click to close modal
closeModalBtn[0].addEventListener('click', closeModal);

// listen for click outside modal to close modal 
window.addEventListener('click', closeModalOutside);

function openModal() {
    myModal.style.display = 'block';
}

function closeModal() {
    myModal.style.display = 'none';
}

function closeModalOutside(e) {
    if (e.target == myModal) {
        myModal.style.display = 'none';
    }
}




