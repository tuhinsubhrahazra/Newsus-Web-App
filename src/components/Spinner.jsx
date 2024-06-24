import React from 'react';
import loading from "../images/loading.gif"

const Spinner = () => {
    return (
        <div className='container text-center' style={{ marginTop: "12rem" }}>
            <img src={loading} alt="loading" />
            <p className='my-2'>Loading ...</p>
        </div>
    );
}

export default Spinner;
