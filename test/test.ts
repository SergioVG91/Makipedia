interface Observer{
    update:(data:any) => void
}

interface Sujeto{
    suscribir:(observer:Observer) => void
    desuscribir:(observer:Observer) => void
 //   notificar:(observer:Observer[]) => void
}

class BitCoin implements Sujeto{
    suscriptores: Observer[] =[]
    elemento:HTMLInputElement

    constructor(elemento){
        //this.suscriptores = [] inicializarlo arriba mejor
        this.elemento = elemento                
        this.elemento.addEventListener('input', () => {          
          this.notificar(this.elemento.value);
        });
    }

    suscribir(observer){
        this.suscriptores.push(observer)
    }

    desuscribir(observer){
        //const index = this.suscriptores.indexOf(observer)
        const index = this.suscriptores.findIndex(obs => {
            return obs === observer;
          });
        
        this.suscriptores.splice(index,1)
    }

    notificar(data){        
        this.suscriptores.forEach((element)=>{
            element.update(data)
        })
    }
}

class Suscriptores implements Observer{
    elemento:HTMLInputElement
    constructor(elemento){
        this.elemento = elemento
    }
    update(data){
        this.elemento.value = data
    }
}


const elemento1 = document.getElementById("#input")
const elemento2 = document.getElementById("#input2")
const elemento3 = document.getElementById("#input3")
const elemento4 = document.getElementById("#input4")
const bit = new BitCoin(elemento1)
const sus = new Suscriptores(elemento2)
const sus2 = new Suscriptores(elemento3)
const sus3 = new Suscriptores(elemento4)
bit.suscribir(sus)
bit.suscribir(sus2)
bit.suscribir(sus3)
setTimeout(()=>{
    console.log("desus")
    bit.desuscribir(sus2)
},3000)

setTimeout(()=>{
    console.log("sus")
    bit.suscribir(sus2)
},7000)