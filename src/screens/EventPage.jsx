import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { images } from '../assets/data';
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
    <div className="flex flex-col justify-center items-center h-[90vh]">
    <div className="bg-white pb-6 rounded-lg  shadow-md ">
      <div>
        <img src={images[0]} alt="Event Image" className="w-full h-72 object-cover rounded-lg rounded-b-none pb-4" />
      </div>
      <div className="text-center px-4">
        <h1 className="text-2xl font-bold">{eventDetails.eventName}</h1>
        <p className="mb-2">Description of {eventDetails.eventName}</p>
        <p className="mb-4">Venue of {eventDetails.eventName}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full ">Subscribe</button>
      </div>
    </div>
  </div>
  )
}

export default EventPage