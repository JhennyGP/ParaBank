import Base from './_base.page.js'
import { Factory } from '../fixtures/factory'
import { EL_Home, EL_Cadastro } from './components/parabank.elements.js'

export class Register extends Base {

    static pag_cadastro() {
        super.clickOnElement(EL_Home.LNK_REGISTER)
    }

    static validar_pag_cadastro() {
        super.validateElementText(EL_Home.TXT_TITULO, 'Signing up is easy!')
    }

    static preencher_cadastro_type(type) {
        let dados_cadastro = Factory.register(type)
        super.typeValue(EL_Cadastro.INP_NAME, dados_cadastro.firstName)
        super.typeValue(EL_Cadastro.INP_LASTNAME, dados_cadastro.lastName)
        super.typeValue(EL_Cadastro.INP_ADDRESS, dados_cadastro.address)
        super.typeValue(EL_Cadastro.INP_CITY, dados_cadastro.city)
        super.typeValue(EL_Cadastro.INP_STATE, dados_cadastro.state)
        super.typeValue(EL_Cadastro.INP_ZIPCODE, dados_cadastro.zipCode)
        super.typeValue(EL_Cadastro.INP_PHONE, dados_cadastro.phoneNumber)
        super.typeValue(EL_Cadastro.INP_SSN, dados_cadastro.ssn)
        super.typeValue(EL_Cadastro.INP_USERNAME, dados_cadastro.userName)
        super.typeValue(EL_Cadastro.INP_PASSWORD, dados_cadastro.password)
        super.typeValue(EL_Cadastro.INP_REPEATED, dados_cadastro.repeatedPassword)
    }

    static bnt_register() {
        super.clickOnElement(EL_Cadastro.BTN_SEND)
    }

    static msg_cadastro_sucesso() {
        super.getElementText(EL_Home.TXT_TITULO)
    }

    static msg_empty() {
        super.getElementText(EL_Cadastro.MSG_NAME)
        super.getElementText(EL_Cadastro.MSG_LASTNAME)
        super.getElementText(EL_Cadastro.MSG_ADDRESS)
        super.getElementText(EL_Cadastro.MSG_CITY)
        super.getElementText(EL_Cadastro.MSG_STATE)
        super.getElementText(EL_Cadastro.MSG_ZIPCODE)
        super.getElementText(EL_Cadastro.MSG_PHONE)
        super.getElementText(EL_Cadastro.MSG_SSN)
        super.getElementText(EL_Cadastro.MSG_USERNAME)
        super.getElementText(EL_Cadastro.MSG_PASSWORD)
        super.getElementText(EL_Cadastro.MSG_REPEATED)
    }

}