import React from 'react'

export default function ShowArticlesByCategory({ articles, params }) {
   

    return (
        <div style={{ padding: "1em" }}>
            <h1>List of <i>{params.category}</i> articles</h1>
            {
                articles.map((article) => (
                    <>
                        <h3 key={article.id}>{article.title}</h3>
                        <p>{article.description}</p>
                    </>
                ))
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    const { params,req,res,query } = context
  
    const response = await fetch(`http://localhost:4000/news?category=${params.category}`)
    const data = await response.json()
    if (data.length < 1) return { notFound: true }
    return {
        props: {
            articles: data,
            params

        }
    }

}