'use client';

import React from 'react';
import Image from 'next/image';
import LotteryCard from '@/components/dashboard/MainContent/LotteryCard';
import ResultCard from '@/components/dashboard/MainContent/ResultCard';
import banner from '@/public/images/new/banner.png';
import LotterySection from '@/components/containers/lottery/LotterySection';



// Types
interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface LotteryCardType {
  id: number;
  serial: string;
  price: string;
  title: string;
  image: string;
  firstPrize: string;
  secondPrize: string;
  thirdPrize: string;
  timeLeft: TimeLeft;
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

// Mock Data
const lotteryCards: LotteryCardType[] = [
  {
    id: 1,
    serial: "#1",
    price: "R-458",
    title: "Lucky Day (Round 1)",
    image: "/assets/images/new/lucky-day.png",
    firstPrize: "$100000",
    secondPrize: "$80000",
    thirdPrize: "$50000",
    timeLeft: { days: "02", hours: "05", minutes: "25", seconds: "37" }
  },
  {
    id: 2,
    serial: "#1",
    price: "R-458",
    title: "Lucky Day (Round 1)",
    image: "/assets/images/new/lucky-day.png",
    firstPrize: "$100000",
    secondPrize: "$80000",
    thirdPrize: "$50000",
    timeLeft: { days: "02", hours: "05", minutes: "25", seconds: "37" }
  },
  {
    id: 3,
    serial: "#1",
    price: "R-458",
    title: "Lucky Day (Round 1)",
    image: "/assets/images/new/lucky-day.png",
    firstPrize: "$100000",
    secondPrize: "$80000",
    thirdPrize: "$50000",
    timeLeft: { days: "02", hours: "05", minutes: "25", seconds: "37" }
  },
  {
    id: 4,
    serial: "#1",
    price: "R-458",
    title: "Lucky Day (Round 1)",
    image: "/assets/images/new/lucky-day.png",
    firstPrize: "$100000",
    secondPrize: "$80000",
    thirdPrize: "$50000",
    timeLeft: { days: "02", hours: "05", minutes: "25", seconds: "37" }
  },
  {
    id: 5,
    serial: "#1",
    price: "R-458",
    title: "Lucky Day (Round 1)",
    image: "/assets/images/new/lucky-day.png",
    firstPrize: "$100000",
    secondPrize: "$80000",
    thirdPrize: "$50000",
    timeLeft: { days: "02", hours: "05", minutes: "25", seconds: "37" }
  },
  {
    id: 6,
    serial: "#1",
    price: "R-458",
    title: "Lucky Day (Round 1)",
    image: "/assets/images/new/lucky-day.png",
    firstPrize: "$100000",
    secondPrize: "$80000",
    thirdPrize: "$50000",
    timeLeft: { days: "02", hours: "05", minutes: "25", seconds: "37" }
  }
];

const winnerRows: WinnerType[] = [
  { id: 1, rank: "1st", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: "45", hasAward: true },
  { id: 2, rank: "2nd", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: "45", hasAward: true },
  { id: 3, rank: "3rd", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: "45", hasAward: true },
  { id: 4, rank: "4th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: "45", hasAward: false },
  { id: 5, rank: "5th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: "45", hasAward: false },
  { id: 6, rank: "6th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: "45", hasAward: false },
  { id: 7, rank: "7th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: "45", hasAward: false },
  { id: 8, rank: "8th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: "45", hasAward: false },
  { id: 9, rank: "9th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: "45", hasAward: false },
  { id: 10, rank: "10th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: "45", hasAward: false }
];

const resultCards: ResultCardType[] = [
  {
    id: 1,
    serial: "#1",
    price: "R-458",
    title: "Lucky Day (Round 1)",
    image: "/assets/images/new/lucky-day.png",
    drawDate: "November 21st 2025, 05:30 PM",
    timeLeft: { days: "02", hours: "05", minutes: "25", seconds: "37" },
    winners: winnerRows
  },
  {
    id: 2,
    serial: "#1",
    price: "R-458",
    title: "Lucky Day (Round 1)",
    image: "/assets/images/new/lucky-day.png",
    drawDate: "November 21st 2025, 05:30 PM",
    timeLeft: { days: "02", hours: "05", minutes: "25", seconds: "37" },
    winners: winnerRows
  },
  {
    id: 3,
    serial: "#1",
    price: "R-458",
    title: "Lucky Day (Round 1)",
    image: "/assets/images/new/lucky-day.png",
    drawDate: "November 21st 2025, 05:30 PM",
    timeLeft: { days: "02", hours: "05", minutes: "25", seconds: "37" },
    winners: winnerRows
  },
  {
    id: 4,
    serial: "#1",
    price: "R-458",
    title: "Lucky Day (Round 1)",
    image: "/assets/images/new/lucky-day.png",
    drawDate: "November 21st 2025, 05:30 PM",
    timeLeft: { days: "02", hours: "05", minutes: "25", seconds: "37" },
    winners: winnerRows
  },
  {
    id: 5,
    serial: "#1",
    price: "R-458",
    title: "Lucky Day (Round 1)",
    image: "/assets/images/new/lucky-day.png",
    drawDate: "November 21st 2025, 05:30 PM",
    timeLeft: { days: "02", hours: "05", minutes: "25", seconds: "37" },
    winners: winnerRows
  },
  {
    id: 6,
    serial: "#1",
    price: "R-458",
    title: "Lucky Day (Round 1)",
    image: "/assets/images/new/lucky-day.png",
    drawDate: "November 21st 2025, 05:30 PM",
    timeLeft: { days: "02", hours: "05", minutes: "25", seconds: "37" },
    winners: winnerRows
  }
];

// Main Page Component
const HomePage: React.FC = () => {
  return (
    <main className="content-area flex-grow-1 px-xl-0 px-4">
      {/* Info Button */}
      <button type="button" className="right-sidebar-btn">
        <i className="fa-solid fa-circle-info"></i>
      </button>

      {/* Banner Section */}
      <div className="investment-wrapper">
        <Image
          className="w-100"
          src={banner}
          alt="Lottery Banner"
          width={1200}
          height={400}
          layout="responsive"
          priority
        />
      </div>

      {/* Lottery Cards Section */}
      <div className="investment-area">
        <div className="sec-title-content2">
          <h2>
            Play the Lottery Online with <br className="d-none d-lg-block" /> Official Tickets
          </h2>
          <p>
            Check your ticket numbers to see if you are a Winner in the Dream Lottery.
          </p>
        </div>

          <div className=''>
            <LotterySection />
          </div>
        
      </div>

      {/* Latest Results Section */}
      <div className="investment-history-area mt-100">
        <div className="sec-title-content2">
          <h2>Latest lottery results</h2>
          <p>
            Check your ticket numbers to see if you are a Winner in the Dream Lottery.
          </p>
        </div>

        <div className="row g-4">
          {resultCards.map((card) => (
            <ResultCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;