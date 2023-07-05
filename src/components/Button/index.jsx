import React from 'react'
import { Button } from "antd";
import { NavLink } from 'react-router-dom';

const RoundedButton = ({ children, type, link, className, ...props }) => {
    return (
        <NavLink to={link}>
            <Button
                shape='round'
                className={type == "red" ? `redBtn border-1 border-[#fff] ${className}` : type == "blue" ? `blueBtn border-1 border-[#fff] ${className}` : `greenBtn border-1 border-[#fff] ${className}`}
                size="large"
                {...props}
            >
                {children}
            </Button>
        </NavLink>
    )
}

export default RoundedButton;

