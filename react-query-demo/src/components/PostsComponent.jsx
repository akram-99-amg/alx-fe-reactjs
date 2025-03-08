import React from 'react'
import { useQuery } from '@tanstack/react-query';


const PostsComponent = () => {

    const { isLoading, data:fetchPosts, isError, error } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => { return res.json()})

    })
    if (isLoading) return "Loading..."
    if (isError) return "an error has occurred : " + error.message
    return (
        <div>
            <h1>Posts</h1>
            <div>
                <ul>
                    {fetchPosts.map((fetchPost) => (
                        <li key={fetchPost.id}>
                            <h3>{fetchPost.title}</h3>
                            <p>{fetchPost.body}</p>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default PostsComponent
