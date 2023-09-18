import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getquery } from "../store/actions/quizActions";

const Config = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [type, setType] = useState("");

    const [allcategories, setallcategories] = useState([]);

    const GetCategory = async () => {
        try {
            const { data } = await axios.get(
                "https://opentdb.com/api_category.php"
            );
            setallcategories(data.trivia_categories);
            // console.log(data.trivia_categories);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetCategory();
    }, []);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const config = {
            amount,
            category,
            difficulty,
            type,
        };
        // console.log(config);
        dispatch(getquery(config));
        navigate("/quiz");
    };

    let c_render = "";
    if (allcategories.length > 0) {
        c_render = allcategories.map((c) => (
            <option key={c.id} value={c.id}>
                {c.name}
            </option>
        ));
    }

    return (
        <div>
            <Link to="/">⬅️</Link>
            <h1>Configuration Helpers</h1>

            <form onSubmit={SubmitHandler} className="w-50">
                <input
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    className="form-control mb-3"
                    type="number"
                    placeholder="Amount of Questions"
                />
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    className="form-control mb-3"
                >
                    <option value="">Any Category</option>
                    {c_render}
                </select>
                <select
                    onChange={(e) => setDifficulty(e.target.value)}
                    value={difficulty}
                    className="form-control mb-3"
                >
                    <option value="">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <select
                    onChange={(e) => setType(e.target.value)}
                    value={type}
                    className="form-control mb-3"
                >
                    <option value="">Any Type</option>
                    <option value="multiplechoice">Multiple Choice</option>
                    <option value="boolean">True/False</option>
                </select>
                <button className="btn btn-primary">Start Quiz</button>
            </form>
        </div>
    );
};

export default Config;
