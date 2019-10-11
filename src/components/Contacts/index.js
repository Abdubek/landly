import React from 'react';
import './styles.scss';
import classNames from "classnames";

const Contacts = props => {
    const { className } = props;
    const classes = classNames(
        className,
        "address",
    );
    return (
        <address className={classes}>
            <div className="address__item">
                <h4 className="address__title">Phone</h4>
                <a href="tel:+19169150031">+1 (916) 915 0031</a>
            </div>
            <div className="address__item">
                <span className="address__title">Address</span>
                <a target="_blank"
                   href=" https://www.google.com/maps/place/%D0%A2%D0%A6+%D0%90%D0%B7%D1%80%D0%B8%D1%8D%D0%BB%D0%B8+%D0%A0%D0%B8%D1%88%D0%BE%D0%BD%D0%B8%D0%BC,+Sderot+Nim+2,+Rishon+LeTsiyon/@31.949533,34.803047,17z/data=!4m2!3m1!1s0x1502b42421a37f9b:0x86c9332671324a8d">
                    Nim 2, Rishon Lezion,<br/> Israel, 75321</a>
            </div>
            <div className="address__item">
                <span className="address__title">Email</span>
                <a href="mailto:ping@landly.ai">ping@landly.ai</a>
            </div>
        </address>
    )
};

export default Contacts;
