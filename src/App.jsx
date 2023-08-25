import React, { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";
import css from "./App.module.css";

const App = () => {
    const [users, setusers] = useState([
        { username: "John Doe", skill: "Full Stack Developer" },
    ]);

    const [username, setusername] = useState("");
    const [skill, setskill] = useState("");

    const [active, setActive] = useState(null);

    const ActiveHandler = (i) => {
        setActive(i);
        setusername(users[i].username);
        setskill(users[i].skill);
    };
    return (
        <div className={css.appcontainer}>
            <Create
                username={username}
                setusername={setusername}
                skill={skill}
                setskill={setskill}
                active={active}
                setActive={setActive}
                users={users}
                setusers={setusers}
            />
            <hr />
            <Show
                active={active}
                ActiveHandler={ActiveHandler}
                users={users}
                setusers={setusers}
            />
        </div>
    );
};

export default App;
