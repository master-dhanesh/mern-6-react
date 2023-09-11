import React, { useEffect, useState } from "react";

const Show = () => {
    const [text, settext] = useState("This is normal show text");
    useEffect(() => {
        console.log("component created");

        return () => {
            console.log("Component Destroyed");
            alert("Do you want to leave this site");
        };
    }, []);
    return (
        <div>
            <h1>{text}</h1>
            <button
                onClick={() => settext("TEXT CHANGED")}
                className="btn btn-success"
            >
                Change text
            </button>
        </div>
    );
};

export default Show;
