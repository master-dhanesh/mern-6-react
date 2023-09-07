import Create from "./components/Create";
import Show from "./components/Show";
import Home from "./components/Home";
import { Link, Route, Routes } from "react-router-dom";
import Info from "./components/Info";

const App = () => {
    return (
        <div className="container mt-5">
            <ul className="list-group w-25">
                <li className="list-group-item">
                    <Link className="text-decoration-none" to="/">
                        Home
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link className="text-decoration-none" to="/create">
                        Create
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link className="text-decoration-none" to="/show">
                        Show
                    </Link>
                </li>
            </ul>
            <hr />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/show" element={<Show />}>
                    <Route path="/show/:id" element={<Info />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
