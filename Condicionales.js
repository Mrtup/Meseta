var num1 = prompt ("primer numero");
var num2 = prompt ("segundo numero");
var operacion = prompt ("operacion a realizar");
if (operacion == "suma"){
    // cuando es suma se debe utilizar parseInt ya que el (+) lo que hace es concatenar
    document.write (parseInt (num1) + parseInt (num2));
}

else if (operacion == "resta"){
    document.write (num1 - num2);
}

else if (operacion == "multi"){
    document.write (num1 * num2);

}

else if (operacion == "div"){
    document.write (num1 / num2);

}
