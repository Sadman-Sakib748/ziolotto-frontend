import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RightSidebar() {
  return (
    <div className="sidebar-width flex-shrink-0">
      <div className="contest-box-items sidebar-width right-sidebar-fixed scrollbar-transparent">

        {/* Top Lottery Prize Section */}
        <h2 className="main-head border-bottom border-dark-light mb-4">🏆 Top Lottery Prize</h2>

        <div className="d-flex flex-column gap-4">
          <div className="lotteries-card-items px-2 bg-navy-blue">
            <span className="serial">#1</span>
            <span className="price">
              <i className="fa-solid fa-star"></i>R-458
            </span>
            <div className="thumb">
              <Image
                src="/assets/images/new/lucky-day.png"
                alt="Lucky Day Lottery"
                width={200}
                height={200}
                layout="responsive"
              />
            </div>
            <div className="content">
              <h5>Lucky Day (Round 1)</h5>
              <p>Pricing List</p>
            </div>
            <div className="price-box">
              <span className="price-1">1st Prize</span>
              <span className="price-2">$100000</span>
            </div>
            <div className="price-wrap">
              <div className="price-box2">
                <span className="price-1">2nd</span>
                <span className="price-2">$80000</span>
              </div>
              <div className="price-box2">
                <span className="price-1">3rd</span>
                <span className="price-2">$50000</span>
              </div>
            </div>
            <div className="time-left-items">
              <p>Time Left :</p>
              <span>02D</span>
              <span>05H</span>
              <span>25M</span>
              <span>37S</span>
            </div>
            <Link href="#" className="link-btns">
              Play Now <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* Investment Section */}
        <h2 className="main-head border-bottom border-dark-light mb-4 mt-4">💵 Investment</h2>

        <div className="investment-box-items-sidebars">
          <span className="serial">#1</span>
          <span className="price">
            <i className="fa-solid fa-star"></i>R-458
          </span>

          {/* Top Section: Graphic & Badge */}
          <div className="card-header">
            <span className="badge-dashboard">EasyGrowth</span>
            <div className="graphic-area">
              <Image
                src="/assets/images/new/investment-img2.png"
                alt="Investment"
                width={200}
                height={150}
                layout="responsive"
              />
            </div>
          </div>

          {/* Middle Section: Content */}
          <div className="card-content">
            <div className="prize-tag">365 Days</div>
            <h2 className="main-title">
              <div className="line-1"></div>
              INVESTMENT
              <div className="line-2"></div>
              <div className="line-4"></div>
              <div className="line-3"></div>
            </h2>

            <div className="pricing">
              <span className="small-price">$10,000</span>
              <p className="buzz-text">Returns 50% Interest</p>
              <span className="large-price">$15,000</span>
            </div>

            <hr className="divider" />
          </div>

          {/* Timer Section */}
          <div className="timer-container">
            <div className="time-box">365D</div>
            <div className="time-box">02H</div>
            <div className="time-box">05M</div>
            <div className="time-box">13S</div>
          </div>

          {/* Footer Section: Button */}
          <div className="text-center">
            <Link href="#" className="invest-btns">
              Invest now <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* Latest Lottery Results Section */}
        <h2 className="main-head border-bottom border-dark-light mb-4 mt-4">💵 Latest Lottery Results</h2>

        <div className="lotteries-card-items px-2 bg-navy-blue">
          <span className="serial">#1</span>
          <span className="price">
            <i className="fa-solid fa-star"></i>R-458
          </span>
          <div className="thumb">
            <Image
              src="/assets/images/new/lucky-day.png"
              alt="Lucky Day Lottery"
              width={200}
              height={200}
              layout="responsive"
            />
          </div>

          <div className="lottery-table-box p-0 border-0 bg-transparent">
            <div className="header-content text-center">
              <h1>Lottery (Round 1)</h1>
              <p className="draw-date">Draw at November 21st 2025, 05:30PM</p>
              <div className="cyan-divider"></div>
              <h2 className="title-cyan">Today's Top 10 Winning Numbers</h2>
            </div>

            {/* HTML Table Section */}
            <div className="table-container">
              <table className="lottery-inner-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>User ID</th>
                    <th>Winning No.</th>
                    <th>Amount</th>
                    <th>User Tickets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="rank-cell">
                        <i className="fas fa-medal" style={{ color: '#ffd700' }}></i> 1st
                      </span>
                    </td>
                    <td>45X86</td>
                    <td>459X625</td>
                    <td className="fw-bold">$500</td>
                    <td>45</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="rank-cell">
                        <i className="fas fa-medal" style={{ color: '#c0c0c0' }}></i> 2nd
                      </span>
                    </td>
                    <td>41X85</td>
                    <td>417X582</td>
                    <td className="fw-bold">$400</td>
                    <td>417</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="rank-cell">
                        <i className="fas fa-medal" style={{ color: '#cd7f32' }}></i> 3rd
                      </span>
                    </td>
                    <td>32X40</td>
                    <td>324X002</td>
                    <td className="fw-bold">$300</td>
                    <td>340</td>
                  </tr>
                  <tr><td>4th</td><td>88X65</td><td>889X595</td><td>$100</td><td>85</td></tr>
                  <tr><td>5th</td><td>30X20</td><td>300X011</td><td>$100</td><td>30</td></tr>
                  <tr><td>6th</td><td>77X84</td><td>774X458</td><td>$100</td><td>74</td></tr>
                  <tr><td>7th</td><td>96X96</td><td>963X635</td><td>$100</td><td>966</td></tr>
                  <tr><td>8th</td><td>78X84</td><td>784X458</td><td>$100</td><td>78</td></tr>
                  <tr><td>9th</td><td>99X88</td><td>996X869</td><td>$100</td><td>98</td></tr>
                  <tr><td>10th</td><td>22X22</td><td>225X222</td><td>$100</td><td>22</td></tr>
                </tbody>
              </table>
            </div>

            {/* Countdown Section */}
            <div className="time-left-items border-bottom-0 mb-0">
              <p>Time Left :</p>
              <span>02D</span>
              <span>05H</span>
              <span>25M</span>
              <span>37S</span>
            </div>

            <div className="gold-divider"></div>

            <Link href="#" className="link-btns">
              Play Now <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* Online Support Section */}
        <h2 className="main-head border-bottom border-dark-light mb-4 mt-4">🎧 Online Supports</h2>

        <div>
          <div className="d-flex align-items-center gap-sm-3 gap-2">
            <div className="w-15 h-15 rounded-circle overflow-hidden bg-white d-flex justify-content-center align-items-center flex-shrink-0">
              <Image
                src="/assets/images/support-img.png"
                alt="Support Image"
                width={60}
                height={60}
              />
            </div>
            <div className="flex-shrink-0">
              <p className="text-white">Do you have questions about the lottery? Please chat with our friendly staff.</p>
            </div>
          </div>

          <form action="#" className="copy-input-wrapper position-relative mt-24">
            <textarea
              className="copy-input py-4 form-control rounded-3"
              placeholder="Message..."
              rows="3"
            ></textarea>
            <button type="submit" className="position-absolute top-50 translate-middle-y end-0 me-4">
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}