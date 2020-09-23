class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimir() {
        return `Hola ${this.nombre} tu saldo es ${this.saldo}`; 
    }

    tipoCliente() {
        let tipo;
        if(this.saldo > 1000) {
        tipo = 'Gold';
        } else  {
        tipo = 'Normal';
        }
        return tipo;
    }

    static bienvenida() {
        return 'Bienevenido al cajero';
    }
}

const cliente = new Cliente('Maria', 400);
console.log(cliente.imprimir());
console.log(Cliente.bienvenida());

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }
    static bienvenida() {
        return 'Bienevenido a empresa';
    }
}

const empresa = new Empresa('Empresa1', 400, 987654321, 'Contruc.');
console.log(empresa.imprimir());
console.log(Empresa.bienvenida());

