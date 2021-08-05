/// <reference types="cypress" />
import { Given, When, Then , And } from 'cypress-cucumber-preprocessor/steps'
import { ParaBank } from '../../pages/parabank.page'

beforeEach(() => {
	Given(`que esteja na pagina principal`, () => {
		return ParaBank.acessar_site()
	});
	
	When(`clicar o botão de recuperar login`, () => {
		return ParaBank.pag_recuperarLogin()
	});
});

// validar pagina
Then(`deverá ser redirecionado para a página de recuperar login`, () => {
	return ParaBank.validar_pag_recuperacao()
});

And(`aparecer os campos da página a serem preenchidos`, () => {
	return ParaBank.validar_campos_recuperacao()
});

//validos
When(`preencher os campos com dados validos {string}`, (type) => {
	console.log(type);
	return ParaBank.preencher_recuperacao_type(type)
});

Then(`deverá retornar o usuario e senha`, () => {
	return ParaBank.result_recuperacao()
});

And(`logar automaticamente`, () => {
	return ParaBank.verificar_logado()
});

// invalidos
When(`preencher os campos com dados invalidos {string}`, (type) => {
	console.log(type);
	return ParaBank.preencher_recuperacao_type(type)
});

Then(`deverá mostrar a mensagem {string}`, (msg) => {
	console.log(msg);
	return ParaBank.result_recuperacao_invalid(type)
});
