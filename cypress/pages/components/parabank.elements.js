const EL_Home = {
    LNK_REGISTER: '#loginPanel > :nth-child(3) > a',
    LNK_FORGOT: '#loginPanel > :nth-child(2) > a',
    TXT_LOGADO: '.smallText',
    INF_SERVICES: 'ul.services',
    INF_SERVICETWO: '.servicestwo',
    INF_EVENTS: '.events',
    TXT_TITULO: '.title',
    BTN_SEND: '[colspan="2"] > .button',

    // menus logado
    LNK_PROFILE: '#leftPanel > ul > :nth-child(6) > a',
    LNK_NEW_ACCOUNT: '#leftPanel > ul > :nth-child(1) > a',
    LNK_OVERVIEW: '#leftPanel > ul > :nth-child(2) > a',
    LNK_TRANSFER_FUNDS: '#leftPanel > ul > :nth-child(3) > a'
}
const EL_Login = {
    INP_USERNAME: ':nth-child(2) > .input',
    INP_PASSWORD: ':nth-child(4) > .input',
    BTN_LOGIN: ':nth-child(5) > .button',
    TXT_ERRO: '.error',
    BTN_LOGOUT: '#leftPanel > ul > :nth-child(8) > a'
}

const EL_Cadastro = {
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
const EL_Forgot = {
    INP_NAME: ':nth-child(1) > [width="20%"]',
    INP_LASTNAME: ':nth-child(2) > [width="20%"]',
    INP_ADDRESS: ':nth-child(3) > [width="20%"]',
    INP_CITY: ':nth-child(4) > [width="20%"]',
    INP_STATE: ':nth-child(5) > [width="20%"]',
    INP_ZIPCODE: ':nth-child(6) > [width="20%"]',
    INP_SSN: ':nth-child(7) > [width="20%"]',
    TXT_ERRO: '.error'
}
const EL_Profile ={
   BOX_SUCESS: '[ng-app="UpdateProfileApp"] > .ng-scope'
}

export { EL_Login, EL_Home, EL_Cadastro, EL_Forgot , EL_Profile}
