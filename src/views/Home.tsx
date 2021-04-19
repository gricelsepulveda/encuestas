//IMPORTS
import React, { useState } from "react"
//Components
import Button from "../components/Button/Button"
import Textarea from "../components/Textarea/Textarea"
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

    const checkAnswer = () => {
        const currentPage:number = page != null ? page + 1 : 1
        let checker:boolean = true 
        if (data != null) {
            if ( data[currentPage - 1] != undefined ) {
                checker = data[currentPage - 1].validate
            }
            else {
                checker = true
            }
        }
        return checker
    }

    const handlePage = () => {
        const nextPage:number = page != null ? page + 1 : 1
        if (nextPage <= maxPage ){
            setPage(nextPage)
        }
        else {
            location.replace("https://www.hellowine.cl");
        }
    }

    const questions:string[] = [
        'Tu edad:',
        'Tienes $5millones de pesos a tu disposición, los gastas:',
        '¿A qué te dedicas?',
        'Lo que más me quita el sueño es:',
        'Elige 1 artista y 1 pelicula',
        'Cuando bebo alcohol:',
        'Uso frecuentemente:',
        'Para mi cumpleaños me gustaría recibir:',
        'Gracias por tu tiempo. Avisaremos el ganador por rrss y a tu correo'
    ]

    const renderQuestion  = (ind: number) => {
        let render:any
        switch (ind) {
            case 0:
                render = 
                    <div className='flex col start'>
                        <div className='flex row center'>
                            <input type="radio" id="25" name="age" value="25"/>
                            <label>25 años o menos</label>
                        </div>
                        <div className='flex row center'>
                            <input type="radio" id="26" name="age" value="26"/>
                            <label>entre 26 y 35 años</label>
                        </div>
                        <div className='flex row center'>
                            <input type="radio" id="36" name="age" value="36"/>
                            <label>entre 36 y 45 años</label>
                        </div>
                        <div className='flex row center'>
                            <input type="radio" id="46" name="age" value="46"/>
                            <label>46 años o más.</label>
                        </div>
                    </div>
                break
            case 1:
                render = 
                    <div className='flex col start'>
                        <div className='flex row center'>
                            <input type="radio" id="emo" name="money" value="emo"/>
                            <label>Con mis seres queridos</label>
                        </div>
                        <div className='flex row center'>
                            <input type="radio" id="debt" name="money" value="debt"/>
                            <label>Primero dejo mis deudas resueltas</label>
                        </div>
                        <div className='flex row center'>
                            <input type="radio" id="inv" name="money" value="inv"/>
                            <label>Invierto para que crezcan</label>
                        </div>
                        <div className='flex row center'>
                            <input type="radio" id="wish" name="money" value="wish"/>
                            <label>Compro todo eso que tengo en mi lista de deseos</label>
                        </div>
                    </div>
                break
            case 2:
                render = 
                    <Textarea
                        name= 'dedicacion'
                        placeholder=''
                        disabled= {false}
                        TextError= 'No se puede dejar vacío'
                        error= {false}
                        value= ''
                        onChange={() => null}
                    />
                break
            case 3:
                render = 
                    <div className='flex row start' style={{width: '100%'}}>
                        <div className="flex row center" style={{width: '50%'}}>
                            <div className='flex col center'>
                                <input type="radio" id="poli" name="triggers" value="poli"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/social.png")'}}/>
                                <label  style={{width: '100%', textAlign: 'center'}}>Política / Problemas sociales</label>
                            </div>
                            <div className='flex col center'>
                                <input type="radio" id="eco" name="triggers" value="eco"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/eco.png")'}}/>
                                <label style={{width: '100%', textAlign: 'center'}}>El futuro del planeta y el medioambiente</label>
                            </div>
                        </div>
                        <div className="flex row center" style={{width: '50%'}}>
                            <div className='flex col center'>
                                <input type="radio" id="jobmoney" name="triggers" value="jobmoney"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/job.png")'}}/>
                                <label  style={{width: '100%', textAlign: 'center'}}>Mi futuro laboral y la estabilidad económica</label>
                            </div>
                            <div className='flex col center'>
                                <input type="radio" id="healthy" name="triggers" value="healthy"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/fit.png")'}}/>
                                <label  style={{width: '100%', textAlign: 'center'}}>Mi salud  y bienestar</label>
                            </div>
                        </div>
                    </div>
                break
            case 4:
                render = 
                    <div className='flex row start' style={{width: '100%'}}>
                        <div className="flex row center" style={{width: '50%'}}>
                            <div className='flex row center'>
                                <input type="radio" id="raggaeton" name="music" value="raggaeton"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/daddy.png")'}}/>
                            </div>
                            <div className='flex row center'>
                                <input type="radio" id="romantic" name="music" value="romantic"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/fonsi.png")'}}/>
                            </div>
                            <div className='flex row center'>
                                <input type="radio" id="rock" name="music" value="rock"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/pearl.png")'}}/>
                            </div>
                            <div className='flex row center'>
                                <input type="radio" id="electronic" name="music" value="electronic"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/armin.png")'}}/>
                            </div>
                        </div>
                        <div className="flex row center" style={{width: '50%'}}>
                            <div className='flex row center'>
                                <input type="radio" id="romantic" name="cinema" value="romantic"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/titanic.png")'}}/>
                            </div>
                            <div className='flex row center'>
                                <input type="radio" id="action" name="cinema" value="action"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/killbill.png")'}}/>
                            </div>
                            <div className='flex row center'>
                                <input type="radio" id="philophic" name="cinema" value="philophic"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/inter.png")'}}/>
                            </div>
                            <div className='flex row center'>
                                <input type="radio" id="arts" name="cinema" value="arts"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/torero.png")'}}/>
                            </div>
                        </div>
                    </div>
                break
            case 5:
                render = 
                    <div className='flex row start' style={{width: '100%'}}>
                        <div className="flex row center" style={{width: '50%'}}>
                            <div className='flex row center'>
                                <input type="radio" id="joy" name="drinking" value="joy"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/ebrio.png")'}}/>
                                <label style={{width: '100%', textAlign: 'center'}}>Hay que tomar hasta que amanezca</label>
                            </div>
                            <div className='flex row center'>
                                <input type="radio" id="cibar" name="drinking" value="cibar"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/catar.png")'}}/>
                                <label style={{width: '100%', textAlign: 'center'}}>Disfruto catar lo que estoy bebiendo</label>
                            </div>
                        </div>
                        <div className="flex row center" style={{width: '50%'}}>
                            <div className='flex row center'>
                                <input type="radio" id="selftlove" name="drinking" value="selftlove"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/vino.png")'}}/>
                                <label style={{width: '100%', textAlign: 'center'}}>Es porque me merezco un momento de relax</label>
                            </div>
                            <div className='flex row center'>
                                <input type="radio" id="social" name="drinking" value="social"/>
                                <div className="img" style={{backgroundImage: 'url("https://gricel.sfo2.digitaloceanspaces.com/hellowine/social2.png")'}}/>
                                <label style={{width: '100%', textAlign: 'center'}}>Es porque soy bebedor social</label>
                            </div>
                        </div>
                    </div>
                break
            case 6:
                render = 
                    <div className='flex col start'>
                        <div className='flex row center'>
                            <input type="checkbox" id="fb" name="webapps" value="fb"/>
                            <label>Facebook</label>
                        </div>
                        <div className='flex row center'>
                            <input type="checkbox" id="tw" name="webapps" value="tw"/>
                            <label>Twitter</label>
                        </div>
                        <div className='flex row center'>
                            <input type="checkbox" id="ig" name="webapps" value="ig"/>
                            <label>Instagram</label>
                        </div>
                        <div className='flex row center'>
                            <input type="checkbox" id="tt" name="webapps" value="tt"/>
                            <label>TikTok</label>
                        </div>
                        <div className='flex row center'>
                            <input type="checkbox" id="yt" name="webapps" value="yt"/>
                            <label>YouTube</label>
                        </div>
                        <div className='flex row center'>
                            <input type="checkbox" id="ml" name="webapps" value="ml"/>
                            <label>Mercado Libre</label>
                        </div>
                        <div className='flex row center'>
                            <input type="checkbox" id="aea" name="webapps" value="aea"/>
                            <label>Amazon, Ebay, Aliexpress, etc.</label>
                        </div>
                        <div className='flex row center'>
                            <input type="checkbox" id="to" name="webapps" value="to"/>
                            <label>Tiendas online</label>
                        </div>
                    </div>
                break
            case 7:
                render = 
                    <Textarea
                        name= 'cumpleaños'
                        placeholder=''
                        disabled= {false}
                        TextError= 'No se puede dejar vacío'
                        error= {false}
                        value= ''
                        onChange={() => null}
                    />
                break
            case 8:
                render = 
                    <>
                    </>
                break
        }
        return render
    }

    return (
        <div className="hw-form-pool">
            <div className="hw-header">
                <h1 className="flex row center">
                    <img src="https://hellowine.cl/assets/logo_HW-26fe59ee74129b0e64b542bfc84cbf57984d73f5b819c88d4c8ecf675f339e84.svg" alt="logo hellowine"/>
                    Encuesta
                </h1>
                {
                    page != null ? page < 9 ?
                    <h2>Pregunta <span>{page}</span> de 8</h2> : null : null
                }
            </div>
            {
                questions.map((item, index) => 
                    <Question
                        activePage={page != null ? page : index + 1} page={index + 1} id={index + 1} validate={false} key={`item-${index}`}
                        question={item} 
                        body={renderQuestion(index)}
                    />
                )
            }

            <Button icon="" disabled={!checkAnswer()} name="edad" value={`${page == 9 ? 'finalizar' : 'siguiente'}`} color="color-2" action={handlePage}/>
        </div>
    )
}

export default Home