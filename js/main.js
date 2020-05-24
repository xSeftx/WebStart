// document.addEventListener("DOMContentLoaded", function(event) {
//     const modal = document.querySelector('.modal');
//     const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//     const closeBtn = document.querySelector('.modal__close');
//     const switchModal = () => {
//         modal.classList.toggle('modal--visible');
//     }
//     modalBtn.forEach(element => {
//         element.addEventListener('click', switchModal);         
       
//     });
//     closeBtn.addEventListener('click', switchModal);

//     document.ddEventListener('click', function(e) {
//         if(e.target == modal) {
//             modal.classList.toggle('modal--visible')
//         }
//     })
//     document.addEventListener('keyup', function(e) {
//         if(e.keyCode === 27) {
//             modal.classList.toggle('modal--visible')
//         }
//     })
    
    
// });


$(document).ready(function (){
   var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
    modalBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    });

    $(modal).on('click', function(e) {
        if(e.target == this) {
            modal.toggleClass('modal--visible')
        }
    })
    
    	
    $(document).on('keyup', function(e) {
        if(e.keyCode === 27) {
            modal.removeClass('modal--visible')
        }
    })
   
    

    $(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 100) {
                $('#scroll_top').show();    
            } else {
                $('#scroll_top').hide();    
            }    
        });    
        $('#scroll_top').click(function(){
            $('html, body').animate({scrollTop: 0}, 600);    
            return false;                
        });    
    });

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 29 + bullets.width() + 18)
    bullets.css('left', prev.width() + 29)
    

    
    var wow = new WOW({
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
        }
      );
    wow.init();   
    
     // Валидация формы
    $('.modal__form',).validate({
        errorClass: "invalid",
        rules: {
          // строчное правило
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15              
          },
          userPhone: "required",
          // правило-объект
          userEmail: {
            required: true,
            email: true
          }
        },  // сообщения
        messages: {
            userName: {
                required: "Пожалуйста, укажите ваше имя",
                minlength: "Имя не короче 2 символов и не больше 15",
                maxlength: "Имя не короче 2 символов и не больше 15"
            },
            userPhone: "Пожайлуста, укажите ваш номер телефона",
            userEmail: {
              required: "Нам нужен ваш адрес электронной почты, чтобы связаться с вами",
              email: "Ваш адрес электронной почты должен быть в формате name@mail.ru"
            }
        }
        
    });
    $('.footer__form',).validate({
        errorClass: "invalid",
        rules: {
          // строчное правило
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15              
          },
          userPhone: {
              required: true,
              minlength: 10,
          },
          // правило-объект
          userQuestion: "required" 
            
          
        },  // сообщения
        messages: {
            userName: {
                required: "Пожалуйста, укажите ваше имя",
                minlength: "Имя не короче 2 символов и не больше 15",
                maxlength: "Имя не короче 2 символов и не больше 15"
            },
            userPhone: {
                required: "Пожайлуста, укажите ваш номер телефона",
                minlength: "Укажите номер телефона в формате +7(000) 000-00-00"
            },
            userQuestion: "Задайте свой вопрос"
        }
        
    });
    $('.control__form',).validate({
        errorClass: "invalid",
        rules: {
          // строчное правило
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15              
          },
          userPhone: "required",
          // правило-объект
          userEmail: {
            required: true,
            email: true
          }
        },  // сообщения
        messages: {
            userName: {
                required: "Пожалуйста, укажите ваше имя",
                minlength: "Имя не короче 2 символов и не больше 15",
                maxlength: "Имя не короче 2 символов и не больше 15"
            },
            userPhone: "Укажите ваш номер телефона",
            
        }
        
    });

    ///маска для телефона

    $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (__) __-__-___"});
    
    //создание yandex карты
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [46.358603, 48.037109],
                zoom: 13
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Наш офис',
                balloonContent: 'Режим работы с 9:00 до 20:00'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/marker.png',
                // Размеры метки.
                iconImageSize: [32, 32],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });
    
        myMap.geoObjects
            .add(myPlacemark);
    });
});

