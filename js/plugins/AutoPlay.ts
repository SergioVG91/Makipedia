import MediaPlayer from "../MediaPlayer"
class AutoPlay {
  constructor(){}
  run(media:MediaPlayer){    
    if (!media.muted()) {
      media.mute()
    }
    media.fplay();
  }
}

export default AutoPlay;
