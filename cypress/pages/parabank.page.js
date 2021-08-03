import Base from './_base.page.js'
import { Factory } from '../fixtures/factory'
import { Home, Login, Cadastro } from './components/parabank.elements.js'

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
        super.getElementText(Login.TXT_ERRO)
    }
    // CADASTRO

    static acessar_cadastro() {
        super.clickOnElement(Home.BTN_REGISTER)
    }

    static verificar_componentes_cadastro() {
        super.getElementText(Cadastro.TXT_REGISTER)
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
        super.clickOnElement(Cadastro.BTN_REGISTER)
    }

    static msg_cadastro_sucesso() {
        super.getElementText(Cadastro.TXT_SUCESSO)
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
}