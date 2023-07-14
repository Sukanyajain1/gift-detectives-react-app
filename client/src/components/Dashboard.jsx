import React, { useState } from 'react';
import { useOutletContext, NavLink } from "react-router-dom";
// import 'react-calendar/dist/Calendar.css'
import Calendar from 'react-calendar';

const Dashboard = () => {

    const [currentUser, isLogged] = useOutletContext();

    const [date, setDate] = useState(new Date())

    // create a change handler and put the setDate inside of it along with an axios call for all the events and wishlists of people for that specific date.
    return (
        <>
            {isLogged?
            <div>
                <h1>Welcome {currentUser.firstName}, you're in the dashboard!</h1>
                <div className=" d-flex justify-content-between border border-danger p-3 mt-2">
                    <div>
                        <div className='content-box'>this is for the monthly overview</div>
                        <div className='content-box'>this is for the upcoming events and pending gifts reminder</div>
                        <div className='content-box'>this is for the calendar</div>
                        <div className='content-box'>this is for the carousel</div>
                    </div>
                    <div className="">
                        <h1 className="header">Your React Calendar</h1>
                        <div className="calendar-container">
                            <Calendar onChange={setDate} value={date}/>
                        </div>
                        <div className="text-center mt-3 calendar-selected-date">
                            <strong>Selected date: </strong>{date.toDateString()}
                        </div>
                    </div>
                </div>
                <div className='border border-dark mt-3'>
                    <h1>this is the container for the calendar results</h1>
                    <h5>There are no events saved for: {date.toDateString()}</h5>
                    <NavLink to={"/event/new"} className="">Add Event!</NavLink>
                    
                    <h5>There are (#) events saved for: {date.toDateString()}</h5>
                    {/* <NavLink to={{
                        pathname: `/event/new/${date}`,
                        aboutProps: {
                            date: date
                        }}} className="">Check them out!</NavLink> */}
                </div>
            </div>
            : <div>
                <h1>Sorry! Seems like you're not logged in yet! Dashboard</h1>
                <NavLink to={"/signin"} className="">Sign in Here and Start your Gift Lists!</NavLink>
            </div>
            }
        </>
    );
};


export default Dashboard;
