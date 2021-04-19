//IMPORTS
import React, { useState } from "react"
import "./textarea.scss"

type TextareaProps = {
    name: string,
    placeholder:string,
    disabled: boolean,
    TextError: string,
    error: boolean;
    value: string,
    onChange: (val:string) => void;
}

const Textarea:React.FunctionComponent<TextareaProps> = (props) => {
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
        <div className={`ps-textarea ${props.error ? 'error' : ''} ${props.disabled ? 'disabled' : ''}`}>
            <textarea name={props.name} placeholder={props.placeholder} onChange={handleChange} className="ps-textarea-element" value={value}/>
            {
                error ? 
                <span className="ps-textarea-error">{props.TextError}</span>
                : null
            }
        </div>
    )
}

export default Textarea