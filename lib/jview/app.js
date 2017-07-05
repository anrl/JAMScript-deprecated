const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const socketIo=require('socket.io')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')
const path = require('path')
const http=require('http')

const io=socketIo(http.createServer(app))

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
// app.use(express.Router())
app.use(express.static(__dirname+'/client/src'))
var devMiddleware=webpackDevMiddleware(webpack(webpackConfig),{
    noInfo: true, publicPath: webpackConfig.output.publicPath
  })
app.use(this.middleware=devMiddleware)
app.use(require("webpack-hot-middleware")(webpack(webpackConfig)))
app.use(bodyParser.urlencoded({extended:false}))


io.on('connection',socket=>{
  socket.emit('news', { hello: 'world' });
})

var port = 4000
app.listen(port,function(){
  console.log('app listening on port '+port);
})

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',function(req,res){
  res.send('happy to be here');
})

// app.get('*', (req, res) => {
//   console.log('Orignal Path: ' + req.url);
//   res.sendFile(__dirname+'/client/src/index.html');
// });