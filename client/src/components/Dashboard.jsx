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
                {/* <NavLink to={"/pizza-time/pizza/new"} className="">Add a wishlist to your calendar</NavLink> */}

                {/* there should be boxes that we will fill things into */}
                <div className=" d-flex border border-danger p-3 mt-5">
                    <div>
                        <div className='content-box'>this is for the monthly overview</div>
                        <div className='content-box'>this is for the upcoming events and pending gifts reminder</div>
                        <div className='content-box'>this is for the calendar</div>
                        <div className='content-box'>this is for the carousel</div>
                    </div>
                    <div className="">
                        <h1 className="header">React Calendar</h1>
                        <div className="calendar-container">
                            <Calendar onChange={setDate} value={date}/>
                        </div>
                        <div className="text-center mt-3 calendar-selected-date">
                            <strong>Selected date: </strong>{date.toDateString()}
                        </div>
                    </div>
                </div>
            </div>
            : <div>
                <h1>Sorry! Seems like you're not logged in yet! Dashboard</h1>
                <NavLink to={"/welcome/login"} className="">Sign in Here and Start your Gift Lists!</NavLink>
            </div>
            }
        </>
    );
};


export default Dashboard;
