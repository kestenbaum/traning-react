import React, {FC} from 'react';

export const Post:FC<IPosts> = ({posts, loading}) => {
    const Loader = <h2>Loading...</h2>
    const List = posts.map(element => <li key={element.id}>{element?.body}</li>)

    return (
        <ul>
            {loading ? Loader : List}
        </ul>
    );
};

