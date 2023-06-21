import React, { useState, useEffect } from 'react';

const OneWishList = () => {

    const [wishList, setWishList] = useState({
        name: "",
        date: "",
        memo: "",
        giftItems: []
    })

    return (
        <>
        <div>
            <h1>Hello, this is the show one list component.</h1>
            <p>This is your wishlist for: {wishList.date}</p>
            <p>Name: {wishList.name}</p>
            <p>Memo: {wishList.memo}</p>
            <p>Name: {wishList.name}</p>
            <p>Wish List: {wishList.giftItems}</p>
        </div>
        </>
    );
}

export default OneWishList;