const Home = {
    BTN_REGISTER: '#loginPanel > :nth-child(3) > a',
    BNT_FORGOT: ':nth-child(5) > .button'
}
const Login = {
    INP_USERNAME: ':nth-child(2) > .input',
    INP_PASSWORD: ':nth-child(4) > .input',
    BTN_LOGIN: ':nth-child(5) > .button',
    TXT_ERRO: '.error'
}

const Cadastro = {
    TXT_REGISTER: '.title',
    TXT_SUCESSO: '.title',

    INP_NAME: ':nth-child(1) > [width="20%"]',
    INP_LASTNAME: ':nth-child(2) > [width="20%"]',
    INP_ADDRESS: ':nth-child(3) > [width="20%"]',
    INP_CITY: ':nth-child(4) > [width="20%"]',
    INP_STATE: ':nth-child(5) > [width="20%"]',
    INP_ZIPCODE: ':nth-child(6) > [width="20%"]',
    INP_PHONE: ':nth-child(7) > [width="20%"]',
    INP_SSN: ':nth-child(8) > [width="20%"]',
    INP_USERNAME: ':nth-child(10) > [width="20%"]',
    INP_PASSWORD: ':nth-child(11) > [width="20%"]',
    INP_REPEATED: ':nth-child(12) > [width="20%"]',

    BTN_REGISTER: '[colspan="2"] > .button',

    MSG_NAME: ':nth-child(1) > [width="50%"]',
    MSG_LASTNAME: ':nth-child(2) > [width="50%"]',
    MSG_ADDRESS: ':nth-child(3) > [width="50%"]',
    MSG_CITY: ':nth-child(4) > [width="50%"]',
    MSG_STATE: ':nth-child(5) > [width="50%"]',
    MSG_ZIPCODE: ':nth-child(6) > [width="50%"]',
    MSG_PHONE: ':nth-child(7) > [width="50%"]',
    MSG_SSN: ':nth-child(8) > [width="50%"]',
    MSG_USERNAME: ':nth-child(10) > [width="50%"]',
    MSG_PASSWORD: ':nth-child(11) > [width="50%"]',
    MSG_REPEATED: ':nth-child(12) > [width="50%"]'
}


export { Login, Home, Cadastro }
