var contactos = [];

// crear una funcion para poder ingresar un nuevo contacto
function agregarContactos(){
var contacto ={};
contacto.id = prompt("ingresa id del nuevo contacto");
contacto.nombre = prompt("ingresa nombre del nuevo contacto");
contacto.apellido = prompt("ingresa apellido del nuevo contacto");
contacto.telefono = prompt("ingresa telefono del nuevo contacto")
contacto.ciudad = prompt("ingresa ciudad del nuevo contacto");
contacto.direccion = prompt("ingresa direccion del nuevo contacto");
contacto.order = prompt("ingrese el orden del nuevo contacto");

contactos.push(contacto);
return contactos;
}
console.log(contactos);


//crear un algoritmo que permita ordenar contactos con el atributo order
function ordenarcontactos(arr){
    for(var i = 0; i < arr.length; i++){
      for(var co = 0; co < ( arr.length - i -1 ); co++)
        if(arr[co].order > arr[co+1].order){
          var temp = arr[co]
          arr[co] = arr[co + 1]
          arr[co+1] = temp
        }
      }
    }
    console.log(arr);


// crear una funcion para poder eliminar los contactos
function eliminarContactos(id){
    contactos = contactos.filter(x => x.id != id);
    return contactos;
}


// crear una funcion para poder actualizar los contactos
 function actualizarContactos(){
    var contacto ={};

    contacto.id = prompt("ingrese id para actualizar");
    contacto.nombre = prompt("ingrese nombre para actualizar");
    contacto.apellido = prompt("ingrese apellido para actualizar");
    contacto.telefono = prompt("ingrese telefono para actualizar");
    contacto.ciudad = prompt("ingresa ciudad para actualizar");
    contacto.direccion = prompt("ingresa direccion para actualizar");

    for (var i = 0; i < contactos.length; i++){
        if (contacto.id === contactos[i].id) (contactos[i]= contacto)
    }
    return contactos;
}
