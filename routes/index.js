var express=require("express");
var router=express.Router();
var Product=require("../models/product");
var User=require("../models/signup");
// var csrf=require("csurf");
// var csrfProtection=csrf();
var passport = require("passport");
var Cart =require("../models/cart");
var LocalStrategy=require("passport-local").Strategy;
// router.use(csrfProtection);
router.get("/", function (req, res) {
    Product.find({},function (err,docs) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", {
                title: "Shopping Cart",
                docs:docs
            });
        }
    });
    
});
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: email }, function (err, user) {
      if (err) {
          console.log(err);
        }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
router.get("/user/signup",function (req,res) {
    res.render("user/signup",{
        // csrfToken:req.csrfToken(),
        title:"shopping signup"
    });
});
router.post("/user/signup",function (req,res) {
    var email=req.body.email;
    var password=req.body.password;
    var signIn={
        email:email,
        password:password
    };
    User.create(signIn,function (err,user) {
        if (err) {
            console.log(err);
            res.redirect("/user/signup");
        } else {
            console.log(user);
            res.redirect("/");
        }
    });
});
router.get("/user/profile",function (req,res) {
    res.render('user/profile');
});
router.get("/user/signin", function (req, res) {
    res.render("user/signin", {
        // csrfToken: req.csrfToken(),
        title: "shopping signup"
    });
});
router.post("/user/signin",passport.authenticate("local", {successRedirect : '/',
        failureRedirect: '/user/signin'}
));
router.get("/add-to-cart/:id",function (req,res) {
    var productId=req.params.id;
    // console.log(productId);
    var cart=new Cart(req.session.cart ? req.session.cart : {});
    Product.findById(productId,function (err,product) {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            cart.add(product,product.id);
            req.session.cart=cart;
            console.log(req.session);
            res.redirect("/");
        }
    });
});
router.get("/shopping-cart",function (req,res) {
    if (!req.session.cart) {
        return res.render("shopping/shopping-cart",{
            products:null,
            title:"shopping-cart"
        });
    }
    var cart=new Cart(req.session.cart);
    console.log(cart.generateArray());
    res.render("shopping/shopping-cart", {
        products:cart.generateArray(),
        totalPrice:cart.totalPrice,
        title: "shopping-cart"
    });
});
router.get("/checkout",function (req,res) {
    if (!req.session.cart) {
        res.redirect("/shopping-cart");
    }
    var cart = new Cart(req.session.cart);
    res.render("shopping/checkout",{totalPrice:cart.totalPrice,title:"checkout"});
});
module.exports = router;