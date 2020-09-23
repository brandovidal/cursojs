function Cliente(nombre, saldo) {

this.nombre = nombre;
this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
let tipo;
if(this.saldo > 1000) {
tipo = 'Gold';
} else  {
tipo = 'Normal';
}
return tipo;
}

Cliente.prototype.nombreClienteSaldo = function (retiro) {
return `
Nombre; ${this.nombre} y saldo ${this.saldo}
`;
}

const persona = new Cliente('pedro', 20000);
console.log(persona);
console.log(persona.nombreClienteSaldo());

function Empresa(nombre, saldo, telefono, tipo) {
Cliente.call(this, nombre, saldo);
this.telefono = telefono;
this.tipo = tipo;
}
Empresa.prototype = Object.create(Cliente.prototype);

const empresa = new Empresa('Udemy', 100000, 1290000, 'educacion');

console.log(empresa.nombreClienteSaldo());
