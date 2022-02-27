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
    const { params, req, res, query } = context
    // console.log(query); //show all the query string
    // console.log(req.headers.cookie);
    // res.setHeader('Set-Cookie',['name=ALia Butt'])
    const response = await fetch(`http://localhost:4000/news?category=${params.category}`)
    const data = await response.json()
    console.log(`Pre-rendering News Articles for category ${params.category}`);
    if (data.length < 1) return { notFound: true }
    return {
        props: {
            articles: data,
            params

        }
    }

}