import React, { useState } from "react";

const Create = (props) => {
    // console.log(props);
    const { users, setusers } = props;
    const [username, setusername] = useState("");
    const [skill, setskill] = useState("");

    const SubmitHandler = (event) => {
        event.preventDefault();
        const user = { username, skill };

        // const copyusers = [...users];
        // copyusers.push(user);
        // setusers(copyusers);
        setusers([...users, user]);

        setusername("");
        setskill("");
    };

    return (
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
    );
};

export default Create;
