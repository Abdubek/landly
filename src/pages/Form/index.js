import React, { useEffect, useState } from 'react';
import logo from "../../images/logo.png";
import {Link} from "react-router-dom";
import useStoreon from 'storeon/react'
import './styles.scss';
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Notification from "../../components/Notification";
import api from '../../api';

const Form = () => {

    const { dispatch, users } = useStoreon('users');
    const [ notify, setNotify ] = useState(false);
    const [ success, setSuccess ] = useState(false);

    useEffect(() => {
        dispatch('users/save', { state: 'California', type: "estimate-form" })
    }, [dispatch]);

    const handleChanged = e => {
        dispatch('users/save', { [e.target.name]: e.target.value })
    };

    const handleSubmit = async () => {
        let res = await Promise.all([
            api.newlead(users).then(res => res.json()),
            api.contactUs(users).then(res => res.json())
        ]);
        setSuccess(true);
        console.log(res)
    };

    return (
        <>
            <header className="form-header">
                <Link className="lnd-header__logo" to="/">
                    <img src={logo} alt=""/>
                </Link>
            </header>

            <div className="estimate-form lnd-container">
                <h1 className="lnd-h1">Get your free 1-year estimate</h1>
                <p className="lnd-h1__hint">Fill out our the fields and we’ll start</p>

                <div className="form">
                    <Input name="name"
                           value={users.name}
                           placeholder="Full Name"
                           onChange={handleChanged} />
                    <Input name="email"
                           placeholder="Email"
                           className="margin-left"
                           value={users.email}
                           onChange={handleChanged} />

                    <div className="form__decor">
                        <div className="form__decor-line" />
                    </div>

                    <Input name="street"
                           value={users.street}
                           placeholder="Street Address"
                           onChange={handleChanged} />
                    <Input name="city"
                           value={users.city}
                           placeholder="City"
                           className="margin-left"
                           onChange={handleChanged} />
                    <Input name="state"
                           value={users.state}
                           placeholder="State"
                           disabled
                           onChange={handleChanged} />
                    <Input name="zipcode"
                           value={users.zipcode}
                           placeholder="ZIPcode"
                           className="margin-left"
                           onChange={handleChanged} />

                    <Button type="submit" size="lg" variant="primary" onClick={handleSubmit}>Get my FREE Estimate</Button>
                    <span className="form__privacy">Appreciate your privacy</span>
                </div>
            </div>

            <Footer />

            <Notification
                open={notify}
                onClose={() => setNotify(false)}
                success={success}
            />
        </>
    )
};

export default Form;
