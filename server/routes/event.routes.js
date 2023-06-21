const EventController = require("../controllers/event.controller");


// all the routes in a module.exports arrow function
module.exports = (app)=>{
    app.get("/api/hello", EventController.sayHello);
    app.get("/api/events", EventController.findAllEvents);
    app.post("/api/events", EventController.createEvent);   //create a new Event
    app.get("/api/events/random", EventController.findRandomEvent);  // find a random Event

    /* 
    
    Best Practice: Keep all the static routes on the top and all the dynamic routes with path variables on the bottom so the paths with the same roots and routing syntax don't get confused
            ---> (get route with /api/events/someVariable --> the findRandom and findOne routes conflict with each other)
    
    */

    app.get("/api/events/:id", EventController.findOneEvent);
    app.put("/api/events/:id", EventController.updateEvent);
    app.delete("/api/events/:id", EventController.deleteEvent);





}