$( document ).ready(function() {
    // Fix navagation div on scroll
    var elementPosition = $('#fix_on_scroll').offset();
    $(window).scroll(function(){
        if($(window).scrollTop() > elementPosition.top){
              $('#fix_on_scroll').css('position','fixed').css('top','0');
        } else {
            $('#fix_on_scroll').css('position','static');
        }    
    });
    
    // Scroll to div on click
    $('aside a').on('click', function(event){
        event.preventDefault();
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top 
        });
    });


});