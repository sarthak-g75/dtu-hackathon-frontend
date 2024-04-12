import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const EventPage = () => {
  const params = useParams();
  const eventId = params.id;

  const [eventDetails, setEventDetails] = useState('');
  const [isSubscribed, setIsSubscribed] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  async function getEventDetails(){
    let response = await fetch(`http://localhost:3000/user/getEventDetails/${eventId}`, {
      method: 'GET'
    })
    let data = await response.json();
    setEventDetails(data.eventDetails[0]);
  }

  async function subscribeToEvent(){
    let response = await fetch('http://localhost:3000/user/subscribe', {
      method: 'POST',
      headers: {
        'auth': localStorage.getItem('auth_token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'eventId': eventId})
    })

    let data = await response.json();
    console.log(data);
    if(response.status === 200){
      setMessage('Subscribed');
      setMessageType('success');
      setTimeout(()=>{
        setMessage('');
        setMessageType('');
      }, 2000)
    }

    if(response.status === 401){
      setMessage('Error subscribing');
      setMessageType('error');

      setTimeout(()=>{
        setMessage('');
        setMessage('');
      }, 2000)
    }

  }

  async function isSubscribedAlready(){
    let response = await fetch(`http://localhost:3000/user/userSubscribed/${eventId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('auth_token')
      }
    })

    let data = await response.json();
    setIsSubscribed(data.subscribed);
  }

  useEffect(()=>{
    getEventDetails();
    isSubscribedAlready();
  }, []);    

  return (
    <div>
        {message ? message : <></>}
        <div>
          <img src=""/>
        </div>
        <div>
            <h1>{eventDetails.eventName}</h1>
            <p>Description of {eventDetails.eventName}</p>
            <p>Venue of {eventDetails.eventName}</p>
            {
              isSubscribed ? 
              <button> Already Enrolled </button>
              :
              <button onClick={subscribeToEvent}> Subscribe </button>
            }
        </div>
    </div>
  )
}

export default EventPage