import React from 'react';
import { Link } from "react-router-dom";
import './styles.scss';
import logo from '../../images/logo.png'
import angel from '../../images/angel.png'
import f6s from '../../images/f6s.png'
import crunchbase from '../../images/crunchbase.png'
import gust from '../../images/gust.png'
import twitter from '../../images/twitter.png'
import linkedin from '../../images/linkedin.png'
import facebook from '../../images/facebook.png'

const Footer = () => {
    return (
        <footer className="footer__wrapper">
            <div className="footer lnd-container">
                <Link className="footer__logo-link" to="/">
                    <img className="footer__logo" src={logo} width="151px" alt="Landly.AI" />
                </Link>
                <div className="footer__social">
                    <div className="icons">
                        <a className="img-wrapper" href="https://angel.co/company/landly-ai"
                           target="_blank" aria-label="Angel" rel="noopener noreferrer">
                            <img src={angel} alt="" />
                        </a>
                        <a className="img-wrapper" href="https://www.f6s.com/landly-ai"
                           target="_blank" aria-label="F6s" rel="noopener noreferrer">
                            <img src={f6s} alt="" />
                        </a>
                        <a className="img-wrapper" href="https://www.crunchbase.com/organization/landly-ai"
                           target="_blank" aria-label="Crunchbase" rel="noopener noreferrer">
                            <img src={crunchbase} alt="" />
                        </a>
                        <a className="img-wrapper" href="https://gust.com/companies/landly-ai/"
                           target="_blank" aria-label="Gust" rel="noopener noreferrer">
                            <img src={gust} alt="" />
                        </a>
                        <div className="icons__divider" />
                        <a className="img-wrapper" href="https://twitter.com/LandlyAi"
                           target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                            <img src={twitter} alt="" />
                        </a>
                        <a className="img-wrapper" href="https://www.linkedin.com/company/landly-ai/about/"
                           target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                            <img src={linkedin} alt="" />
                        </a>
                        <a className="img-wrapper" href="https://www.facebook.com/landlyai/?tn-str=k*F"
                           target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                            <img src={facebook} alt="" />
                        </a>
                    </div>
                    <div className="wrapper">
                        <span>Term & Conditions</span>
                        <span>Privacy Policy</span>
                    </div>
                    <span>© 2019 Landly.AI. All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
