import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Console(props) {
    const { id } = props;
    const [console, setConsole] = useState(null);
    useEffect(() => {
        axios.get('http://csc225.mockable.io/consoles/' + id).then((response) => {
            setConsole(response.data);
        });
    }, []);

    if (!console) {
        return <p className = "text-center mt-5">Loading Console #{id}...</p>;
    }

    return (
        <div className = "text-center my-3">
            <div className="card mx-auto" style={{width: '25rem'}}>
            <img src={console.image} className="card-img-top" alt={console.name} />
            <div className="card-body text-white bg-dark">
                <h5 className="card-title">{console.name}</h5>
                <p className="card-text">Price: ${console.price}</p>
                <p className="card-text">Country: {console.country}</p>
                <p className="card-text">Release Year: {console.releaseYear}</p>
            </div>
            </div>
        </div>
    );
}

export default Console;