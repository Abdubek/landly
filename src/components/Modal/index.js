import React from 'react';
import './styles.scss';

const Modal = (props) => {
    const { children, open, onClose } = props;
    return (
        <>
            {open && (
                <div className="modal-shadow" onClick={onClose}>
                    <div className="modal" onClick={(e) => e.stopPropagation() }>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
};

export default Modal;
