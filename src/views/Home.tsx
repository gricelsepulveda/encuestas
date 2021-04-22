//Modules
import React, { useEffect, useState, useRef } from 'react'
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
    const [page, setPage] = useState<number>(1)
    const [data, setData] = useState<Answer[]>(defaultAnswers)
    const element = useRef<null | any>(null)

    const checkAnswer = () => {
        const currentPage:number = page
        let checker:boolean = false
        data[currentPage - 1] != undefined ? checker = data[currentPage - 1].validate : checker = false
        return checker
    }

    const handlePage = () => {
        const nextPage:number = page + 1
        const maxPage:number = formElements.length
        if (page == 10){
            sendAnswers() 
        }
        if (nextPage <= maxPage){
            setPage(nextPage)
        } else {
            location.replace('https://www.hellowine.cl')
        }
    }

    const recordAnswer = (oldData:Answer[], newData:Answer, idIndex:number) => {
        let updatedData:Answer[] = [... oldData.filter(oldD => oldD.id != idIndex)]
        updatedData.push(newData)
        updatedData = updatedData.sort(function(a, b){return a.id - b.id});
        return updatedData
    }

    const handleChange = (idQ: number, name:string, value:string, type: string) => {
        let elVal = element.current != null ? element.current.value : ''
        let val:Answer
        const setVals = () => {
            let checkExists = data[idQ - 1].answer.filter(x => x == value) 
            let result:any[] = idQ != 8 ? [name, type != 'textarea' ? value : elVal] : checkExists.length > 0 ? data[idQ - 1].answer.filter(x => x != value) : [...data[idQ - 1].answer, value]
            return result
        }
        val = {
            id: idQ,
            answer: setVals(),
            validate: (type != 'textarea' ? value : elVal).length > 0 ? true : false
        }
        setData(recordAnswer(data, val, idQ))
    }

    const renderFormElement = (control:string, info:OptionsData, index: number) => {
        let toRender:React.ReactFragment
        const prefix = info.options[index]
        control != 'textarea' ? toRender = ( <div className='flex row start' style={{width: '100%'}}  key={`formElement-${prefix.value}-${index}-${info.question.split(' ').join()}`}>
                            <input 
                                type={prefix.type} name={prefix.name} id={`${prefix.id}`} value={prefix.value} placeholder={prefix.placeholder} disabled={prefix.disabled}
                                onChange={() => handleChange(prefix.id, prefix.name, prefix.value, prefix.type)}/>
                            { prefix.img != '' ? <div className='img' style={{backgroundImage: `url("${prefix.img}")`}}/> : null } {prefix.label != '' ? <label>{prefix.label}</label> : null }</div>)
        : toRender = ( <textarea rows={5} style={{width: '100%'}}  ref={element} key={`formElement-${prefix.value}-${index}-${info.question.split(' ').join()}`} name={prefix.name} id={`${prefix.id}`} placeholder={prefix.placeholder} disabled={prefix.disabled} onChange={() => handleChange(prefix.id, prefix.name, prefix.value, prefix.type)}/>)
        return toRender
    }

    const renderQuestion  = (ind: number) => {
        let render:any[] = [<p>{formElements[ind].question}</p>]

        switch (ind) {
            case 0: case 1: case 2: case 7: case 8: case 9:
                render.push (
                    <div className='flex col start' style={{width: '100%'}}  key={`wrapper-a-${ind}-${formElements[ind].question.split(' ').join()}`}>
                        {
                            formElements[ind].options.map((formEl, index) => ind == 2 || ind == 7 ? 
                                <div className="flex row center" style={{width: '100%'}}  key={`${formEl.value}-${ind}-${index}-${formElements[ind].question.split(' ').join()}`}>{ renderFormElement(formEl.type, formElements[ind], index) }</div> 
                                : renderFormElement(formEl.type, formElements[ind], index))
                        }
                    </div>)
                break
            case 3: case 4: case 5: case 6:
                render.push (
                    <div className='flex row start' style={{width: '100%'}} key={`wrapper-b-${ind}-${formElements[ind].question.split(' ').join()}`}>
                        <div className='flex row center' style={{width: '50%'}}>
                            {
                                formElements[ind].options.map((formEl, index) => index < 2  ? 
                                    <div className='flex col center' style={{margin: '10px'}}  key={`${formEl.value}-${ind}-${index}-${formElements[ind].question.split(' ').join()}`}>
                                        { renderFormElement(formEl.type, formElements[ind], index)}
                                    </div> : '')
                            }
                        </div>
                        <div className='flex row center' style={{width: '50%'}} key={`wrapper-c-${ind}-${formElements[ind].question.split(' ').join()}`}>
                            {
                                formElements[ind].options.map((formEl, index) => index >= 2 ? 
                                    <div className='flex col center' key={`${formEl.value}-${ind}-${index}-${formElements[ind].question.split(' ').join()}`}>
                                        { renderFormElement(formEl.type, formElements[ind], index) }
                                    </div> : '')
                            }
                        </div>
                    </div>)
                break
        }
        return render
    }

    const sendAnswers = () => {
        fetch('https://encuesta.hellowine.cl:1337/poll-user-personas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answer: data
            }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
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
            <span className='prevent-errors'>{page < formElements.length ? data[page - 1].validate ? '' : formElements[page - 1].errorMessage : ''}</span>
            <Button icon='' disabled={page < formElements.length ? !checkAnswer() : false} name='edad' value={`${page == formElements.length ? 'finalizar' : 'siguiente'}`} color='color-2' action={handlePage}/>
        </div>
    )
}

export default Home