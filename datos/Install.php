<?php

require_once '../datos/constantes.php';
require_once '../utilidades/CurlUse.php';


class Install {
    
    
    
    public function __construct() {
        
    }
 	
    public function validar_db(){
    	$conectar = mysqli_connect( DB_HOST, DB_USUARIO, DB_CLAVE,DB_NOMBRE_DATABASE);
    	if (mysqli_connect_errno()){
		  	//die("Connection error: " . mysqli_connect_errno());
		  	return false;
		}else{
			return true;
		}


    }
 	 


}