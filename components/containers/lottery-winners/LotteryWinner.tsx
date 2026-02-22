import React from "react";
import LotteryWinnerSlider, { Champion } from "./LotteryWinnerSlider";
import Image from "next/image";

type Props = {
  backgroundImage?: string;
  champions?: Champion[];
};

const defaultChampions: Champion[] = [
  { serial: "#1", avatarSrc: "/images/avatar/a-one.png", name: "Jacob Jones", wonText: "Won 45 minutes ago", numbers: [12, 13, 16, 19, 32], activeNumber: 16, drawDate: "27/11/24", aosDelay: 0 },
  { serial: "#2", avatarSrc: "/images/avatar/a-two.png", name: "Darrell Steward", wonText: "Won 45 minutes ago", numbers: [12, 13, 16, 19, 32], activeNumber: 16, drawDate: "27/11/24", aosDelay: 200 },
  { serial: "#3", avatarSrc: "/images/avatar/a-three.png", name: "Albert Flores", wonText: "Won 45 minutes ago", numbers: [12, 13, 16, 19, 32], activeNumber: 16, drawDate: "27/11/24", aosDelay: 400 },
  { serial: "#4", avatarSrc: "/images/avatar/a-four.png", name: "Robert Fox", wonText: "Won 45 minutes ago", numbers: [12, 13, 16, 19, 32], activeNumber: 16, drawDate: "27/11/24", aosDelay: 600 },
  { serial: "#5", avatarSrc: "/images/avatar/a-five.png", name: "Jacob Jones", wonText: "Won 45 minutes ago", numbers: [12, 13, 16, 19, 32], activeNumber: 16, drawDate: "27/11/24", aosDelay: 200 },
  { serial: "#6", avatarSrc: "/images/avatar/a-six.png", name: "Cody Fisher", wonText: "Won 45 minutes ago", numbers: [12, 13, 16, 19, 32], activeNumber: 16, drawDate: "27/11/24", aosDelay: 400 },
  { serial: "#7", avatarSrc: "/images/avatar/a-seven.png", name: "Jerome Bell", wonText: "Won 45 minutes ago", numbers: [12, 13, 16, 19, 32], activeNumber: 16, drawDate: "27/11/24", aosDelay: 600 },
  { serial: "#8", avatarSrc: "/images/avatar/a-eight.png", name: "Eleanor Pena", wonText: "Won 45 minutes ago", numbers: [12, 13, 16, 19, 32], activeNumber: 16, drawDate: "27/11/24", aosDelay: 800 },
];

const LotteryWinner: React.FC<Props> = ({
  backgroundImage = "/images/lottery-details.png",
  champions = defaultChampions,
}) => {
  return (
    <section className="champion pt-120 pb-120" data-background={backgroundImage}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-9">
            <div className="section__header text-center mb-55" data-aos="fade-up" data-aos-duration="600">
              <span className="fw-6 secondary-text text-xl">
                <strong>Recent,</strong> Lottery Winners
              </span>
              <h2 className="title-animation fw-6 mt-25">Meet Our Latest Champions</h2>
              <p className="mt-25">
                {"Welcome to our FAQs section! Here, we've compiled answers to some of the most common questions our users ask."}
              </p>
            </div>
          </div>
        </div>

        <div className="row gutter-24">
          {champions.map((c) => (
            <LotteryWinnerSlider key={c.serial} item={c} />
          ))}
        </div>

        {/* <div className="row">
          <div className="col-12">
            <div className="pagination-wrapper mt-40" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <ul className="pagination">
                <li>
                  <button type="button">
                    <i className="ti ti-chevron-left"></i>
                  </button>
                </li>
                <li>
                  <a href="lottery.html">1</a>
                </li>
                <li>
                  <a href="lottery.html" className="active">
                    2
                  </a>
                </li>
                <li>
                  <a href="lottery.html">3</a>
                </li>
                <li>
                  <button type="button">
                    <i className="ti ti-chevron-right"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>

      <div className="left-thumb">
        <Image width={100} height={100} src="/images/right-wheel.png" alt="Image" />
      </div>
      <div className="left-thumb-th">
        <Image width={100} height={100} src="/images/left-th.png" alt="Image" />
      </div>
    </section>
  );
};

export default LotteryWinner;
