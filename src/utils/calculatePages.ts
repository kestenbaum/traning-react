export function calculatePages (totalPages:number, postsForPages:number) {
    const pageNumbers:number[] = [];

    for (let i = 1; i <=Math.ceil(totalPages / postsForPages); i++) {
        pageNumbers.push(i);
    }

    return pageNumbers;
}