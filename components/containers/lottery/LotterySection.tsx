'use client';

import { useState, useMemo } from "react";
import Image from "next/image";

const MAX_TICKETS = 100;

const LotteryCard = ({
  serial = "#1",
  drawTitle = "Lucky Day ( Round 1)",
  drawAtText = "Pricing List",
  ticketPrice = 10,
}: {
  serial?: string;
  drawTitle?: string;
  drawAtText?: string;
  ticketPrice?: number;
}) => {
  const [ticketCount, setTicketCount] = useState<number | "">(1);

  const normalizedCount =
    typeof ticketCount === "number" ? ticketCount : 0;

  const totalAmount = useMemo(() => {
    return Number(ticketPrice) * normalizedCount;
  }, [ticketPrice, normalizedCount]);

  const handlePlus = () => {
    setTicketCount(prev => {
      const current = typeof prev === "number" ? prev : 0;
      return current < MAX_TICKETS ? current + 1 : MAX_TICKETS;
    });
  };

  const handleMinus = () => {
    setTicketCount(prev => {
      const current = typeof prev === "number" ? prev : 0;
      return current > 1 ? current - 1 : 1;
    });
  };

  const handleTicketInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (!/^\d*$/.test(val)) return;

    if (val === "") {
      setTicketCount("");
      return;
    }

    const num = Number(val);

    if (num > MAX_TICKETS) {
      setTicketCount(MAX_TICKETS);
    } else {
      setTicketCount(num);
    }
  };

  const handleTicketBlur = () => {
    if (!normalizedCount || normalizedCount < 1) {
      setTicketCount(1);
    }
  };

  const handleBuy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (!normalizedCount || normalizedCount < 1) {
      alert("Please select at least 1 ticket.");
      setTicketCount(1);
      return;
    }

    alert(
      `Buying ${normalizedCount} ticket(s)\nTotal: $${totalAmount}`
    );
  };

  return (
    <div className="lotteries-card-items">
      <span className="serial">{serial}</span>

      <div className="thumb">
        <Image
          width={100}
          height={100}
          src="/images/new/lucky-day.png"
          alt="Lottery"
        />
      </div>

      <div className="content">
        <h5 className="fw-bolder">{drawTitle}</h5>
        <p>{drawAtText}</p>
      </div>

      {/* Ticket Controls */}
      <div className="counter-container border-info">
        <span>No of Tickets</span>

        <input
          className="rounded-3 w-25 bg-navy-blue px-2 text-center"
          type="text"
          inputMode="numeric"
          value={ticketCount}
          onChange={handleTicketInput}
          onBlur={handleTicketBlur}
          placeholder="0"
        />

        <div className="controls">
          <button
            type="button"
            onClick={handleMinus}
            disabled={normalizedCount <= 1}
          >
            -
          </button>

          <span>{normalizedCount}</span>

          <button
            type="button"
            onClick={handlePlus}
            disabled={normalizedCount >= MAX_TICKETS}
          >
            +
          </button>
        </div>
      </div>

      {/* Pay Button */}
      <div className="lotterie-btn style-3 mt-3">
        <a
          href="#"
          className="btn--primary py-2 px-3 d-flex align-items-center justify-content-center gap-2"
          onClick={handleBuy}
        >
          Pay Now
          <span className="fw-bold text-xl">
            ${totalAmount}
          </span>
        </a>
      </div>
    </div>
  );
};



const LotterySection = () => {
  const cards = Array.from({ length: 10 });
console.log(cards)
  return (
    <div className="container">
      <div className="row gutter-24">
        {cards.map((_, idx) => (
          <div
            key={idx}
            className="col-12 col-md-6 col-xl-4 px-0 px-md-2"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            <LotteryCard serial={`#${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LotterySection;
