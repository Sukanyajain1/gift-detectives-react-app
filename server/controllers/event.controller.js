const Event = require("../models/event.model");

// all the callback functions for db parsing will be here for only the Event model

module.exports.sayHello = (req, res)=>{
    res.json({msg: "Hello to all the Events in the houseeeeeeeee!"})
}


module.exports.findAllEvents = (req, res) =>{
    Event.find()
        .then(allEvents=>{
            res.json({results: allEvents})
        })
        .catch(err=>{
            res.json({msg: "Something went wrong in the Event controller: ", error: err})
        })
}

module.exports.createEvent = (req, res)=>{
    // req.body represents the form information
    Event.create(req.body)
        .then(newCreatedEvent => {
            res.json({results: newCreatedEvent})
        })
        .catch(err=> {
            res.json({msg: "Something went wrong in the Event controller: ", error: err})
        })
}

module.exports.findOneEvent = (req, res)=>{
    // req.body represents the form information
    Event.findOne({_id: req.params.id})
        .then(foundEvent => {
            res.json({results: foundEvent})
        })
        .catch(err=> {
            res.json({msg: "Something went wrong in the Event controller: ", error: err})
        })
}

module.exports.updateEvent = (req, res)=>{
    // req.body represents the form information
    Event.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updateEvent => {
            res.json({results: updateEvent})
        })
        .catch(err=> {
            res.json({msg: "Something went wrong in the Event controller: ", error: err})
        })
}

module.exports.deleteEvent = (req, res)=>{
    // req.body represents the form information
    Event.deleteOne({_id: req.params.id})
        .then(deletedEvent => {
            res.json({results: deletedEvent})
        })
        .catch(err=> {
            res.json({msg: "Something went wrong in the Event controller: ", error: err})
        })
}

module.exports.findRandomEvent = (req, res) =>{
    Event.find()
        .then(allEvents=>{
            // get a random index number from index 0 up to but not including the allEvents.length
            let randomIdx = Math.floor(Math.random()*allEvents.length)

            res.json({results: allEvents[randomIdx]})
        })
        .catch(err=>{
            res.json({msg: "Something went wrong in the Event controller: ", error: err})
        })
}