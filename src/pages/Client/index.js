import React from 'react';
import useStoreon from 'storeon/react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MailForm from "../../components/MailForm";
import Contacts from "../../components/Contacts";
import './styles.scss';

import digital from '../../images/digital.jpg';
import nvidia from '../../images/nvidia.png';
import castle from '../../images/castle.svg';
import sketch from '../../images/sketch.svg';

const Client = () => {
    const { dispatch } = useStoreon();

    const handleEmailChanged = e => {
        dispatch('users/save', { email: e.target.value })
    };

    return (
        <>
            <Header button={{
                text: 'Enterprise',
                click: 'enterprise'
            }} />

            <section className="large-home">
                <div className="lnd-container lnd-section__padding">

                    <h1 className="lnd-h1 lnd-h1-left">
                        <div className="decor" />
                        HOW MUCH Will<br />
                        My Home Worth<br />
                        in 1 Year?
                    </h1>
                    <p className="lnd-h1__hint lnd-h1__hint-left">Get your free estimate:<br /> current value + 1-year forecast</p>
                    <MailForm href="/form" onChange={handleEmailChanged} />
                    <div className="baked">
                        <p>Baked by</p>
                        <div className="baked__img-wrapper">
                            <img src={digital} alt=""/>
                            <img src={nvidia} alt=""/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="lnd-container lnd-section__padding lnd-flex lnd-flex-column@m lnd-flex-around">
                <div className="block">
                    <div className="block__decor" />
                    <img alt="" src={sketch} />
                    <h4 className="lnd-h4">FREE FOR ALL</h4>
                    <div className="block__text-wrapper">
                        <p className="lnd-p">
                            &mdash;    &nbsp; Instant online appraisal at no costs<br/>
                            &mdash;    &nbsp; Don’t need to call Agent or Appraiser<br/>
                            &mdash;    &nbsp; 1-Year forecast made by Artificial Intelligence
                        </p>
                    </div>
                </div>
                <div className="block">
                    <div className="block__decor" />
                    <img alt="" src={castle} />
                    <h4 className="lnd-h4">PAID FEATURES IF YOU WANT SOMETHING MORE</h4>
                    <div className="block__text-wrapper">
                        <p className="lnd-p">
                            &mdash;    &nbsp; Up to 5-years forecast in 3-month segments<br/>
                            &mdash;    &nbsp; Reveal underperformance<br/>
                            &mdash;    &nbsp; Find out how to boost property value with simple upgrades
                        </p>
                    </div>
                </div>
            </section>

            <section className="description lnd-section__padding">
                <div className="lnd-container">
                    <h2 className="lnd-h2">Power of Artificial<br /> Intelligence on your fingertips</h2>
                    <p className="lnd-h2__hint">98.2% average accuracy on 1-year forecast</p>
                    <div className="description__block lnd-flex lnd-flex-left">
                        <p className="lnd-p">
                            Landly.AI is Artificial Intelligence made of 12 math models working with 48 indicators from 8 data sources.
                            Everything is combined under one hood and works as a single predictive engine.<br/><br/>
                            Landly.AI builds the forecast using the bulk of historical data and indexes charged with non-traditional data.
                        </p>
                    </div>
                    <div className="description__block lnd-flex lnd-flex-right">
                        <div>
                            <h4 className="lnd-h4">UNDER THE HOOD</h4>
                            <p className="lnd-p">
                                Machine Learning reveals hidden patterns affect the property value.<br/><br/>
                                Neural network analyzes images to get more accurate forecasts (soon)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="info lnd-container lnd-flex lnd-flex-column lnd-flex-middle lnd-section__padding">
                <p className="lnd-p">
                    <span className="info__icon" />
                    Property price predictions are estimates, not valuations. Predictions and estimates
                    usually change monthly. Meanwhile, actual sale prices may differ.
                </p>
                <p className="lnd-p">
                    <span className="info__icon" />
                    Accuracy assessed compared with estimates and forecasts made by Zillow.
                </p>
                <p className="lnd-p">
                    <span className="info__icon" />
                    Landly.AI is a startup actively developing own proprietary technology and duly
                    registered as Moongrows LTD in Israel.
                </p>
            </section>

            <section className="contact-form lnd-container lnd-section__padding">
                <h1 className="lnd-h1">Get your home-value estimate</h1>
                <p className="lnd-h1__hint">+ 1-year forecast made by Artificial Intelligence</p>
                <MailForm href="/form" detailed={true} />
            </section>

            <section className="lnd-container lnd-section__padding">
                <Contacts/>
            </section>

            <Footer />
        </>
    )
};

export default Client;
