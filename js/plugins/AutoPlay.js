function AutoPlay() {}

AutoPlay.prototype.run = function(media) {
  if (!media.getSonido) {
    media.setSonido = true;
  }
  media.empezar();
};

export default AutoPlay;
