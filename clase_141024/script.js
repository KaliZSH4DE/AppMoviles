function hello(){
    console.log('Holi JS 1');
    console.log('Holi HTML 1');
    console.log('Holi CSS 1');
}

hello();

/*---------------------*/

function hello2(){
    return 'hola js 2';
}

const result = hello2();
console.log(result);

hello2();

/*---------------------*/

function hello3(){
    return{};
}

console.log(hello3());

/*---------------------*/

function hello4(){
    return{
        nombre: 'Raul'
    };
}


console.log(hello4());


/*---------- FUNCION QUE RETORNA OTRA FUNCION -----------*/

function hello5(){
    return function (){
        return "Hola JS 5"
    }
}

console.log(hello5()());

/*---------- USO DE PARAMETROS EN FUNCIONES -----------*/

function hellpconjs(name){
    return 'Hola ' + name
}

console.log('Diego');
console.log(hellpconjs('Dieguito'));

/*---------- USO DE MAS DE UN PARAMETRO EN FUNCIONES -----------*/

function hellpconjs2(x,y){
    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
}

console.log(hellpconjs2(20,10));

/*---------- CONTROL DE ERRORES EN PARAMETROS -----------*/

function hellpconjs3(x,y){

    if(y == undefined){
        y = 0;
    }
    if(x == undefined){
        x = 0;
    }
    return x / y
}

console.log(hellpconjs3());

/*---------- OBJETOS -----------*/

const user = {
    nombre : 'Dieguito',
    apellido : 'Zetina',
    edad : 17,
    edoCivico : 'Comprometido',
    domicilio : {
        ciudad : 'CDMX',
        calle : 'Piramides',
        numero : 111
    },
    amigos : ['Leonardo', 'Adam', 'Zaid', 'Abraham'],
    activo : true,
    sendMessage : function(){
        return 'Enviar msj'
    }
}


/*---------- alert(ciudad, calle, numero) -----------*/

alert(user.domicilio.ciudad + user.domicilio.calle + user.domicilio.numero);

/*---------- console.log(amigos) -----------*/

console.log(user.amigos[0]);
console.log(user.amigos[1]);
console.log(user.amigos[2]);
console.log(user.amigos[3]);

/*---------- alert(activo) -----------*/

alert(user.activo);

/*---------- console.log(nombre,apellido,edad,edoCivico) -----------*/

console.log(
    user.nombre + 
    user.apellido + 
    user.edad + 
    user.edoCivico
);

/*---------- alert(Estado del mensaje) -----------*/

alert(user.sendMessage());