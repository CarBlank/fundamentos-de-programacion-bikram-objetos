const Coche = {
    marca : 'Marca',
    modelo : 'Modelo',
    matricula : 'Matricula'
}

const Casa =  {
    codPostal : 'Postal',
    calle : 'Calle',
    portal : 'Portal',
    piso : 'Piso'
}


const FullStackDeveloper =  {
    lenguajes : [],
    proyectos : []
}

const Perro = {
    nombre : 'Popi',
    raza : 'Golden',
    color : 'Beige',
    edad : '8',
    ladrar: function () {
        return console.log('guauuu')
    },
    popo: function () {
       return Math.random() * 3
    }

}

/* Lectura de propiedades  */

/* const portatil = {
    marca : 'Dell'
} */
 const marcaPortatil = Portatil.marca
 /* console.log (portatil.marca)  */

 const marcaPortatil2 = Portatil["marca"]
/*  console.log (marcaPortatil2)  */

 /* const Concierto = {
    grupos : ['a' , 'b' , 'c']
 } */

 const grupos = Concierto.grupos
/*  console.log (grupos)  */

RGB = [Led.rojo, Led.verde, Led.azul]


/* Modificación de propiedades */

Portatil.modelo = 'P345'

let grupo ="Guns N' Roses";
Concierto.cartelera.push(grupo);

Concierto.fecha = new Date();

Impresora.imprimiendo = objeto = {
    nombreArchivo: '',
    copias: '',
    numPaginas: ''
}


/* Iteraciones */ 

/* Objetos */

/* Declaración */

const Noticia = {
    titular: '',
    cuerpo: ''
}

const Persona = {
    nombre: '',
    apellidos: '',
    edad: ''
}

const Avion = {
    numPasajeros: '',
    despegar: function () {
        return console.log ('despegando')
        },
    volar: function () {
        return console.log ('llegando al destino')
        },
    aterrizar: function () {
        return console.log ('aterrizando')
        }
}

const Paquete = {
    contenido: []
}

const Pais = {
    numHabitantes: '',
    continente: '',
    gentilicio: ''
}


/* Lectura de propiedades */

let codError = O_Error.codigo

let integrantes = Grupo.integrantes

let nivelesTinta = Impresora.tinta

let pixeles = Pantalla.pixeles

let especificaciones = Movil.especificaciones = ["especificaciones"]


/* Modificación de propiedades */

Grupo.numIntegrantes = 5

Pantalla.dimensiones = '1920x1080'

Led.encendido = (false != true || true != false);

Movil.temperatura = '20º'

