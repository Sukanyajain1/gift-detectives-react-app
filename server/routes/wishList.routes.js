const WishListController = require("../controllers/wishList.controller");


// all the routes in a module.exports arrow function
module.exports = (app)=>{
    app.get("/api/hello", WishListController.sayHello);
    app.get("/api/wishLists", WishListController.findAllWishLists);
    app.post("/api/wishLists", WishListController.createWishList);   //create a new WishList
    app.get("/api/wishLists/random", WishListController.findRandomWishList);  // find a random WishList

    /* 
    
    Best Practice: Keep all the static routes on the top and all the dynamic routes with path variables on the bottom so the paths with the same roots and routing syntax don't get confused
            ---> (get route with /api/wishLists/someVariable --> the findRandom and findOne routes conflict with each other)
    
    */

    app.get("/api/wishLists/:id", WishListController.findOneWishList);
    app.put("/api/wishLists/:id", WishListController.updateWishList);
    app.delete("/api/wishLists/:id", WishListController.deleteWishList);





}