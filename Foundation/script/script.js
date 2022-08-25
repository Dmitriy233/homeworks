$('.hiring__position > div').on('click', function(){
    $(this).children('.position__close').toggleClass('close__rotate-icon');
    $(this).parent('.hiring__position').toggleClass('hiring__position-background')
    $(this).next('.position__description').slideToggle(300);
});

$('.features-info > div').on('click', function(){
    $(this).children('.features-info__title').toggleClass('features-info__title-color')
    $(this).parent('.features-info').toggleClass('features-info-border')
    $(this).next('.features-info__description').slideToggle(300);
})