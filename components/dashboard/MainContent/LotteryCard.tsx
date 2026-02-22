'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

interface LotteryCardProps {
    card: LotteryCardType;
}

const LotteryCard: React.FC<LotteryCardProps> = ({ card }) => {
    return (
        <div className="col-12 page-wrapper a-cursor col-md-6 col-xl-6 col-xxl-4" data-aos="fade-up" data-aos-duration="600">
            <div className="lotteries-card-items">
                <span className="serial">{card.serial}</span>
                <span className="price"><i className="fa-solid fa-star"></i>{card.price}</span>
                <div className="thumb">
                    <Image
                        src={card.image}
                        alt={card.title}
                        width={200}
                        height={200}
                        layout="responsive"
                    />
                </div>
                <div className="content">
                    <h5>{card.title}</h5>
                    <p>Pricing List</p>
                </div>
                <div className="price-box">
                    <span className="price-1">1st Prize</span>
                    <span className="price-2">{card.firstPrize}</span>
                </div>
                <div className="price-wrap">
                    <div className="price-box2">
                        <span className="price-1">2nd</span>
                        <span className="price-2">{card.secondPrize}</span>
                    </div>
                    <div className="price-box2">
                        <span className="price-1">3rd</span>
                        <span className="price-2">{card.thirdPrize}</span>
                    </div>
                </div>
                <div className="price-wrap">
                    <div className="price-box3">
                        <span className="price-1">2nd</span>
                        <span className="price-2">{card.secondPrize}</span>
                    </div>
                    <div className="price-box3">
                        <span className="price-1">3rd</span>
                        <span className="price-2">{card.thirdPrize}</span>
                    </div>
                    <div className="price-box3">
                        <span className="price-1">3rd</span>
                        <span className="price-2">{card.thirdPrize}</span>
                    </div>
                </div>
                <div className="time-left-items">
                    <p>Time Left :</p>
                    <span>{card.timeLeft.days}D</span>
                    <span>{card.timeLeft.hours}H</span>
                    <span>{card.timeLeft.minutes}M</span>
                    <span>{card.timeLeft.seconds}S</span>
                </div>
                <div className="lotterie-btn">
                    <Link href="#" className="btns">Your Ticket <i className="fa-solid fa-arrow-right"></i></Link>
                    <Link href="#" className="btns">Winner List <i className="fa-solid fa-arrow-right"></i></Link>
                    <Link href="#" className="btns">Past Result <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
                <Link href="#" className="link-btns">Play Now <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
    );
};

export default LotteryCard;