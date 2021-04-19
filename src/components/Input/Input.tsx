//IMPORTS
import React, { useState } from "react"
import "./input.scss"

type InputProps = {
    placeholder:string,
    disabled: boolean,
    TextError: string,
    error: boolean;
    value: string,
    name: string,
    onChange: (val:string) => void;
}

const Input:React.FunctionComponent<InputProps> = (props) => {
    const [value, setValue] = useState<string>(props.value)
    const [error, setError] = useState<boolean>(props.error)

    const handleChange = (Event:any) => {
        props.onChange(Event.target.value)
        setValue(Event.target.value)
        if (props.error){
            setError(props.error)
        }
    }

    return (
        <div className={`ps-input ${props.error ? 'error' : ''} ${props.disabled ? 'disabled' : ''}`}>
            <input name={props.name} placeholder={props.placeholder} onChange={handleChange} className="ps-input-element" type="text" value={value}/>
            {
                error ? 
                <span className="ps-input-error">{props.TextError}</span>
                : null
            }
        </div>
    )
}

export default Input