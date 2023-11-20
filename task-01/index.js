var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb+srv://nikhil:1234@cluster0.wthhvdw.mongodb.net/');

var db = mongoose.connection;
db.on('error',()=>{
    console.log("Error connecting to database");
})
db.once('open',()=>{
    console.log("Connected to Database!");
})


app.post("/sign_up" ,(req,res)=>{
    var name = req.body.name;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var password = req.body.password;

    var data = {
        "name": name, 
        "email" : email,
        "mobile" : mobile,
        "password" : password
    }

    db.collection('users').insertOne(data,(err,collection)=>{
        if (err) throw err;
        console.log("Record inserted successfully !!");
    })
    

    return res.redirect('success.html')
})

app.get("/" ,(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin" : "*"
    })
    return res.redirect('index.html')
}).listen(3000)

console.log("port running on 3000");