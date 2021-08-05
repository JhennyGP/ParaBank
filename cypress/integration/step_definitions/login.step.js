/// <reference types="cypress" />
import { Given, When, Then , And} from 'cypress-cucumber-preprocessor/steps'
import { ParaBank } from '../../pages/parabank.page'

beforeEach(() => {
	Given(`que esteja na pagina principal`, () => {
		return ParaBank.acessar_site()
	});
});

// Logar invalido
When(`fazer o login com os dados do tipo {string}`, (type) => {
	console.log(type);
	return ParaBank.preencher_login_type(type)
});

Then(`deverá mostrar a mensagem {string}`, (msg) => {
    return ParaBank.msg_login(msg)
});

// Logar valido
When(`fazer o login com os dados do tipo válido {string}`, (type) => {
	console.log(type);
	return ParaBank.preencher_login_type(type)
});

Then(`deverá ser logado com sucesso`, () => {
	return ParaBank.verificar_login()
});

// Sair do sistema
When(`fazer o login com os dados do tipo válido {string}`, (type) => {
	console.log(type);
	return ParaBank.preencher_login_type(type)
});

And(`clicar para sair do sistema`, () => {
	return ParaBank.logout()
});

Then(`deverá ser redirecionado a pagina inicial`, () => {
	return ParaBank.validar_home()
});
