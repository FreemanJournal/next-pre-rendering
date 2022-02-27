import React, { useEffect, useState } from 'react'

export default function Dashboard() {

    const [isLoading, setIsLoading] = useState(true);
    const [dashBoardData, setDashBoardData] = useState();
    useEffect(() => {
        async function fetchDashBoardData() {
            const response = await fetch('http://localhost:4000/dashboard')
            const data = await response.json()
            setDashBoardData(data)
            setIsLoading(false)
        }
        fetchDashBoardData()
    }, [])

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div style={{padding:"1em"}}>
            <h2>Dashboard</h2>
            <p>Posts : {dashBoardData?.posts}</p>
            <p>Likes : {dashBoardData?.likes}</p>
            <p>Followers : {dashBoardData?.followers}</p>
            <p>Following : {dashBoardData?.following}</p>
        </div>
    )
}
