import React, {FC} from 'react';

interface IPagination {
    postsPerPage: number,
    totalPosts: number,
    paginate: (number: any) => void
}

const Pagination:FC<IPagination> = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers:number[] = [];

    for (let i = 1; i <=Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
        <div>
            <ul>
                {pageNumbers.map(element => <a
                    onClick={() => paginate(element)}
                    key={element}
                    href={"!#"}>
                    {element}
                </a>)}
            </ul>
        </div>
    );
};

export default Pagination;