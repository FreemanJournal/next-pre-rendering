import Link from 'next/link'
import React from 'react'

export default function PostList({ posts }) {

    return (
        <div style={{ padding: "2em" }}>
            <h1>List of Posts</h1>
            {
                posts.map(post => {
                    return (
                        <div className="" key={post.id} style={{ padding: "1em", margin: "1em", border: "1px solid #242B2E" }}>
                            <Link href={`posts/${post.id}`} passHref>
                                <a><h2>{post.title}</h2></a>
                            </Link>

                        </div>

                    )
                })
            }
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data
        }
    }
}
