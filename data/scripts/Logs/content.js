// custom server side script used to fetch data from remote REST API

var mongoose=require("mongoose");
var mongooseConnect = require("../../../../private/mongooseConnect");
var Log=require("models/log");
var moment=require("moment");
function beforeRender(req, res, done) {
   
    var connectionUri=mongooseConnect.logUri();
    mongoose.connect(connectionUri);
    Log.find({},function(err,logs){
        if(err){
            console.log(err);
        }
        else{
                logsFiltered=[];
                logs.forEach(function(value){
                        let date=value.timeStamp.split(",");
                        let currentDate=moment(req.data.date).format("MM/DD/YYYY");
                        if(date[0]==currentDate){
                            logsFiltered.push(value);
                        }
                    })
                    req.data = Object.assign({}, req.data,{logs:logsFiltered});
                    done();
                }
            });
       
        }

