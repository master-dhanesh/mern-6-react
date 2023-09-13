import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h3>Homepage</h3>
            <Link to="/config">Start Quiz</Link>
        </div>
    );
};

export default Home;
