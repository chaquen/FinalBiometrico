agregarEventoLoad(iniciar_reportes);
var dep=[];
var dep2=[];
var fecha_evento="";
var lugar_evento="";
var nom_reporte;
var todo_esco;
var todo_genero;
var todo_proceso;
var todo_orga;
var todo_etnia;
var todo_edad;
var todo_dep_nac;
var todo_ciu_nac;
var todo_cap_dife;

function iniciar_reportes(){
	

	var d=recibirValorGet();
	 consultarDatosOff("script_data/data/colombia.json","",{},function(rs){
        console.log(rs);
        globales._departamentos=rs;
        crear_data_list("txt_dep_nacimiento",rs,"id","departamento");
        
    });

    if(d==false){
    	consultar_eventos();
    }else{
    	var id_ev=d[0].split("=")[1];
    	consultar_eventos(id_ev);
    }

	agregarEvento("btnReporteGeneral","click",function(){
		var datos = $("#formReportes").serializarFormulario();
		console.log(datos);
		nom_reporte=document.getElementById("selEventos").options[document.getElementById("selEventos").selectedIndex].innerHTML;	
		//console.log(document.getElementById("selEventos").options[document.getElementById("selEventos").selectedIndex].innerHTML);
		if(document.getElementById("selEventos").value!="0"){

			registrarDato("reportes_lista_general",{id_evento:document.getElementById("selEventos").value},function(rs){
						console.log(rs);
						if(rs.respuesta){
							document.getElementById("divExportar").style.display="block";
							
							dibujar_tabla(rs.datos);
						}				

			},"");
		
			
			registrarDato("reportes_general",{datos,id_evento:document.getElementById("selEventos").value},function(rs){
						console.log(rs);
						console.log(document.getElementById("divReporteGeneral"));
						if(rs.respuesta){
							if(Object.keys(rs.datos).length>0){
								document.getElementById("divReporteGeneral").style.display="";
								dibujar_tabla(rs.datos);	
							}else{
								document.getElementById("divReporteGeneral").style.display="none";
							}

							

							if(Object.keys(rs.datos_escolaridad).length>0){
								$('#barchart_material_esco').fadeIn();
								var arr=[];
								var cabza=["Participantes"];
								var body2=["Escolaridad "];
								//cabza.push("participantes");

								for(v in rs.datos_escolaridad){
									console.log(rs.datos_escolaridad[v]);
									cabza.push( rs.datos_escolaridad[v].escolaridad);	
									body2.push(rs.datos_escolaridad[v].cuantos_por_escolaridad);	
								}
								todo_esco=[cabza,body2];
								
							 	//google.charts.load('current', {'packages':['bar']});
						      	//google.charts.setOnLoadCallback(drawChartes);

							      
							}

							if(Object.keys(rs.datos_cap_dife).length>0){
								$('#barchart_material_cap_dif').fadeIn();
								var arr=[];
								var cabza=["Participantes"];
								var body=["Capacidades Diferentes"];
								//cabza.push("participantes");

								for(v in rs.datos_cap_dife){
									cabza.push( rs.datos_cap_dife[v].cap_dife);	
									body.push(rs.datos_cap_dife	[v].cuantos_por_cap_dife);	
								}
								todo_cap_dife=[cabza,body];
								
							 	
							}

							if(Object.keys(rs.datos_ciu_nac).length>0){
								$('#barchart_material_ciu').fadeIn();
								var arr=[];
								var cabza=["Participantes"];
								var body=["Ciudad Nacimiento"];
								//cabza.push("participantes");

								for(v in rs.datos_ciu_nac){
									cabza.push( rs.datos_ciu_nac[v].ciud_nacimiento);	
									body.push(rs.datos_ciu_nac[v].cuantos_por_ciud_nacimiento);	
								}
								todo_ciu_nac=[cabza,body];
								

							}
							if(Object.keys(rs.datos_dep_nac).length>0){
								$('#barchart_material_dep_nac').fadeIn();
									var arr=[];
								var cabza=["Participantes"];
								var body=["Departamento Nacimiento"];
								//cabza.push("participantes");

								for(v in rs.datos_dep_nac){
									cabza.push( rs.datos_ciu_nac[v].datos_dep_nac);	
									body.push(rs.datos_ciu_nac[v].dep_nacimiento);	
								}
							    todo_dep_nac=[cabza,body];
							
							}

							if(Object.keys(rs.datos_edaddes).length>0){
								$('#barchart_material_eda').fadeIn();
								var arr=[];
								var cabza=["Participantes"];
								var body=["Edad"];
								//cabza.push("participantes");

								for(v in rs.datos_edaddes){
									cabza.push( rs.datos_edaddes[v].edad);	
									body.push(rs.datos_edaddes[v].cuentos_por_edad);	
								}
								todo_edad=[cabza,body];
								
							}
							if(Object.keys(rs.datos_genero).length>0){
								$('#barchart_material_gen').fadeIn();
								var arr=[];
								var cabza=["Participantes"];
								var body=["Genero"];
								//cabza.push("participantes");

								for(v in rs.datos_genero){
									cabza.push( rs.datos_genero[v].genero);	
									body.push(rs.datos_genero[v].cuentos_por_genero);	
								}
								todo_genero=[cabza,body];
							
							}

							
							if(Object.keys(rs.datos_etnia).length>0){
								$('#barchart_material_etnia').fadeIn();
								var arr=[];
								var cabza=["Participantes"];
								var body=["Etnia"];
								//cabza.push("participantes");

								for(v in rs.datos_etnia){
									cabza.push( rs.datos_etnia[v].etnia);	
									body.push(rs.datos_etnia[v].cuantos_por_etnia);	
								}
								todo_etnia=[cabza,body];
								
							}
							

							if(Object.keys(rs.datos_organizacion).length>0){
								$('#barchart_material_orga').fadeIn();
								var arr=[];
								var cabza=["Participantes"];
								var body=["Organizacion"];
								//cabza.push("participantes");

								for(v in rs.datos_organizacion){
									cabza.push( rs.datos_organizacion[v].organizacion);	
									body.push(rs.datos_organizacion[v].cuantos_por_organizacion);	
								}
								todo_orga=[cabza,body];
								
							}
							if(Object.keys(rs.datos_proceso).length>0){
								$('#barchart_material_proceso').fadeIn();
								var arr=[];
								var cabza=["Participantes"];
								var body=["Proceso"];
								//cabza.push("participantes");

								for(v in rs.datos_organizacion){
									cabza.push( rs.datos_organizacion[v].proceso);	
									body.push(rs.datos_organizacion[v].cuantos_por_proceso);	
								}
								todo_proceso=[cabza,body];
							}	
							 	

							google.charts.load('current', {'packages':['bar']});
					      	google.charts.setOnLoadCallback(dibujar_grafico_reporte);

							
						}				

				},"");	
			
			

		}else{
			mostrarMensaje("Por favor selecciona un evento");
		}
		
	});


	agregarEvento("txt_dep_nacimiento","keypress",function(e){        
        console.log(e);
        console.log(e.key);
        dep=[];
         if (e.keyCode != 13 && e.key!=undefined) {
            for(var el in globales._departamentos){
                console.log(globales._departamentos[el].departamento.toUpperCase());
                console.log(e.key);
                console.log(globales._departamentos[el].departamento.indexOf(e.key));
                if(globales._departamentos[el].departamento.toUpperCase().indexOf(e.key.toUpperCase()) >= 0){
                    
                    //console.log(globales._departamentos[el].departamento);
                    dep.push(globales._departamentos[el]);
                }
            }
            console.log(dep)
            crear_data_list("lista_datos",dep,"id","departamento");  
         }
            
    });
    agregarEvento("txt_dep_nacimiento","change",function(e){
        console.log(e);
        dep=[];
        for(var el in globales._departamentos){
              
                if(globales._departamentos[el].id == e.srcElement.value.split("-")[0]  ){
                    
                    console.log(globales._departamentos[el].ciudades);
                    dep.push(globales._departamentos[el].ciudades);
                }
            }

            crear_data_list_dos("lista_datos_2",dep);
    });
    agregarEvento("txt_dep_ubi","keypress",function(e){        
        console.log(e);
        console.log(e.key);
        dep2=[];
         if (e.keyCode != 13 && e.key!=undefined) {
            for(var el in globales._departamentos){
                console.log(globales._departamentos[el].departamento.toUpperCase());
                console.log(e.key);
                console.log(globales._departamentos[el].departamento.indexOf(e.key));
                if(globales._departamentos[el].departamento.toUpperCase().indexOf(e.key.toUpperCase()) >= 0){
                    
                    //console.log(globales._departamentos[el].departamento);
                    dep2.push(globales._departamentos[el]);
                }
            }
            console.log(dep2)
            crear_data_list("lista_datos_ubi",dep2,"id","departamento");  
         }
            
    });
    agregarEvento("txt_dep_ubi","change",function(e){
        console.log(e);
        dep2=[];
        for(var el in globales._departamentos){
              
                if(globales._departamentos[el].id == e.srcElement.value.split("-")[0]  ){
                    
                    console.log(globales._departamentos[el].ciudades);
                    dep2.push(globales._departamentos[el].ciudades);
                }
            }

            crear_data_list_dos("lista_datos_mun_ubi",dep2);
    });

     agregarEvento("selEventos","change",function(e){
     	if(this.value!="G"){
     		consultarDatos("eventos/"+this.value,{},function(rs){
						
				fecha_evento=rs.datos[0].date;
				lugar_evento=rs.datos[0].city;
			},"");
     	}
       
    });


    agregarEvento("btnGenerarPdf","click",function(){
     	 window.print();

     });
	

	agregarEvento("btnGenerarExcel","click",function(){
		if(document.getElementById("selEventos").value!="0"){
			
			//registrarDato(globales._URL_ONLINE+"exportar_reporte_lista",{datos},function(rs){
			registrarDato("exportar_reporte_lista",{id_evento:document.getElementById("selEventos").value},function(rs){	
				if(rs.respuesta==true){
					document.getElementById("aExpor").setAttribute("href",globales._URL_ONLINE+rs.direccion);
					document.getElementById("aExpor").innerHTML="DESCARGAR REPORTE";
				}
				console.log(rs);
			});
		}else{
			mostrarMensaje("Por favor selecciona un evento");	
		}
		
	});


}



function consultar_eventos(id){
	if(id==undefined){
		consultarDatos("eventos",{},function(rs){
											
			crear_select_2("selEventos",rs.datos,"id","name");


		},"");	
	}else{
		consultarDatos("eventos/"+id,{},function(rs){
											
			crear_select("selEventos",rs.datos,"id","name");
			fecha_evento=rs.datos[0].date;
			lugar_evento=rs.datos[0].city;
		},"");
	}
	
}

function dibujar_tabla(datos){
		var tbl=document.getElementById("tblListaGeneral");
		tbl.innerHTML="";
		var tr=document.createElement("tr");
		
		var td=document.createElement("td");
		td.innerHTML="Primer Nombre";
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		var td=document.createElement("td");
		td.innerHTML="Segundo Nombre";
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		var td=document.createElement("td");
		td.innerHTML="Primer Apellido";
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		var td=document.createElement("td");
		td.innerHTML="Segundo Apellido";
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		var td=document.createElement("td");
		td.innerHTML="Genero";
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		var td=document.createElement("td");
		td.innerHTML="Ciudad de Nacimiento";
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		var td=document.createElement("td");
		td.innerHTML="Capacidades";
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		var td=document.createElement("td");
		td.innerHTML="Etnia";
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		tbl.appendChild(tr);		
	for(var f in datos){
		console.log(datos[f]);
		var tr=document.createElement("tr");
		
		var td=document.createElement("td");
		td.innerHTML=datos[f].pri_nombre;
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		var td=document.createElement("td");
		td.innerHTML=datos[f].seg_nombre;
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		var td=document.createElement("td");
		td.innerHTML=datos[f].pri_apellido;
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		var td=document.createElement("td");
		td.innerHTML=datos[f].seg_apellido;
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);
		
		var td=document.createElement("td");
		td.innerHTML=datos[f].genero;
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);


		var td=document.createElement("td");
		td.innerHTML=datos[f].ciud_nacimiento;
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		var td=document.createElement("td");
		td.innerHTML=datos[f].cap_dife;
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		var td=document.createElement("td");
		td.innerHTML=datos[f].etnia;
		td.className="mdl-data-table__cell--non-numeric";
		tr.appendChild(td);

		tbl.appendChild(tr);		

	}
}

function dibujar_grafico_reporte(){

	//escolariodad
	var data_esco = google.visualization.arrayToDataTable(
							          todo_esco
							         );

	var options_esoc = {
		     chart: {
		        title: nom_reporte+" Escolaridad" ,
		        subtitle: lugar_evento+" "+fecha_evento
		        },
		     bars: 'horizontal' // Required for Material Bar Charts.
		    };


	 
							        	    
	var chartesco = new google.charts.Bar(document.getElementById('barchart_material_esco'));
    chartesco.draw(data_esco, google.charts.Bar.convertOptions(options_esoc));
    //genero
    var data_genero = google.visualization.arrayToDataTable(
							          todo_genero
							         );
    var options_genero = {
		     chart: {
		        title: nom_reporte+" Genero" ,
		        subtitle: lugar_evento+" "+fecha_evento
		        },
		     bars: 'horizontal' // Required for Material Bar Charts.
		    };

    var chartgen = new google.charts.Bar(document.getElementById('barchart_material_gen'));
	chartgen.draw(data_genero, google.charts.Bar.convertOptions(options_genero));
	//proceso
	var data_pro = google.visualization.arrayToDataTable(
							          todo_proceso
							         );

							        var options_pro = {
							          chart: {
							            title: nom_reporte+" Procesos",
							            subtitle: lugar_evento+" "+fecha_evento
							          },
							          bars: 'horizontal' // Required for Material Bar Charts.
							        };

							        var chart_pro = new google.charts.Bar(document.getElementById('barchart_material_proceso'));

							        chart_pro.draw(data_pro, google.charts.Bar.convertOptions(options_pro));
	//organizacion
	var data_org = google.visualization.arrayToDataTable(
							          todo_orga
							         );

							        var options_org = {
							          chart: {
							            title: nom_reporte+" Organizacion",
							            subtitle: lugar_evento+" "+fecha_evento
							          },
							          bars: 'horizontal' // Required for Material Bar Charts.
							        };

							        var chart_org = new google.charts.Bar(document.getElementById('barchart_material_orga'));

							        chart_org.draw(data_org, google.charts.Bar.convertOptions(options_org));		
	//etnia
	 var data_etnia = google.visualization.arrayToDataTable(
							          todo_etnia
							         );

							        var options_etnia = {
							          chart: {
							            title: nom_reporte+" Etnia",
							            subtitle: lugar_evento+" "+fecha_evento
							          },
							          bars: 'horizontal' // Required for Material Bar Charts.
							        };

							        var chart_et = new google.charts.Bar(document.getElementById('barchart_material_etnia'));

							        chart_et.draw(data_etnia, google.charts.Bar.convertOptions(options_etnia));						        				      
	//edad
	  var data_ed = google.visualization.arrayToDataTable(
							          todo_edad
							         );

							        var options_ed = {
							          chart: {
							            title: nom_reporte+" Edades",
							            subtitle: lugar_evento+" "+fecha_evento
							          },
							          bars: 'horizontal' // Required for Material Bar Charts.
							        };

							        var chart_ed = new google.charts.Bar(document.getElementById('barchart_material_eda'));

							        chart_ed.draw(data_ed, google.charts.Bar.convertOptions(options_ed));						        
	//departamento nacimiento
	var data_dep_nac = google.visualization.arrayToDataTable(
							          todo_dep_nac
							         );

							        var options_dep_nac = {
							          chart: {
							            title: nom_reporte+" Departamento Nacimiento",
							            subtitle: lugar_evento+" "+fecha_evento
							          },
							          bars: 'horizontal' // Required for Material Bar Charts.
							        };

							        var chart_dep_nac = new google.charts.Bar(document.getElementById('barchart_material_dep_nac'));

							        chart_dep_nac.draw(data_dep_nac, google.charts.Bar.convertOptions(options_dep_nac));						        

	//ciudad nacimeinto
	        var data_ciu_nac = google.visualization.arrayToDataTable(
							          todo_ciu_nac
							         );

							        var options_ciu_nac = {
							          chart: {
							            title: nom_reporte +" Ciudad Nacimiento",
							            subtitle: lugar_evento+" "+fecha_evento
							          },
							          bars: 'horizontal' // Required for Material Bar Charts.
							        };

							        var chart_ciu_nac = new google.charts.Bar(document.getElementById('barchart_material_ciu'));

							        chart_ciu_nac.draw(data_ciu_nac, google.charts.Bar.convertOptions(options_ciu_nac));						        
	//capacidad diferecias
	var data_cap_dif = google.visualization.arrayToDataTable(
							          todo_cap_dife
							         );

							        var options_cap_dif = {
							          chart: {
							            title: nom_reporte+" Capacidades Diferentes",
							            subtitle: lugar_evento+" "+fecha_evento
							          },
							          bars: 'horizontal' // Required for Material Bar Charts.
							        };

							        var chart_cap_dif = new google.charts.Bar(document.getElementById('barchart_material_cap_dif'));

							        chart_cap_dif.draw(data_cap_dif, google.charts.Bar.convertOptions(options_cap_dif));						        


							   
							   
}
function dibujar_reporte_torta(){
	//escolariodad
	var data_esco = google.visualization.arrayToDataTable( todo_esco     );

	var options_esoc = {
		     
		         title: nom_reporte,
          		 is3D: true,
		         };
			        	    
	var chartesco = new google.visualization.PieChart(document.getElementById('piechart_material_esco'));
        chartesco.draw(data_esco,options_esoc);
       //genero
       var data_genero = google.visualization.arrayToDataTable(
							          todo_genero
							         );
         var options_genero = {
		     title: nom_reporte,
          	     is3D: true,
		    };

      var chartgen = new google.visualization.PieChart(document.getElementById('piechart_material_gen'));
	chartgen.draw(data_genero, options_genero);
	//proceso
	var data_pro = google.visualization.arrayToDataTable( todo_proceso );

							        var options_pro = {
							          title: nom_reporte,
          							  is3D: true,
							        };

							        var chart_pro = new google.visualization.PieChart(document.getElementById('piechart_material_proceso'));

							        chart_pro.draw(data_pro, options_pro);
	//organizacion
	var data_org = google.visualization.arrayToDataTable(todo_orga);

							        var options_org = {
							          title: nom_reporte,
          							  is3D: true,
							        };

							        var chart_org = new google.visualization.PieChart(document.getElementById('piechart_material_orga'));

							        chart_org.draw(data_org, options_org);		
	//etnia
	 var data_etnia = google.visualization.arrayToDataTable( todo_etnia);

							        var options_etnia = {
							           title: nom_reporte,
          							  is3D: true,
							        };

							        var chart_et = new google.visualization.PieChart(document.getElementById('piechart_material_etnia'));

							        chart_et.draw(data_etnia, options_etnia);						        				      
	//edad
	  var data_ed = google.visualization.arrayToDataTable(  todo_edad );

							        var options_ed = {
							          title: nom_reporte,
          							  is3D: true,
							        };

							        var chart_ed = new google.visualization.PieChart(document.getElementById('piechart_material_eda'));

							        chart_ed.draw(data_ed,options_ed);						        
	//departamento nacimiento
	var data_dep_nac = google.visualization.arrayToDataTable(todo_dep_nac   );

							        var options_dep_nac = {
							           title: nom_reporte,
          							   is3D: true,
							        };

							        var chart_dep_nac = new google.visualization.PieChart(document.getElementById('piechart_material_dep_nac'));

							        chart_dep_nac.draw(data_dep_nac, options_dep_nac);						        

	//ciudad nacimeinto
	        var data_ciu_nac = google.visualization.arrayToDataTable( todo_ciu_nac );

							        var options_ciu_nac = {
							           title: nom_reporte,
          							   is3D: true,
							        };

							        var chart_ciu_nac = new google.visualization.PieChart(document.getElementById('piechart_material_ciu'));

							        chart_ciu_nac.draw(data_ciu_nac, options_ciu_nac );						        
	//capacidad diferecias
	var data_cap_dif = google.visualization.arrayToDataTable( todo_cap_dife );

							        var options_cap_dif = {
							           title: nom_reporte,
          							   is3D: true,
							        };

							        var chart_cap_dif = new google.visualization.PieChart(document.getElementById('piechart_material_cap_dif'));

							        chart_cap_dif.draw(data_cap_dif, options_cap_dif);						        


							   
		



}
