import React from 'react'
import User from '../components/user'

export default function Users({users}) {
    return (
        <div style={{padding:"2em"}}>
            <h2>List of users</h2>
            {
                users.map((user,i)=>(
                    <div className="" key={i}>
                      <User user={user} />
                    </div>
                ))
            }
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return {
        props: {
            users: data,
        }
    }
}