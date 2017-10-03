// custom server side script used to fetch data from remote REST API

var mongoose=require("mongoose");
var mongooseConnect = require("../../../../private/mongooseConnect");
var Client=require("models/client")
function beforeRender(req, res, done) {
   
    var connectionUri=mongooseConnect.uri();
    mongoose.connect(connectionUri);
    Client.find({},null, {sort: {firstName: 1}},function(err,clients){
        if(err){
            console.log(err);
        }
        else{
            console.log(clients[0]);
        req.data = Object.assign({}, req.data,{clients:clients});
        done();
        }
    })
}