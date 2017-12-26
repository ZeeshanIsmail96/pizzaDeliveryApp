var mongoose = require('mongoose');

var record = {
    title : "PizzaApp",
    statusCode : 200
}

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://zeeshan:libra1810@ds161426.mlab.com:61426/pizzaappdb',{useMongoClient:true});

var orderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    userid:{
        type: Number,
        required: true
    },
    useraddress:{
        type: String,
        required: true
    },
    contactno:{
        type: String,
        required: true
    },
    orderdate:{
        type: String,
        required: true
    },
    flavour:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    pHouseName: {
        type: String,
        required:true
    },
    pHouseAddress:{
        type: String,
        required:true
    },
    orderprice:{
        type: Number,
        required: true
    }

},{Collection:'Orders'});

var model = mongoose.model('Orders',orderSchema);

record.addData = function(req,res){

    var postBody= req.body
    var data = {
        name : postBody.name,
        username : postBody.username,
        userid : postBody.userid,
        useraddress :postBody.useraddress,
        contactno : postBody.contactno,
        orderdate: postBody.orderdate,
        flavour : postBody.flavour,
        quantity : postBody.quantity,
        pHouseName : postBody.pHouseName,
        pHouseAddress: postBody.pHouseAddress,
        orderprice : postBody.orderprice
    }

    var saveData= new model(data);
    saveData.save(function(err,newData){
        if(err){
            res.send({
                statusCode: 500,
                message:"Unable to take Order"
            })
        }
        else{
            res.send({
                statusCode: 200,
                message:"Your Order has placed",
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
                message:"Order has been displayed",
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
                message:"Something went wrong"
            })
        }
        else{
            res.send({
                statusCode: 200,
                message:"Order has been successfully deleted",
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
        userid : postBody.userid,
        useraddress :postBody.useraddress,
        contactno : postBody.contactno,
        flavour : postBody.flavour,
        quantity : postBody.quantity,
        pHouseName : postBody.pHouseName,
        pHouseAddress: postBody.pHouseAddress
    }
    var updateid = req.params.id;

    model.findByIdAndUpdate(updateid,data,function(err,newData){
        if(err){
            res.send({
                statusCode: 500,
                message:"Order not found"
            })
        }
        else{
            res.send({
                statusCode: 200,
                message:"Order has been updated",
                data:newData,
            })
        }

    })
}
module.exports= record;