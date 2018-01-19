var nombre, edad, poblacion;
nombre = prompt ("ingrese nombre");
edad = prompt ("Ingrese edad");
poblacion = prompt ("ingrese poblacion");

if (edad <= 17) {
    document.write(nombre + " tiene " + edad + " es menor de edad" + " vive en " + poblacion);
}
    else if (edad >= 18 && edad <= 60) {
        document.write(nombre + " tiene " + edad + " es mayor de edad" + " vive en " + poblacion);
    }
    else if (edad >= 60) {
        document.write(nombre + " tiene " + edad + " es aduldo" + " vive en " + poblacion);
    }
