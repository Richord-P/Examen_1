$(document).ready(function() {
    $("#input_text").val('');
    $("#input_text").keypress(function(e) {
        if (e.keyCode == 13 && $("#input_text").val().trim() != '') {
            $('#lista').prepend('<li class="lista_E">'+$("#input_text").val()+'</li>');
            $("#input_text").val('');
        }
    });

    $('#boton_rojo').on('click',function(e){
        $(this).toggleClass('pregunta-cinco');
    });
});
























/*$(document).ready(function() {
	$("#input_text").val('');
	$("#input_text").keypress(function(e){

		if (e.keyCode == 13 && $("#input_text").val().trim() != '') {
			$('#lista').prepend('<li class="lista_E">'+$("input_text").val()+'</li>');
			$("#input_text").val('');
		}

	});


});*/