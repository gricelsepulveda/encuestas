//IMPORTS
import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import "./modal.scss"

export type ModalProps = {
    title: string,
    description: string,
    img: string,
    open: boolean,
    onclose: (open: boolean) => void
}

const Modal:React.FunctionComponent<ModalProps> = (props) => {

    const handleClose = () => {
        props.onclose(false)
    }

    return (
        props.open ? ReactDOM.createPortal(
            <>
                <div className="ps-modal-bg"></div>
                <div className="ps-modal">
                    <div className="ps-modal-wrapper">
                        <button 
                            type="button"
                            onClick={handleClose} 
                            className="ps-modal-close-button"
                        >
                            <i className="pls-icon pls-close-icon"></i>
                        </button>
                        <h1 className="ps-modal-title">{props.title}</h1>
                        <figure
                            className="ps-modal-header"
                            style={{backgroundImage: `url("${props.img}")`}}
                        >
                        </figure>
                        <p className="ps-modal-description">
                            {props.description}
                        </p>
                    </div>
                </div>
            </>, 
        //@ts-ignore
            document.getElementById("modal-root")
        ):null
    )
}

export default Modal