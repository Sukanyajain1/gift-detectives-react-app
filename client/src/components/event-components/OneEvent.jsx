import React, { useState, useEffect } from 'react';

const OneEvent = () => {

    const [event, setEvent] = useState({
        name: "",
        date: "",
        memo: "",
        wishList: []
    })
    
    return (
        <>
        <div className='border border-dark p-3'>
            <h1>Hello, this is the show one Event component.</h1>
            <p>Name: {event.name}</p>
            <p>Date: {event.date}</p>
            <p>Memo: {event.memo}</p>
            <p>Name: {event.name}</p>
            <p>Wish List: {event.wishList}</p>
        </div>
        </>
    );
}

export default OneEvent;