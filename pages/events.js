import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function Events({ eventList }) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()

    const fetchSportsEvents = async () => {
        const response = await fetch(`http://localhost:4000/events?category=sports`);
        const data = await response.json();
        setEvents(data)
        router.push('/events?category=sports',undefined,{shallow:true})
    }

    return (
        <div className='main'>
            <button onClick={fetchSportsEvents}>Sports Events</button>
            <h1>List Of Events</h1>
            {
                events.map(event => (
                    <div className="item" key={event.id}>
                        <h3>{event.title} {event.date} | {event.category}</h3>
                        <p>{event.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    const { query } = context
    const { category } = query
    const queryString = category ? 'category=sports':''
    const response = await fetch(`http://localhost:4000/events?${queryString}`);
    const data = await response.json();
    return {
        props: {
            eventList: data
        }
    }
}
