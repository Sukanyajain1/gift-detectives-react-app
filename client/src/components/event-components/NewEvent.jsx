import React, { useState, useEffect } from 'react';
import {useParams, NavLink} from 'react-router-dom';

const NewEvent = () => {

    const {date} = useParams();
    const [eventId, setEventId] = useState()
    const [formErrors, setFormErrors] = useState()
    
    useEffect(() => {
        // get the list of all events for the user in the database (both own and shared by friends) color code based on if user id matches the current id.
    }, [myEventsToggler]);     // this toggler dependency variable can be reused for a host of different arrow functions like removing an event from the calendar list, the submitHandler for adding a new event to update the event list, etc.

    // a different toggler variable will need to be used --- ACTUALLY NEVERMIND, there is no need for a toggler because the eventID state variable can be used as the dependency variable in the event form component-> sent as a prop to event form from this page/component.
    const changeHandler = ()=>{
        
    }

    const submitHandler = ()=>{
        
    }

    return (
        <>
            <div>hello this is the new event component. there will be a form to create a new event here.</div>


            <div className='d-flex border border-dark'>
                <div className='border border-warning'>
                    <div className='border border-primary'>This is the div for the list of events on the selected date.</div>
                    <div className='border border-danger'>This is the div for the EVENT FORM. <EventForm/></div>
                </div>
                <div className='border border-success'>This is the div for SHOW ONE EVENT based on which event in the list is clicked. <OneEvent/></div>
            </div>














            <h3>Create an Event for {Date(date)}.</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                <p className="text-danger">{formErrors}</p>
                    <label htmlFor="">Name: </label>
                    <input type="text" name="name" id="" className = 'form-control' onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Memo (Optional): </label>
                    <input type="text" name="memo" id="" className = 'form-control' onChange={changeHandler} />
                </div>
                
                <div className="d-flex">
                    <input type="submit" value="Add New Event" className="btn btn-primary mt-3" />
                    <NavLink to={"/dashboard"} className="btn btn-secondary mt-3">Cancel</NavLink>
                </div>
            </form>
        </>
    );
}

export default NewEvent;