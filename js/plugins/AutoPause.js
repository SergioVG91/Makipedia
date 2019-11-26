class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handler = this.handler.bind(this);
    this.handlerVentana = this.handlerVentana.bind(this);
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handler, {
      threshold: this.threshold
    });
    observer.observe(this.player.media);
    document.addEventListener("visibilitychange",this.handlerVentana)
  }

  handler(entries) {
    const entries0 = entries[0];
    const isVisible = entries0.intersectionRatio >= this.threshold
    if (isVisible) {
      this.player.empezar();
    } else {
      this.player.pausa();
    }
  }  
  handlerVentana(){
    const isVisible = document.visibilityState === 'visible'
    if (isVisible) {
      this.player.empezar();
    } else {
      this.player.pausa();
    }
  }
}

export default AutoPause;
