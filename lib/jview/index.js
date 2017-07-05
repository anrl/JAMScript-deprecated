const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const socketIo = require('socket.io')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())

app.use(express.static(__dirname+'/client/src'))
app.use(webpackDevMiddleware(webpack(webpackConfig)))
app.use(bodyParser.urlencoded({extended:false}))
app.use(require("webpack-hot-middleware")(webpack(webpackConfig)))

io.on('connection', socket => {
	console.log('connected')
	socket.emit('news', { hello: 'world' });

	socket.on('message', body =>{
		socket.broadcast.emit('message', {
			body,
			from: socket.id.slice(8)
		})
	})
	
	socket.on('newDataPoint', body =>{
		console.log('new data point received: '+body.x+','+body.y)
		socket.broadcast.emit('newDataPoint', {
			body,
			from: socket.id.slice(8)
		})
	})

	socket.on('disconnect', function() {
		console.log('disconnect')
	});

})



server.listen(3000)

app.get('*', (req, res) => {
  console.log('Orignal Path: ' + req.url);
  res.sendFile(__dirname+'/client/src/index.html');
});