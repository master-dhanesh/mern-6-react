import React, { useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";

const App = () => {
    const [users, setusers] = useState([
        { username: "John Doe", skill: "Full Stack Developer" },
    ]);

    return (
        <div>
            <Create users={users} setusers={setusers} />
            <hr />
            <Show users={users} setusers={setusers} />
        </div>
    );
};

export default App;
