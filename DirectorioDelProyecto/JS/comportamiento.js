const btnEmpezar = document.getElementById('btnEmpezar')
const azul = document.getElementById('nw')
const violeta = document.getElementById('ne')
const amarillo = document.getElementById('sw')
const verde = document.getElementById('se')

var cont = 0
var n = 4
var respuesta = []
var sec = []
var juego = null
var nivel = 1

class Juego{
    constructor(){
        this.generarSecuencia()
        this.siguienteNivel()
        this.colores = {azul,violeta,amarillo,verde}
    }

    generarSecuencia(){
        this.secuencia = new Array(n)
        for( var i = 0; i<n;i++){
            this.secuencia[i] = (Math.floor(Math.random() * (4 - 1 + 1) + 1))
            sec[i] = this.secuencia[i]
        }
       console.log(this.secuencia)
    }
    siguienteNivel(){
        this.iluminarSecuencia(this.secuencia)
        this.escuchar()
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
        setTimeout(() => this.desiluminar(color),350)
    }
    desiluminar(color){
        this.colores[color].classList.remove('luz')
        
    }

    escuchar(){
            azul.onclick = function(){
                juego.iluminar('azul')
                respuesta[cont] = 1
                if(respuesta[cont] == sec[cont]){
                    cont++
                    if(cont == n){
                        console.log(respuesta)
                        juego.comparar(sec,respuesta)
                        return "final nivel"
                    }
                }
                else{
                    juego.perder()
                    return console.log("Perdiste")
                }
            }
            violeta.onclick = function(){
                juego.iluminar('violeta')
                respuesta[cont] = 2
                if(respuesta[cont] == sec[cont]){
                    cont++
                    if(cont == n){
                        console.log(respuesta)
                        juego.comparar(sec,respuesta)
                        return "final nivel"
                    }
                }
                else{
                    juego.perder()
                    return console.log("Perdiste")
                }
            }
            amarillo.onclick = function(){
                juego.iluminar('amarillo')
                respuesta[cont] = 3
                if(respuesta[cont] == sec[cont]){
                    cont++
                    if(cont == n){
                        console.log(respuesta)
                        juego.comparar(sec,respuesta)
                        return "final nivel"
                    }
                }
                else{
                    juego.perder()
                    return console.log("Perdiste")
                }
            }
            verde.onclick = function(){
                juego.iluminar('verde')
                respuesta[cont] = 4
                if(respuesta[cont] == sec[cont]){
                    cont++
                    if(cont == n){
                        console.log(respuesta)
                        juego.comparar(sec,respuesta)
                        return "final nivel"
                    }
                }
                else{
                    juego.perder()
                    return console.log("Perdiste")
                }
        }

    }

    comparar(a, b){
            n+=2
            cont = 0
            b = []
            a = []
            nivel++
            this.generarSecuencia()
            this.siguienteNivel()
            console.log('comparado')
    }

    perder(juego){
        console.log("perdio")
        juego = null
        n = 4
        cont = 0
        sec = []
        nivel = 1
        respuesta = []
        btnEmpezar.classList.remove('hide') 
    }
}



function empezarJuego(){
    btnEmpezar.onclick = function () {
        btnEmpezar.classList.add('hide')
        juego = new Juego()
    }
}

empezarJuego()