import React from 'react'
import { useQuery } from '@tanstack/react-query';


const PostsComponent = () => {

    const { isPending, data, error } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(res => { return res.json()})

    })
    if (isPending) return "Loading..."
    if (error) return "an error has occurred : " + error.message
    return (
        <div>
            <h1>Posts</h1>
            <div>
                <ul>
                    {data.map((datas) => (
                        <li key={datas.id}>
                            <h3>{datas.title}</h3>
                            <p>{datas.body}</p>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default PostsComponent
