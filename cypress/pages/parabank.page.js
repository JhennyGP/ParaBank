import Base from './_base.page.js'
import { Factory } from '../fixtures/factory'
import { Home, Login, Cadastro , Forgot } from './components/parabank.elements.js'

export class ParaBank extends Base {
    static acessar_site() {
        cy.visit('/')
    }

    // LOGIN
    static preencher_login_type(type) {
        let dados_login = Factory.login(type)
        super.typeValue(Login.INP_USERNAME, dados_login.userName)
        super.typeValue(Login.INP_PASSWORD, dados_login.password)
        super.clickOnElement(Login.BTN_LOGIN)
    }
    static msg_login() {
        super.verifyIfElementExists(Login.TXT_ERRO)
    }

    static verificar_logado(){
        super.validateElementText(Home.TXT_LOGADO, 'Welcome')
    }

    // CADASTRO
    static pag_cadastro() {
        super.clickOnElement(Home.LNK_REGISTER)
    }

    static validar_pag_cadastro() {
        super.validateElementText(Cadastro.TXT_TITULO, 'Signing up is easy!')
    }

    static preencher_cadastro_type(type) {
        let dados_cadastro = Factory.register(type)
        super.typeValue(Cadastro.INP_NAME, dados_cadastro.firstName)
        super.typeValue(Cadastro.INP_LASTNAME, dados_cadastro.lastName)
        super.typeValue(Cadastro.INP_ADDRESS, dados_cadastro.address)
        super.typeValue(Cadastro.INP_CITY, dados_cadastro.city)
        super.typeValue(Cadastro.INP_STATE, dados_cadastro.state)
        super.typeValue(Cadastro.INP_ZIPCODE, dados_cadastro.zipCode)
        super.typeValue(Cadastro.INP_PHONE, dados_cadastro.phoneNumber)
        super.typeValue(Cadastro.INP_SSN, dados_cadastro.ssn)
        super.typeValue(Cadastro.INP_USERNAME, dados_cadastro.userName)
        super.typeValue(Cadastro.INP_PASSWORD, dados_cadastro.password)
        super.typeValue(Cadastro.INP_REPEATED, dados_cadastro.repeatedPassword)
    }

    static bnt_register() {
        super.clickOnElement(Cadastro.BTN_SEND)
    }

    static msg_cadastro_sucesso() {
        super.getElementText(Cadastro.TXT_TITULO)
    }

    static msg_empty() {
        super.getElementText(Cadastro.MSG_NAME)
        super.getElementText(Cadastro.MSG_LASTNAME)
        super.getElementText(Cadastro.MSG_ADDRESS)
        super.getElementText(Cadastro.MSG_CITY)
        super.getElementText(Cadastro.MSG_STATE)
        super.getElementText(Cadastro.MSG_ZIPCODE)
        super.getElementText(Cadastro.MSG_PHONE)
        super.getElementText(Cadastro.MSG_SSN)
        super.getElementText(Cadastro.MSG_USERNAME)
        super.getElementText(Cadastro.MSG_PASSWORD)
        super.getElementText(Cadastro.MSG_REPEATED)
    }

    //FORGOT
    static pag_recuperarLogin() {
        super.clickOnElement(Home.LNK_FORGOT)
    }

    static preencher_recuperacao_type(type) {
        let forgot_data = Factory.forgot(type)
        super.typeValue(Forgot.INP_NAME, forgot_data.firstName)
        super.typeValue(Forgot.INP_LASTNAME, forgot_data.lastName)
        super.typeValue(Forgot.INP_ADDRESS, forgot_data.address)
        super.typeValue(Forgot.INP_CITY, forgot_data.city)
        super.typeValue(Forgot.INP_STATE, forgot_data.state)
        super.typeValue(Forgot.INP_ZIPCODE, forgot_data.zipCode)
        super.typeValue(Forgot.INP_SSN, forgot_data.ssn)
        super.clickOnElement(Forgot.BTN_SEND)
    }

    static validar_pag_recuperacao() {
        super.validateElementText(Cadastro.TXT_TITULO, 'Customer Lookup')
    }

    static validar_campos_recuperacao() {
        super.verifyIfElementExists(Forgot.INP_NAME)
        super.verifyIfElementExists(Forgot.INP_LASTNAME)
        super.verifyIfElementExists(Forgot.INP_ADDRESS)
        super.verifyIfElementExists(Forgot.INP_CITY)
        super.verifyIfElementExists(Forgot.INP_STATE)
        super.verifyIfElementExists(Forgot.INP_ZIPCODE)
        super.verifyIfElementExists(Forgot.INP_SSN)
    }

    static result_recuperacao() {
        super.verifyIfElementExists(Cadastro.INP_USERNAME)
        super.verifyIfElementExists(Cadastro.INP_PASSWORD)
    }
    static result_recuperacao_invalid(msg){
        super.verifyIfElementExists(Forgot.TXT_ERRO, msg)
    }
}