import { useRouter } from 'next/router'
import React from 'react'

export default function Product({product}) {
    const router = useRouter()
    if(router.isFallback){
        return <div>Loading</div>
    }
  return (
    <div>
        <h2>
            {product.id} {product.title} {product.price}
        </h2>
        <p>
            {product.description}
        </p>
    </div>
  )
}

export async function getStaticProps(context){
    const {params} = context
    console.log(`Generating / Regenerating Product ${params.productId}`);
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json();
    if(!data.id)return {notFound:true}
    return {
        props:{
            product:data
        },
        revalidate:10
    }
}

export async function getStaticPaths(){
    return{
        paths:[
            {
                params:{
                    productId:'1'
                }
            }
        ],
        fallback:true
    }
}
