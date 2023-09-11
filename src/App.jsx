import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Show from "./Components/Show";
import InfiniteScroll from "react-infinite-scroll-component";

const App = () => {
    const [posts, setposts] = useState([]);
    const [page, setpage] = useState(1);
    const [show, setshow] = useState(false);
    const [hasMore, sethasMore] = useState(true);
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
            // const { data } = await axios.get(
            //     `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
            // );
            const { data } = await axios.get(
                `https://jsonplaceholder.typicode.com/posts?_limit=10&_start=${posts.length}`
            );
            data.length === 0 && sethasMore(false);
            setposts([...posts, ...data]);
            // setposts(data);
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

    useEffect(() => {
        GetPosts();
    }, []);

    return (
        <div className="container mt-5">
            <button className="btn btn-dark" onClick={() => setshow(!show)}>
                {show ? "Hide" : "Show"}
            </button>
            {show ? <Show /> : ""}
            <hr />
            <h2>Get Posts</h2>
            {/* <button onClick={GetPosts} className="btn btn-primary">
                Posts
            </button> */}
            <hr />

            <InfiniteScroll
                dataLength={posts.length} //This is important field to render the next data
                next={GetPosts}
                hasMore={hasMore}
                loader={<h4 className="text-center p-5">Loading...</h4>}
                endMessage={
                    <p className="p-5" style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {renderPosts}
            </InfiniteScroll>

            {/* <hr className="my-5" />
            <div className="text-center p-5">
                <button onClick={PrevHandler} className="btn btn-warning me-4">
                    Prev
                </button>
                <button onClick={NextHandler} className="btn btn-warning">
                    Next
                </button>
            </div> */}
        </div>
    );
};

export default App;
