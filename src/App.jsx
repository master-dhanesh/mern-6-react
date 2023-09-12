import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/reducers/counterReducer";
const App = () => {
    const { value } = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();

    return (
        <div className="container mt-5">
            <h2>Redux Toolkit Instance</h2>
            <h1>Value: {value}</h1>
            <button onClick={() => dispatch(increment(1))}>Add 1</button>
            <button onClick={() => dispatch(decrement(1))}>Sun 1</button>
        </div>
    );
};

export default App;
