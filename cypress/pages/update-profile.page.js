import Base from './_base.page.js'
import { Factory } from '../fixtures/factory'
import { EL_Home, EL_Cadastro, EL_Profile } from './components/parabank.elements.js'

export class Profile extends Base {

    static validar_campos_profile() {
        super.verifyIfElementExists(EL_Cadastro.INP_NAME)
        super.verifyIfElementExists(EL_Cadastro.INP_LASTNAME)
        super.verifyIfElementExists(EL_Cadastro.INP_ADDRESS)
        super.verifyIfElementExists(EL_Cadastro.INP_CITY)
        super.verifyIfElementExists(EL_Cadastro.INP_STATE)
        super.verifyIfElementExists(EL_Cadastro.INP_ZIPCODE)
    }
    static validar_pag_profile() {
        super.validateElementText(EL_Home.TXT_TITULO, 'Update Profile')

    }
    static alterar_profile(type) {
        let dados_profile = Factory.profile(type)
        super.typeValue(EL_Cadastro.INP_NAME, dados_profile.firstName)
        super.typeValue(EL_Cadastro.INP_LASTNAME, dados_profile.lastName)
        super.typeValue(EL_Cadastro.INP_ADDRESS, dados_profile.address)
        super.typeValue(EL_Cadastro.INP_CITY, dados_profile.city)
        super.typeValue(EL_Cadastro.INP_STATE, dados_profile.state)
        super.typeValue(EL_Cadastro.INP_ZIPCODE, dados_profile.zipCode)
    }

    static btn_alterar_profile() {
        super.clickOnElement(EL_Home.BTN_SEND)
    }

    static validar_msg_profile_sucesso() {
        super.verifyIfElementExists(EL_Profile.BOX_SUCESS)
    }
    
}