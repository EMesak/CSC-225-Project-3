import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Console from './Console';

function ConsoleList() {
    const [consoles, setConsoles] = useState([]);
    const [selectedConsole, setSelectedConsole] = useState(null);

    useEffect(() => {
        axios.get('http://csc225.mockable.io/consoles').then((response) => {
            setConsoles(response.data);
        });
    }, []);

    if(consoles.length === 0) {
        return <p className = "text-center mt-5">Loading...</p>;
    }

    if(!!selectedConsole){
        return (
           <div className = "text-center">
               <Console id={selectedConsole} />
               <button className = "btn btn-danger mt-2 mb-2" onClick={() => setSelectedConsole(null)}>Reset</button>
           </div>
        );
    }

    return (
    <div>
        <h1 className ="display-4 text-center my-4">Choose Your Console!</h1>
        {consoles.map((console) => {
            return (
                <p className = "text-center" key = {console.id}>
                    <button className = "btn btn-primary mt-2" onClick={() => setSelectedConsole(console.id)}>
                        {console.name}
                    </button>
                </p>
            );
        })}
        </div>
    );
}

export default ConsoleList;