const img_maki_0 = document.getElementById('img_round_maki_ur_0')
const img_maki_1 = document.getElementById('img_round_maki_ur_1')
const img_maki_2 = document.getElementById('img_round_maki_ur_2')
const img_maki_3 = document.getElementById('img_round_maki_ur_3')
const img_maki_4 = document.getElementById('img_round_maki_ur_4')
const img_maki_5 = document.getElementById('img_round_maki_ur_5')
const img_maki_6 = document.getElementById('img_round_maki_ur_6')
const img_maki_7 = document.getElementById('img_round_maki_ur_7')
const btn_empezar_juego = document.getElementById('btn_empezar_juego_maki')

class Juego{
    constructor(){
        this.NIVEL_MAXIMO = 10
        this.clickMaki = this.clickMaki.bind(this)
        this.iniciar()
        this.generarSecuencia()
        this.generarNivel()
    }

    apagarImagenes(){        
        this.imagenes.img_maki_0.classList.add('apagar')
        this.imagenes.img_maki_1.classList.add('apagar')
        this.imagenes.img_maki_2.classList.add('apagar')
        this.imagenes.img_maki_3.classList.add('apagar')
        this.imagenes.img_maki_4.classList.add('apagar')
        this.imagenes.img_maki_5.classList.add('apagar')
        this.imagenes.img_maki_6.classList.add('apagar')
        this.imagenes.img_maki_7.classList.add('apagar')        
    }

    iluminarImagenes(){        
        this.imagenes.img_maki_0.classList.remove('apagar')
        this.imagenes.img_maki_1.classList.remove('apagar')
        this.imagenes.img_maki_2.classList.remove('apagar')
        this.imagenes.img_maki_3.classList.remove('apagar')
        this.imagenes.img_maki_4.classList.remove('apagar')
        this.imagenes.img_maki_5.classList.remove('apagar')
        this.imagenes.img_maki_6.classList.remove('apagar')
        this.imagenes.img_maki_7.classList.remove('apagar')        
    }

    
    iluminarMaki(numMaki){        
        const nombre = `img_maki_${numMaki}` 
        this.imagenes[nombre].classList.remove('apagar')                
        setTimeout(()=>this.imagenes[nombre].classList.add('apagar'),600)
    }

    generarSecuencia(){
        this.secuencia = new Array(this.NIVEL_MAXIMO).fill(0).map(()=>( Math.floor(Math.random() *8)))                
    }

    delay(ms){
        return new Promise(function (resolve){setTimeout(resolve,ms)})
    }

    async generarNivel(){  
        this.subnivel = 0
        await this.delay(1000)      
        for(let i=0;i<this.nivel;i++){        
            const numMaki = this.secuencia[i]
            this.iluminarMaki(numMaki)
            await this.delay(1200)     
       //     console.log(i)       
        }
        this.activarListener()
    }

    activarListener(){
        this.imagenes.img_maki_0.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_1.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_2.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_3.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_4.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_5.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_6.addEventListener("click",this.clickMaki)
        this.imagenes.img_maki_7.addEventListener("click",this.clickMaki)
    }

    desactivarListener(){
        this.imagenes.img_maki_0.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_1.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_2.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_3.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_4.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_5.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_6.removeEventListener("click",this.clickMaki)
        this.imagenes.img_maki_7.removeEventListener("click",this.clickMaki)
    }

    clickMaki(evento){
        const numMaki = evento.target.dataset.card
        this.iluminarMaki(numMaki)
        if(numMaki == this.secuencia[this.subnivel]){
            console.log("lmao")
            this.subnivel++
            if(this.subnivel === this.nivel){
                this.desactivarListener()
                this.nivel++                
                if(this.nivel === this.NIVEL_MAXIMO+1){
                    this.ganarJuego()
                }
                else{
                    this.generarNivel()                 
                }
            }            
        }
        else{            
            this.perderJuego()
        }
    }

    perderJuego(){
        console.log("Perdiste")
        this.desactivarListener()
    }

    ganarJuego(){
        console.log("Ganaste")
        this.iluminarImagenes()
        this.desactivarListener()
    }


    iniciar(){
        this.nivel = 6
        this.imagenes = {
            img_maki_0,img_maki_1,img_maki_2,img_maki_3,
            img_maki_4,img_maki_5,img_maki_6,img_maki_7
        }
        this.apagarImagenes()
        this.desactivarListener()
    }

}

function empezarJuegoMaki(){
    const juego_maki = new Juego()
    juego_maki.iniciar()
}

