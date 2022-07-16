// const { Socket } = require("socket.io");
// import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";

const socket = io()

const myVideo = document.createElement('video');
myVideo.muted = true;
const videoGrid = document.getElementById('videoGrid')
let myVideoStream

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true 
}).then(stream => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream)
})

Socket.emit('join-room')

const addVideoStream = (video, stream) => {
    video.srcObject = stream
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video);
}