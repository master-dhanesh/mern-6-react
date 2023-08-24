import React from "react";

const Show = (props) => {
    const { users, setusers } = props;
    return (
        <ul>
            {users.map((e, i) => {
                return (
                    <li key={i}>
                        {e.username} | {e.skill}
                    </li>
                );
            })}
        </ul>
    );
};

export default Show;
