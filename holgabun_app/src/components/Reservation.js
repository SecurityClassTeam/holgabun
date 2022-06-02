import React from 'react';

const Reservation = () => {
  const Booked = {
    bookedID: '',
    hostID: '',
    guestID: '',
    spaceID: '',
    bookedDate: Date.now(),
    option: '',
    status: '',
  };
  return (
    <div>
      <h2>공간 예약</h2>
    </div>
  );
};

export default Reservation;
