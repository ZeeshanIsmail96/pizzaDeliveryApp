var mongoose = require('mongoose');

var record = {
    title : "PizzaApp",
    statusCode : 200
}
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://zeeshan:libra1810@ds161426.mlab.com:61426/pizzaappdb',{useMongoClient:true});

var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    contactno:{
        type: String,
        required:true
    }
   
   

},{Collection:'User'});

var model = mongoose.model('User',userSchema);


record.addData = function(req,res){

    var postBody= req.body;
    var data = {
        name : postBody.name,
        username : postBody.username,
        email : postBody.email,
        password : postBody.password,
        contactno : postBody.contactno
    }

    var saveData= new model(data);
    saveData.save(function(err,newData){
        if(err){
            res.send({
                statusCode: 500,
                message:"Unable to save Data"
            })
        }
        else{
            res.send({
                statusCode: 200,
                message:"Data has been saved",
                data:newData,
            })
        }

    })
}


record.getData = function(req,res){

    model.find({},function(err,newData){
        if(err){
            res.send({
                statusCode: 500,
                message:"Something went wrong"
            })
        }
        else{
            res.send({
                statusCode: 200,
                message:"Data has been displayed",
                data:newData,
            })
        }

    })
}

record.deleteData = function(req,res){

    var postBody= req.params.id;
    model.findByIdAndRemove(postBody,function(err,newData){
        if(err){
            res.send({
                statusCode: 500,
                message:"Unable to delete Data"
            })
        }
        else{
            res.send({
                statusCode: 200,
                message:"Data has been delete",
                data:newData,
            })
        }

    })
}
record.updateData = function(req,res){

        var postBody= req.body;
        console.log(postBody)
        var data = {
            name : postBody.name,
            username : postBody.username,
            email : postBody.email,
            password : postBody.password,
            contactno : postBody.contactno
        }
        var updateid = req.params.id;
    
        model.findByIdAndUpdate(updateid,data,function(err,newData){
            if(err){
                res.send({
                    statusCode: 500,
                    message:"Data not found"
                })
            }
            else{
                res.send({
                    statusCode: 200,
                    message:"Data has been updated",
                    data:newData,
                })
            }
    
        })
    }


module.exports= record;