import "../global.css";
const Create = (props) => {
    // console.log(props);
    const {
        users,
        setusers,
        active,
        setActive,
        username,
        setusername,
        skill,
        setskill,
    } = props;

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

    const UpdateHandler = (e) => {
        e.preventDefault();
        const copyusers = [...users];
        copyusers[active] = { ...copyusers[active], username, skill };
        setusers(copyusers);
        setusername("");
        setskill("");
        setActive(null);
    };

    return (
        <form className="container">
            <input
                className="form-control mb-3"
                onChange={(e) => setusername(e.target.value)}
                value={username}
                type="text"
                placeholder="username"
            />
            <input
                className="form-control mb-3"
                onChange={(e) => setskill(e.target.value)}
                value={skill}
                type="text"
                placeholder="skill"
            />

            {active === null ? (
                <button
                    onClick={SubmitHandler}
                    className="btn"
                    style={{
                        backgroundColor: "tomato",
                        color: "white",
                        border: "none",
                        padding: "1vmax",
                    }}
                >
                    Submit
                </button>
            ) : (
                <button
                    onClick={UpdateHandler}
                    className="btn btn-danger"
                    style={{
                        color: "white",
                        border: "none",
                        padding: "1vmax",
                    }}
                >
                    Update
                </button>
            )}
        </form>
    );
};

export default Create;
