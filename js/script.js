var width = jQuery(window).width();


function getScrollBar() {
    var outer;
    var widthNoScroll;
    var inner;
    var widthWithScroll;
    outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar';
    document.body.appendChild(outer);
    widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';
    inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);
    widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    return widthNoScroll - widthWithScroll;
}

function search() {
    $('.search-icon').on('click', function (event) {
        event.preventDefault();
        $('.search-section ').addClass('open');

        jQuery('html').css({
            'margin-right': getScrollBar,
            overflow: 'hidden'
        });
        //for mobile
        if ($('body').width() <= 1024) {
            $('body').addClass('overflow-hide');

        } 
        //for desktop
        else {
            $('body').addClass('overflow-hide');
            $('body').removeClass('overflow-show');
        }
        $('.search-section > form > input[type="search"]').focus();
    });

    $('.search-section, .search-section  button.close').on('click keyup', function (event) {
        if (event.target.className == 'close' || event.keyCode == '27') {
            jQuery('html').css({
                'margin-right': '',
                overflow: ''
            });
            $(this).removeClass('open');

            if ($('body').width() <= 1024) {
                // $('body').removeClass('overflow-hide');
                $('body').addClass('overflow-hide');
            } else {
                $('body').addClass('overflow-show');
                $('body').removeClass('overflow-hide');
            }
            //     $(window).resize(function(){     
            //         if ($('body').width() >= 768 ){
            //             $('body').css('overflow','inherit');
            //         }
            //  });
        }
    });

    $('form').submit(function (event) {
        event.preventDefault();
        return false;
    })
}

function burgermenu() {
    $('.mobile-menu').click(function () {
        $('.icon').toggleClass('rotate');
        $('.main-nav').css('padding', '10px 0');
        $('.logo').css('padding-left', '15px');
        $('.collapse').toggleClass('active-menu');

        if ($('body').width() <= 1024) {
            if ($('body').hasClass('overflow-hide')) {
                $('body').removeClass('overflow-hide');
            } else {
                $('body').removeClass('overflow-show');
                $('body').addClass('overflow-hide');
            }
        }
    })
};

function navigation() {
    $('ul.horizontal li').each(function () {
        $(this).mouseenter(function () {
            $(this).find('.dropdown-menu').addClass('hovered');
        }).mouseleave(function () {
            $(this).find('.dropdown-menu').removeClass('hovered');
        });

        $(this).focus(function (event) {
            var contain = ($(this).find('.dropdown-menu'));
            $(!this).find('.dropdown-menu').removeClass('hovered');
            $(contain).addClass('hovered');

        }).focusout(function () {
            // $(this).find('.dropdown-menu').removeClass('hovered');
        });
    })
    $('ul.horizontal li').hover(function () {
        $(this).find('.dropdown-menu').addClass('hovered');
    }, function () {
        $(this).find('.dropdown-menu').removeClass('hovered');
    })
};


function togglemenu() {
    $('.dropdown').click(function () {
        console.log('its workin');
        if ($('.dropdown-content1') != -1) {
            $(this).find('.dropdown-content1').toggleClass('open');
        }
    })
}


function loader() {
    setTimeout(function () {
        $(".loader").fadeOut('slow');
        $('body').addClass('overflow-show');
        jQuery('html').css({
            'margin-right': '',
            overflow: ''
        });
    }, 3000)
}


function navbar() {
    if ($('body').width() > 1024) {

        $('.dropbtn').focus( function () {
            console.log('its in dropbtn class');
            $(this).siblings('.dropdown-content1').addClass('focused');
          });
    
          $('.dropdown-content1 a').focus( function () {
            $(this).parents('.dropdown-content1').addClass('focused');

            $(this).addClass('focused_a');
                $(this).blur(function() {
                    $(this).removeClass('focused_a');
                })   
          });
          $('ul li a').focus(function() {
              $(this).addClass('focused_li');
            //   $(this).blur(function() {
            //       $(this).removeClass('focused_li');
            //   }):not(.closedTab)
            $(this).blur(function(){
                $('ul .list a').removeClass('focused_li');
            }) 
          })

    
          $('.dropdown-content1 li:last-child a').blur( function () {
            $(this).parents('.dropdown-content1').removeClass('focused');
            $('ul li a').removeClass('focused_li');
            // $(this).removeClass('focusedli');
          });
    }
}
$(document).ready(function () {
    getScrollBar();
    search();
    loader();
    burgermenu();
    togglemenu();
    navbar();
    console.log('its working');
    // navigation()
});

// $(window).load(function() {
//     setTimeout(function() {
//         $("#contentPost").show('fadeIn', {}, 500)
//     }, 2000);
// });