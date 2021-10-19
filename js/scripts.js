/*!
    * Start Bootstrap - SB Admin Pro v1.3.0 (https://shop.startbootstrap.com/product/sb-admin-pro)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under SEE_LICENSE (https://github.com/StartBootstrap/sb-admin-pro/blob/master/LICENSE)
    */


var slideImg = document.getElementById("slidingImg");
var images = new Array(
    "/assets/img/1.jpg",
    "/assets/img/2.jpg",
    "/assets/img/3.jpg"
);

var len = images.length;
var i = 0;
function slider(){
    if(i > len-1){
        i = 0;
    }
    setTimeout('slider()', 10000);
    slideImg.src = images[i];
    i++;
}


var video1 = document.getElementById('video-admin1');

function on() {
    document.getElementById("overlay").style.display = "block";
    video1.play();
}
    
function off() {
    document.getElementById("overlay").style.display = "none";
    video1.pause();
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


    $(window).scroll(function(){
        $('nav').toggleClass('scrolled',$(this).scrollTop()>50);
    });

    var typed3 = new Typed('.typing-text', {
        strings: ['Frontend Developer.',
                  'UI/UX Designer.',
                  'UI/UX Researcher.',
                  'Graphic Designer.'
                  ],
        typeSpeed: 30,
        backSpeed: 30,
        smartBackspace: true, // this is a default
        loop: true
    });


function changeAgentArch(){
    var btnInfoArch_1 = document.getElementById("btn-infoArch-1");
    var btnInfoArch_2 = document.getElementById("btn-infoArch-2");
    var imgInfoArch = document.getElementById("info-arch-img");
    imgInfoArch.src = "/assets/img/agent-info-arch.svg";
    btnInfoArch_1.classList.add("text-warning");
    btnInfoArch_2.classList.remove("text-warning");
}

function changeAdminArch(){
    var btnInfoArch_1 = document.getElementById("btn-infoArch-1");
    var btnInfoArch_2 = document.getElementById("btn-infoArch-2");
    var imgInfoArch = document.getElementById("info-arch-img");
    imgInfoArch.src = "/assets/img/admin-info-arch.svg";
    btnInfoArch_2.classList.add("text-warning");
    btnInfoArch_1.classList.remove("text-warning");
}

    
    (function ($) {
    "use strict";

    // Enable Bootstrap tooltips via data-attributes globally
    $('[data-toggle="tooltip"]').tooltip();

    // Enable Bootstrap popovers via data-attributes globally
    $('[data-toggle="popover"]').popover();

    $(".popover-dismiss").popover({
        trigger: "focus"
    });

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $("#layoutSidenav_nav .sidenav a.nav-link").each(function () {
        if (this.href === path) {
            $(this).addClass("active");
        }
    });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("sidenav-toggled");
    });

    // Activate Feather icons
    feather.replace();

    // Activate Bootstrap scrollspy for the sticky nav component
    $("body").scrollspy({
        target: "#stickyNav",
        offset: 82,
    });

    // Scrolls to an offset anchor when a sticky nav link is clicked
    $('.nav-sticky a.nav-link[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - 81
                    },
                    200
                );
                return false;
            }
        }
    });

    // Click to collapse responsive sidebar
    $("#layoutSidenav_content").click(function () {
        const BOOTSTRAP_LG_WIDTH = 992;
        if (window.innerWidth >= 992) {
            return;
        }
        if ($("body").hasClass("sidenav-toggled")) {
            $("body").toggleClass("sidenav-toggled");
        }
    });

     // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

    // Init sidebar
    let activatedPath = window.location.pathname.match(/([\w-]+\.html)/, '$1');

    if (activatedPath) {
        activatedPath = activatedPath[0];
    } else {
        activatedPath = 'index.html';
    }

    let targetAnchor = $('[href="' + activatedPath + '"]');
    let collapseAncestors = targetAnchor.parents('.collapse');

    targetAnchor.addClass('active');

    collapseAncestors.each(function () {
        $(this).addClass('show');
        $('[data-target="#' + this.id + '"]').removeClass('collapsed');

    })

})(jQuery);
