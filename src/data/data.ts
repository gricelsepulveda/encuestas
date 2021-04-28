import { OptionsData, Answer } from '../types/types'

export const defaultAnswers:Answer[] = [
    { id:1, answer:[], validate:false }
]

export const pollData:OptionsData[] = [
    {
        question:'¡El período para llenar esta encuesta terminó! Pronto daremos a conocer al ganador de los vinitos.', error:false, errorMessage:'',
        options: [
            { type:'none', name:'', id:12, disabled:false, placeholder:'', value:'', img:'', label:'' }
        ]
    }
]