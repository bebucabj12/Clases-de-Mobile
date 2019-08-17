import React, { Component } from 'react';

// El valor de PI nunca debería cambiar
const PI = 3.141592

let acumulador = 0
if (true) {
  acumulador = acumulador + 10
}

const sumar = (a, b) => a+b
  

function sumar(a, b) {
  a = a === undefined ? 1 : a
  b = b === undefined ? 2 : b
  return a + b
}

//---------------------------------------------------------------------
function procrear(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
  }
}
//EE6
const procrear = (nombre, edad) => ({
    nombre,
    edad
})
//-----------------------------------------------------------------------


// TODO: agregar la sintaxis () => ({ blabla }) con parentesis para devolver objeto

const hijo = {
  nombre: 'Juan',
  edad: 30,
  padre: {
    nombre: 'Pedro',
    edad: 90,
  },
}

const { nombre, edad } = hijo

var nombre = hijo.nombre
var edad = hijo.padre.edad
var nombre = 'Juan'
var apellido = 'Perez'
var edad = 40




// Notar como se mezclan el operador + de strings con el + de números cuando hacemos (50 - edad)
console.log(`El señor' + ${nombre} + ' ' + ${apellido} + ' va a cumplir 50 dentro de ' + ${(50 - edad)} + ' años`)

//-----------------------------------------------------------------------
function resultadoRandom(callback) {
  if (Math.random() > 0.5) {
    callback(new Error('Mala suerte'))
  } else {
    callback(null, 'Buena suerte')
  }
}

resultadoRandom(function(error, resultado) {
  if (error) {
    console.error(error)
  } else {
    console.log('Resultado: ', resultado)
  }
})


//EE6
let resultadoRandom = () => {
    if(Math.random()> 0.5) {
        Error('Mala suerte')
    } else {
        null('Buena suerte')
    }
}

 let resultadoRandom = (error, resultado) => {
    if (error) {
        console.log('Error')
    } else {
        console.log('Resultado: ', resultado)
    }
}

export default 