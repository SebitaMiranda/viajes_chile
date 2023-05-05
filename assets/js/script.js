//alerta envio de correo//
$(function(){

    $("#submitButton").click(function(){
            alert("El correo fue enviado correctamente");

    });


});

//en seccion destacados se hace click en la foto y desaparece el texto

$(function(){

    $("#car1").on('click', function(){
        $("#p1").toggle();
           

});
});

$(function(){

    $("#car2").on('click', function(){
        $("#p2").toggle();
           

});
});

$(function(){

    $("#car3").on('click', function(){
        $("#p3").toggle();
           

});
});

$(function(){

    $("#car4").on('click', function(){
        $("#p4").toggle();
           

});
});