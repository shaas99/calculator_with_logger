import React from "react";

export interface TextFieldProps {
    value: number;
    setValue: (arg0: number) => void
}

const TextField = ({value , setValue}: TextFieldProps) => {
    return <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))}></input>;
}

export default TextField;