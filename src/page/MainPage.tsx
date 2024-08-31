import {useEffect, useState} from 'react';
import {Post, Pagination} from "../components"
import axios from "axios";

export default function  MainPage () {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10)
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber:number) => setCurrentPage(pageNumber);
    const api =  "https://jsonplaceholder.typicode.com/posts"

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(api);
            setPosts(res?.data);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    return (
        <>
            <div>Posts</div>
            <Post loading={loading} posts={currentPosts}/>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </>
    );
};

