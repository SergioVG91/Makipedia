import Ads, { Ad } from "./ads/Ads";
import MediaPlayer from "./../MediaPlayer"

class PluginAds {
  private ads: Ads
  private player: MediaPlayer
  private media: HTMLMediaElement
  private currentAd: Ad
  private contenedorAds: HTMLElement

  constructor() {
    this.ads = Ads.getInstancia()
    this.contenedorAds = document.createElement('div')
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
  }

  run(player:MediaPlayer) {
    this.player = player
    this.media = this.player.media    
    this.player.contenedor.append(this.contenedorAds)
    this.media.addEventListener('timeupdate', this.handleTimeUpdate)
  }

  private renderAd() {
    if(this.currentAd) return;
    const ad = this.ads.getAd()
    this.currentAd = ad
    this.contenedorAds.innerHTML = `
    <div class="ads">
      <a class="ads__link" href="${this.currentAd.url}" target="_blank">
        <img class="ads__img" src="${this.currentAd.imgUrl}"/>
        <div class="ads__info">
          <h5 class="ads__title">${this.currentAd.titulo}</h5>
          <p class="ads__body">${this.currentAd.informacion}</p>
        </div>
      </a>
    </div>
    `;
    setTimeout(()=>{
      this.contenedorAds.innerHTML=''
      this.currentAd=null
    },7000)
  }

  private handleTimeUpdate() {    
    const currentTime = Math.floor(this.media.currentTime)
    if(currentTime % 30 == 0){
      this.renderAd()
    }


  }
}

export default PluginAds;
