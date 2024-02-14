import React, {FC} from 'react';

interface IPost{
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}
interface IPosts {
    loading: boolean,
    posts: IPost[]
}
const Post:FC<IPosts> = ({posts, loading}) => {

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul>
            {posts.map(element => <li key={element.id}>{element?.body}</li>)}
        </ul>
    );
};

export default Post;