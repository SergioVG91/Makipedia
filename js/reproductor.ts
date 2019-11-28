import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import PluginAds from "./plugins/PluginAds";
const video = document.querySelector("video");
const btn_play: HTMLElement = document.querySelector("#btn--play");
const btn_mute: HTMLElement = document.querySelector("#btn--mute");
const player: MediaPlayer = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new PluginAds()]
});

btn_play.onclick = () => {
  player.togglePlay();
};

btn_mute.onclick = () => {
  player.toggleMute();
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .catch(error => console.log(error.message));
}
