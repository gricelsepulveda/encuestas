import { OptionsData, Answer } from '../types/types'

export const defaultAnswers:Answer[] = [
    { id:1, answer:[], validate:false },
    { id:2, answer:[], validate:false },
    { id:3, answer:[], validate:false },
    { id:4, answer:[], validate:false },
    { id:5, answer:[], validate:false },
    { id:6, answer:[], validate:false },
    { id:8, answer:[], validate:false},
    { id:9, answer:[], validate:false},
    { id:10, answer:[], validate:false},
    { id:11, answer:[], validate:false}
]

export const pollData:OptionsData[] = [
    {
        question:'Mi edad es:', error:false, errorMessage:'Debes elegir una',
        options: [
            { type:'radio', name:'age', id:1, disabled:false, placeholder:'', value:'25', img:'', label:'25 años o menos' },
            { type:'radio', name:'age', id:1, disabled:false, placeholder:'', value:'26', img:'', label:'Entre 26 y 35 años' },
            { type:'radio', name:'age', id:1, disabled:false, placeholder:'', value:'36', img:'', label:'Entre 36 y 45 años' },
            { type:'radio', name:'age', id:1, disabled:false, placeholder:'', value:'46', img:'', label:'46 años o más' },
        ]
    },
    {
        question:'Mi genero es:', error:false, errorMessage:'Debes elegir una',
        options: [
            { type:'radio', name:'gender', id:2, disabled:false, placeholder:'', value:'f', img:'', label:'Femenino' },
            { type:'radio', name:'gender', id:2, disabled:false, placeholder:'', value:'m', img:'', label:'Masculino' },
            { type:'radio', name:'gender', id:2, disabled:false, placeholder:'', value:'nb', img:'', label:'No binario' },
            { type:'radio', name:'gender', id:2, disabled:false, placeholder:'', value:'nr', img:'', label:'Prefiero no responder' },
        ]
    },
    {
        question:'Tengo $5 millones de pesos a mi disposición, los destino:', error:false, errorMessage:'Debes eligir una:',
        options: [
            { type:'radio', name:'money', id:3, disabled:false, placeholder:'', value:'emotional', img:'', label:'Para gastarlos con mis seres queridos' },
            { type:'radio', name:'money', id:3, disabled:false, placeholder:'', value:'debts', img:'', label:'Para dejar mis deudas resueltas' },
            { type:'radio', name:'money', id:3, disabled:false, placeholder:'', value:'inversions', img:'', label:'Para invertirlos y que crezcan' },
            { type:'radio', name:'money', id:3, disabled:false, placeholder:'', value:'wishlist', img:'', label:'Para comprar toda mi lista de deseos' },
        ]
    },
    {
        question:'Me dedico a:', error:false, errorMessage:'Cuéntanos de tí, lo que haces o lo que te apasiona',
        options: [
            { type:'textarea', name:'job', id:4, disabled:false, placeholder:'', value:'', img:'', label:'' }
        ]
    },
    {
        question:'Lo que más me quita el sueño es:', error:false, errorMessage:'Debes eligir una',
        options: [
            { type:'radio', name:'triggers', id:5, disabled:false, placeholder:'', value:'socialAndPolitics', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/social.png', label:'La política y los problemas sociales' },
            { type:'radio', name:'triggers', id:5, disabled:false, placeholder:'', value:'eco', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/eco.png', label:'El futuro del planeta y el medioambiente' },
            { type:'radio', name:'triggers', id:5, disabled:false, placeholder:'', value:'future', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/job.png', label:'Mi futuro laboral y la estabilidad económica' },
            { type:'radio', name:'triggers', id:5, disabled:false, placeholder:'', value:'health', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/fit.png', label:'Mi salud  y bienestar' },
        ]
    },
    {
        question:'Cuando escucho música prefiero:', error:false, errorMessage:'Debes eligir una',
        options: [
            { type:'radio', name:'music', id:6, disabled:false, placeholder:'', value:'raggaeton', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/daddy.png', label:'Raggaeton y/o música urbana' },
            { type:'radio', name:'music', id:6, disabled:false, placeholder:'', value:'romantic', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/fonsi.png', label:'Música romántica' },
            { type:'radio', name:'music', id:6, disabled:false, placeholder:'', value:'rock', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/pearl.png', label:'Música rockera' },
            { type:'radio', name:'music', id:6, disabled:false, placeholder:'', value:'electronic', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/armin.png', label:'Música electrónica' },
        ]
    },
    {
        question:'Cuando tengo que ver una película prefiero películas:', error:false, errorMessage:'Debes eligir una',
        options: [
            { type:'radio', name:'movies', id:7, disabled:false, placeholder:'', value:'romance', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/titanic.png', label:'Románticas' },
            { type:'radio', name:'movies', id:7, disabled:false, placeholder:'', value:'action', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/killbill.png', label:'De acción' },
            { type:'radio', name:'movies', id:7, disabled:false, placeholder:'', value:'philosophic', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/inter.png', label:'Para pensar' },
            { type:'radio', name:'movies', id:7, disabled:false, placeholder:'', value:'arts', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/torero.png', label:'De cine arte' },
        ]
    },
    {
        question:'Cuando bebo alcohol:', error:false, errorMessage:'Debes eligir una',
        options: [
            { type:'radio', name:'drinking', id:8, disabled:false, placeholder:'', value:'joy', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/ebrio.png', label:'Hay que tomar hasta que amanezca' },
            { type:'radio', name:'drinking', id:8, disabled:false, placeholder:'', value:'cibar', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/catar.png', label:'Disfruto catar lo que estoy bebiendo' },
            { type:'radio', name:'drinking', id:8, disabled:false, placeholder:'', value:'selflove', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/vino.png', label:'Es porque me merezco un momento de relax' },
            { type:'radio', name:'drinking', id:8, disabled:false, placeholder:'', value:'social', img:'https://gricel.sfo2.digitaloceanspaces.com/hellowine/social2.png', label:'Es porque soy bebedor social' },
        ]
    },
    {
        question:'Uso frecuentemente:', error:false, errorMessage:'Puedes elegir mas de una',
        options: [
            { type:'checkbox', name:'webapps', id:9, disabled:false, placeholder:'', value:'fb', img:'', label:'Facebook' },
            { type:'checkbox', name:'webapps', id:9, disabled:false, placeholder:'', value:'tw', img:'', label:'Twitter' },
            { type:'checkbox', name:'webapps', id:9, disabled:false, placeholder:'', value:'ig', img:'', label:'Instagram' },
            { type:'checkbox', name:'webapps', id:9, disabled:false, placeholder:'', value:'yt', img:'', label:'YouTube' },
            { type:'checkbox', name:'webapps', id:9, disabled:false, placeholder:'', value:'tt', img:'', label:'TikTok' },
            { type:'checkbox', name:'webapps', id:9, disabled:false, placeholder:'', value:'ml', img:'', label:'Mercado Libre' },
            { type:'checkbox', name:'webapps', id:9, disabled:false, placeholder:'', value:'ec', img:'', label:'Amazon, Ebay, Aliexpress, etc.' },
            { type:'checkbox', name:'webapps', id:9, disabled:false, placeholder:'', value:'os', img:'', label:'Otras tiendas online' },
        ]
    },
    {
        question:'Para mi cumpleaños me gustaría recibir:', error:false, errorMessage:'Lo primero que se te viene a la cabeza',
        options: [
            { type:'textarea', name:'birthdaygift', id:10, disabled:false, placeholder:'', value:'', img:'', label:'' }
        ]
    },
    {
        question:'Por favor déjanos tu correo:', error:false, errorMessage:'Asi te podremos contactar en caso de que seas el ganador',
        options: [
            { type:'textarea', name:'email', id:11, disabled:false, placeholder:'', value:'', img:'', label:'' }
        ]
    },
    {
        question:'¡Muchas gracias por tu tiempo! Pronto daremos a conocer al ganador de los vinitos. ¡Atento a tu correo!', error:false, errorMessage:'',
        options: [
            { type:'none', name:'', id:12, disabled:false, placeholder:'', value:'', img:'', label:'' }
        ]
    }
]