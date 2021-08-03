import Base from './_base.page.js'
import {Factory} from '../fixtures/factory'
import { Home, Login, Cadastro } from './components/parabank.elements.js'

export class ParaBank extends Base{
    static acessar_site(){
        cy.visit('/')
    }

    // LOGIN
    static preencher_login_type(type){
        let dados_login = Factory.login(type)
        super.typeValue(Login.INP_USERNAME, dados_login.userName)
        super.typeValue(Login.INP_PASSWORD, dados_login.password)
        super.clickOnElement(Login.BTN_LOGIN)
    }
    static msg_login(){
        super.getElementText(Login.TXT_ERRO)
    }
    // CADASTRO

    static acessar_cadastro(){
        super.clickOnElement(Home.BTN_REGISTER)
    }

    static verificar_componentes_cadastro(){
        super.getElementText(Cadastro.TIT_REGISTER)
    }

    static preencher_cadastro_type(type){
        let dados_cadastro = Factory.register(type)
        super.typeValue(Cadastro.INP_NAME, dados_cadastro.firstName)
        super.typeValue(Cadastro.INP, dados_cadastro.firstName)
        super.clickOnElement(Cadastro.BTN_REGISTER)
    }
}