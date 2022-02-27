import React, { useState } from 'react'

export default function Events({ eventList }) {
    
    const [events, setEvents] = useState(eventList)
    const fetchSportsEvents = async () => {
        const response = await fetch(`http://localhost:4000/events?category=sports`);
        const data = await response.json();
        setEvents(data)
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

export async function getServerSideProps() {
    const response = await fetch(`http://localhost:4000/events`);
    const data = await response.json();
    return {
        props: {
            eventList: data
        }
    }
}
