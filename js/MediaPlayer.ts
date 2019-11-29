class MediaPlayer {  
  media:HTMLVideoElement
  plugins:Array<any>
  contenedor:HTMLElement

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initContenido()
    this.initPlugins();
    
    
  }
  private initPlugins() {    
    this.plugins.forEach(element => {
      element.run(this);
    });
  }

  private initContenido(){
    this.contenedor = document.createElement('div')
    this.contenedor.style.position = 'relative'
    this.media.parentNode.insertBefore(this.contenedor,this.media)
    this.contenedor.appendChild(this.media);
  }

  fplay() {
    this.media.play();
  }
  fpause() {
    this.media.pause();
  }
  paused() {
    return this.media.paused;
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  muted() {
    return this.media.muted;
  }
  toggleMute() {
    if (this.media.muted)
      this.unmute();
    else
      this.mute();
  }
  togglePlay() {
    if (this.media.paused)
      this.fplay();
    else
      this.fpause();
  }
}

export default MediaPlayer;
