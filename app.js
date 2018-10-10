var express=require("express");
var app=express();
var routes=require("./routes/index.js")
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var mongoose=require("mongoose");
var Product=require("./models/product.js");
var favicon=require("serve-favicon");
var seed=require("./seed/product-seed");
mongoose.connect("mongodb://localhost/shopping",{ useNewUrlParser: true });
app.set("port",process.env.PORT || 4000);
app.set("view engine","ejs");
app.set("views","views");
app.use(express.static("./public"));
app.use(routes)
var server=app.listen(app.get("port"),function () {
    console.log("you are listening to port " + app.get("port"));
});