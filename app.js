var express=require("express");
var app=express();
var routes=require("./routes/index.js");
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var mongoose=require("mongoose");
var Product=require("./models/product.js");
var User=require("./models/signup");
var favicon=require("serve-favicon");
var seed=require("./seed/product-seed");
var session=require("express-session");
var passport=require("passport");
var flash=require("connect-flash");
var MongoStore=require("connect-mongo")(session);
require('./config/passport');
mongoose.connect("mongodb://localhost/shopping",{ useNewUrlParser: true });
app.set("port",process.env.PORT || 4000);
app.set("view engine","ejs");
app.set("views","views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret:"supersecret",
resave: false,
saveUninitialized: false,
store:new MongoStore({mongooseConnection:mongoose.connection}),
cookie:{maxAge:180 * 60 * 1000}
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("./public"));
app.use(function (req,res,next) {
    res.locals.session=req.session;
    next();
});
app.use(routes);

var server=app.listen(app.get("port"),function () {
    console.log("you are listening to port " + app.get("port"));
});