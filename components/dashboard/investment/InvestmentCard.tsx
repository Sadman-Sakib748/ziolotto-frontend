import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface InvestmentCardProps {
    serial?: string
    price?: string
    badgeText?: string
    days?: number
    investmentAmount?: string
    returnPercentage?: string
    returnAmount?: string
    timer?: {
        days: string
        hours: string
        minutes: string
        seconds: string
    }
    buttonText?: string
    buttonLink?: string
}

const InvestmentCard: React.FC<InvestmentCardProps> = ({
    serial = '#1',
    price = 'R-458',
    badgeText = 'EasyGrowth',
    days = 365,
    investmentAmount = '$10,000',
    returnPercentage = '50% Interest',
    returnAmount = '$15,000',
    timer = { days: '365D', hours: '02H', minutes: '05M', seconds: '13S' },
    buttonText = 'Invest now',
    buttonLink = '#'
}) => {
    return (
        <div className="investment-box-items">
            <span className="serial">{serial}</span>
            <span className="price">
                <FontAwesomeIcon icon={faStar} /> {price}
            </span>

            <div className="card-header">
                <span className="badge-dashboard">{badgeText}</span>
                <div className="graphic-area">
                    <Image
                        src="/assets/images/new/investment-img2.png"
                        alt="Investment"
                        width={120}
                        height={120}
                        className="img-fluid"
                    />
                </div>
            </div>

            <div className="card-content">
                <div className="prize-tag">{days} Days</div>
                <h2 className="main-title">
                    <div className="line-1"></div>
                    INVESTMENT
                    <div className="line-2"></div>
                    <div className="line-4"></div>
                    <div className="line-3"></div>
                </h2>

                <div className="pricing">
                    <span className="small-price">{investmentAmount}</span>
                    <p className="buzz-text">Returns {returnPercentage}</p>
                    <span className="large-price">{returnAmount}</span>
                </div>

                <hr className="divider" />
            </div>

            <div className="timer-container">
                <div className="time-box">{timer.days}</div>
                <div className="time-box">{timer.hours}</div>
                <div className="time-box">{timer.minutes}</div>
                <div className="time-box">{timer.seconds}</div>
            </div>

            <div className="text-center">
                <Link href={buttonLink} className="invest-btns">
                    {buttonText} <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </Link>
            </div>
        </div>
    )
}

export default InvestmentCard