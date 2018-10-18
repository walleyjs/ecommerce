var Product=require("../models/product");
var mongoose=require("mongoose");
// mongoose.connect("mongodb://localhost/shopping",{ useNewUrlParser: true })
var Products=[new Product({
    imagePath:"imgs/indetx.jpg",
    title:"newproduct",
    description:"newproducr products!!!!!!Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non , sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price:30
}),new Product({
    imagePath: "imgs/images.jpg",
    title:"newproduct",
    description: "newproducr newproducr products!!!!!!Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non , sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price:30
}),new Product({
    imagePath: "imgs/inde4x.jpg",
    title:"newproduct",
    description: "newproducr products!!!!!!Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non , sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price:30
}),new Product({
    imagePath: "imgs/indetx.jpg",
    title:"newproduct",
    description: "newproducr products!!!!!!Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non , sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price:30
}),
new Product({
    imagePath: "imgs/inde4x.jpg",
    title:"newproduct",
    description: "newproducr products!!!!!!Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non , sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price:30
})];
Products.forEach(function (product) {
    product.save();
});
