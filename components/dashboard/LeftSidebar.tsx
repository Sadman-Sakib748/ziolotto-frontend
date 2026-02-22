'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faBolt, 
  faWallet, 
  faLink, 
  faStar, 
  faCommentDots, 
  faBriefcase,
  faArrowRightFromBracket,
  faCopy,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTelegramPlane, 
  faLinkedinIn, 
  faTwitter, 
  faYoutube, 
  faTiktok, 
  faSkype 
} from '@fortawesome/free-brands-svg-icons';

interface LeftSidebarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
  isActive?: boolean;
  onClose?: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ 
  isCollapsed = false, 
  onToggle,
  isActive = false,
  onClose 
}) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const referralLink = 'https://themeforest.net/betwins.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 1500);
    });
  };

  const menuItems = [
    { href: '/new-home', icon: faHome, label: 'Home' },
    { href: '/lottery', icon: faBolt, label: 'Lottery' },
    { href: '/wallet-balance', icon: faWallet, label: 'Wallet' },
    { href: '/affiliate', icon: faLink, label: 'Affiliate', active: true },
    { href: '/dashboard', icon: faStar, label: 'Dashboard' },
    { href: '/dashboard/Investment', icon: faStar, label: 'Investment' },
    { href: '/lottery-result', icon: faStar, label: 'Lottery Result' },
    { href: '/support', icon: faCommentDots, label: 'Support' },
    { href: '/account', icon: faBriefcase, label: 'My Account' },
  ];

  const faqItems = [
    { href: '#', icon: faHome, label: 'Documentation' },
    { href: '#', icon: faBolt, label: 'Probably Fair' },
    { href: '#', icon: faWallet, label: 'Payment Proof' },
    { href: '#', icon: faWallet, label: 'Contact Us' },
    { href: '#', icon: faWallet, label: 'Live Support' },
  ];

  const socialLinks = [
    { icon: faFacebookF, href: '#' },
    { icon: faTelegramPlane, href: '#' },
    { icon: faLinkedinIn, href: '#' },
    { icon: faTwitter, href: '#' },
    { icon: faYoutube, href: '#' },
    { icon: faTiktok, href: '#' },
    { icon: faSkype, href: '#' },
  ];

  return (
    <aside className={`lottery-sidebar left-sidebar-area scrollbar-transparent rounded-0 ${isCollapsed ? 'sidebar-collapsed' : ''} ${isActive ? 'active' : ''}`}>
      
      {/* Toggle Buttons */}
      <button 
        type="button" 
        className="collapse-btn position-absolute end-0 top-0 me-3 mt-3 d-xl-block d-none"
        onClick={onToggle}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
      
      <button
        className="left-sidebar-close position-absolute top-0 end-0 text-white fs-3 mt-3 me-3 d-xl-none d-flex"
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>

      {/* Main Navigation */}
      <nav className="nav-menu mt-5">
        <ul className="list-unstyled">
          {menuItems.map((item) => (
            <li key={item.href} className={`mb-2 ${item.active ? 'active' : ''}`}>
              <Link href={item.href} className="d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={item.icon} />
                <span className="sidebar-text">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-divider border-bottom border-dark-light my-3"></div>

      {/* Community Section */}
      <div className="community-area mb-3">
        <p className="section-label mb-2">JOIN OUR COMMUNITY</p>
        <div className="social-grid d-flex flex-wrap gap-2">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.href} className="btn btn-sm btn-outline-light">
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* Invite Section */}
      <div className="invite-area mb-3">
        <p className="section-label">INVITE YOUR FRIENDS</p>
        <p className="invite-desc small">Refer users using your referral link and earn up to 20% of their winnings.</p>
      </div>

      <div className="copy-input-wrapper position-relative mb-3">
        <input 
          type="text" 
          className="form-control"
          value={referralLink}
          readOnly
        />
        <button 
          type="button" 
          className="btn btn-outline-light position-absolute top-0 end-0"
          onClick={handleCopy}
        >
          <FontAwesomeIcon icon={copySuccess ? faCheck : faCopy} />
        </button>
      </div>

      <div className="sidebar-divider border-bottom border-dark-light my-3"></div>

      {/* FAQ Section */}
      <p className="section-label">FAQ</p>
      <nav className="nav-menu">
        <ul className="list-unstyled">
          {faqItems.map((item, index) => (
            <li key={index} className="mb-2">
              <Link href={item.href} className="d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={item.icon} />
                <span className="sidebar-text">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-divider border-bottom border-dark-light my-3"></div>
      
      <button type="button" className="collapse-btn btn btn-outline-light w-100" onClick={onToggle}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} /> <span className="ms-2">Collapse</span>
      </button>
    </aside>
  );
};

export default LeftSidebar;