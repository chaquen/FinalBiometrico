function iniciar_menu_preparar(){
	
	
	agregarEvento("btnPreparar","click",function(){
			$('#preparando').fadeIn();
			registrarDatoOff(globales._URL_BE+"controlador/controlador_preparar.php","",{user:globales._usuario.email,pass:globales._usuario.pass,id:globales._usuario.id},function(rs){
			    $('#preparando').fadeOut();
				$('#listo').fadeIn();

			    console.log(rs);
			    var msn="";
			    for(var r in rs){

			    	//msn+=rs[r].mensaje+"\n";
			    }
			    
			    //mostrarMensaje(msn); 
			},function(jqXHR, textStatus, errorThrown){
                            console.log(jqXHR);
                            console.log(textStatus);
                            console.log(errorThrown);
                        });
	});
	agregarEvento("btnListo","click",function(){
		$('#listo').fadeOut();
	});
}

agregarEventoLoad(iniciar_menu_preparar);
