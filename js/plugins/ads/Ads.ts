export interface Ad {
  url: string;
  imgUrl: string;
  titulo: string;
  informacion: string;
}

const LISTA_DE_ADS = [
  {
    url: "/",
    imgUrl: "/images/ad1.png",
    titulo: "Evento de Maki 1",
    informacion: "Click para jugar"
  },
  {
    url: "/",
    imgUrl: "/images/ad2.png",
    titulo: "Evento de Maki 2",
    informacion: "Click para jugar"
  },
  {
    url: "/",
    imgUrl: "/images/ad3.png",
    titulo: "Evento de Maki 3",
    informacion: "Click para jugar"
  },
  {
    url: "/",
    imgUrl: "../images/ad4.png",
    titulo: "Evento de Maki 4",
    informacion: "Click para jugar"
  }
];

class Ads {
  private static instancia: Ads
  private ads: Ad[];

  private constructor() {
    this.initAds();
  }

  static getInstancia() {
    if(!Ads.instancia){
      Ads.instancia = new Ads()
    }
    return Ads.instancia
  }

  getAd() {
    if (this.ads.length == 0) {
      this.initAds();
    }    
    return this.ads.pop();
  }

  private initAds() {
    this.ads = [...LISTA_DE_ADS];
  }
}

export default Ads;
