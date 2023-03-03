import React from "react";

import { logging } from 'ts_lib_logger';


logging
  .configure({
    minLevels: {
    '': 'error',
    'TextField': 'info'
    }
  })
  .registerConsoleLogger();


const logger = logging.getLogger('TextField');


export interface TextFieldProps {
    value: number;
    setValue: (arg0: number) => void
}

const TextField = ({value , setValue}: TextFieldProps) => {

    logger.info(`TextField with value ${value} rendered`);

    return <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))}></input>;
}

export default TextField;