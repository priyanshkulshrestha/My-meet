const express = require('express');
const app = express();
const server = require('http').Server(app);
const { v4: uuidv4 } = require('uuid');
const ejs = require('ejs');
const io = require('socket.io')(server)
app.set('view engine', 'ejs')
app.use(express.static("public"))


app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`)
})

app.get('/:room', (req,res ) => {
    res.render('index', {roomId : req.params.room})
})

io.on('connection', socket => {
    socket.on('join-room',()=>{
        console.log("joined room")
    })
})

app.listen(8000, () => {
    console.log('server is listening on port 8000')
})