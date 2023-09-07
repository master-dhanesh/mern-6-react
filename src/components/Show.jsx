import React, { useContext } from "react";
import { UserContext } from "../utils/Context";
import { Outlet, useNavigate } from "react-router-dom";

const Show = () => {
    const navigate = useNavigate();
    const { active, users, setusers, setActive, setusername, setskill } =
        useContext(UserContext);

    const ActiveHandler = (i) => {
        setActive(i);
        setusername(users[i].username);
        setskill(users[i].skill);
        navigate("/create");
    };

    const DeleteHandler = (i) => {
        const copyusers = [...users];
        copyusers.splice(i, 1);
        setusers(copyusers);

        // setusers(users.filter((e, idx) => idx !== i));
    };

    const InfoHandler = (i) => {
        console.log(i);
        navigate("/show/" + i);
    };

    return (
        <div className="w-50">
            <h3>Pending Tasks...</h3>
            {users.map((e, i) => {
                return (
                    <div
                        className="d-flex justify-content-between alert alert-success"
                        key={i}
                    >
                        {e.username}
                        {active === null && (
                            <span>
                                <span onClick={() => ActiveHandler(i)}>✏️</span>
                                <span onClick={() => DeleteHandler(i)}>❌</span>
                                <span onClick={() => InfoHandler(i)}>ℹ️</span>
                            </span>
                        )}
                    </div>
                );
            })}
            <hr />
            <Outlet />
        </div>
    );
};

export default Show;
