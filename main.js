function hover(element) {
    c = document.getElementsByClassName('menu_label');
    d = document.getElementsByClassName('submenu_label');
    if (element.classList.contains('selected')) {
        //pass
    } else if (element.classList.contains('extended')) {
        for (el of c) {
            el.classList.remove('selected');
        }
        element.classList.add('selected');
    } else {
        for (el of c) {
            el.classList.remove('selected');
        }
        for (el of d) {
            el.classList.remove('subSelected');
        }
        element.classList.add('selected');
    }
}

function subHover(element) {
    c = document.getElementsByClassName('submenu_label');
    d = document.getElementsByClassName('menu_label');
    if (element.classList.contains('subSelected')) {
        //pass
    } else {
        for (el of c) {
            el.classList.remove('subSelected');
        }
        for (el of d) {
            el.classList.remove('selected');
        }
        element.classList.add('subSelected');
    }
}

function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}

//109, 272, 109
function accordion(element) {
    var x = element.parentNode.parentNode.id;
    var i = x.slice(0, 5) + 'sub' + x.slice(5)
    $('#' + i).slideToggle(function () {
    });
    if (!element.classList.contains('extended')) {
        switch (i) {
            case 'menu_subitem0':
                $('#frame2').animate({
                    top: "+=109px",
                });
                break;
            case 'menu_subitem1':
                $('#frame2').animate({
                    top: "+=272px",
                });
                break;
            case 'menu_subitem2':
                $('#frame2').animate({
                    top: "+=109px",
                });
                break;
        };
        element.classList.remove('selected');
        element.classList.add('extended');
        document.documentElement.style.setProperty('--extended_bg', "1");
        document.getElementById(i).firstElementChild.querySelector("a").classList.add('subSelected');
        element.getElementsByTagName('svg')[0].classList.add('reversed');
    } else {
        switch (i) {
            case 'menu_subitem0':
                $('#frame2').animate({
                    top: "-=109px",
                });
                break;
            case 'menu_subitem1':
                $('#frame2').animate({
                    top: "-=272px",
                });
                break;
            case 'menu_subitem2':
                $('#frame2').animate({
                    top: "-=109px",
                });
                break;
        };
        document.documentElement.style.setProperty('--extended_bg', "0")
        element.classList.remove('extended');
        element.classList.add('selected');
        element.getElementsByTagName('svg')[0].classList.remove('reversed')
    }
}

function carousel() {
    const slider = document.querySelector(".carousel_items");
    const slides = document.querySelectorAll(".carousel_item");
    const button = document.querySelectorAll(".button");

    let current = 0;
    let prev = current > 0 ? current - 1 : slides.length - 1;
    let prev1 = prev - 1;
    let prev2 = prev1 - 1;
    let prev3 = prev2 - 1;
    let next = current < slides.length - 1 ? current + 1 : 0;
    let next1 = next + 1;
    let next2 = next + 2;
    let next3 = next + 3;
    let next4 = next + 4;

    const update = () => {
        slides.forEach(it => {
            it.classList.remove("active");
            it.classList.remove("prev", "one");
            it.classList.remove("prev", "two");
            it.classList.remove("prev", "three");
            it.classList.remove("prev");
            it.classList.remove("next");
            it.classList.remove("next", "one");
            it.classList.remove("next", "two");
            it.classList.remove("next", "three");
            it.classList.remove("next", "four");
        });

        slides[current].classList.add("active");
        slides[prev1].classList.add("prev", "one");
        slides[prev2].classList.add("prev", "two");
        slides[prev3].classList.add("prev", "three");
        slides[prev].classList.add("prev");
        slides[next].classList.add("next");
        slides[next1].classList.add("next", "one");
        slides[next2].classList.add("next", "two");
        slides[next3].classList.add("next", "three");
        slides[next4].classList.add("next", "four");
    }

    const moveLeft = document.getElementsByClassName('left');
    console.log(moveLeft)
    const moveRight = document.getElementsByClassName(".next");
    console.log(moveRight)

    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
    };

    for (let i = 0; i < moveLeft.length; i++) {
        moveLeft[i].addEventListener("click", () => gotoNext());
    }


    const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
    const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

    const gotoNum = number => {
        current = number;
        prev = current > 0 ? current - 1 : slides.length - 1;
        prev1 = prev > 0 ? prev - 1 : slides.length - 1;
        prev2 = prev1 > 0 ? prev1 - 1 : slides.length - 1;
        prev3 = prev2 > 0 ? prev2 - 1 : slides.length - 1;
        next = current < slides.length - 1 ? current + 1 : 0;
        next1 = next < slides.length - 1 ? next + 1 : 0;
        next2 = next1 < slides.length - 1 ? next1 + 1 : 0;
        next3 = next2 < slides.length - 1 ? next2 + 1 : 0;
        next4 = next3 < slides.length - 1 ? next3 + 1 : 0;

        update();
    }

    update();
}




$(document).ready(function () {
    var $menuItems = $(".menu_item");
    var time = 300;
    $menuItems.each(function (idx, li) {
        setTimeout(function () {
            $("#menu_item" + idx).css("opacity", "100")
        }, time);
        time += 50;
    });

    carousel();
});

//gradient transition