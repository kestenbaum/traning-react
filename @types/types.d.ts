interface IPost {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}
interface IPosts {
    loading: boolean,
    posts: IPost[]
}
interface IPagination {
    postsPerPage: number,
    totalPosts: number,
    paginate: (number: any) => void
}