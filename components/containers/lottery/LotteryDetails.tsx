"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";

type PrizeTier = {
  rank: string;
  amount: string;
  toneClass: string; // e.g. "prize-green"
};

type WinnerRow = {
  rank: string; // "1st" | "2nd" | ...
  userId: string;
  winningNo: string;
  amount: string;
  tickets: number;
  showAwardIcon?: boolean; // for 1st/2nd/3rd
};

type PrizePyramidProps = {
  roundLabel?: string; // e.g. "ROUND 1"
  endsInLabel?: string; // e.g. "LOTTERY ( ROUND 01 ) ENDS IN"
  countdown?: {
    days: string; // "02D"
    hours: string; // "02H"
    minutes: string; // "05M"
    seconds: string; // "13S"
  };
  drawTitle?: string; // "Lucky Day ( Round 1)"
  drawAtText?: string; // "Draw at November 21st 2025, 05:30 PM"
  prizeTitle?: string; // "PRIZE FOR LOTTERY ( ROUND 1 )"
  prizeSubtitle?: string; // "Prize List"

  prizes?: {
    mobileFirst: { rank: string; amount: string };
    mobileRow2: { rank: string; amount: string }[];
    mobileRow3: { rank: string; amount: string }[];
    desktopRows: PrizeTier[][];
  };

  winners?: WinnerRow[];
  ticketPrice?: number; // 5
  initialTickets?: number; // 10
  yourTickets?: number; // 4
  winningChance?: string; // "10%"
  ticketNumbers?: string[];

  onOlder?: () => void;
  onNewer?: () => void;
  onBuyTickets?: (count: number) => void;
  onTicketsHistory?: () => void;
};

const defaultProps: Required<
  Pick<
    PrizePyramidProps,
    | "roundLabel"
    | "endsInLabel"
    | "countdown"
    | "drawTitle"
    | "drawAtText"
    | "prizeTitle"
    | "prizeSubtitle"
    | "ticketPrice"
    | "initialTickets"
    | "yourTickets"
    | "winningChance"
  >
> & {
  prizes: NonNullable<PrizePyramidProps["prizes"]>;
  winners: NonNullable<PrizePyramidProps["winners"]>;
  ticketNumbers: NonNullable<PrizePyramidProps["ticketNumbers"]>;
} = {
  roundLabel: "ROUND 1",
  prizeTitle: "PRIZE FOR LOTTERY ( ROUND 1 )",
  prizeSubtitle: "Prize List",
  endsInLabel: "LOTTERY ( ROUND 01 ) ENDS IN",
  countdown: { days: "02D", hours: "02H", minutes: "05M", seconds: "13S" },
  drawTitle: "Lucky Day ( Round 1)",
  drawAtText: "Draw at November 21st 2025",
  ticketPrice: 5,
  initialTickets: 10,
  yourTickets: 4,
  winningChance: "10%",
  prizes: {
    mobileFirst: { rank: "1st Prize", amount: "$100000" },
    mobileRow2: [
      { rank: "2nd", amount: "$80000" },
      { rank: "3rd", amount: "$50000" },
    ],
    mobileRow3: [
      { rank: "2nd", amount: "$80000" },
      { rank: "3rd", amount: "$50000" },
      { rank: "3rd", amount: "$50000" },
    ],
    desktopRows: [
      [{ rank: "1st Prize", amount: "$100000", toneClass: "prize-green" }],
      [
        { rank: "2nd Prize", amount: "$80000", toneClass: "prize-gold" },
        { rank: "3rd Prize", amount: "$50000", toneClass: "prize-gold" },
      ],
      [
        { rank: "2nd Prize", amount: "$80000", toneClass: "prize-purple" },
        { rank: "3rd Prize", amount: "$50000", toneClass: "prize-purple" },
        { rank: "3rd Prize", amount: "$50000", toneClass: "prize-purple" },
      ],
      [
        { rank: "2nd Prize", amount: "$80000", toneClass: "prize-blue" },
        { rank: "3rd Prize", amount: "$50000", toneClass: "prize-blue" },
        { rank: "3rd Prize", amount: "$50000", toneClass: "prize-blue" },
        { rank: "3rd Prize", amount: "$50000", toneClass: "prize-blue" },
      ],
    ],
  },
  winners: [
    { rank: "1st", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: 45, showAwardIcon: true },
    { rank: "2nd", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: 45, showAwardIcon: true },
    { rank: "3rd", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: 45, showAwardIcon: true },
    { rank: "4th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: 45, showAwardIcon: false },
    { rank: "5th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: 45, showAwardIcon: false },
    { rank: "6th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: 45, showAwardIcon: false },
    { rank: "7th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: 45, showAwardIcon: false },
    { rank: "8th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: 45, showAwardIcon: false },
    { rank: "9th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: 45, showAwardIcon: false },
    { rank: "10th", userId: "45x48286", winningNo: "459x625", amount: "$500", tickets: 45, showAwardIcon: false },
  ],
  ticketNumbers: Array.from({ length: 28 }).map(() => "3245002"),
};

export default function LotteryDetails(props: PrizePyramidProps) {
  const merged = { ...defaultProps, ...props };
  const {
    prizeTitle,
    prizeSubtitle,
    endsInLabel,
    countdown,
    drawTitle,
    drawAtText,
    prizes,
    winners,
    ticketPrice,
    initialTickets,
    yourTickets,
    winningChance,
    ticketNumbers,
    onOlder,
    onNewer,
    onBuyTickets,
    onTicketsHistory,
  } = merged;

  const [ticketCount, setTicketCount] = useState<number>(initialTickets);

  const totalAmount = useMemo(() => ticketCount * ticketPrice, [ticketCount, ticketPrice]);

  const handleMinus = () => setTicketCount((v) => Math.max(1, v - 1));
  const handlePlus = () => setTicketCount((v) => v + 1);

  const handleBuy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onBuyTickets?.(ticketCount);
  };

  const handleOlder = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onOlder?.();
  };

  const handleNewer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNewer?.();
  };

  const handleHistory = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onTicketsHistory?.();
  };

  return (
    <div className="prize-pyramid pt-80 pb-80">
      <div className="container">
        <div className="sec-title-content2 mb-0">
          <h3>{prizeTitle}</h3>
          <h4>{prizeSubtitle}</h4>
        </div>

        <div className="lotteries-wrappers-items">
          {/* Mobile */}
          <div className="lotteries-card-items lotteries-responsive-style d-lg-none">
            <div className="price-box">
              <span className="price-1">{prizes.mobileFirst.rank}</span>
              <span className="price-2">{prizes.mobileFirst.amount}</span>
            </div>

            <div className="price-wrap">
              {prizes.mobileRow2.map((p, idx) => (
                <div className="price-box2" key={`m2-${idx}`}>
                  <span className="price-1">{p.rank}</span>
                  <span className="price-2">{p.amount}</span>
                </div>
              ))}
            </div>

            <div className="price-wrap">
              {prizes.mobileRow3.map((p, idx) => (
                <div className="price-box3" key={`m3-${idx}`}>
                  <span className="price-1">{p.rank}</span>
                  <span className="price-2">{p.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="lotteries-wrappers d-none d-lg-block">
            {prizes.desktopRows.map((row, rowIdx) => (
              <div className="prize-row" key={`row-${rowIdx}`}>
                {row.map((p, idx) => (
                  <div className={`prize-card ${p.toneClass}`} key={`p-${rowIdx}-${idx}`}>
                    <span className="prize-rank">{p.rank}</span>
                    <h3>{p.amount}</h3>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="lottery-details-wrap">
          <div className="countdown-container">
            <h2>{endsInLabel}</h2>
            <div className="timer-boxes">
              <div className="box">{countdown.days}</div>
              <div className="box">{countdown.hours}</div>
              <div className="box">{countdown.minutes}</div>
              <div className="box">{countdown.seconds}</div>
            </div>
          </div>

          <div className="row g-4">
            {/* Winners table */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="lotteries-card-items style-lottery style-padding-30">
                <div className="content">
                  <h5>{drawTitle}</h5>
                  <p className="text-white">{drawAtText}</p>
                </div>

                <h6>Today’s Top 10 Winning Number</h6>

                <div className="winner-table-container">
                  <table className="winner-table-item w-100">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>User ID</th>
                        <th>Winning No</th>
                        <th>Amount</th>
                        <th>Tickets</th>
                      </tr>
                    </thead>

                    <tbody>
                      {winners.map((w, idx) => (
                        <tr key={`w-${idx}`}>
                          <td>
                            <span className="rank-badge">
                              <div>
                                  <Image width={20} height={20}
                                    className={!w.showAwardIcon ? "opacity-0" : undefined}
                                    src="/images/new/award.png"
                                    alt=""
                                  />
                              </div>
                              {w.rank}
                            </span>
                          </td>
                          <td>
                            <span className="user-id">
                              <Image className="d-none d-md-block" width={20} height={20} src="/images/new/user.png" alt="" /> {w.userId}
                            </span>
                          </td>
                          <td>
                            <span className="win-no">
                              <Image className="d-none d-md-block" width={20} height={20} src="/images/new/win.png" alt="" /> {w.winningNo}
                            </span>
                          </td>
                          <td>
                            <span className="amount">
                              <Image className="d-none d-md-block" width={20} height={20} src="/images/new/cash.png" alt="" /> {w.amount}
                            </span>
                          </td>
                          <td>{w.tickets}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="lotterie-btn style-3 mt-3">
                  <a href="#" className="btns" onClick={handleOlder}>
                    <i className="ti ti-chevron-left"></i>
                    Older
                  </a>
                  <a href="#" className="btns" onClick={handleNewer}>
                    Newer <i className="ti ti-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Buy tickets */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="lotteries-card-items style-lottery style-padding-30">
                <div className="content">
                  <h5>{drawTitle}</h5>
                  <p className="text-white">{drawAtText}</p>
                </div>

                <h6>Buy Lottery Tickets</h6>

                <div className="ticket-card">
                  <div className="rows">
                    <span>Price Per Ticket</span>
                    <span className="value">${ticketPrice}</span>
                  </div>

                  <div className="rows">
                    <span>Total Tickets</span>
                    <span className="value" id="total-tickets-display">
                      {ticketCount}
                    </span>
                  </div>

                  <div className="rows">
                    <span>Total Amount</span>
                    <span className="value" id="total-amount-display">
                      ${totalAmount}
                    </span>
                  </div>

                  <div className="counter-container">
                    <span className="label">No of Tickets</span>
                    <div className="controls">
                      <button id="minus-btn" type="button" onClick={handleMinus}>
                        -
                      </button>
                      <span id="ticket-count">{ticketCount}</span>
                      <button id="plus-btn" type="button" onClick={handlePlus}>
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="lotterie-btn style-3 mt-5">
                  <a href="#" className="btn--primary" onClick={handleBuy}>
                    Buy Tickets
                  </a>
                </div>
              </div>
            </div>

            {/* Tickets history */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="lotteries-card-items style-lottery style-padding-30">
                <div className="content">
                  <h5>{drawTitle}</h5>
                  <p className="text-white">{drawAtText}</p>
                </div>

                <h6>Recent Tickets Purchase</h6>

                <div className="ticket-purchase-history-box">
                  <div className="info-row">
                    <span>Your Ticket</span>
                    <span className="value">{yourTickets}</span>
                  </div>

                  <div className="divider"></div>

                  <div className="info-row">
                    <span>Winning Chance</span>
                    <span className="value">{winningChance}</span>
                  </div>

                  <div className="divider"></div>

                  <div className="ticket-header">
                    <h3>Ticket No</h3>
                    <div className="short-line"></div>
                  </div>

                  <div className="ticket-grid">
                    {ticketNumbers.map((n, idx) => (
                      <span key={`tn-${idx}`}>{n}</span>
                    ))}
                  </div>
                </div>

                <div className="lotterie-btn style-3 mt-5">
                  <a href="#" className="btn--primary" onClick={handleHistory}>
                    Tickets History
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
