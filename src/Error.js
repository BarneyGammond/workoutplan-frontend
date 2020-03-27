import React from 'react';
import seinfeld from "./images/seinfeld.jpg";


const Error = () => (
    <>
        <div className="PNFwrap">
            <img alt="Jerry" className="jerry" src={seinfeld} />
            <p className="pageNotFoundTitle">"What's the <i>deal</i> with all these errors?!"</p>
            <p className="pageNotFoundText">If you believe this happened in error, please <a href="/">contact us</a></p>
        </div>
    </>
); 

export default Error;