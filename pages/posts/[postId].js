import { useRouter } from 'next/router'
import React from 'react'

export default function Post({ post }) {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <h1>Loading...</h1>
  // }
  return (

    <div className="" key={post.id} style={{ padding: "1em", margin: "1em", border: "1px solid #242B2E" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>

  )
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  const paths = data.map(post => {
    return {
      params: {
        postId: `${post.id}`
      }
    }
  })
  return {
    paths: [
      {
        params: { postId: "1" }
      },
      {
        params: { postId: "2" }
      },
      {
        params: { postId: "3" }
      },
    ],
    // paths,
    fallback: 'blocking'
    // fallback: true
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const data = await response.json();
  if(!data.id){
    return {
      notFound:true
    }
  }
  console.log(`Generating page for /posts/${params.postId}`);
  return {
    props: {
      post: data
    }
  }
}