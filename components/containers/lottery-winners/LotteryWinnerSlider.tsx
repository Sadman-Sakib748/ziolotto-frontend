import Image from "next/image";
import React from "react";

export type Champion = {
  serial: string; // "#1"
  avatarSrc: string;
  name: string;
  wonText: string; // "Won 45 minutes ago"
  numbers: number[];
  activeNumber?: number;
  drawDate: string; // "27/11/24"
  aosDelay?: number;
};

type Props = {
  item: Champion;
  className?: string;
};

const LotteryWinnerSlider: React.FC<Props> = ({ item, className }) => {
  return (
    <div
      className={`col-12 col-md-6 col-xl-4 col-xxl-3 ${className ?? ""}`}
      data-aos="fade-up"
      data-aos-duration="600"
      {...(typeof item.aosDelay === "number" ? { "data-aos-delay": item.aosDelay } : {})}
    >
      <div className="lt-type__single champion__single text-center tilt">
        <span className="serial">{item.serial}</span>

        <div className="thumb">
          <Image width={100} height={100} src={item.avatarSrc} alt="Image" />
        </div>

        <div className="content mt-20">
          <h6 className="fw-6">{item.name}</h6>
          <p className="text-sm mt-4 primary-text">{item.wonText}</p>
        </div>

        <div className="cta mt-25">
          <ul className="champion">
            {item.numbers.map((n) => (
              <li key={n} className={n === item.activeNumber ? "active" : undefined}>
                {n}
              </li>
            ))}
          </ul>
        </div>

        <div className="timer mt-30">
          <p>
            Draw held on : <span>{item.drawDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LotteryWinnerSlider;
