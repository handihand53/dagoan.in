var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)

  next()
})

app.get('/clients', (req, res) => {
  res.send(Object.keys(io.sockets.clients().connected))
})

io.on('connection', socket => {
  console.log(`A user connected with socket id ${socket.id}`)

  socket.on('say to room', (room, msg) => {
    console.log('chatroom1', 'punten')
    socket.to('chatroom1').emit('punten')
  })

  socket.broadcast.emit('user-connected', socket.id)

  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', socket.id)
  })

  socket.on('chat-room', data => {
    socket.broadcast.emit(data.roomId, data)
  })
})

http.listen(5000, () => {
  console.log('Listening on *:5000')
})
