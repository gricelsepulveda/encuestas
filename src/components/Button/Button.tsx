//IMPORTS
import React from "react"
import "./button.scss"

type ButtonProps = {
    disabled: boolean, icon: string, name: string, value: string, color: string, action: (name:string) => void;
}

const Button:React.FunctionComponent<ButtonProps> = (props) => {
    
    const Action = () => {
        props.action(props.name)
    }

    return (
        <div className={`ps-button ${props.color} ${props.disabled ? 'disabled' : ''}`}>
            <button disabled={props.disabled} name={props.name} className="ps-button-btn" onClick={() => Action()}>
                {
                    props.icon != "" ?
                        <i className={`pls-icon pls-${props.icon}-icon`}/>:
                    <></>
                }
                {
                    props.value
                }
            </button>
        </div>
    )
}

export default Button