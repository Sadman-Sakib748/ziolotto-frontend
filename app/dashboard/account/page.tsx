'use client'
import React, { useState } from 'react'
import Image from 'next/image'

interface UserStats {
  totalWins: string
  winsDue: string
  balance: string
  realMoney: string
  bonusMoney: string
  pendingWithdrawals: string
}

interface FormData {
  name: string
  email: string
  phone: string
  countryCode: string
  password: string
  confirmPassword: string
}

export default function AccountPage() {
  const [userStats] = useState<UserStats>({
    totalWins: '$0.00',
    winsDue: '$0.00',
    balance: '$47.80',
    realMoney: '$0.00',
    bonusMoney: '$0.00',
    pendingWithdrawals: '$0.00',
  })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    countryCode: '+84',
    password: '',
    confirmPassword: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [emailVerified] = useState(true)
  const [phoneVerified] = useState(false)
  const [twoStepAuth, setTwoStepAuth] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    console.log('Saving form data:', formData)
    // Add your save logic here
  }

  const passwordValidation = {
    length: formData.password.length >= 8,
    hasUpperLower: /[a-z]/.test(formData.password) && /[A-Z]/.test(formData.password),
    hasNumber: /[0-9]/.test(formData.password),
    hasSymbol: /[!@#$%^&*]/.test(formData.password),
  }

  return (
    <div className="page-wrapper a-cursor">
      {/* Preloader */}
      <div className="preloader">
        <i className="ti ti-device-gamepad-2"></i>
        <p>Betwins</p>
      </div>

      {/* Main Content */}
      <div className="affiliate-wrapper pb-100">
        <div className="dash-layout-wrapper">
          <main className="content-area flex-grow-1 px-xl-0 px-4" style={{ marginLeft: 0, width: '100%' }}>
            <h2 className="page-title mb-4">Account</h2>
            
            {/* Account Form Box Items */}
            <div className="account-form-box-items">
              {/* Left Profile Card */}
              <div className="user-profile-card">
                <div className="user-header">
                  <div className="avatar">
                    <Image src="/assets/images/avatar/one.png" alt="User" width={80} height={80} />
                  </div>
                  <div className="user-name-wrapper">
                    <h4 className="username">User8237233</h4>
                    <a href="#" className="change-link">
                      <i className="fas fa-edit"></i> Change
                    </a>
                  </div>
                </div>

                <div className="user-stats">
                  <div className="stat-row">
                    <span>Total all-time wins</span>
                    <span className="val">{userStats.totalWins}</span>
                  </div>
                  <div className="stat-row">
                    <span>Wins due</span>
                    <span className="val">{userStats.winsDue}</span>
                  </div>
                </div>
              </div>

              {/* Right Balance Card */}
              <div className="balance-card">
                <div className="balance-header">
                  <span className="label">Balance</span>
                  <h2 className="amount">{userStats.balance}</h2>
                </div>

                <div className="balance-breakdown">
                  <div className="item">
                    <span className="text">Real money</span>
                    <span className="price">{userStats.realMoney}</span>
                  </div>
                  <div className="item">
                    <span className="text">Bonus money</span>
                    <span className="price">{userStats.bonusMoney}</span>
                  </div>
                  <div className="item">
                    <span className="text">Pending Withdrawals</span>
                    <span className="price">{userStats.pendingWithdrawals}</span>
                  </div>
                </div>

                <div className="action-buttons">
                  <button className="btn-wallet">
                    Wallet <i className="fas fa-chevron-right"></i>
                  </button>
                  <button className="btn-withdrawal">
                    <i className="fas fa-print"></i> Withdrawal
                  </button>
                </div>
              </div>
            </div>

            {/* Account Edit Box Items */}
            <div className="account-edit-box-items">
              <div className="edit-profile-box">
                <h6>Edit Profile</h6>
                
                {/* Profile Card */}
                <div className="profile-card">
                  <div className="avatar-section">
                    <div className="text-content">
                      <h2 className="title">Avatar</h2>
                      <p className="subtitle">Edit your profile picture</p>
                    </div>

                    <div className="avatar-container">
                      <div className="avatar-img-wrapper">
                        <Image src="/assets/images/avatar/one.png" alt="Profile" width={60} height={60} />
                      </div>
                      
                      <button className="action-btn edit-btn" title="Edit Avatar">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </button>

                      <button className="action-btn delete-btn" title="Delete Avatar">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="personal-info-wrapper">
                  <div className="info-header">
                    <div className="text-group">
                      <h2>Personal information</h2>
                      <p>Change your identity information</p>
                    </div>
                    <button className="btn-save" onClick={handleSave}>Save</button>
                  </div>

                  <form className="info-form">
                    <div className="field-group">
                      <label>Your name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                      />
                    </div>

                    <div className="field-group">
                      <label>Email address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email"
                      />
                      <div className={`status ${emailVerified ? 'verified' : 'unverified'}`}>
                        <span className="icon">{emailVerified ? '✔' : '!'}</span> 
                        {emailVerified ? 'Email verified' : 'Not verified'}
                      </div>
                    </div>

                    <div className="field-group">
                      <label>Phone (optional)</label>
                      <div className="phone-input-container">
                        <div className="country-code">
                          <select 
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleInputChange}
                          >
                            <option value="+84">+84</option>
                            <option value="+880">+880</option>
                            <option value="+1">+1</option>
                          </select>
                        </div>
                        <div className="divider"></div>
                        <input 
                          type="text" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="0123456789"
                        />
                      </div>
                      <div className={`status ${phoneVerified ? 'verified' : 'unverified'}`}>
                        <span className="icon">{phoneVerified ? '✔' : '!'}</span> 
                        {phoneVerified ? 'Verified' : 'Not verified'}
                      </div>
                    </div>
                  </form>
                </div>

                {/* Security Section */}
                <div className="personal-info-wrapper">
                  <div className="info-header">
                    <div className="text-group">
                      <h2>security</h2>
                      <p>Last Change: 12 Days Ago</p>
                    </div>
                    <button className="btn-save" onClick={handleSave}>Save</button>
                  </div>

                  <div className="password-settings-container">
                    {/* Password Field */}
                    <div className="input-group">
                      <label>Password *</label>
                      <div className="input-wrapper">
                        <input 
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Password"
                        />
                        <button 
                          className="eye-btn" 
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                      </div>
                      
                      <div className="validation-row">
                        <div className={`status ${passwordValidation.length ? 'success' : 'muted'}`}>
                          <span className="icon">{passwordValidation.length ? '✔' : '✖'}</span> 8 character
                        </div>
                        <div className={`status ${passwordValidation.hasUpperLower ? 'success' : 'muted'}`}>
                          <span className="icon">{passwordValidation.hasUpperLower ? '✔' : '✖'}</span> Capital & small
                        </div>
                        <div className={`status ${passwordValidation.hasNumber ? 'success' : 'muted'}`}>
                          <span className="icon">{passwordValidation.hasNumber ? '✔' : '✖'}</span> Numbers
                        </div>
                        <div className={`status ${passwordValidation.hasSymbol ? 'success' : 'muted'}`}>
                          <span className="icon">{passwordValidation.hasSymbol ? '✔' : '✖'}</span> Symbols
                        </div>
                      </div>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="input-group">
                      <label>Confirm password *</label>
                      <div className="input-wrapper">
                        <input 
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Password"
                        />
                        <button 
                          className="eye-btn" 
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Two-step authentication */}
                    <div className="two-step-wrapper" onClick={() => setTwoStepAuth(!twoStepAuth)}>
                      <div className={`checkbox-orange ${twoStepAuth ? 'active' : ''}`}>
                        {twoStepAuth && <span className="check-mark">✔</span>}
                      </div>
                      <div className="text-content">
                        <h3>Two-step authentication</h3>
                        <p>If you active this check then any time you want to log in you have to confirm your self with email or text</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Mouse Cursor */}
      <div className="mouseCursor cursor-outer"></div>
      <div className="mouseCursor cursor-inner"></div>

      {/* Scroll to Top */}
      <button className="progress-wrap" aria-label="scroll indicator" title="back to top">
        <span></span>
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </button>
    </div>
  )
}