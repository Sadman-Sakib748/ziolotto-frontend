import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import InvestmentCard from '@/components/dashboard/investment/InvestmentCard'
import InvestmentHistoryCard from '@/components/dashboard/investment/InvestmentHistoryCard'

const InvestmentPage: NextPage = () => {
    const investmentCards = Array(6).fill(null).map((_, index) => ({
        id: index,
        serial: `#${index + 1}`,
        price: `R-45${index + 8}`,
        badgeText: 'EasyGrowth',
        days: 365,
        investmentAmount: '$10,000',
        returnPercentage: '50% Interest',
        returnAmount: '$15,000',
        timer: { days: '365D', hours: '02H', minutes: '05M', seconds: '13S' }
    }))

    const historyCards = [
        ...Array(3).fill(null).map((_, index) => ({
            id: `active-${index}`,
            serial: `#${index + 1}`,
            price: `R-45${index + 8}`,
            badgeText: 'EasyGrowth',
            investmentAmount: '$10,000',
            returnPercentage: '50% Interest',
            returnAmount: '$15,000',
            details: { serialD: '41', date: '29-1-2006', time: '12:00-05', codeNo: '545' },
            timer: { days: '365D', hours: '02H', minutes: '05M', seconds: '13S' },
            status: 'Active' as const
        })),
        ...Array(3).fill(null).map((_, index) => ({
            id: `completed-${index}`,
            serial: `#${index + 4}`,
            price: `R-45${index + 11}`,
            badgeText: 'EasyGrowth',
            investmentAmount: '$10,000',
            returnPercentage: '50% Interest',
            returnAmount: '$15,000',
            details: { serialD: '41', date: '29-1-2006', time: '12:00-05', codeNo: '545' },
            timer: { days: '365D', hours: '02H', minutes: '05M', seconds: '13S' },
            status: 'Complated' as const
        })),
        ...Array(3).fill(null).map((_, index) => ({
            id: `cancelled-${index}`,
            serial: `#${index + 7}`,
            price: `R-45${index + 14}`,
            badgeText: 'EasyGrowth',
            investmentAmount: '$10,000',
            returnPercentage: '50% Interest',
            returnAmount: '$15,000',
            details: { serialD: '41', date: '29-1-2006', time: '12:00-05', codeNo: '545' },
            timer: { days: '365D', hours: '02H', minutes: '05M', seconds: '13S' },
            status: 'Cancelled' as const
        }))
    ]

    return (
        <>
            <Head>
                <title>Investment | Betwins - Online Crypto Gaming & Lottery</title>
                <meta name="description" content="Invest in our premium investment plans and earn up to 40% annual interest" />
            </Head>

                <div className="investment-page-wrapper py-5">
                    <div className="container">
                        {/* Banner Section */}
                        <div className="investment-wrapper mb-5">
                            <Image
                                className="w-100 rounded-4"
                                src="/assets/images/new/banner.png"
                                alt="Investment Banner"
                                width={1200}
                                height={300}
                                layout="responsive"
                                objectFit="cover"
                            />
                        </div>

                        {/* Investment Section */}
                        <div className="investment-area mb-5">
                            <div className="sec-title-content2 text-center mb-4">
                                <h2 className="display-5 fw-bold text-white">Investment</h2>
                                <p className="text-secondary">
                                    Earn up to 40% annual interest on your USD. At maturity, <br />
                                    the USD & interest will be credited back to your account automatically.
                                </p>
                            </div>

                            <div className="row g-4">
                                {investmentCards.map((card) => (
                                    <div key={card.id} className="col-xxl-4 col-xl-6 col-lg-4 col-md-6">
                                        <InvestmentCard {...card} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Investment History Section */}
                        <div className="investment-history-area">
                            <div className="sec-title-content2 text-center mb-4">
                                <h2 className="display-5 fw-bold text-white">Investment History</h2>
                                <p className="text-secondary">
                                    Track your past and current investments. View active, completed, <br />
                                    and cancelled investment plans.
                                </p>
                            </div>

                            <div className="row g-4">
                                {historyCards.map((card) => (
                                    <div key={card.id} className="col-xxl-4 col-xl-6 col-lg-4 col-md-6">
                                        <InvestmentHistoryCard {...card} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default InvestmentPage