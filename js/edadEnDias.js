function Edadendias(){

  prompt("Ingresar tu fecha de nacimiento");
  let nacimiento = parseInt (prompt(`Ingresa tu fecha de nacimiento`));
  let edad = (2023 - nacimiento)*365;
  
  let respuesta = document.createTextNode(`Tu edad en dias es : ${edad}`);
  let h2 = document.createElement("h2");

  h2.setAttribute("id","Edadendias");

  h2.appendChild(respuesta);

  document.getElementById("resultado").appendChild(h2);

}
function reset(){
document.getElementsById("resultado").remove();
}    
