$(document).ready(function(){
	$('#btnGeneraReporte').click(function(){
		$('#reporteGenerado').show('scale');
	});
	$('.salir').click(function(){
		$('.mascara').toggle('scale');
	});
});