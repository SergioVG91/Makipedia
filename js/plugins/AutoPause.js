class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handler = this.handler.bind(this);
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handler, {
      threshold: this.threshold
    });
    observer.observe(this.player.media);
  }

  handler(entries) {
    const entries0 = entries[0];
    console.log[entries];
    if (entries0.intersectionRatio >= this.threshold) {
      this.player.empezar();
    } else {
      this.player.pausa();
    }
  }
}

export default AutoPause;
