import React from 'react'

export default function NewsArticles({articles}) {
    
  return (
    <div style={{padding:"1em"}}>
        <h1 >List of News Articles</h1>
        {articles.map(article=><h3 key={article.id}>{article.title}</h3>)}
        
    </div>
  )
}

export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json();
    console.log(`Pre-rendering News Articles List`);

    return{
        props:{
            articles:data
        }
    }
}