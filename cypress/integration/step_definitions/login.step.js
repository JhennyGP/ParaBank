/// <reference types="cypress" />
import { Given, When, Then , And} from 'cypress-cucumber-preprocessor/steps'
import { ParaBank } from '../../pages/parabank.page'


Given(`que esteja na pagina principal`, () => {
	return ParaBank.acessar_site()
});

When(`fazer o login com os dados do tipo {string}`, (type) => {
	console.log(type);
	return ParaBank.preencher_login_type(type)
});

Then(`deverá mostrar a mensagem {string}`, (msg) => {
    return ParaBank.msg_login(msg)
});
