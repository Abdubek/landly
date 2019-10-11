import React, { useState } from 'react';
import Header from "../../components/Header";
import Button from "../../components/Button";
import Contacts from "../../components/Contacts";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import './styles.scss';

import auto from '../../images/auto.svg';
import clock from '../../images/clock.svg';
import trophy from '../../images/trophy.svg';
import attached from '../../images/attached.svg';
import how1 from '../../images/how-1.svg';
import how2 from '../../images/how-2.svg';
import how3 from '../../images/how-3.svg';
import how4 from '../../images/how-4.svg';
import how1mobile from '../../images/how-1-mobile.svg';
import how2mobile from '../../images/how-2-mobile.svg';
import how3mobile from '../../images/how-3-mobile.svg';
import how4mobile from '../../images/how-4-mobile.svg';
import plants from '../../images/plants.svg';
import star from '../../images/star.svg';

const Enterprise = () => {

    const [isOpen, setOpen] = useState(false);

    const getStars = (n) => {
        return [...Array(n).keys()].map(key => <img key={key} src={star} alt=""/>)
    };

    return (
        <>
            <Header button={{
                text: 'Contact Us',
                click: () => setOpen(true)
            }}>
                <Link to="/about">About</Link>
            </Header>

            <section className="main lnd-container lnd-section__padding lnd-flex">
                <div className="main__left">
                    <h1 className="main__title">Find the best real estate deals in seconds</h1>
                    <span className="main__desc-title">The power of Artificial Intelligence at your fingertips</span>
                    <ul className="main__desc">
                        <li> - Find the best deals sorted by the ROI</li>
                        <li> - Discover underperforming property</li>
                        <li> - Boost the property value with minor improvements</li>
                    </ul>
                    <Button variant="primary" size="lg" onClick={() => setOpen(true)}>
                        Start now for FREE
                    </Button>
                </div>
                <img className="main__img " src={auto} alt="" />
                <Button variant="primary" size="lg" onClick={() => setOpen(true)}>
                    Start now for FREE
                </Button>
            </section>
            <section className="advantages lnd-container lnd-flex lnd-flex-between lnd-section__padding">
                <div className="card">
                    <img className="card__img" src={clock} alt="" />
                    <span className="card__title">
                        Turns days and weeks<br/>
                        of research into minutes.
                    </span>
                    <span className="card__desc">
                        Evaluates all the property on the market, selects the best deals by the ROI forecasted. Explains price trends and selection.
                    </span>
                </div>
                <div className="card">
                    <img className="card__img" src={trophy} alt="" />
                    <span className="card__title">
                        Finds underperforming properties and helps to boost the value.
                    </span>
                        <span className="card__desc">
                        Examines every property listed using ‘what-if’ algorithm to find the way how to increase its value with simple improvements.
                    </span>
                </div>
                <div className="card">
                    <img className="card__img" src={attached} alt="" />
                    <span className="card__title">
                        Monitors the market 24/7 to find ‘gems’ when they are available.
                    </span>
                    <span className="card__desc">
                        Allows to set up a 24/7 background search to find hidden ‘gems’ on the selected markets as soon as they available.
                    </span>
                </div>
            </section>
            <section className="does">
                <div className="lnd-container">
                    <div className="does__left">
                        <h2 className="does__title">
                            AI-powered Investment Manager
                            Invest, track and manage real estate assets in a single place
                        </h2>
                        <span>Power of the Artificial Intelligence at your fingertips:</span>

                        <ul className="does__list">
                            <li>ROI forecasting</li>
                            <li>Property value booster</li>
                            <li>Price trends explanation</li>
                            <li>Assets performance tracker</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="additional-info lnd-container lnd-flex lnd-flex-column lnd-flex-between lnd-section__padding">
                <p className="additional-info__text additional-info__text-left">
                    Landly.AI applies 120 indicators including historical data, wide range of ratings and indexes and
                    power it
                    with non-traditional data.
                </p>
                <div className="additional-info__text additional-info__text-right">
                    <p>We use machine learning models to reveal hidden patterns and indicators affecting property
                        valuation and
                        uncovering options how to its value with simple improvements.</p>
                    <Button variant="primary" size="lg" onClick={() => setOpen(true)}>
                        Start now for FREE
                    </Button>
                </div>
            </section>
            <section className="how lnd-container lnd-section__padding">
                <h2 className="how__title">How it works?</h2>
                <div className="lnd-flex lnd-flex-column">
                    <div className="img">
                        <img className="img__number" src={how1} alt=""/>
                        <img className="img__number_mobile" src={how1mobile} alt=""/>
                        <img className="plants" src={plants} alt=""/>
                    </div>
                    <div className="img">
                        <img className="img__number" src={how2} alt="" />
                        <img className="img__number_mobile" src={how2mobile} alt="" />
                        <img className="plants" src={plants} alt="" />
                    </div>
                    <div className="img">
                        <img className="img__number" src={how3} alt=""/>
                        <img className="img__number_mobile" src={how3mobile} alt="" />
                        <img className="plants" src={plants} alt=""/>
                    </div>
                    <div className="img">
                        <img className="img__number" src={how4} alt="" />
                        <img className="img__number_mobile" src={how4mobile} alt="" />
                        <img className="plants" src={plants} alt="" />
                    </div>
                </div>
            </section>
            <section className="markets lnd-section__blue lnd-section__padding">
                <div className="lnd-container">
                    <h2 className="markets__title">Available Markets</h2>
                    <div className="markets__cities">
                        <span>Los Angeles</span>
                        <span>San Diego</span>
                        <span>San Jose</span>
                        <span>San Francisco</span>
                        <span>Fresno</span>
                        <span>Sacramento</span>
                        <span>Oakland</span>
                        <span>Fremont</span>
                        <span>Palo Alto</span>
                        <span>Santa Clara</span>
                    </div>
                </div>
            </section>
            <section className="compare lnd-container lnd-section__padding">
                <h2 className="compare__title">Landly.AI is better</h2>
                <table className="compare__table">
                    <tbody>
                        <tr>
                            <th></th>
                            <th>Listings</th>
                            <th>Realtors</th>
                            <th>Data-driven</th>
                            <th className="bold">Landly.AI</th>
                        </tr>
                        <tr>
                            <td>Speed</td>
                            <td>
                                {getStars(2)}
                            </td>
                            <td>
                                {getStars(3)}
                            </td>
                            <td>
                                {getStars(1)}
                            </td>
                            <td>
                                {getStars(5)}
                            </td>
                        </tr>
                        <tr>
                            <td>Accuracy</td>
                            <td>
                                {getStars(1)}
                            </td>
                            <td>
                                {getStars(2)}
                            </td>
                            <td>
                                {getStars(4)}
                            </td>
                            <td>
                                {getStars(5)}
                            </td>
                        </tr>
                        <tr>
                            <td>Data sources</td>
                            <td>
                                {getStars(1)}
                            </td>
                            <td>
                                {getStars(3)}
                            </td>
                            <td>
                                {getStars(4)}
                            </td>
                            <td>
                                {getStars(5)}
                            </td>
                        </tr>
                        <tr>
                            <td>Forecast depth</td>
                            <td>
                                {getStars(1)}
                            </td>
                            <td>
                                {getStars(2)}
                            </td>
                            <td>
                                {getStars(4)}
                            </td>
                            <td>
                                {getStars(5)}
                            </td>
                        </tr>
                        <tr>
                            <td>ROI</td>
                            <td>
                                {getStars(1)}
                            </td>
                            <td>
                                {getStars(2)}
                            </td>
                            <td>
                                {getStars(3)}
                            </td>
                            <td>
                                {getStars(5)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="enterprise-form lnd-section__padding">
                <div className="lnd-container">
                    <h2 className="contact-us-form__title">Any question?</h2>

                    <ContactUs />

                    <Contacts />
                </div>
            </section>

            <Footer />

            <Modal open={isOpen}
                   onClose={() => setOpen(false)}>
                <ContactUs onSend={() => setOpen(false)}/>
            </Modal>
        </>
    )
};

export default Enterprise;
