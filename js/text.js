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
    console.log("call")
  type_text("Hi, I'm Elizabeth!", "#greeting", 0, 300);    
 
}); 