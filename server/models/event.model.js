const mongoose = require ('mongoose');
const bcrypt = require("bcrypt");


const EventSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Event Name is required']
    },
    date: {
        type: Date,
        required: [true, 'Event Date is required']
    },
    time: {
        type: Date,
        required: [true, 'Event Time is required']
    },
    venue: {
        type: String,
        required: [true, 'Event Venue is required']
    },
    priceRange: {
        upper: {
            type: Number
        },
        lower: {
            type: Number
        }
    },
    memo: {
        type: String
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, //this is my User Type
        ref: "User" //this is the name of my User Model from the user.model.js
    },
    wishList_id: [{
        type: mongoose.Schema.Types.ObjectId, //this is my WishList Type
        ref: "WishList" //this is the name of my WishList Model from the wishList.model.js
    }]
    }, {timestamps: true}
);



module.exports = mongoose.model ('Event', EventSchema);