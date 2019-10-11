import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss'

const propTypes = {
    variant: PropTypes.oneOf(['primary', 'default']),
    size: PropTypes.oneOf(['sm', 'lg', null]),
};

const defaultProps = {
    variant: 'default',
    disabled: false
};

const Button = (props) => {
    const { className, variant, size } = props;
    const classes = classNames(
        className,
        "lnd-button",
        `lnd-button--${variant}`,
        size && `lnd-button--${size}`
    );
    return (
        <button
            {...props}
            className={classes}>
            {props.children}
        </button>
    )
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
