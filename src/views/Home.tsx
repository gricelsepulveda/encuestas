//Modules
import React, { useEffect, useState } from 'react'
//Components
import Button from '../components/Button/Button'
//Types
import { Answer, OptionsData } from '../types/types'
//Data
import { defaultAnswers, pollData } from '../data/data'
//Styles
import '../styles/home.scss'

const Home = () => {
    const [formElements] = useState<OptionsData[]>(pollData)
    const [page] = useState<number>(1)
    const [data] = useState<Answer[]>(defaultAnswers)

    const handlePage = () => {
        location.replace('https://www.hellowine.cl')
    }

    const renderFormElement = (control:string, info:OptionsData, index: number) => {
        let toRender:React.ReactFragment
        const prefix = info.options[index]
        return toRender = ( <div className='flex row start' style={{width: '100%'}}  key={`formElement-${prefix.value}-${index}-${info.question.split(' ').join()}`}>
                            {prefix.label != '' ? <label>{prefix.label}</label> : null }</div>)
    }

    const renderQuestion  = (ind: number) => {
        let render:any[] = [<p>{formElements[ind].question}</p>,<span className='prevent-errors'>{page < formElements.length ? data[page - 1].validate ? '' : formElements[page - 1].errorMessage : ''}</span>]

        switch (ind) {
            case 0:
                render.push (
                    <div className='flex col start' style={{width: '100%'}}  key={`wrapper-a-${ind}-${formElements[ind].question.split(' ').join()}`}>
                        {
                            formElements[ind].options.map((formEl, index) => renderFormElement(formEl.type, formElements[ind], index))
                        }
                    </div>)
                break
        }
        return render
    }


    useEffect(() => {
    }, [data])

    return (
        <div className='hw-form-pool'>
            <div className='hw-header'>
                <h1 className='flex row center'>
                    <img src='https://hellowine.cl/assets/logo_HW-26fe59ee74129b0e64b542bfc84cbf57984d73f5b819c88d4c8ecf675f339e84.svg' alt='logo hellowine'/>
                    Encuesta
                </h1>
                {page < formElements.length ? <h2><span>{page}</span> de {formElements.length  - 1}</h2> : null }
            </div>
            {
                formElements.map((item, index) => 
                page == index + 1 ?
                    <div className={`hw-form-page page-${page} ${page == index + 1 ? 'active' : ''}`} key={`${item.question.split(' ').join()}-${index}`}>
                        { 
                            renderQuestion(index).map((elementHtml, indElement) => 
                                <div className="hw-form-element" key={`hw-form-element-${item.question.split(' ').join()}-${index}-${indElement}`}>{elementHtml}</div>
                            ) 
                        }
                    </div> : null
                )
            }
            <Button icon='' disabled={false} name='edad' value={`${'ir a hellowine.cl'}`} color='color-2' action={handlePage}/>
        </div>
    )
}

export default Home