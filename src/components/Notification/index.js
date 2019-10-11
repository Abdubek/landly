import React from 'react';
import PropTypes from "prop-types";
import './styles.scss';
import Modal from '../Modal';

import successIcon from '../../images/success.svg'
import failIcon from '../../images/fail.svg'

const propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    hint: PropTypes.string
};

const defaultProps = {
    success: true,
    title: "",
    text: "",
    hint: ""
};

const Notification = props => {
    const { success, onClose, open } = props;


    const title = success ? 'Sent!' : 'Ooops!';
    const text = success
        ? 'We will get back to you within next 24 hours or less'
        : 'Something went wrong. Please try again.';
    const hint = "If you see this message again, please drop a message here"

    return (
        <Modal open={open} onClose={onClose}>
            <div className="notify">
                <img className="notify__img" alt=""
                     src={success ? successIcon : failIcon}/>
                <h2 className="notify__title">{title}</h2>
                <p className="notify__text">{text}</p>
                {!success && (
                    <>
                        <div className="notify__divider" />
                        <p className="notify__hint">{hint}</p>
                    </>
                )}
            </div>
        </Modal>
    )
};


Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

export default Notification;
