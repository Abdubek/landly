import React from 'react';
import useStoreon from 'storeon/react'
import Input from "../Input";
import Button from "../Button";
import './styles.scss';
import api from '../../api';

import user from "../../images/user.svg";
import phone from "../../images/phone.svg";
import company from "../../images/company.svg";
import email from "../../images/email.svg";

const ContactUs = props => {
    const { onSend } = props;

    const { dispatch, users } = useStoreon('users');

    const handleChanged = e => {
        dispatch('users/save', { [e.target.name]: e.target.value })
    };

    const handleSubmit = async () => {
        let res = await Promise.all([
            api.newlead(users).then(res => res.json()),
            api.contactUs(users).then(res => res.json())
        ]);
        onSend();
        console.log(res)
    };

    return (
        <div className="contact-us-form">
            <h3 className="contact-us-form__title">Contact Us</h3>
            <Input name="name"
                   value={users.name}
                   onChange={handleChanged}
                   placeholder="Your Name"
                   icon={user}/>
            <Input name="phone"
                   value={users.phone}
                   onChange={handleChanged}
                   placeholder="Your Phone"
                   icon={phone}/>
            <Input name="company"
                   value={users.company}
                   onChange={handleChanged}
                   placeholder="Company"
                   icon={company}/>
            <Input name="email"
                   value={users.email}
                   onChange={handleChanged}
                   placeholder="Email"
                   icon={email}/>
            <Input name="message"
                   value={users.message}
                   onChange={handleChanged}
                   type="textarea"
                   rows={6}
                   placeholder="Message"
                   icon={email}/>

            <Button variant="primary" size="lg" className="form__button" onClick={handleSubmit}>Send</Button>
            <span className="contact-us-form__privacy">Appreciate your privacy</span>
        </div>
    )
};

export default ContactUs;
