const WebSocket = require('ws');
 const ws = new WebSocket.Server({port:3000});

ws.on("connection", (socket)=>{
  console.log("user connected");

  socket.on("message",(data)=>{
    console.log("data received",data);
    socket.send("data from server"+data);
  });
  socket.on("close",()=>{
    console.log("disconnected");
  });
});