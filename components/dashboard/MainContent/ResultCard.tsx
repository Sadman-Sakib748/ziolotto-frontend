'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WinnerTable from './WinnerTable';

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface WinnerType {
  id: number;
  rank: string;
  userId: string;
  winningNo: string;
  amount: string;
  tickets: string;
  hasAward: boolean;
}

interface ResultCardType {
  id: number;
  serial: string;
  price: string;
  title: string;
  image: string;
  drawDate: string;
  timeLeft: TimeLeft;
  winners: WinnerType[];
}

interface ResultCardProps {
  card?: ResultCardType; // ✅ OPTIONAL করা হয়েছে
}

const ResultCard: React.FC<ResultCardProps> = ({ card }) => {

  // ✅ Fallback UI যখন data নেই
  if (!card) {
    return (
      <div className="col-12">
        <div
          className="lotteries-card-items style-lottery"
          style={{
            backgroundColor: '#0a1a2a',
            borderRadius: '10px',
            padding: '20px',
            color: 'white',
            textAlign: 'center'
          }}
        >
          <p>Loading result...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-4 mb-4"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div
        className="lotteries-card-items style-lottery"
        style={{
          backgroundColor: '#0a1a2a',
          borderRadius: '10px',
          padding: '20px',
          color: 'white'
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '15px'
          }}
        >
          <span
            className="serial"
            style={{
              backgroundColor: '#f0b90b',
              padding: '5px 10px',
              borderRadius: '5px',
              color: 'black',
              fontWeight: 'bold'
            }}
          >
            {card.serial}
          </span>

          <span
            className="price"
            style={{
              backgroundColor: '#2a3b4c',
              padding: '5px 10px',
              borderRadius: '5px'
            }}
          >
            {card.price}
          </span>
        </div>

        {/* Image */}
        <div
          className="thumb"
          style={{ textAlign: 'center', marginBottom: '15px' }}
        >
          <Image
            src={card.image}
            alt={card.title}
            width={150}
            height={150}
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* Content */}
        <div className="content" style={{ marginBottom: '15px' }}>
          <h5 style={{ marginBottom: '5px' }}>{card.title}</h5>
          <p
            className="text-white"
            style={{ color: '#ccc', fontSize: '14px' }}
          >
            Draw at {card.drawDate}
          </p>
        </div>

        <h6 style={{ marginBottom: '15px', color: '#f0b90b' }}>
          Today's Top 10 Winning Number
        </h6>

        {/* Winners */}
        <WinnerTable winners={card.winners} />

        {/* Countdown */}
        <div
          className="time-left-items"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '20px',
            marginBottom: '20px'
          }}
        >
          <p style={{ margin: 0, color: '#ccc' }}>Next Draw:</p>

          <span className="badge bg-dark">{card.timeLeft.days}D</span>
          <span className="badge bg-dark">{card.timeLeft.hours}H</span>
          <span className="badge bg-dark">{card.timeLeft.minutes}M</span>
          <span className="badge bg-dark">{card.timeLeft.seconds}S</span>
        </div>

        {/* Buttons */}
        <div
          className="lotterie-btn style-3"
          style={{ display: 'flex', gap: '10px' }}
        >
          <Link href="#" className="btn btn-outline-light btn-sm">
            ← Older
          </Link>

          <Link href="#" className="btn btn-outline-light btn-sm">
            Newer →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;