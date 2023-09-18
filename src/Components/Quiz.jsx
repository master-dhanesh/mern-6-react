import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Quiz = () => {
    const { query } = useSelector((state) => state.quizReducer);
    const [quiz, setquiz] = useState([]);

    const [userAnswer, setuserAnswer] = useState([]);

    const GetQuestions = async () => {
        try {
            let url = `https://opentdb.com/api.php?amount=${query.amount}&category=${query.category}&difficulty=${query.difficulty}`;

            if (query.type === "boolean") {
                url = `https://opentdb.com/api.php?amount=${query.amount}&category=${query.category}&difficulty=${query.difficulty}&type=${query.type}`;
            }

            const { data } = await axios.get(url);
            // console.log(data.results);

            function shuffleArray(arr) {
                return arr
                    .map((a) => [Math.random(), a])
                    .sort((a, b) => a[0] - b[0])
                    .map((a) => a[1]);
            }

            let quizdata = data.results.reduce(
                (acc, cv) => [
                    ...acc,
                    {
                        question: cv.question,
                        answer: cv.correct_answer,
                        options: shuffleArray([
                            ...cv.incorrect_answers,
                            cv.correct_answer,
                        ]),
                    },
                ],
                []
            );
            setquiz(quizdata);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetQuestions();
    }, []);

    const ChangeHandler = (e) => {
        setuserAnswer([...userAnswer, { [e.target.name]: e.target.value }]);
    };

    const QuizHandler = (e) => {
        e.preventDefault();
        let onlyanswers = [];
        userAnswer.forEach((a, i) => {
            for (const key in a) {
                onlyanswers.push(a[key]);
            }
        });
        // console.log(onlyanswers);
        const score = quiz.filter((q, i) => {
            // console.log(q.answer, onlyanswers[i]);
            return q.answer === onlyanswers[i];
        });
        alert(`You scored: ${score.length}`);
    };

    let quizrender = "";
    if (quiz.length > 0) {
        quizrender = quiz.map((q, i) => (
            <div key={i} className="mb-3 form-control">
                <label className="mb-3">{q.question}</label>
                <p>
                    <input
                        onChange={ChangeHandler}
                        className="me-3"
                        type="radio"
                        name={i}
                        value={q.options[0]}
                    />
                    {q.options[0]}
                </p>
                <p>
                    <input
                        onChange={ChangeHandler}
                        className="me-3"
                        type="radio"
                        name={i}
                        value={q.options[1]}
                    />
                    {q.options[1]}
                </p>
                <p>
                    <input
                        onChange={ChangeHandler}
                        className="me-3"
                        type="radio"
                        name={i}
                        value={q.options[2]}
                    />
                    {q.options[2]}
                </p>
                <p>
                    <input
                        onChange={ChangeHandler}
                        className="me-3"
                        type="radio"
                        name={i}
                        value={q.options[3]}
                    />
                    {q.options[3]}
                </p>
            </div>
        ));
    }

    return (
        <div>
            <h1>Quiz</h1>
            <form onSubmit={QuizHandler}>
                {quizrender}
                <button className="mt-5 btn btn-primary">Submit</button>
            </form>
            {/* <p>{JSON.stringify(quiz)}</p> */}
        </div>
    );
};

export default Quiz;

// arr = [1, 2, 3, 4, 5, 6, 7];

// acc = 3
// x = arr.reduce((acc,cv) => acc+cv,0)

// sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// sum
