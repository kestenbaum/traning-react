export function calculatePages (totalPages:number, postsForPages:number) {
    const pageNumbers:number[] = [];
    const calculatePage = Math.ceil(totalPages / postsForPages);

    for (let i = 1; i <= calculatePage; i++) {
        pageNumbers.push(i);
    }

    return pageNumbers;
}