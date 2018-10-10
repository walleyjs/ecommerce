var Product=require("../models/product");
var mongoose=require("mongoose");
// mongoose.connect("mongodb://localhost/shopping",{ useNewUrlParser: true })
var Products=[new Product({
    imagePath:"wal",
    title:"newproduct",
    description:"newproducr products!!!!!!",
    price:30
}),new Product({
    imagePath: "wal",
    title:"newproduct",
    description:"newproducr products!!!!!!",
    price:30
}),new Product({
    imagePath: "wal",
    title:"newproduct",
    description:"newproducr products!!!!!!",
    price:30
}),new Product({
    imagePath: "wal",
    title:"newproduct",
    description:"newproducr products!!!!!!",
    price:30
}),
new Product({
    imagePath: "wal",
    title:"newproduct",
    description:"newproducr products!!!!!!",
    price:30
})];
Products.forEach(function (product) {
    product.save();
});
