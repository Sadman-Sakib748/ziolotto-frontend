import Image from "next/image";
import React from "react";

type RankItem = {
  rank: string; // "1st"
  number: string; // "584X748"
  highlight?: boolean; // adds "color-2" li class
};

type LotteryCardStyle2 = {
  serial: string;
  price: string;
  thumb: string;
  title: string;
  drawAt: string;
  leftRanks: RankItem[]; // 1-5
  rightRanks: RankItem[]; // 6-10
  timeLeft: string[]; // ["02D","05H","25M","37S"]
  ticketHref?: string;
  winnersHref?: string;
};

const demoLeft: RankItem[] = [
  { rank: "1st", number: "584X748" },
  { rank: "2st", number: "584X748" },
  { rank: "3st", number: "584X748", highlight: true },
  { rank: "4st", number: "584X748" },
  { rank: "5st", number: "584X748" },
];

const demoRight: RankItem[] = [
  { rank: "6st", number: "584X748" },
  { rank: "7st", number: "584X748" },
  { rank: "8st", number: "584X748", highlight: true },
  { rank: "9st", number: "584X748" },
  { rank: "10st", number: "584X748" },
];

const CARDS: LotteryCardStyle2[] = Array.from({ length: 10 }).map((_, idx) => ({
  serial: `#${idx + 1}`,
  price: "R-458",
  thumb: "/images/new/lucky-day.png",
  title: "Lucky Day ( Round 1)",
  drawAt: "Draw at November 21st 2025",
  leftRanks: demoLeft,
  rightRanks: demoRight,
  timeLeft: ["02D", "05H", "25M", "37S"],
  ticketHref: "#",
  winnersHref: "#",
}));

function RankBox({ items }: { items: RankItem[] }) {
  return (
    <div className="pricing-rank-box">
      <div className="rank-top">
        <span>Rank</span>
        <span>Winning No</span>
      </div>
      <ul>
        {items.map((it, i) => (
          <li key={i} className={it.highlight ? "color-2 px-2 px-md-3 py-2 py-md-2" : "mb-2 px-2 py-2 px-md-3"}>
            <span className="rank-text">
              <Image width={100} height={100} src="/images/new/award.png" alt="img" />
              <span>{it.rank}</span>
            </span>
            <span className="number-text">
              <Image width={100} height={100} src="/images/new/cash.png" alt="img" />
              <span>{it.number}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CardStyle2({ card }: { card: LotteryCardStyle2 }) {
  return (
    <div className="lotteries-card-items style-2">
      <span className="serial">{card.serial}</span>
      <span className="price">{card.price}</span>

      <div className="thumb">
        <Image width={100} height={100} src={card.thumb} alt="" />
      </div>

      <div className="content">
        <h5>{card.title}</h5>
        <p className="text-white">{card.drawAt}</p>
      </div>

      <h6>Today’s Top 10 Winning Number</h6>

      <div className="pricing-rank-area px-1 gap-2">
        <RankBox items={card.leftRanks} />
        <RankBox items={card.rightRanks} />
      </div>

      <div className="time-left-items">
        <p>Time Left :</p>
        <div className="d-flex align-items-center justify-content-center gap-1">
          {card.timeLeft.map((t, i) => (
            <span className="bg-success" key={i}>{t}</span>
          ))}
        </div>
      </div>

      <div className="lotterie-btn style-2">
        <a href={card.ticketHref ?? "#"} className="btns">
          <i className="fa-solid fa-arrow-left"></i>
          Your Ticket
        </a>
        <a href={card.winnersHref ?? "#"} className="btns">
          Winner List <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default function LotteryWinnerCards() {
  return (
    <div className="row g-4">
      {CARDS.map((card, idx) => (
        <div
          key={idx}
          className="col-12 col-md-6 col-xl-4"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <CardStyle2 card={card} />
        </div>
      ))}
    </div>
  );
}
