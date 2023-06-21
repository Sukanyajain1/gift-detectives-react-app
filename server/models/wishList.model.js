const mongoose = require ('mongoose');
const bcrypt = require("bcrypt");


const WishListSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'WishList Name is required']
    },
    isPublic: {
        type: Boolean,
        default: false
    },
    memo: {
        type: String
    },
    giftItems: [{
        type: mongoose.Schema.Types.ObjectId, //this is my Gift Type
        ref: "Gift" //this is the name of my Gift Model from the gift.model.js
    }]
    }, {timestamps: true}
);






module.exports = mongoose.model ('WishList', WishListSchema);