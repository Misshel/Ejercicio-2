var Datos = [
  { nombre : "Arabela", apellido : "Rojas", rol : "T.A", cumpleanios : "10 de Julio" },
  { nombre : "Michelle", apellido : "Seguil", rol : "T.A", cumpleanios : "25 de noviembre" },
  { nombre : "Meche", apellido : "Zubieta", rol : "T.A", cumpleanios : "02 de marzo" },
  { nombre : "Papu", apellido : "Rivariola", rol : "Psicóloga", cumpleanios : "10 de octubre" },
  { nombre : "Gian", apellido : "Corzo", rol : "Profesor", cumpleanios : "23 de enero" } ];

var dato="";

Datos.forEach(function(elem){

  dato += "<div> <ul> <li> Nombre: " +  elem.nombre + "</li> " +
          "<li> Apellido: " +  elem.apellido + "</li>" +
          "<li> Rol:" +  elem.rol + "</li>" +
          "<li> Cumpleanios" +  elem.cumpleanios + "</li></ul></div>";
}
);
var mues = document.getElementById("elementos");
mues.innerHTML=dato;
