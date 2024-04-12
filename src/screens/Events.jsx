  import React from 'react';
  import {events, images} from '../assets/data'
  import EventCard from '../components/EventCard';
import Slideshow from '../components/Slideshow';


  const Events = () => {
    // Assuming you have event data as an array of objects


    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <Slideshow slides={images}/>
        {events.map(category => (
          <div key={category.category} className="mb-6">
            <h2 className="text-3xl font-bold text-center mb-2">{category.category.toUpperCase()}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.data.map(event => (
                <EventCard
                  key={event.id}
                  imageUrl={event.imageUrl}
                  title={event.title}
                  description={event.description}
                  venue={event.venue}
                  id={event.id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default Events;
