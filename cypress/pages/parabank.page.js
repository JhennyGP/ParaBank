import Base from './_base.page.js'
import { Factory } from '../fixtures/factory'
import { EL_Login, EL_Home } from './components/parabank.elements.js'

export class ParaBank extends Base {
    
    static acessar_site() {
        cy.visit('/')
    }

    static validar_home(){
        super.verifyIfElementExists(EL_Home.INF_EVENTS)
        super.verifyIfElementExists(EL_Home.INF_SERVICES)
        super.verifyIfElementExists(EL_Home.INF_SERVICETWO)
    }

    static verificar_login(){
        super.validateElementText(EL_Home.TXT_LOGADO, 'Welcome')
    }

    static logout(){
        super.clickOnElement(EL_Login.BTN_LOGOUT)
    }

    static pag_profile() {
        super.clickOnElement(EL_Home.LNK_PROFILE)
    }
    
}