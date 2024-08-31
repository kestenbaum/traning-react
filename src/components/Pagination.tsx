import React, {FC} from 'react';
import {calculatePages} from "../utils/calculatePages";

export const Pagination:FC<IPagination> = ({postsPerPage, totalPosts, paginate}) => {
    const resultPages = calculatePages(totalPosts, postsPerPage);

    const paginationList = resultPages.map(element => <a
        onClick={() => paginate(element)}
        key={element}
        href={"!#"}>
        {element}
    </a>)

    return (
            <ul>
                {resultPages.length > 1 && paginationList}
            </ul>
    );
};