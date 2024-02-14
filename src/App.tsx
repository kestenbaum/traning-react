import React, { useEffect, useState} from 'react';

import Post from "./components/Post";
import Pagination from "./components/Pagination";

import axios from "axios";


const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    //Get current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


    //Change page
    const paginate = (pageNumber:number) => setCurrentPage(pageNumber);
    return (
        <div>
            <div>Posts</div>
            <Post loading={loading} posts={currentPosts}/>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </div>
    );
};

export default App;