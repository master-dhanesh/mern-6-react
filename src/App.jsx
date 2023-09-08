import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
    const [posts, setposts] = useState([]);
    const [page, setpage] = useState(1);
    const PrevHandler = () => {
        if (page >= 1) {
            setpage(page - 1);
            GetPosts();
        }
    };
    const NextHandler = () => {
        setpage(page + 1);
        GetPosts();
    };

    const GetPosts = async () => {
        try {
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
            );
            setposts(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    let renderPosts = <h2>Loading...</h2>;
    if (posts.length > 0) {
        renderPosts = posts.map((post) => (
            <div className="alert alert-light mb-3" key={post.id}>
                <h4>{post.title}</h4>
                <Link className="btn btn-dark" to={`/posts/${post.id}`}>
                    {" "}
                    Info
                </Link>
            </div>
        ));
    }

    return (
        <div className="container mt-5">
            <h2>Get Posts</h2>
            <button onClick={GetPosts} className="btn btn-primary">
                Posts
            </button>
            <hr />
            {renderPosts}

            <hr className="my-5" />
            <div className="text-center p-5">
                <button onClick={PrevHandler} className="btn btn-warning me-4">
                    Prev
                </button>
                <button onClick={NextHandler} className="btn btn-warning">
                    Next
                </button>
            </div>
        </div>
    );
};

export default App;
