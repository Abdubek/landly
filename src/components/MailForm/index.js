import React from 'react';
import Button from '../Button';
import Input from "../Input";
import './styles.scss';
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

const propTypes = {
    detailed: PropTypes.bool,
    href: PropTypes.string.isRequired
};

const defaultProps = {
    detailed: false
};


const MailForm = props => {
    const { detailed, className, href, onChange } = props;
    const classes = classNames(
        className,
        'lnd-mail-form',
        detailed && `lnd-mail-form--center`,
    );
    return (
        <div className={classes}>
            <Input size="md" placeholder="Your email" onChange={onChange}/>
            <div className="lnd-button__wrapper">
                <Link to={href}>
                    <Button size="lg" variant="primary">Get my FREE estimate</Button>
                </Link>
                {!detailed && <p className="lnd-mail-form__hint">NO CREDIT CARD NEEDED</p>}
            </div>
            {detailed && <p className="lnd-mail-form__hint">No obligation. No Credit Card needed.</p>}
        </div>
    )
};

MailForm.propTypes = propTypes;
MailForm.defaultProps = defaultProps;

export default MailForm;
