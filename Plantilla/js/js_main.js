
function init()
{
    iniciarSesion();
}

function iniciarSesion()
{
    let icono = document.getElementsByClassName('main_cab_2_1_icono');
    let overlay = document.getElementsByClassName('overlay');
    let cajainicio = document.getElementsByClassName('overlay__caja_inicio');
    let boton = document.querySelectorAll('[name= "boton"]');
    let validacion = document.getElementsByClassName('overlay__caja_inicio__validacion');
    let arCorreo = document.querySelectorAll('[name="correo"]');
    let arContrasenna = document.querySelectorAll('[name="contraseña"]');

    icono[ 0 ].addEventListener("click", accion1); 
    overlay[ 0 ].addEventListener("click", accion2);
    cajainicio[ 0 ].addEventListener("click", accion3);
    boton[ 0 ].addEventListener("click", accion4);

    function accion1()
    {
        if ( validacion[ 0 ].innerHTML.length !== 0 )
        {
            validacion[ 0 ].innerHTML = "";
        }
        if ( arCorreo[ 0 ].value.length !== 0 )
        {
            arCorreo[ 0 ].value = "";
        }
        if ( arContrasenna[ 0 ].value.length !== 0 )
        {
            arContrasenna[ 0 ].value = "";
        }
        overlay[ 0 ].classList.remove('oculto');
    }

    function accion2()
    {
        overlay[ 0 ].classList.add('oculto');
    }

    function accion3(event)
    {
        event.stopPropagation();
    }

    function accion4()
    {
        let correo = arCorreo[ 0 ].value;
        let contrasenna = arContrasenna[ 0 ].value;
        
        if ( correo.length === 0 || contrasenna.length === 0 )
        {
            validacion[ 0 ].innerHTML = "Email y Contraseña no válidos";
        }
        else if ( correo.length !== 0 && contrasenna.length !== 0 )
        {
            overlay[ 0 ].classList.add('oculto');
        }
    }
}
