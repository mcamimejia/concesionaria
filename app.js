let autos = require('./autos');

const concesionaria = {
    autos: autos,
    buscarAuto: function(patenteIngresada){
        for(let i=0; i<this.autos.length; i++){
            if(this.autos[i].patente == patenteIngresada){
                return this.autos[i];
            }
        };
        return null;
        },
    venderAuto: function(patente1){
        autoSelected = this.buscarAuto(patente1)
        indice = this.autos.indexOf(autoSelected);
        this.autos[indice].vendido = true;
    },
    autosParaLaVenta: function(){
        let autosVenta = this.autos.filter(function(element){
            return element.vendido == false;
        })
        return autosVenta;
    },
    autosNuevos: function(){
        let autosEnVenta = this.autosParaLaVenta();
        autos0Km = autosEnVenta.filter(function(element){
            return element.km < 100;
        });  
    return autos0Km;
    },
    listaDeVentas: function(){
        let autosVendidos = this.autos.filter(function(element){
            return element.vendido == true;
        });
        let precios = autosVendidos.map(function(element){
            return element.precio;
        });
        return precios;
    },
    totalDeVentas: function(){
        let precios = this.listaDeVentas();
        return precios.reduce((acum,element) => acum + element, 0)
    },
    puedeComprar: function(auto, persona){
        return (auto.precio <= persona.capacidadDePagoTotal) && (auto.precio/auto.cuotas <= persona.capacidadDePagoEnCuotas);

    },
    autosQuePuedeComprar: function(persona){
        let autosEnVenta = this.autosParaLaVenta();
        return autosEnVenta.filter(element => this.puedeComprar(element, persona) == true)
    }
}

let auto1 = {
    marca: "Ford",
    modelo: "Fiesta",
    color: "Azul",
    anio: 2019,
    km: 200,
    precio: 150000,
    cuotas: 12,
    patente: "APL123",
    vendido: false
};

let persona1 = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }

//concesionaria.venderAuto("JJK116");

console.log(concesionaria.autosQuePuedeComprar(persona1));



