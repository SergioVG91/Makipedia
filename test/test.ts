interface Observer{
    update:(data:any) => void
}

interface Sujeto{
    suscribir:(observer:Observer) => void
    desuscribir:(observer:Observer) => void
    notificar:(observer:Observer[]) => void
}

class BitCoin implements Sujeto{
    suscriptores: Observer[]

    constructor(){
        this.suscriptores = []
    }

    suscribir(observer){
        this.suscriptores.push(observer)
    }

    desuscribir(observer){
        const index = this.suscriptores.indexOf((data:Observer)=>{
            data==observer
        })
        this.suscriptores.splice(index,1)
    }

    notificar(observer){
        
    }
}

class Suscriptores implements Observer{
    elemento:HTMLInputElement
    constructor(){
        this.elemento = document.querySelector('input2')
    }
    update(data){
        this.elemento.value = data
    }
}

