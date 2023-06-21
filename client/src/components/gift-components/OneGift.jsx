import React, { useState, useEffect } from 'react';

const OneGift = () => {

    const [gift, setGift] = useState({
        name: "",
        url: "",
        image: "",
        memo: "",
        wishList: []
    })

    return (
        <>
        <div>
            <h1>Hello, this is the show one gift component.</h1>
            <p>Name: {gift.name}</p>
            <p>URL: {gift.url}</p>
            <p>image: <img src={gift.image} alt="image of gift" /></p>
            <p>Memo: {gift.memo}</p>
        </div>
        </>
    );
}

export default OneGift;