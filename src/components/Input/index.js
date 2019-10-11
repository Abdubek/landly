import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './styles.scss'

const propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', null]),
    type: PropTypes.oneOf(['textarea', 'input', null]),
    rows: PropTypes.number,
};

const defaultProps = {
    size: 'md',
    type: 'input',
    default: 3
};

const Input = (props) => {
    const { className, size, placeholder, type, rows, ...otherProps } = props;
    const inputClasses = classNames(
        "lnd-input",
        size && `lnd-input--${size}`
    );
    const textareaClasses = classNames(
        "lnd-textarea"
    );
    const wrapper = classNames(
        className,
        `lnd-${type}__wrapper`
    );
    return (
        <div className={wrapper}>
            {type === 'input' ? (
                <input {...otherProps}
                       className={inputClasses}
                       placeholder=""
                       required />
            ) : (
                <textarea className={textareaClasses}
                          {...otherProps}
                          rows={rows}
                          placeholder=""
                          required />
            )
            }
            <label className="lnd-input__label">
                {placeholder}
            </label>
        </div>
    )
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
