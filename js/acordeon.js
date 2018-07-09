$(document).ready(function(){
	$('#btnGeneraReporte').click(function(){
		$('.encabezado, #menuAdmin, .contenido').fadeOut('fast');
		$('#reporteGenerado').show('scale');
	});
	$('.salir').click(function(){

		$('#reporteGenerado').toggle('scale');
	});
});