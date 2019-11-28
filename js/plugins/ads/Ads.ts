interface Ad {
  url: string;
  imgUrl: string;
  titulo: string;
  informacion: string;
}

const LISTA_DE_ADS = [
  {
    url: "/",
    imgUrl: "/images/ad1",
    titulo: "Evento de Maki 1",
    informacion: "Click para jugar"
  },
  {
    url: "/",
    imgUrl: "/images/ad2",
    titulo: "Evento de Maki 2",
    informacion: "Click para jugar"
  },
  {
    url: "/",
    imgUrl: "/images/ad3",
    titulo: "Evento de Maki 3",
    informacion: "Click para jugar"
  },
  {
    url: "/",
    imgUrl: "/images/ad4",
    titulo: "Evento de Maki 4",
    informacion: "Click para jugar"
  }
];

class Ads {
  private ads: Ad[];
  private currentAd: Ad;

  private constructor() {
    this.initAds();
  }

  getInstancia() {}

  private getAd() {
    if (this.ads.length == 0) {
      this.initAds();
    }
    this.currentAd = this.ads.pop();
    return this.currentAd;
  }

  private initAds() {
    this.ads = [...LISTA_DE_ADS];
  }
}

export default Ads;
