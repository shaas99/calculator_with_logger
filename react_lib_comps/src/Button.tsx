import React from "react";
import { MouseEvent } from "react";


import { logging } from 'ts_lib_logger';


logging
  .configure({
    minLevels: {
    '': 'error',
    'Button': 'info'
    }
  })
  .registerConsoleLogger();


const logger = logging.getLogger('Button');




export interface ButtonProps {
    text: string;
    action: ()=>void;
}

const Button = (props : ButtonProps) => {

    logger.info(`Button with text ${props.text} rendered`);

    return <button onClick={() => props.action()}>{props.text}</button>;
}

export default Button;