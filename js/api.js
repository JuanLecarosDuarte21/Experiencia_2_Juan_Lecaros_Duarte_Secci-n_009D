let url ="https://apis.digital.gob.cl/fl/feriados"
$.get(url,function(respuesta){

    let feriado = respuesta[respuesta.length -1]

    $("#feriado").text(feriado.nombre + "-"+ feriado.fecha)

    },"json")