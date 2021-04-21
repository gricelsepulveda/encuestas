export type Answer = {
    id: number,
    answer: string[],
    validate: boolean
}

export type Options = {
    type: 'radio' | 'checkbox' | 'textarea' | 'none',
    name: string,
    id: number,
    disabled: boolean,
    placeholder: string,
    value: string,
    img: string,
    label: string,
}

export type OptionsData = {
    question: string,
    error: boolean,
    errorMessage: string,
    options:Options[]
}