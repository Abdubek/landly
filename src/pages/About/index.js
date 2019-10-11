import React, { useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Modal from "../../components/Modal";
import './styles.scss';

import backDots1 from '../../images/back-dots-1.svg';
import backDots2 from '../../images/back-dots-2.svg';
import about from '../../images/about-img.svg';
import aboutCard1 from '../../images/about-card-1.svg';
import aboutCard2 from '../../images/about-card-2.svg';
import aboutCard3 from '../../images/about-card-3.svg';
import fast from '../../images/fast.svg';
import data from '../../images/data.svg';
import Button from "../../components/Button";
import ContactUs from "../../components/ContactUs";

const About = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Header button={{
                text: 'Contact Us',
                click: () => setOpen(true)
            }} />

            <div className="about-us__wrapper">
                <section className="about-us lnd-container">
                    <div className="about-us__left">
                        <h1 className="about-us__title">About Us</h1>
                        <p className="about-us__us">
                            Landly AI is the artificial intelligence investment manager for residential real estate.
                            Landly AI
                            partners with leading real estate firms to increase investment return for end customers.
                            Founded in 2019,
                            the company has office in Tel Aviv Area (Israel) and to open a next one in California by the
                            end of 2019.
                        </p>
                        <h3 className="about-us__title-2">Revealing new possibilities</h3>
                        <p className="about-us__desc">
                            Machine Learning techniques open up new possibilities and allow to operate with Big Data on
                            the level
                            inaccessible to humans. Finding various of dependencies and revealing hidden patterns and as
                            as result
                            uncovering unbelievable possibilities for real estate investors.
                        </p>
                    </div>
                    <img className="about-us__img" src={about} alt="" />
                </section>
                <img className="about-us__back-dots-1 dots" src={backDots1} alt="" />
                <img className="about-us__back-dots-2 dots" src={backDots2} alt="" />
            </div>

            <section className="team">
                <div className="lnd-container">
                    <h2 className="team__title">
                        Reinventing Real Estate Investments
                    </h2>
                    <p className="team__text">
                        Landly AI is building an epic team with expertise in data science, software engineering, and
                        real estate.
                    </p>
                    <div className="card-wrapper">
                        <div className="card">
                            <img className="card__img" src={aboutCard1} alt="" />
                                <h3 className="card__title">Engineering Team</h3>
                                <p className="card__desc">
                                    Our software engineers are highly experienced in obtaining difficult-to-access data
                                    with proprietary
                                    parsers and specialize in data mining, denoising, and cross-validating large
                                    datasets.
                                </p>
                        </div>
                        <div className="card">
                            <img className="card__img" src={aboutCard2} alt="" />
                                <h3 className="card__title">Data Science Team</h3>
                                <p className="card__desc">
                                    Landly AI’s data science team is the mainspring with hands-on experience. Data
                                    Science Team use wide
                                    range of classic data series algorithms featured with machine learning techniques
                                    and strengthen with
                                    modern frameworks to achieve the top-level results.
                                </p>
                        </div>
                        <div className="card">
                            <img className="card__img" src={aboutCard3} alt="" />
                                <h3 className="card__title">Real Estate Team</h3>
                                <p className="card__desc">
                                    Focusing to maintain a data-centered fresh market overview Landly AI is forming a
                                    next-generation
                                    real estate team both with experienced data analytics and real estate professionals.
                                </p>
                        </div>
                        <div className="mobile-empty-block" />
                    </div>
                    <Button variant="primary" size="lg" onClick={() => setOpen(true)}>Start now for FREE</Button>
                </div>
            </section>

            <div className="lnd-section__blue">
                <section className="strengths lnd-container lnd-flex-column-reverse@s">
                    <img className="strengths__img" src={fast} alt="" />
                    <div className="strengths__right">
                        <h2 className="strengths__title">Fast, Furious and Fresh UI</h2>
                        <p className="strengths__desc">
                            Creating a unique opportunity and providing wide range of solutions for partners and
                            customers, Landly AI
                            is creating a tremendous, fast and shiny User Interface. Offering both for standalone
                            and cloud solutions as well.
                        </p>
                    </div>
                </section>
                <img className="strengths__back-dots-1 dots" src={backDots1} alt="" />
            </div>

            <div className="lnd-section__blue">
                <section className="strengths lnd-container">
                    <div className="strengths__right">
                        <h2 className="strengths__title">Data-driven Decisions</h2>
                        <p className="strengths__desc">
                            Artificial Intelligence technology creates new approach for traditional industries to
                            increase
                            profitability and making smart data-driven decisions.<br/><br/>

                            Residential real estate, a multi-trillion-dollar industry, has been slow to adapt. Landly AI<br/><br/>

                            Landly AI brings new-level data-driven insights into investment process in the residential
                            real estate,
                            partnering with industry leading firms and managers to unlock billions of dollars of added
                            value.
                        </p>
                    </div>
                    <img className="strengths__img" src={data} alt="" />
                </section>
                <img className="strengths__back-dots-2 dots" src={backDots1} alt="" />
            </div>

            <section className="about-form lnd-section__padding">
                <div className="lnd-container">
                    <h2 className="about-form__title" >
                        Current Available Markets
                    </h2>

                    <ContactUs />
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

export default About;
