import React, { useState, useEffect } from 'react';

const GiftForm = () => {

    const [gift, setGift] = useState({
        name: "",
        url: "",
        image: "",
        memo: "",
        wishList: []
    })

    const submitHandler = ()=>{
        
    }

    return (
        <>
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                <p className="text-danger">{formErrors}</p>
                    <label htmlFor="">Name: </label>
                    <input type="text" name="name" id="" className = 'form-control' onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">URL: </label>
                    <input type="text" name="url" id="" className = 'form-control' onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Memo (Optional): </label>
                    <input type="text" name="memo" id="" className = 'form-control' onChange={changeHandler} />
                </div>
                
                <input type="submit" value="Login" className="btn btn-primary mt-3" />
            </form>
        </div>
        </>
    );
}

export default GiftForm;