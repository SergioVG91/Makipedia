import MediaPlayer from "../MediaPlayer"

class AutoPause {
  private threshold:number;
  private player:MediaPlayer;

  constructor() {
    this.threshold = 0.25;
    this.handler = this.handler.bind(this);
    this.handlerVentana = this.handlerVentana.bind(this);
  }

  run(player:MediaPlayer) {
    this.player = player;    
    const observer = new IntersectionObserver(this.handler, {
      threshold: this.threshold
    });    
    observer.observe(this.player.media);
    document.addEventListener("visibilitychange",this.handlerVentana)
  }

  private handler(entries:IntersectionObserverEntry[]) {
    const entries0 = entries[0];
    const isVisible = entries0.intersectionRatio >= this.threshold
    if (isVisible) {
      this.player.fplay();
    } else {
      this.player.fpause();
    }
  }  
  private handlerVentana(){
    const isVisible:boolean = document.visibilityState === 'visible'
    if (isVisible) {
      this.player.fplay();
    } else {
      this.player.fpause();
    }
  }
}

export default AutoPause;
