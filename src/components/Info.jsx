import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../utils/Context";

const Info = () => {
    const { id } = useParams();
    const { users } = useContext(UserContext);
    const user = users[id];
    return (
        <div>
            <h1>{user.username}</h1>
            <h2>{user.skill}</h2>
            <Link to="/show">Back</Link>
        </div>
    );
};

export default Info;
