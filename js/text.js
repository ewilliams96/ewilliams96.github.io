$('#expand').css("color", "rgb(30,30,30)")

/* Referenced and used http://stackoverflow.com/questions/7264974/show-text-letter-by-letter*/
function type_text(text, target, index, interval){
    if(index < text.length){
        $(target).append(text[index]);
        index++;
        setTimeout(function(){
            type_text(text, target, index, interval-10);
        }, interval);
    }
}

$(function () { 
  type_text("Hi, I'm Elizabeth!", "#greeting", 0, 300);    
}); 

// show and hide further about/info stuff at top on button click
var expanded = false;
function expand(){
    if(!expanded){
        $('#ex').removeClass("fa-plus");
        $('#ex').addClass("fa-minus");
        $('#about').css("opacity", 1);
        $('#about').css("height", "auto");
        expanded = true;
    }
    else{
        hide();
    }

}

function hide(){
    expanded = false;
    $('#ex').removeClass("fa-minus");
    $('#ex').addClass("fa-plus");
    $('#about').css("opacity", 0);
    $('#about').css("height", 0);
}