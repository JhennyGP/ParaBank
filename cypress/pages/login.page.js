import Base from './_base.page.js'
import { Factory } from '../fixtures/factory'
import { EL_Login } from './components/parabank.elements.js'

export class Login extends Base {
    
    // LOGIN
    static preencher_login_type(type) {
        let dados_login = Factory.login(type)
        cy.get(EL_Login.INP_USERNAME).type(dados_login.userName)
        cy.get(EL_Login.INP_PASSWORD).type(dados_login.password)
        super.clickOnElement(EL_Login.BTN_LOGIN)
    }
    static msg_login() {
        super.verifyIfElementExists(EL_Login.TXT_ERRO)
    }

    static logout(){
        super.clickOnElement(EL_Login.BTN_LOGOUT)
    }
    
}