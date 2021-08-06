import Base from './_base.page.js'
import { Factory } from '../fixtures/factory'
import {  EL_Home, EL_Cadastro, EL_Forgot  } from './components/parabank.elements.js'

export class Lookup extends Base {

    static pag_recuperarLogin() {
        super.clickOnElement(EL_Home.LNK_FORGOT)
    }

    static preencher_recuperacao_type(type) {
        let forgot_data = Factory.forgot(type)
        super.typeValue(EL_Forgot.INP_NAME, forgot_data.firstName)
        super.typeValue(EL_Forgot.INP_LASTNAME, forgot_data.lastName)
        super.typeValue(EL_Forgot.INP_ADDRESS, forgot_data.address)
        super.typeValue(EL_Forgot.INP_CITY, forgot_data.city)
        super.typeValue(EL_Forgot.INP_STATE, forgot_data.state)
        super.typeValue(EL_Forgot.INP_ZIPCODE, forgot_data.zipCode)
        super.typeValue(EL_Forgot.INP_SSN, forgot_data.ssn)
        
        super.clickOnElement(EL_Home.BTN_SEND)
    }

    static validar_pag_recuperacao() {
        super.validateElementText(EL_Home.TXT_TITULO, 'Customer Lookup')
    }

    static validar_campos_recuperacao() {
        super.verifyIfElementExists(EL_Forgot.INP_NAME)
        super.verifyIfElementExists(EL_Forgot.INP_LASTNAME)
        super.verifyIfElementExists(EL_Forgot.INP_ADDRESS)
        super.verifyIfElementExists(EL_Forgot.INP_CITY)
        super.verifyIfElementExists(EL_Forgot.INP_STATE)
        super.verifyIfElementExists(EL_Forgot.INP_ZIPCODE)
        super.verifyIfElementExists(EL_Forgot.INP_SSN)
    }

    static result_recuperacao() {
        super.verifyIfElementExists(EL_Cadastro.INP_USERNAME)
        super.verifyIfElementExists(EL_Cadastro.INP_PASSWORD)
    }

    static result_recuperacao_invalid(msg){
        super.verifyIfElementExists(EL_Forgot.TXT_ERRO, msg)
    }

}