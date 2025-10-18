/*
let circulo = function(){
    
    //Captura de datos desde formulario
    let r = parseFloat(document.getElementById("radio").value);
    
    if (r < 0) {
        
        alert("Error, numero negativo")

    }else if (r == 0) {
        
        alert("Error, si solo pones cero, no estas calculando nada TONTO!!")

    }else{

        //Calculos.
        let a = Math.PI * Math.pow(r,2); //Área
        let b = 2 * Math.PI * r; //Perimetro

        //Entregar datos a formulario
        document.getElementById("resultado").innerHTML = "<b>Área: </b>"+a+"<br>"+ 
        "<b>Perímetro: </b>"+b;        

    }


    
}
*/

/*
    Tarea a realizar{
        Ingresar 3 valores correspondiente a cada lado de un triangulo
        Determine que tipo de triangulo se forma por el valor de sus lados
        Determine que se pueda formar un triangulo
        
        si el triangulo es isoceles que el texto se torne de color de azul
        
        si el triangulo es equilatero que el texto se torne de color de verde
        
        si el triangulo es escaleno que el texto se torne de color de rojo
    }
    
    Tipos de triangulos:
    
    Isoceles = 2 lados iguales

    Escaleno = todos los lados distintos

    Equilatero = todos los lados iguales
*/

let triangulo = function() {
    let r = parseFloat(document.getElementById("lado").value);
}