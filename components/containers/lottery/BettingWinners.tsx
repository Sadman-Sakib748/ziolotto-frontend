// components/latest-winners.tsx
import Image from "next/image";
import React from "react";

type WinnerRow = {
  rank: string;
  userId: string;
  winningNo: string;
  amount: string;
  tickets: string;
  showAward?: boolean; // for 4th+ you had opacity-0 award image
};

type WinnerCard = {
  serial: string;
  code: string; // R-458
  thumb: string;
  title: string;
  drawAt: string;
  rows: WinnerRow[];
  nextDraw: string[]; // ["02D","05H","25M","37S"]
};

const demoRows: WinnerRow[] = [
  { rank: "1st", userId: "45x48286", winningNo: "459x625", amount: "$50000", tickets: "45", showAward: true },
  { rank: "2nd", userId: "45x48286", winningNo: "459x625", amount: "$50000", tickets: "45", showAward: true },
  { rank: "3rd", userId: "45x48286", winningNo: "459x625", amount: "$50000", tickets: "45", showAward: true },
  { rank: "4th", userId: "45x48286", winningNo: "459x625", amount: "$50000", tickets: "45", showAward: false },
  { rank: "5th", userId: "45x48286", winningNo: "459x625", amount: "$50000", tickets: "45", showAward: false },
  { rank: "6th", userId: "45x48286", winningNo: "459x625", amount: "$50000", tickets: "45", showAward: false },
  { rank: "7th", userId: "45x48286", winningNo: "459x625", amount: "$50000", tickets: "45", showAward: false },
  { rank: "8th", userId: "45x48286", winningNo: "459x625", amount: "$50000", tickets: "45", showAward: false },
  { rank: "9th", userId: "45x48286", winningNo: "459x625", amount: "$50000", tickets: "45", showAward: false },
  { rank: "10th", userId: "45x48286", winningNo: "459x625", amount: "$50000", tickets: "45", showAward: false },
];

const CARDS: WinnerCard[] = [
  {
    serial: "#1",
    code: "R-458",
    thumb: "/images/new/lucky-day.png",
    title: "Lucky Day ( Round 1)",
    drawAt: "Draw at November 21st 2025",
    rows: demoRows,
    nextDraw: ["02D", "05H", "25M", "37S"],
  },
  {
    serial: "#1",
    code: "R-458",
    thumb: "/images/new/lucky-day.png",
    title: "Lucky Day ( Round 1)",
    drawAt: "Draw at November 21st 2025",
    rows: demoRows,
    nextDraw: ["02D", "05H", "25M", "37S"],
  },
  {
    serial: "#1",
    code: "R-458",
    thumb: "/images/new/lucky-day.png",
    title: "Lucky Day ( Round 1)",
    drawAt: "Draw at November 21st 2025",
    rows: demoRows,
    nextDraw: ["02D", "05H", "25M", "37S"],
  },
];

function WinnerCardItem({ card }: { card: WinnerCard }) {
  return (
    <div className="lotteries-card-items style-lottery">
      <span className="serial">{card.serial}</span>
      <span className="price">{card.code}</span>

      <div className="thumb">
        <Image width={100} height={100} src={card.thumb} alt="Image" />
      </div>

      <div className="content">
        <h5>{card.title}</h5>
        <p className="text-white">{card.drawAt}</p>
      </div>

      <h6>Today’s Top 10 Winning Number</h6>

      <div className="winner-table-container d-none d-md-block px-1">
        <table className="winner-table-item">
          <thead className="">
            <tr>
              <th>Rank</th>
              <th>User ID</th>
              <th>Winning No</th>
              <th>Amount</th>
              <th>Tickets</th>
            </tr>
          </thead>
          <tbody>
            {card.rows.map((r, i) => (
              <tr key={i}>
                <td>
                  <span className="rank-badge my-2 my-md-0">
                    <div>
                      <Image width={20} height={20} 
                        className={r.showAward ? "" : "opacity-0"}
                        src="/images/new/award.png"
                        alt=""
                      />
                    </div>
                    {r.rank}
                  </span>
                </td>

                <td>
                  <span className="user-id my-2 my-md-0">
                    <Image width={20} height={20} className="d-none d-md-block" src="/images/new/user.png" alt="" /> {r.userId}
                  </span>
                </td>

                <td>
                  <span className="win-no my-2 my-md-0">
                    <Image width={20} height={20} className="d-none d-md-block" src="/images/new/win.png" alt="" /> {r.winningNo}
                  </span>
                </td>

                <td>
                  <span className="amount my-2 my-md-0 text-info fw-bold">
                    <Image width={20} height={20} className="d-none d-md-block" src="/images/new/cash.png" alt="" /> {r.amount}
                  </span>
                </td>

                <td><span className="my-2 my-md-0">
                  {r.tickets}
                </span></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-md-none">
        <table className="winner-table-item">
          <thead className="">
            <tr className="border-bottom pb-2">
              <th className="fw-bold text-info px-1">Rank</th>
              <th className="fw-bold text-info px-1">User ID</th>
              <th className="fw-bold text-info px-1">Winning No</th>
              <th className="fw-bold text-info px-1">Amount</th>
              <th className="fw-bold text-info px-1">Tickets</th>
            </tr>
          </thead>

          <tbody>
            {card.rows.map((r, i) => (
              <tr key={i} className="border-bottom border-secondary"> 
                <td>
                  <span className="rank-badge my-2 my-md-0">
                    <Image width={27} height={27}
                      className={r.showAward ? "d-none d-md-block" : "opacity-0 d-none d-md-block"}
                      src="/images/new/award.png"
                      alt=""
                    />
                    <span className="ps-2"> {r.showAward ? <b className="text-info">{r.rank}</b> : r.rank}</span>
                  </span>
                </td>

                <td>
                  <span className="user-id my-2 my-md-0 ms-2">
                    <Image width={100} height={100} className="d-none d-md-block" src="/images/new/user.png" alt="" /> {r.userId}
                  </span>
                </td>

                <td>
                  <span className="win-no my-2 my-md-0">
                    <Image width={100} height={100} className="d-none d-md-block" src="/images/new/win.png" alt="" /> {r.winningNo}
                  </span>
                </td>

                <td>
                  <span className="amount my-2 my-md-0 text-warning fw-bold">
                    <Image width={100} height={100} className="d-none d-md-block" src="/images/new/cash.png" alt="" /> {r.amount}
                  </span>
                </td>

                <td><span className="my-2 my-md-0">
                  {r.tickets}
                </span></td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="time-left-items">
        <p>Next Draw:</p>
        <div className="d-flex align-items-center justify-content-center gap-1">
          {card.nextDraw.map((t, idx) => (
            <span className="bg-success" key={idx}>{t}</span>
          ))}
        </div>

      </div>

      <div className="lotterie-btn style-3">
        <a href="#" className="btns">
          <i className="ti ti-chevron-left"></i>
          Older
        </a>
        <a href="#" className="btns">
          Newer <i className="ti ti-chevron-right"></i>
        </a>
      </div>
    </div>
  );
}

export default function BettingWinners() {
  return (
    <>
      <div className="row g-4">
        {CARDS.map((card, idx) => (
          <div key={idx} className="col-12 col-md-6 col-xl-4" data-aos="fade-up" data-aos-duration="600">
            <WinnerCardItem card={card} />
          </div>
        ))}
      </div>
    </>
  );
}
