//IMPORTS
import React, { useState } from "react"
//Components
import Button from "../components/Button/Button"
import Question from "./Question"
//Styles
import "../styles/home.scss"

type Answer = {
    id: number,
    answer: string | undefined,
    validate: boolean
}

const Home = () => {
    const maxPage:number = 9
    const [page, setPage] = useState<number | null>(1)
    const [data, setData] = useState<Answer[] | null>([
        {
            id:1,
            answer:undefined,
            validate: false
        }
    ])

    const handlePage = () => {
        const nextPage:number = page != null ? page + 1 : 1
        if (nextPage <= maxPage ){
            setPage(nextPage)
        }
    }

    const questions:string[] = [
        'Tu edad',
        'Tienes $10mil dólares a tu disposición. Los gastas:',
        '¿A qué te dedicas?',
        'Lo que más me quita el sueño es:',
        '¿Cual es tu pelìcula/serie favorita y tu artista favorito?',
        'Cuando bebes:',
        'Uso frecuentemente',
        'Para mi cumpleaños sería increíble si me regalaran:',
        'Gracias por tu tiempo. Avisaremos el ganador por rrss y a tu correo'
    ]

    return (
        <div className="hw-form-pool">
            {
                questions.map((item, index) => 
                    <Question
                        activePage={page != null ? page : index + 1} page={index + 1} id={index + 1} validate={false}
                        question={item} 
                        body={<span>Componente</span>}
                    />
                )
            }

            <Button icon="" disabled={false} name="edad" value={`${page == 9 ? 'finalizar' : 'siguiente'}`} color="color-1" action={handlePage}/>
        </div>
    )
}

export default Home