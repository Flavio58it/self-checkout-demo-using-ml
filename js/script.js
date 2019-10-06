// var video = document.querySelector("#videoElement");
// navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

// if (navigator.getUserMedia) {
//     navigator.getUserMedia({ video: true },handleVideo,videoError);
//     }
    
//     function handleVideo(stream){
//         video.srcObject = stream;
//     }
//     function videoError(e){

//     }

document.getElementById('capture').addEventListener('click',function(){
    context = canvas.getContext('2d')
    context.drawImage(video,0,0,400,300);

});