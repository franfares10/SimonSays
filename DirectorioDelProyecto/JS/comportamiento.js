
const btnEmpezar = document.getElementById('btnEmpezar')
const azul = document.getElementById('nw')
const violeta = document.getElementById('ne')
const amarillo = document.getElementById('sw')
const verde = document.getElementById('se')

var n = 4

class Juego{
    constructor(){
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
        this.colores = {azul,violeta,amarillo,verde}
    }

    inicializar() {
        
    }

    generarSecuencia(){
        this.secuencia = new Array(n)
        for( var i = 0; i<n;i++){
            this.secuencia[i] = (Math.floor(Math.random() * (4 - 1 + 1) + 1))
        }
       console.log(this.secuencia)
        n+=2 
    }
    siguienteNivel(){
        this.iluminarSecuencia(this.secuencia)
    }


    iluminarSecuencia(secuencia){
        for(var i = 0; i< secuencia.length;i++){
            const color = this.iluminarColor(secuencia[i])
            //console.log(color)
            setTimeout(() => this.iluminar(color),1000*i)
        }
    }

    iluminarColor(numero){
        //console.log("ENTRE")
        switch(numero){
            case 1:
                return 'azul'
            case 2:
               return 'violeta'
            case 3:
                return 'amarillo'
            case 4:
                return 'verde'
        }
    }

    iluminar(color){
        this.colores[color].classList.add('luz')
        console.log("ilumine")
       // console.log(color)
       console.log(`${this.colores[color].classList}`)
        setTimeout(() => this.desiluminar(color),350)
    }
    desiluminar(color){
        this.colores[color].classList.remove('luz')
        
    }
}


function empezarJuego(){
    btnEmpezar.onclick = function () {
        btnEmpezar.classList.add('hide')
        var game = new Juego()
    }
}

empezarJuego()