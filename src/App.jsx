import React, { useState } from "react";

const App = () => {
    const [username, setusername] = useState("");
    const [skill, setskill] = useState("");

    const SubmitHandler = (event) => {
        event.preventDefault();
        console.log(username, skill);
    };
    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <input
                    onChange={(e) => setusername(e.target.value)}
                    value={username}
                    type="text"
                    placeholder="username"
                />
                <input
                    onChange={(e) => setskill(e.target.value)}
                    value={skill}
                    type="text"
                    placeholder="skill"
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default App;
