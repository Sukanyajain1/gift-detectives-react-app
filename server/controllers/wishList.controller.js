const WishList = require("../models/wishList.model");

// all the callback functions for db parsing will be here for only the WishList model

module.exports.sayHello = (req, res)=>{
    res.json({msg: "Hello to all the WishLists in the houseeeeeeeee!"})
}


module.exports.findAllWishLists = (req, res) =>{
    WishList.find()
        .then(allWishLists=>{
            res.json({results: allWishLists})
        })
        .catch(err=>{
            res.json({msg: "Something went wrong in the WishList controller: ", error: err})
        })
}

module.exports.createWishList = (req, res)=>{
    // req.body represents the form information
    WishList.create(req.body)
        .then(newCreatedWishList => {
            res.json({results: newCreatedWishList})
        })
        .catch(err=> {
            res.json({msg: "Something went wrong in the WishList controller: ", error: err})
        })
}

module.exports.findOneWishList = (req, res)=>{
    // req.body represents the form information
    WishList.findOne({_id: req.params.id})
        .then(foundWishList => {
            res.json({results: foundWishList})
        })
        .catch(err=> {
            res.json({msg: "Something went wrong in the WishList controller: ", error: err})
        })
}

module.exports.updateWishList = (req, res)=>{
    // req.body represents the form information
    WishList.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updateWishList => {
            res.json({results: updateWishList})
        })
        .catch(err=> {
            res.json({msg: "Something went wrong in the WishList controller: ", error: err})
        })
}

module.exports.deleteWishList = (req, res)=>{
    // req.body represents the form information
    WishList.deleteOne({_id: req.params.id})
        .then(deletedWishList => {
            res.json({results: deletedWishList})
        })
        .catch(err=> {
            res.json({msg: "Something went wrong in the WishList controller: ", error: err})
        })
}

module.exports.findRandomWishList = (req, res) =>{
    WishList.find()
        .then(allWishLists=>{
            // get a random index number from index 0 up to but not including the allWishLists.length
            let randomIdx = Math.floor(Math.random()*allWishLists.length)

            res.json({results: allWishLists[randomIdx]})
        })
        .catch(err=>{
            res.json({msg: "Something went wrong in the WishList controller: ", error: err})
        })
}