import React, { useState, useEffect } from 'react';

const NewGift = () => {
    
    const [formErrors, setFormErrors] = useState()
    
    
    const changeHandler = ()=>{
        
    }

    const submitHandler = ()=>{
        
    }

    return (
        <>
            <div>hello this is the new gift component. there will be a form to create a new gift here.</div>
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
                
                <input type="submit" value="Add New Gift" className="btn btn-primary mt-3" />
            </form>
        </>
    );
}

export default NewGift;