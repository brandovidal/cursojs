const Cliente = {
    imprimir: function () {
        return `Hola ${this.nombre} tu saldo es ${this.saldo}`;
    },
    retirar: function(retiro) {
        return this.saldo -= retiro;
    }
}

const mary = Object.create(Cliente);
mary.nombre = 'Mary';
mary.saldo = 5000;

mary.retirar(80);
console.log(mary.imprimir());