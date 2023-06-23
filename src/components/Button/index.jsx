import React from 'react'
import { Button } from "antd";

const RoundedButton = ({ children, type, ...props }) => {
    return (
        <Button
            shape='round'
            className={type == "red" ? "redBtn" : type == "blue" ? "blueBtn" : "greenBtn"}
            size="large"
            {...props}
        >
            {children}
        </Button>
    )
}

export default RoundedButton;

