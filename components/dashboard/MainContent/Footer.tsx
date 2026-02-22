import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer
            className="footer"
            style={{ backgroundImage: "url('/assets/images/footer/footer-bg-two.png')" }}
        >
            <div className="container">

                {/* Newsletter */}
                <div className="row">
                    <div className="col-12">
                        <div
                            className="footer__newsletter"
                            style={{ backgroundImage: "url('/assets/images/newsletter-bg.png')" }}
                            data-aos="fade-up"
                            data-aos-duration="600"
                        >
                            <div className="row align-items-center gutter-24">

                                <div className="col-12 col-lg-6">
                                    <div className="footer__newsletter-content">
                                        <h4 className="title-animation fw-5 neutral-top">
                                            Subscribe to our newsletter for the latest updates
                                        </h4>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                                    <div className="footer__newsletter-form">
                                        <form>
                                            <input
                                                type="email"
                                                required
                                                name="subscribe-email"
                                                placeholder="Enter Email"
                                            />
                                            <button type="submit" aria-label="Subscribe">
                                                <i className="fa-solid fa-paper-plane"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Widgets */}
                <div className="row gutter-60 pt-120 pb-120">

                    {/* Logo & Social */}
                    <div className="col-12 col-lg-6 col-xl-3">
                        <div className="footer__widget" data-aos="fade-up">
                            <Link href="/" className="logo">
                                <Image
                                    src="/assets/images/logo.png"
                                    alt="Logo"
                                    width={140}
                                    height={40}
                                />
                            </Link>

                            <div className="footer__widget-content mt-25">
                                <p>
                                    Betwins is an innovative Online Crypto Gaming platform designed for players.
                                </p>
                            </div>

                            <div className="social mt-35">
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-12 col-lg-3 col-xl-2">
                        <div className="footer__widget" data-aos="fade-up" data-aos-delay="200">
                            <h6 className="fw-6 neutral-top">Quick Links</h6>
                            <ul className="mt-25">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/games">Games</Link></li>
                                <li><Link href="/lottery">Lottery</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="col-12 col-lg-3 col-xl-2">
                        <div className="footer__widget" data-aos="fade-up" data-aos-delay="400">
                            <h6 className="fw-6 neutral-top">Categories</h6>
                            <ul className="mt-25">
                                <li><Link href="/lottery-contest">Jackpot</Link></li>
                                <li><Link href="/lottery-contest">Slots</Link></li>
                                <li><Link href="/lottery-contest">Casino</Link></li>
                                <li><Link href="/lottery-contest">Gambling</Link></li>
                                <li><Link href="/lottery">Lottery</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Support */}
                    <div className="col-12 col-lg-6 col-xl-2">
                        <div className="footer__widget" data-aos="fade-up" data-aos-delay="600">
                            <h6 className="fw-6 neutral-top">Support</h6>
                            <ul className="mt-25">
                                <li><Link href="/faq">FAQ’s</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                                <li><Link href="/signup">Create Account</Link></li>
                                <li><Link href="/signin">Sign In</Link></li>
                                <li><Link href="/404">Error</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="col-12 col-lg-6 col-xl-3">
                        <div className="footer__widget" data-aos="fade-up" data-aos-delay="800">
                            <h6 className="fw-6 neutral-top">Get In Touch</h6>

                            <div className="footer__widget-content mt-25">
                                <p><a href="tel:5055550125">(505) 555-0125</a></p>
                                <p><a href="mailto:example@betwins.com">example@betwins.com</a></p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="footer__copyright">
                    <div className="row align-items-center">
                        <div className="col-12 text-center">
                            <p>
                                Copyright © {year} <Link href="/">Betwins</Link>. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Floating Images */}
            <div className="left-thumb">
                <Image
                    src="/assets/images/footer/footer-left.png"
                    alt="Footer decoration"
                    width={120}
                    height={120}
                />
            </div>

            <div className="right-thumb">
                <Image
                    src="/assets/images/footer/footer-right.png"
                    alt="Footer decoration"
                    width={120}
                    height={120}
                />
            </div>

            <div className="arrow">
                <Image
                    src="/assets/images/footer/arrow.png"
                    alt="Arrow"
                    width={60}
                    height={60}
                />
            </div>
        </footer>
    );
};

export default Footer;
