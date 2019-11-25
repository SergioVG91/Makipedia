function AutoPlay(){

}

AutoPlay.prototype.run = function(media){   
    media.mute()
    media.play()
}



export default AutoPlay;