import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

type Status = 'Active' | 'Complated' | 'Cancelled'

interface InvestmentHistoryCardProps {
  serial?: string
  price?: string
  badgeText?: string
  investmentAmount?: string
  returnPercentage?: string
  returnAmount?: string
  timer?: {
    days: string
    hours: string
    minutes: string
    seconds: string
  }
  details?: {
    serialD: string
    date: string
    time: string
    codeNo: string
  }
  status: Status
}

const InvestmentHistoryCard: React.FC<InvestmentHistoryCardProps> = ({
  serial = '#1',
  price = 'R-458',
  badgeText = 'EasyGrowth',
  investmentAmount = '$10,000',
  returnPercentage = '50% Interest',
  returnAmount = '$15,000',
  timer = { days: '365D', hours: '02H', minutes: '05M', seconds: '13S' },
  details = { serialD: '41', date: '29-1-2006', time: '12:00-05', codeNo: '545' },
  status = 'Active'
}) => {
  const getStatusClass = () => {
    switch(status) {
      case 'Active': return 'active-btn'
      case 'Complated': return 'active-btn style-2'
      case 'Cancelled': return 'active-btn style-3'
      default: return 'active-btn'
    }
  }

  const getStatusColor = () => {
    switch(status) {
      case 'Active': return '#00ff00'
      case 'Complated': return '#ffd700'
      case 'Cancelled': return '#ff4444'
      default: return '#ffd700'
    }
  }

  return (
    <div className="investment-box-items">
      <span className="serial">{serial}</span>
      <span className="price">
        <FontAwesomeIcon icon={faStar} /> {price}
      </span>
      
      <div className="card-header">
        <span className="badge-dashboard">{badgeText}</span>
      </div>
      
      <div className="graphic-area">
        <Image 
          src="/assets/images/new/investment-img2.png" 
          alt="Investment" 
          width={100} 
          height={100}
          className="img-fluid"
        />
      </div>

      <div className="card-content">
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

        <ul className="investment-details-list">
          <li>
            <span>Serial D</span>
            <span style={{ color: getStatusColor() }}>{details.serialD}</span>
          </li>
          <li>
            <span>Date</span>
            <span style={{ color: getStatusColor() }}>{details.date}</span>
          </li>
          <li>
            <span>Time</span>
            <span style={{ color: getStatusColor() }}>{details.time}</span>
          </li>
          <li>
            <span>Code No</span>
            <span style={{ color: getStatusColor() }}>{details.codeNo}</span>
          </li>
        </ul>
      </div>

      <div className="timer-container">
        <div className="time-box">{timer.days}</div>
        <div className="time-box">{timer.hours}</div>
        <div className="time-box">{timer.minutes}</div>
        <div className="time-box">{timer.seconds}</div>
      </div>

      <div className="text-center">
        <span className={getStatusClass()}>{status}</span>
      </div>
    </div>
  )
}

export default InvestmentHistoryCard