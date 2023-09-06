import Create from "./components/Create";
import Show from "./components/Show";
import css from "./App.module.css";

const App = () => {
    return (
        <div className={css.appcontainer}>
            <Create />
            <hr />
            <Show />
        </div>
    );
};

export default App;
