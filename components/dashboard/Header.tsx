'use client';

import { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import TopGames from "../layout/header/TopGames";

export default function Header() {
  useEffect(() => {
    // Client-side only: Bootstrap JS import
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <header className="header py-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="main-header__menu-box">
              <nav className="navbar p-0 gap-2">

                {/* Left: Logo + TopGames + Mobile Button */}
                <div className="d-flex align-items-center gap-sm-3 gap-2">
                  <div className="navbar-logo d-none d-xl-block">
                    <Link href="/">
                      <Image width={100} height={100} src="/images/logo.png" alt="Logo" />
                    </Link>
                  </div>
                  <div className="navbar-logo2 d-xl-none">
                    <Link href="/">
                      <Image width={100} height={100} src="/images/new/logo.png" alt="Logo" />
                    </Link>
                  </div>

                  <TopGames />

                  <button type="button" className="left-sidebar-btn d-xl-none d-flex">
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>

                {/* Right: Buttons + Dropdowns */}
                <div className="navbar__options d-flex align-items-center gap-md-3 gap-2">

                  {/* Deposit button */}
                  <div>
                    <button type="button" className="btn--secondary py-lg-2 py-1 px-3 d-sm-flex d-none">
                      Deposit
                    </button>
                    <button type="button" className="h5 d-sm-none d-flex mb-0 secondary-text">
                      <i className="fa-solid fa-sack-dollar"></i>
                    </button>
                  </div>

                  {/* Coin */}
                  <div className="border border-dark-light rounded-pill py-2 px-sm-3 px-2 d-flex align-items-center gap-1">
                    <span className="d-md-flex d-none">
                      <Image width={20} height={20} src="/images/coin.png" alt="Coin" />
                    </span>
                    <span className="text-white">$2000.00</span>
                  </div>

                  {/* Notification dropdown */}
                  <div className="dropdown">
                    <button
                      className="btn btn-dark position-relative d-sm-flex d-none"
                      type="button"
                      id="notificationDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-regular fa-bell"></i>
                      <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
                    </button>

                    <ul
                      className="dropdown-menu dropdown-menu-end p-2 rounded-4"
                      aria-labelledby="notificationDropdown"
                      style={{ minWidth: '350px' }}
                    >
                      <li className="p-2 border-bottom d-flex justify-content-between align-items-center">
                        <strong className="text-dark">Notifications</strong>
                        <span className="badge bg-black text-white rounded-circle">5</span>
                      </li>

                      <li className="mb-2"> 
                        <a className="dropdown-item d-flex justify-content-between align-items-start py-2" href="#">
                          <div>
                            <strong>Kathryn Murphy</strong>
                            <p className="mb-0 text-sm text-secondary">hey! there i'm...</p>
                          </div>
                          <span className="text-muted small">12:30 PM</span>
                        </a>
                      </li>

                      <li className="mb-2"> {/* gap add করা হলো */}
                        <a className="dropdown-item d-flex justify-content-between align-items-start py-2" href="#">
                          <div>
                            <strong>John Doe</strong>
                            <p className="mb-0 text-sm text-secondary">hey! there i'm...</p>
                          </div>
                          <span className="text-muted small">12:30 PM</span>
                        </a>
                      </li>

                      <li className="text-center mt-2">
                        <a href="#" className="text-primary">See All Notifications</a>
                      </li>
                    </ul>
                  </div>

                  {/* User dropdown */}
                  <div className="dropdown">
                    <button
                      className="h6 mb-0 dropdown-toggle  btn btn-dark"
                      type="button"
                      id="userDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="d-sm-block d-none">Test</span>
                      <span className="d-sm-none"><i className="fa-regular fa-user"></i></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end p-2 rounded-4" aria-labelledby="userDropdown">
                      <li>
                        <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                          <i className="fa-regular fa-user"></i> My Account
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                          <i className="fa-solid fa-money-bill-transfer"></i> Transactions
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item d-flex align-items-center gap-2" href="#">
                          <i className="fas fa-sign-out"></i> Log Out
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}