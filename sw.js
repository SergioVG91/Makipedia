import '@babel/polyfill'
const VERSION = "v1"

self.addEventListener('install',event=>{
    event.waitUntil(precache())
})

self.addEventListener('fetch', event=>{
    const request = event.request
    //diferente de get no hacemos nada y salimos
    if(request.method != "GET"){
        return;
    } 
    //buscar en cache
    event.respondWith(cachedResponse(request))

    //actualizar el cache
    event.waitUntil(updateCache(request))
})

async function precache(){
    const cache = await caches.open(VERSION)
    cache.addAll([        
        /* '/common/reproductor.html',
        '/js/MediaPlayer.js',
        '/js/reproductor.js',
        '/js/plugins/AutoPause.js',
        '/js/plugins/AutoPlay.js',
        '/video/music_start.mp4',
        '/css/styles.css' */
    ])
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}

async function updateCache(request){
    try{
        const cache = await caches.open(VERSION)
        const response = await fetch(request)   
        //console.log(response.status)
        return cache.put(request,response)          
    }
    catch(error){        
        return;
    }
    
}