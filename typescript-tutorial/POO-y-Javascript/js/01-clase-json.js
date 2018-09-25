var bicicleta = {
    color:'Rojo',
    modelo: 'Montaña',
    frenos: 'Disco',
    velocidadMaxima:'60km',
    cambiarColor:function(nuevo_color){
        this.color = nuevo_color;
        console.log('El color ahora es:'+this.color);
    }
};

bicicleta.cambiarColor('Azul');




