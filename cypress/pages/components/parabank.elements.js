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

    INP_NAME: '#customer\.firstName',
    INP_LASTNAME: '#customer\.lastName',
    INP_ADDRESS: '#customer\.address\.street',
    INP_CITY: '#customer\.address\.city',
    INP_STATE: '#customer\.address\.state',
    INP_ZIPCODE: '#customer\.address\.zipCode',
    INP_PHONE: '#customer\.phoneNumber',
    INP_SSN: '#customer\.ssn',
    
    INP_USERNAME:'#customer\.username',
    INP_PASSWORD: '#customer\.password',
    INP_REPEATED: '#repeatedPassword',    
    BTN_REGISTER: '[colspan="2"] > .button'
}


export { Login, Home , Cadastro}
