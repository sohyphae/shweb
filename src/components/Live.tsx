import React from 'react';

const Live: React.FC = () => {
  return (
    <section id="live" className="section section-light">
      <div className="live-container">
        <h2 className="section-header text-mid-dark">Live Dates</h2>
        <h2 className="dates-header text-mid-dark">Upcoming</h2>
        <p className="body-text text-dark">18th April 2026: Dubber's End Spring Fiesta</p>
        <p className="body-text text-dark">1st-4th May 2026: Insieme Festival</p>
        <p className="body-text text-dark">3rd-6th July 2026: Not A Cult Festival</p>
        <p className="body-text text-dark">25th July 2026: Windsor and Eton Pride</p>
        <h2 className="dates-header text-mid-dark">Past</h2>
        <p className="body-text text-dark">18th December 2025: The Canteen, Bristol (The Mixed Dips)</p>
        <p className="body-text text-dark">22nd August 2025: Shambala Festival (The Mixed Dips)</p>
        <p className="body-text text-dark">11th April 2025: Zoophoria, The Exchange Bristol (The Mixed Dips)</p>
        <p className="body-text text-dark">23rd June 2024: Chelsea Physic Garden Summer Lates</p>
        <p className="body-text text-dark">5th May 2024: May the Fourth Fest</p>
      </div>   
    </section>
  );
};

export default Live;