import React, { useState } from 'react';
import SeatRow from './SeatRow';

const initialSeats = [
  { number: 1, status: 'free' },
  { number: 2, status: 'occupied' },
  { number: 3, status: 'free' },
  { number: 4, status: 'occupied' },
  { number: 5, status: 'free' },
  { number: 6, status: 'free' },
  { number: 7, status: 'free' },
  { number: 8, status: 'occupied' },
  { number: 9, status: 'free' },
  { number: 10, status: 'free' },
  { number: 11, status: 'free' },
  { number: 12, status: 'free' },
  { number: 13, status: 'free' },
  { number: 14, status: 'occupied' },
  { number: 15, status: 'free' },
  { number: 16, status: 'free' },
  { number: 17, status: 'free' },
  { number: 18, status: 'free' },
  { number: 19, status: 'free' },
  { number: 20, status: 'occupied' }
];

const TrainCarriage = () => {
  const [seats, setSeats] = useState(initialSeats);

  const handleSeatClick = (number) => {
    setSeats(seats.map(seat => {
      if (seat.number === number && seat.status === 'free') {
        return { ...seat, status: 'selected' };
      }
      if (seat.status === 'selected') {
        return { ...seat, status: 'free' };
      }
      return seat;
    }));
  };

  const rows = [];
  for (let i = 0; i < seats.length; i += 5) {
    rows.push(seats.slice(i, i + 5));
  }

  return (
    <div className="train-carriage">
      {rows.map((row, index) => (
        <SeatRow key={index} seats={row} onSeatClick={handleSeatClick} />
      ))}
    </div>
  );
};

export default TrainCarriage;
