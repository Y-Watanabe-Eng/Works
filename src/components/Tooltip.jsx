import '../style.css'
import { useState } from "react";
import PropTypes from 'prop-types';


export const Tooltip = ({ children, content }) => {

    const [show, setShow] = useState(false);


        return (
            <div>
                <div className='relative'
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                >
                    {show && <span           
                    className='tooltip bottom-full rounded bg-black px-2 py-1 mb-2 text-white absolute -translate-x-1/2 left-1/2 before:absolute before:-translate-x-1/2 before:left-1/2 before:top-full before:border-4 before:border-transparent before:border-t-black'
                    >{content}</span>}
                    {children}</div>
            </div>
        );

}

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.node,
};