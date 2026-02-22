"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const MAX_TICKETS = 100;
const MIN_TICKETS = 1;

type Lottery = {
  id: number;
  title: string;
  subtitle: string;
  price: number;
};

const lotteries: Lottery[] = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: "Lucky Day (Round 1)",
  subtitle: "Pricing List",
  price: 10,
}));

const LotterySection = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="container">
      <div className="row gutter-24">
        {lotteries.map((lottery) => (
          <LotteryItem key={lottery.id} lottery={lottery} />
        ))}
      </div>
    </div>
  );
};

const LotteryItem = ({ lottery }: { lottery: Lottery }) => {
  const [count, setCount] = useState<number>(1);

  const totalAmount = useMemo(
    () => count * lottery.price,
    [count, lottery.price],
  );

  const increase = () => setCount((c) => Math.min(c + 1, MAX_TICKETS));

  const decrease = () => setCount((c) => Math.max(c - 1, MIN_TICKETS));

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);
    if (!Number.isNaN(num)) {
      setCount(Math.min(Math.max(num, MIN_TICKETS), MAX_TICKETS));
    }
  };

  const handleBuy = () => {
    alert(`Buying ${count} ticket(s)\nTotal: $${totalAmount}`);
  };

  return (
    <div className="col-12 col-md-6 col-xl-4 px-0 px-md-2" data-aos="fade-up">
      <div className="lotteries-card-items">
        <span className="serial">#{lottery.id}</span>

        <div className="thumb">
          <Image
            src="/images/new/lucky-day.png"
            alt="Lottery"
            width={100}
            height={100}
            priority
          />
        </div>

        <div className="content">
          <h5 className="fw-bolder">{lottery.title}</h5>
          <p>{lottery.subtitle}</p>
        </div>

        <div className="counter-container border-info">
          <span>No of Tickets</span>

          <input
            type="number"
            min={MIN_TICKETS}
            max={MAX_TICKETS}
            value={count}
            onChange={handleInput}
            className="rounded-3 w-25 bg-navy-blue px-2 text-center"
          />

          <div className="controls">
            <button onClick={decrease} disabled={count <= MIN_TICKETS}>
              −
            </button>

            <span>{count}</span>

            <button onClick={increase} disabled={count >= MAX_TICKETS}>
              +
            </button>
          </div>
        </div>

        <div className="lotterie-btn style-3 mt-3">
          <button
            type="button"
            className="btn--primary py-2 px-3 d-flex align-items-center justify-content-center gap-2"
            onClick={handleBuy}
          >
            Pay Now
            <span className="fw-bold text-xl">${totalAmount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LotterySection;
