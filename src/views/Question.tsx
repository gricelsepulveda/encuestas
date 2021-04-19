//IMPORTS
import React from "react"

type QuestionProps = {
    id: number,
    question: string | undefined,
    validate: boolean,
    body: any | null
    page: number,
    activePage: number
}

const Question:React.FunctionComponent<QuestionProps> = (props) => {

    return (
        <div className={`hw-form-page page-${props.page} ${props.page == props.activePage ? 'active' : ''}`}>
            <div className="hw-form-element">
                <p>{props.question}</p>
                {
                    props.body
                }
            </div>
        </div>
    )
}

export default Question