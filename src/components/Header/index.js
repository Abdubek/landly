import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import Button from '../Button';
import './styles.scss';
import PropTypes from "prop-types";

const propTypes = {
    button: PropTypes.exact({
        click: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
        ]).isRequired,
        text: PropTypes.string.isRequired
    }),
};

const defaultProps = {
    button: {
        click: '/',
        text: 'Main page'
    }
};

const Header = props => {
    const { children, button } = props;
    return (
        <header className="lnd-header lnd-container lnd-flex lnd-flex-between lnd-flex-middle">
            <div>
                <Link className="lnd-header__logo" to="/">
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <div className="lnd-flex">
                <div className="lnd-flex lnd-flex-middle menu__item">
                    {children}
                </div>
                {typeof button.click === "string" ? (
                        <Link to='/enterprise'>
                            <Button>{button.text}</Button>
                        </Link>
                    ) : (
                        <Button onClick={button.click}>{button.text}</Button>
                    )
                }

            </div>
        </header>
    )
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
