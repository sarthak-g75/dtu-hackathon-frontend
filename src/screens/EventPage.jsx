import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const EventPage = () => {
  const params = useParams();
  const eventId = params.id;

  const [eventDetails, setEventDetails] = useState('');

  async function getEventDetails(){
    let response = await fetch(`http://localhost:3000/user/getEventDetails/${eventId}`, {
      method: 'GET'
    })
    let data = await response.json();
    console.log(data);
    setEventDetails(data.eventDetails);
  }

  useEffect(()=>{
    getEventDetails();
  }, []);    

  return (
    <div>
        <div>
          <img src=""/>
        </div>
        <div>
            <h1>{eventDetails.eventName}</h1>
            <p>Description of {eventDetails.eventName}</p>
            <p>Venue of {eventDetails.eventName}</p>
            <button> Subscribe </button>
        </div>
    </div>
  )
}

export default EventPage