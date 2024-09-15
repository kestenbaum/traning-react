import axios from "axios";
interface fetchPost {
    setLoading: (a:boolean) => null,
    setPosts: (a: IPost) => IPost[]
}

const api =  "https://jsonplaceholder.typicode.com/posts"
export const fetchPosts = async ({setLoading, setPosts}: fetchPost) => {
    setLoading(true);
    const res = await axios.get(api);
    setPosts(res?.data);
    setLoading(false);
}