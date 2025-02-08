// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres=[]
condicionesIniciales();

function asignarTextoElemento(elemento,texto)
{
    let elementoHTML=document.getElementById(elemento);
    elementoHTML.innerHTML=texto;
}

function agregarAmigo() 
{
    let nombreAgregado=document.getElementById('amigo').value;
    if(nombreAgregado=='')
    {
        alert("Ingrese un nombre válido");
    }
    else
    {
        listaNombres.push(nombreAgregado);
        asignarTextoElemento('listaAmigos',nombreAgregado);
        mostrarLista();
        limpiarCaja();
        console.log(listaNombres);
    }
}

function mostrarLista() 
{
    let listaHTML = '';
    for (let i = 0; i < listaNombres.length; i++) {
        listaHTML += `<li>${listaNombres[i]}</li>`;
    }
    asignarTextoElemento('listaAmigos', listaHTML);
}

function limpiarCaja()
{
   let valorCaja= document.querySelector('#amigo');
   valorCaja.value='';
}

function sortearAmigo() 
{
    nAmigos=listaNombres.length;
    let numeroAmigo=Math.floor(Math.random()*nAmigos);
    asignarTextoElemento('listaAmigos',"");
    asignarTextoElemento('resultado',"El amigo secreto es: "+listaNombres[numeroAmigo]);

}