import React, { useState, useEffect } from 'react';
import { useParams, useOutletContext } from "react-router-dom";
import axios from 'axios';

const OneEvent = () => {

    const BASE_URL = 'http://localhost:8000/api';
    const [currentUser, isLogged] = useOutletContext();
    const {event_id} = useParams();

    const [event, setEvent] = useState({
        name: "",
        date: "",
        memo: "",
        wishList: []
    })
    
    // this should fetch all the 
    useEffect(() => {
        const fetchOneEvent = async () => {
            try {
                const oneEventResponse = await axios.get(`${BASE_URL}/events/${event_id}`);
        
                console.log("This is the event info: ", oneEventResponse.data.results)
                setEvent(oneEventResponse.data.results);
                
            } catch (error) {
                console.error('Error fetching Order Summary Info:', error);
            }
        };
    
        fetchOneEvent();
    }, []);


    return (
        <>
            <h1>Hello, this is the show one Event component.</h1>
            {event?   
                <div className='border border-dark p-3'>
                    <p>Name: {event.name}</p>
                    <p>Date: {event.date}</p>
                    <p>Memo: {event.memo}</p>
                    <p>Name: {event.name}</p>
                    <p>Wish List: {event.wishList}</p>
                </div>
            :
            <p className='text-secondary'>Event Viewer</p>}
        </>
    );
}

export default OneEvent;