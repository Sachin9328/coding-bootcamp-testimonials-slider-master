$(function() {
    $('#testimonial2').hide();
});

function slide() {
    if($('#testimonial1').is(":hidden")) {
        $('#testimonial1').show();
        $('#testimonial2').hide();    
    }  else if($('#testimonial2').is(":hidden")) {
        $('#testimonial1').hide();
        $('#testimonial2').show(); 
    }
}

$(document).ready(function(){
    $('#prev').click(function(event){
        event.preventDefault();
    });
});

$(document).ready(function(){
    $('#next').click(function(event){
        event.preventDefault();
    });
});

$('#prev').on('click', slide);
$('#next').on('click', slide);