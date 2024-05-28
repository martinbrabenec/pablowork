import React from 'react';
import Seat from './Seat';

const SeatRow = ({ seats, onSeatClick }) => {
  return (
    <div className="carriage-row">
      {seats.map(seat => (
        <Seat
          key={seat.number}
          number={seat.number}
          status={seat.status}
          onClick={() => onSeatClick(seat.number)}
        />
      ))}
      <div className="aisle-spacer"></div>
    </div>
  );
};

export default SeatRow;
