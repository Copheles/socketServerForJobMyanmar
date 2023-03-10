import {
  Server
} from "socket.io";

const io = new Server({
  cors:  ["http://localhost:3000", "https://jobmyanmarfront.onrender.com"]
});


io.on("connection", (socket) => {
  console.log("newConnection", socket.id)

  socket.on('postComment', (data) => {
    console.log(data)
    socket.broadcast.emit('postCommentServer', data)
  })

  socket.on('deleteComment', (data) => {
    console.log('Delete comment id', data)
    console.log(data)
    socket.broadcast.emit('deleteCommentServer', data)
  })

  socket.on('updateComment', (data) => {
    console.log('Update comment data ', data)
    socket.broadcast.emit('updateCommentServer', data)
  })


  socket.on('disconnect', () => {
    
  })

});

io.listen(4000);