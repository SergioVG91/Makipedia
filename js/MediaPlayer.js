function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
  this.initPlugins();
}

MediaPlayer.prototype.initPlugins = function() {
  const reproductor = {
    empezar: () => this.fplay(),
    pausa: () => this.fpause(),
    media: this.media,
    get getSonido() {
      return this.media.muted;
    },
    set setSonido(value) {
      this.media.muted = value;
    }
  };

  this.plugins.forEach(element => {
    element.run(reproductor);
  });
};

MediaPlayer.prototype.fplay = function() {
  this.media.play();
};

MediaPlayer.prototype.fpause = function() {
  this.media.pause();
};

MediaPlayer.prototype.paused = function() {
  return this.media.paused;
};

MediaPlayer.prototype.mute = function() {
  this.media.muted = true;
};

MediaPlayer.prototype.unmute = function() {
  this.media.muted = false;
};

MediaPlayer.prototype.muted = function() {
  return this.media.muted;
};
MediaPlayer.prototype.toggleMute = function() {
  if (this.media.muted) this.unmute();
  else this.mute();
};

MediaPlayer.prototype.togglePlay = function() {
  if (this.media.paused) this.fplay();
  else this.fpause();
};

export default MediaPlayer;
