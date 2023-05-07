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

function metaHover(element) {
    m = document.getElementsByClassName('metadata_item');
    if (element.classList.contains('hovered')) {
        //pass
    } else {
        for (el of m) {
            el.classList.remove('hovered');
        }
        element.classList.add('hovered');
    }
}

function subHover(element) {
    m = document.getElementsByClassName('overmenu_label')
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
                    top: "+=16vh",
                });
                $('#domain').animate({
                    marginTop: "+=16vh",
                });
                break;
            case 'menu_subitem1':
                $('#frame2').animate({
                    top: "+=40vh",
                });
                $('#domain').animate({
                    marginTop: "+=40vh",
                });
                break;
            case 'menu_subitem2':
                $('#frame2').animate({
                    top: "+=13vh",
                });
                $('#domain').animate({
                    marginTop: "+=13vh",
                });
                break;
        };
        element.classList.remove('selected');
        element.classList.add('extended');
        document.getElementById(i).firstElementChild.querySelector("a").classList.add('subSelected');
        element.getElementsByTagName('svg')[0].classList.add('reversed');
    } else {
        switch (i) {
            case 'menu_subitem0':
                $('#frame2').animate({
                    top: "-=16vh",
                });
                $('#domain').animate({
                    marginTop: "-=16vh",
                });
                break;
            case 'menu_subitem1':
                $('#frame2').animate({
                    top: "-=40vh",
                });
                $('#domain').animate({
                    marginTop: "-=40vh",
                });
                break;
            case 'menu_subitem2':
                $('#frame2').animate({
                    top: "-=13vh",
                });
                $('#domain').animate({
                    marginTop: "-=13vh",
                });
                break;
        };
        element.classList.remove('extended');
        element.classList.add('selected');
        element.getElementsByTagName('svg')[0].classList.remove('reversed')
    }
}

function zoom() {
        var scale = 1,
        panning = false,
        pointX = 0,
        pointY = 0,
        start = { x: 0, y: 0 },
        zoom = document.getElementById("zoom");
        zoomcontainer = document.getElementById("zoomcontainer");

      function setTransform() {
        zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
      }

      zoomcontainer.onmousedown = function (e) {
        e.preventDefault();
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
        panning = true;
      }

      zoomcontainer.onmouseup = function (e) {
        panning = false;
      }

      zoomcontainer.onmousemove = function (e) {
        e.preventDefault();
        if (!panning) {
          return;
        }
        pointX = (e.clientX - start.x);
        pointY = (e.clientY - start.y);
        setTransform();
      }

        zoomcontainer.onwheel = function (e) {
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale,
          ys = (e.clientY - pointY) / scale,
          delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        (delta > 0) ? (scale < 5 ? scale *= 1.2 : scale) : (scale > 0.6 ? scale /= 1.2 : scale);
        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;

        setTransform();
      }

}

function zoom2() {
        var scale = 1,
        panning = false,
        pointX = 0,
        pointY = 0,
        start = { x: 0, y: 0 },
        zoom2 = document.getElementById("zoom2");
        zoomcontainer2 = document.getElementById("zoomcontainer2");

      function setTransform() {
        zoom2.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
      }

      zoomcontainer2.onmousedown = function (e) {
        e.preventDefault();
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
        panning = true;
      }

      zoomcontainer2.onmouseup = function (e) {
        panning = false;
      }

      zoomcontainer2.onmousemove = function (e) {
        e.preventDefault();
        if (!panning) {
          return;
        }
        pointX = (e.clientX - start.x);
        pointY = (e.clientY - start.y);
        setTransform();
      }

      zoomcontainer2.onwheel = function (e) {
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale,
          ys = (e.clientY - pointY) / scale,
          delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        (delta > 0) ? (scale < 5 ? scale *= 1.2 : scale) : (scale > 0.6 ? scale /= 1.2 : scale);
        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;

        setTransform();
      }
}

function zoom3() {
        var scale = 1,
        panning = false,
        pointX = 0,
        pointY = 0,
        start = { x: 0, y: 0 },
        zoom3 = document.getElementById("zoom3");
        zoomcontainer2 = document.getElementById("zoomcontainer3");

      function setTransform() {
        zoom3.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
      }

      zoomcontainer3.onmousedown = function (e) {
        e.preventDefault();
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
        panning = true;
      }

      zoomcontainer3.onmouseup = function (e) {
        panning = false;
      }

      zoomcontainer3.onmousemove = function (e) {
        e.preventDefault();
        if (!panning) {
          return;
        }
        pointX = (e.clientX - start.x);
        pointY = (e.clientY - start.y);
        setTransform();
      }

      zoomcontainer3.onwheel = function (e) {
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale,
          ys = (e.clientY - pointY) / scale,
          delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        (delta > 0) ? (scale < 5 ? scale *= 1.2 : scale) : (scale > 0.6 ? scale /= 1.2 : scale);
        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;

        setTransform();
      }
}

function zoom4() {
        var scale = 1,
        panning = false,
        pointX = 0,
        pointY = 0,
        start = { x: 0, y: 0 },
        zoom4 = document.getElementById("zoom4");
        zoomcontainer4 = document.getElementById("zoomcontainer4");

      function setTransform() {
        zoom4.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
      }

      zoomcontainer4.onmousedown = function (e) {
        e.preventDefault();
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
        panning = true;
      }

      zoomcontainer4.onmouseup = function (e) {
        panning = false;
      }

      zoomcontainer4.onmousemove = function (e) {
        e.preventDefault();
        if (!panning) {
          return;
        }
        pointX = (e.clientX - start.x);
        pointY = (e.clientY - start.y);
        setTransform();
      }

      zoomcontainer4.onwheel = function (e) {
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale,
          ys = (e.clientY - pointY) / scale,
          delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        (delta > 0) ? (scale < 5 ? scale *= 1.2 : scale) : (scale > 0.6 ? scale /= 1.2 : scale);
        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;

        setTransform();
      }
}



function carousel() {

    const slider = document.querySelector(".carousel_items");
    const slides = document.querySelectorAll(".carousel_item");
    const button = document.querySelectorAll(".button");
    const infobox = document.querySelectorAll(".infobox");

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
        infobox.forEach(it => {
            it.classList.remove("active")
        });
        infobox[current].classList.add("active");
        //typeWriter(infobox[current].querySelector('span'))

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
    const moveRight = document.getElementsByClassName(".next");

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


function selectTab(){
    griditems1 = document.getElementsByClassName('gridtab1')
    griditems2 = document.getElementsByClassName('gridtab2')
    cmtab = document.getElementById('conceptualmaptab')
    ertab = document.getElementById('ermodeltab')
    erbut = document.getElementById('ermodelbutton')
    cmbut = document.getElementById('conceptualmapbutton')

    tmtab = document.getElementById('theoreticalmodeltab')
    eertab = document.getElementById('enhancedermodeltab')
    eerbut = document.getElementById('enhancederbutton')
    tmbut = document.getElementById('theoreticalmodelbutton')

    whoTab = document.getElementById('whoTab')
    whenTab = document.getElementById('whenTab')
    whereTab = document.getElementById('whereTab')
    whatTab = document.getElementById('whatTab')
    m = document.getElementsByClassName('metadata_item');
    metadataTabs = document.getElementsByClassName('metadataTable')
    whoTab.addEventListener("click", function (e) {
        Array.from(metadataTabs).forEach(metadataTab => metadataTab.classList.add('hidden'));
        Array.from(m).forEach(el => el.classList.remove('selected'));
        whoTab.classList.add('selected')
        document.getElementById('whoTable').classList.remove('hidden');
    });
    whenTab.addEventListener("click", function (e) {
        Array.from(metadataTabs).forEach(metadataTab => metadataTab.classList.add('hidden'));
        Array.from(m).forEach(el => el.classList.remove('selected'));
        whenTab.classList.add('selected')
        document.getElementById('whenTable').classList.remove('hidden');
    });
    whereTab.addEventListener("click", function (e) {
        Array.from(metadataTabs).forEach(metadataTab => metadataTab.classList.add('hidden'));
        Array.from(m).forEach(el => el.classList.remove('selected'));
        whereTab.classList.add('selected')
        document.getElementById('whereTable').classList.remove('hidden');
    });
    whatTab.addEventListener("click", function (e) {
        Array.from(metadataTabs).forEach(metadataTab => metadataTab.classList.add('hidden'));
        Array.from(m).forEach(el => el.classList.remove('selected'));
        whatTab.classList.add('selected')
        document.getElementById('whatTable').classList.remove('hidden');
    });

    erbut.addEventListener("click", function (e) {
        document.getElementById('ermodel').classList.remove('hidden');
        document.getElementById('conceptualmap').classList.add('hidden');
        Array.from(griditems1).forEach(griditem => griditem.classList.remove('active'));
        ertab.classList.add('active')
    });
    cmbut.addEventListener("click", function (e) {
        document.getElementById('conceptualmap').classList.remove('hidden')
        document.getElementById('ermodel').classList.add('hidden')
        Array.from(griditems1).forEach(griditem => griditem.classList.remove('active'));
        cmtab.classList.add('active')
    });
    cmtab.addEventListener("click", function (e) {
        document.getElementById('conceptualmap').classList.remove('hidden')
        document.getElementById('ermodel').classList.add('hidden')
    });
    ertab.addEventListener("click", function (e) {
        console.log('ff')
        document.getElementById('ermodel').classList.remove('hidden')
        document.getElementById('conceptualmap').classList.add('hidden')
    });

    document.getElementById('er_model_overitem').addEventListener("click", function (e) {
        $('.overmenuitems').children().removeClass('selected');
        $('#er_model_overitem').addClass('selected');
        document.getElementById('ermodel').classList.remove('hidden');
        document.getElementById('conceptualmap').classList.add('hidden');
        Array.from(griditems1).forEach(griditem => griditem.classList.remove('active'));
        ertab.classList.add('active');
    });
    document.getElementById('conceptual_map_er_model_overitem').addEventListener("click", function (e) {
        $('.overmenuitems').children().removeClass('selected');
        $('#conceptual_map_er_model_overitem').addClass('selected');
        document.getElementById('conceptualmap').classList.remove('hidden')
        document.getElementById('ermodel').classList.add('hidden')
        Array.from(griditems1).forEach(griditem => griditem.classList.remove('active'));
        cmtab.classList.add('active')
    });
    document.getElementById('theoretical_enhanced_overitem').addEventListener("click", function (e) {
        $('.overmenuitems').children().removeClass('selected');
        $('#theoretical_enhanced_overitem').addClass('selected');
        document.getElementById('enhancedermodel').classList.remove('hidden');
        document.getElementById('theoreticalmodel').classList.add('hidden');
        Array.from(griditems2).forEach(griditem => griditem.classList.remove('active'));
        tmtab.classList.add('active');
    });
    document.getElementById('enhanced_overitem').addEventListener("click", function (e) {
        $('.overmenuitems').children().removeClass('selected');
        $('#enhanced_overitem').addClass('selected');
        document.getElementById('enhancedermodel').classList.remove('hidden')
        document.getElementById('theoreticalmodel').classList.add('hidden')
        Array.from(griditems2).forEach(griditem => griditem.classList.remove('active'));
        eertab.classList.add('active')
    });

    eerbut.addEventListener("click", function (e) {
        document.getElementById('enhancedermodel').classList.remove('hidden');
        document.getElementById('theoreticalmodel').classList.add('hidden');
        Array.from(griditems2).forEach(griditem => griditem.classList.remove('active'));
        eertab.classList.add('active')
    });
    tmbut.addEventListener("click", function (e) {
        document.getElementById('theoreticalmodel').classList.remove('hidden')
        document.getElementById('enhancedermodel').classList.add('hidden')
        Array.from(griditems2).forEach(griditem => griditem.classList.remove('active'));
        tmtab.classList.add('active')
    });
    tmtab.addEventListener("click", function (e) {
        document.getElementById('theoreticalmodel').classList.remove('hidden')
        document.getElementById('enhancedermodel').classList.add('hidden')
    });
    eertab.addEventListener("click", function (e) {
        document.getElementById('enhancedermodel').classList.remove('hidden')
        document.getElementById('theoreticalmodel').classList.add('hidden')
    });

    for (let i = 0; i < griditems1.length; i++) {
        griditems1[i].addEventListener("click", function (e) { 
            Array.from(griditems1).forEach(griditem => griditem.classList.remove('active'));
            griditems1[i].classList.add('active')
        });
    }

    for (let i = 0; i < griditems2.length; i++) {
        griditems2[i].addEventListener("click", function (e) { 
            Array.from(griditems2).forEach(griditem => griditem.classList.remove('active'));
            griditems2[i].classList.add('active')
        });
    }
}

function csvTabs() {
    csvtabletabs = document.getElementsByClassName('csvtablestab');
    csvtables = document.getElementsByClassName('csvtable')
    Array.from(csvtabletabs).forEach(csvtabletab => csvtabletab.addEventListener('click', function (e) {
        Array.from(csvtabletabs).forEach(csvtable => csvtable.classList.remove('active'));
        csvtabletab.classList.add('active')
        table = csvtabletab.innerHTML.replace(' ', '_')
        Array.from(csvtables).forEach(csvtable => csvtable.classList.add('hidden'));
        document.getElementById(table).classList.remove('hidden');
    }))
}

function isInViewport() {
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop() + ($(window).height() - 500);
    $('section').each(function() {
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).outerHeight();
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        var sectionId = $(this).attr('id');
        $('.overmenuitems').children().removeClass('selected');
        $('#' + sectionId + '_overitem').addClass('selected');
      }
    });
  });
};

function toggleMenu() {
    document.querySelector('.overmenuicon').addEventListener('click', function () {
        $(".overmenuitems").slideToggle({direction: "down"});
    });
    $( ".overmenuicon" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(90deg)");
        $(this).css("height","8vh");
        $(this).css("width","8vh");
        $(this).css("opacity","1");
    } else {
        $(this).css("transform","" );
        $(this).css("height","7vh");
        $(this).css("width","7vh");
        $(this).css("opacity","0.7");
    }
});
}




$(document).ready(function () {
    $(window).scroll(function(e) {
    var s = $(window).scrollTop(),
        opacityVal = (s / 1000);
    $('.blurred').css('opacity', opacityVal);
    if (s > 1200) {
        $('.overmenuicon').css('visibility', 'visible')
        $('.overmenuicon').css('opacity', '0.7')
    } else {
        $('.overmenuicon').css('visibility', 'hidden')
        $('.overmenuicon').css('opacity', '0')
        if ($('.overmenuitems').is(':visible')) {
            $('.overmenuitems').hide()
            $('.overmenuicon').css("height","7vh");
            $('.overmenuicon').css("width","7vh");
            $('.overmenuicon').css("transform","");
            }
        }
});

    var $menuItems = $(".menu_item");
    var time = 300;
    $menuItems.each(function (idx, li) {
        setTimeout(function () {
            $("#menu_item" + idx).css("opacity", "100")
        }, time);
        time += 50;
    });

    carousel();
    zoom();
    zoom2();
    zoom3();
    zoom4();
    selectTab();
    csvTabs();
    toggleMenu();
    isInViewport();

});
