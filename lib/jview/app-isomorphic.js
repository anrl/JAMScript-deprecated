var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbModel = require('./DB.model');
var db = 'mongodb://localhost/example'
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackConfig = require('./webpack.config.js')
var path = require('path')

webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
app.use(express.Router())
app.use(express.static(__dirname+'/client/src'))
var devMiddleware=webpackDevMiddleware(webpack(webpackConfig),{
    noInfo: true, publicPath: webpackConfig.output.publicPath
  })
app.use(this.middleware=devMiddleware)
app.use(require("webpack-hot-middleware")(webpack(webpackConfig)))
app.use(bodyParser.urlencoded({extended:false}))
app.get('*', function(req, res){
  var index = this.middleware.fileSystem.readFileSync(path.join(webpackConfig.output.path, 'index.html'));
  res.end(index);
}.bind(this));

mongoose.connect(db)

var port = 4000;
app.listen(port,function(){
  console.log('app listening on port'+port);
})

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',function(req,res){
  res.send('happy to be here');
})

app.get('/crm', function(req, res){
  console.log('getting all books');
  dbModel.find({}).exec(function(err, results){
    if(err){
      res.send('error has occured');
    } else {
      console.log(results);
      res.json(results);
    }
  })
})