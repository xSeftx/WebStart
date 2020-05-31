
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
        errorElement: "modal",
        errorPlacement: function(even, types) {
            if ("checkbox" == types.attr("type")) {
                return types.next("label").append(even);
            } else {
                even.insertAfter($(types))
            }
        },                   
        rules: {
          // строчное правило
          userModal: "required",
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15              
          },
          userPhone: {
              required: true,
              minlength: 18,
          },
          userEmail: {
            required: true,
            email: true,
          },  
            
          
        },  // сообщения
        messages: {
            userName: {
                required: "Пожалуйста, укажите ваше имя",
                minlength: "Имя не короче 2 символов и не больше 15",
                maxlength: "Имя не короче 2 символов и не больше 15"
            },
            userPhone: {
                required: "Укажите ваш номер телефона",
                minlength: "Укажите верный номер"
            },            
            userModal: "Обязательно для отправки",
            userEmail: {
                required: "Укажите ваш email",
                email: "Введите в формате - name@mail.ru"
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form). serialize(),                
                success: function (response) {
                    console.log('Ajax сработал. Ответ сервера: ' + response);                    
                    $(form)[0].reset();                    
                    modal.removeClass('modal--visible');
                    $('.alert-overlay').fadeIn();
                    $(this).find('input').val('');
                },
                error: function (response) {
                    console.error('Ошибка запроса ' + response);
                    ym(64459360,'reachGoal','form'); return true;
                }
            });
        }        
        
         
    });
    $('.close-alert').click(function() { 
        $('.alert-overlay').fadeOut();
      });
      
      $(document).mouseup(function (e) { 
          var popup = $('.popup');
          if (e.target!=popup[0]&&popup.has(e.target).length === 0){
              $('.alert-overlay').fadeOut();
          }
      });

    $('.footer__form',).validate({
        errorClass: "invalid",
        errorElement: "footer",
        errorPlacement: function(even, types) {
            if ("checkbox" == types.attr("type")) {
                return types.next("label").append(even);
            } else {
                even.insertAfter($(types))
            }
        },                   
        rules: {
          // строчное правило
          userFooter: "required",
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15              
          },
          userPhone: {
              required: true,
              minlength: 18,
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
                required: "Укажите ваш номер телефона",
                minlength: "Укажите верный номер"
            },
            userQuestion: "Задайте свой вопрос",
            userFooter: "Обязательно для отправки",
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form). serialize(),                
                success: function (response) {
                    console.log('Ajax сработал. Ответ сервера: ' + response);                    
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    $('.alert-overlay').fadeIn();
                    $(this).find('input').val('');
                },
                error: function (response) {
                    console.error('Ошибка запроса ' + response);
                    ym(64459360,'reachGoal','form'); return true;
                }
            });
        }        
        
         
    });
    $('.close-alert').click(function() { 
        $('.alert-overlay').fadeOut();
      });
      
      $(document).mouseup(function (e) { 
          var popup = $('.popup');
          if (e.target!=popup[0]&&popup.has(e.target).length === 0){
              $('.alert-overlay').fadeOut();
          }
      });
    $('.control__form',).validate({
        errorClass: "invalid",
        errorElement: "control",
        errorPlacement: function(even, types) {
            if ("checkbox" == types.attr("type")) {
                return types.next("label").append(even);
            } else {
                even.insertAfter($(types))
            }
        },                  
        rules: {
          // строчное правило
          userControl: "required",
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15              
          },
          userPhone: {
            required: true,
            minlength: 18,
          },
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
            userPhone: {
                required: "Укажите ваш номер телефона",
                minlength: "Укажите верный номер"
            },
            userControl: "Обязательно для отправки",
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form). serialize(),                
                success: function (response) {
                    console.log('Ajax сработал. Ответ сервера: ' + response);                    
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                    $('.alert-overlay').fadeIn();
                    $(this).find('input').val('');
                },
                error: function (response) {
                    console.error('Ошибка запроса ' + response);
                    ym(64459360,'reachGoal','form'); return true;
                }
            });
        }        
        
         
    });
    $('.close-alert').click(function() { 
        $('.alert-overlay').fadeOut();
      });
      
      $(document).mouseup(function (e) { 
          var popup = $('.popup');
          if (e.target!=popup[0]&&popup.has(e.target).length === 0){
              $('.alert-overlay').fadeOut();
          }
      });

    ///маска для телефона

    $('[type=tel]').mask('+7 (000) 000-00-00');

    
    //создание yandex карты
//Переменная для включения/отключения индикатора загрузки
var spinner = $('.ymap-container').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;
 
//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init () {
    var myMapTemp = new ymaps.Map('map', {
            center: [46.358603, 48.037109],
            zoom: 13,
            controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
        });
        var myPlacemarkTemp = new ymaps.Placemark([46.358603, 48.037109], {
            balloonContent: "Наш офис",
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [38, 38],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-25, -50],
        });
        myMapTemp.behaviors.disable('scrollZoom');
        myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
        
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);
 
  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function() {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}
 
// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 
// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function() {
  $('.ymap-container').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
 
	  	// Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
 
		// Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');
 
		// Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
           // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
           ymaps.load(init);
        });                
      }
    }
  );  
}
 
$(function() {
 
  //Запускаем основную функцию
  ymap();
 
});

});
    var player;
    $('.video__play').on('click',  function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '434',
          width: '100%',
          videoId: 'bz9GTjguxPY',
          events: {
            'onReady': videoPlay,            
          }
        });
    })

    function videoPlay(event) {
        event.target.playVideo();
    }
    $(function(){
        $('a[href^="#"]').on('click', function(event) {
          // отменяем стандартное действие
          event.preventDefault();
          
          var sc = $(this).attr("href"),
              dn = $(sc).offset().top -100;
          /*
          * sc - в переменную заносим информацию о том, к какому блоку надо перейти
          * dn - определяем положение блока на странице
          */
          
          $('html, body').animate({scrollTop: dn}, 1000);
          
          /*
          * 1000 скорость перехода в миллисекундах
          */
        });
      });

