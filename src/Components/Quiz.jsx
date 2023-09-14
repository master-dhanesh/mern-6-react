import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Quiz = () => {
    const { query } = useSelector((state) => state.quizReducer);
    const [quiz, setquiz] = useState([]);

    const GetQuestions = async () => {
        try {
            let url = `https://opentdb.com/api.php?amount=${query.amount}&category=${query.category}&difficulty=${query.difficulty}`;

            if (query.type === "boolean") {
                url = `https://opentdb.com/api.php?amount=${query.amount}&category=${query.category}&difficulty=${query.difficulty}&type=${query.type}`;
            }

            const { data } = await axios.get(url);
            console.log(data);
            setquiz(data.results);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        GetQuestions();
    }, []);

    return <div>Quiz</div>;
};

export default Quiz;
