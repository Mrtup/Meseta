var nombre, edad, sexo;
nombre = prompt ("introduce nombre");
edad = prompt ("introduce edad");
if (edad >= 90){
   alert ("has introducido edad incorrecta");
    while (edad>=90){
        edad = prompt ("introduce edad");
        alert ("has introducido edad incorrecta");
}
}
sexo = prompt ("introduce sexo");

document.write(nombre + "<br/>",edad + "<br/>", sexo)
