import React from "react";
import { MouseEvent } from "react";

export interface ButtonProps {
    text: string;
    action: ()=>void;
}

const Button = (props : ButtonProps) => {
    return <button onClick={() => props.action()}>{props.text}</button>;
}

export default Button;