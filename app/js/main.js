function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}
$('.burger').on('click', function(e){
    $(this).toggleClass('active')
    $('.header').toggleClass('active')
    $('body').toggleClass('hidden')
})
$('.header__body-menu-list li').on('click', function(e){
    $('.header').removeClass('active')
    $('.burger').removeClass('active')
    $('body').removeClass('hidden')
})
$('.header__body-contact-btn').on('click', function(e){
    $('.header').removeClass('active')
    $('.burger').removeClass('active')
    $('body').removeClass('hidden')
})
SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 800,
    // Размер шага в пикселях 
    stepSize         : 45,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 1,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 100,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
})
var splide = new Splide( '.splide', {
    rewind   : true,
    pagination: false
  } );
  
  splide.mount();