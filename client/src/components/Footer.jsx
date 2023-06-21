import React from 'react';
import '../App.css'

const Footer = () => {
    return (
        <div className='container footer'>
            <div className="d-flex align-items-center justify-content-between pt-5">
                <div><p>© 2023 GiftDetectives, Inc.</p></div>
                <ul>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;