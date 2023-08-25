import React from "react";

const Show = (props) => {
    const { active, users, setusers, ActiveHandler } = props;

    const DeleteHandler = (i) => {
        const copyusers = [...users];
        copyusers.splice(i, 1);
        setusers(copyusers);

        // setusers(users.filter((e, idx) => idx !== i));
    };

    return (
        <ul>
            {users.map((e, i) => {
                return (
                    <li key={i}>
                        {e.username} | {e.skill}
                        {active === null && (
                            <span>
                                <span onClick={() => ActiveHandler(i)}>✏️</span>
                                <span onClick={() => DeleteHandler(i)}>❌</span>
                            </span>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default Show;
