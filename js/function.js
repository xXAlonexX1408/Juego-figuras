function circulo() {

var selector = document.getElementById("figura") ;

selector.className = ' ';

selector.classList.toggle("circulo")



}

function cuadrado() {

    var selector = document.getElementById("figura") ;

    selector.className =  ' ';
    
    selector.classList.toggle("cuadrado")
    
    
    
    }

    function arriba() {

        var selector = document.getElementById("figura") ;

        selector.className = ' ';
        
        selector.classList.toggle("arriba")


        
    }

    function abajo() {

        var selector = document.getElementById("figura") ;

        selector.className = ' ';
        
        selector.classList.toggle("abajo")


        
    }

    function derecha() {

        var selector = document.getElementById("figura") ;

        selector.className = ' ';
        
        selector.classList.toggle("derecha")


        
    }

    function izq() {

        var selector = document.getElementById("figura") ;

        selector.className = ' ';
        
        selector.classList.toggle("izq")


        
    }

    function dgab() {

        var selector = document.getElementById("figura") ;

        selector.className = ' ';
        
        selector.classList.toggle("dgab")


        
    }

    function dgai() {

        var selector = document.getElementById("figura") ;

        selector.className = ' ';
        
        selector.classList.toggle("dgai")


        
    }

    function rombo() {

        var selector = document.getElementById("figura") ;
    
        selector.className =  ' ';
        
        selector.classList.toggle("rombo")

    }
    
    function tri() {

        var selector = document.getElementById("figura") ;
    
        selector.className =  ' ';
        
        selector.classList.toggle("tri")

    }

    function imagen() {

        var selector = document.getElementById("figura") ;
    
        selector.className =  ' ';
        
        selector.classList.toggle("imagen")

    }

    function rech() {

        var selector = document.getElementById("figura") ;
    
        selector.className =  ' ';
        
        selector.classList.toggle("rech")

    }

    function recv() {

        var selector = document.getElementById("figura") ;
    
        selector.className =  ' ';
        
        selector.classList.toggle("recv")

    }

    function capturardatos() {

        // capturamos los valores de los campos del formulario en variables para ser guardadas con .value

     var nombre = document.getElementById("cnombres").value;
     var edad = document.getElementById("cedad").value;
     var fecha = document.getElementById("cfnacimiento").value;
     var genero = document.getElementById("cgenero").value;
     var email = document.getElementById("cemail").value;
     var descripcion = document.getElementById("cdescripcion").value;
     var color = document.getElementById("ccolor").value;


// capturamos los parrafos donde mostraremos la informacion 

var anombre = document.getElementById("mnombres");
var aedad = document.getElementById("medad");
var afecha = document.getElementById("mfnacimiento");
var agenero = document.getElementById("mgenero");
var aemail = document.getElementById("memail");
var adescripcion = document.getElementById("mdescripcion");


anombre.textContent = nombre;
aedad.textContent = edad;
afecha.textContent = fecha;
agenero.textContent = genero;
aemail.textContent = email;
adescripcion.textContent = descripcion;

// capturamos el contenedor del avatar para luego cambiar su color de fondo

var selector = document.getElementById("card-avatar")



//if (color == "negro") {

  //selector.style.backgroundColor = "black";
    
//}

//else if ( color == "morado" ) {


    //selector.style.backgroundColor = "purple";
//}

//else if ( color == "azul")
//{

    //selector.style.backgroundColor = "blue";

//}

    //}

switch (color) {

    case"negro" :
        
        selector.style.backgroundColor = "black";

        break;

        case"morado" :
        
            selector.style.backgroundColor = "purple";
    
            break;

      case"azul" :

        selector.style.backgroundColor = "blue";

        break;
}

var imgavatar = document.getElementById("foto");

if ( genero == "masculino" ) {

    imgavatar.src = "img/men 2.png";

    
}

else if (genero == "femenino" ) {

    imgavatar.src = "img/woman 2.png";

}


}














