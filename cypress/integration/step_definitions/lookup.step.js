/// <reference types="cypress" />
import { Given, When, Then , And } from 'cypress-cucumber-preprocessor/steps'
import { Lookup } from '../../pages/lookup.page'
import { ParaBank } from '../../pages/parabank.page';

beforeEach(() => {
	Given(`que esteja na pagina principal`, () => {
		return ParaBank.acessar_site()
	});
	
	When(`clicar o botão de recuperar login`, () => {
		return Lookup.pag_recuperarLogin()
	});
});

// validar pagina
Then(`deverá ser redirecionado para a página de recuperar login`, () => {
	return Lookup.validar_pag_recuperacao()
});

And(`aparecer os campos da página a serem preenchidos`, () => {
	return Lookup.validar_campos_recuperacao()
});

//validos
When(`preencher os campos com dados validos {string}`, (type) => {
	console.log(type);
	return Lookup.preencher_recuperacao_type(type)
});

Then(`deverá retornar o usuario e senha`, () => {
	return Lookup.result_recuperacao()
});

And(`logar automaticamente`, () => {
	return ParaBank.verificar_login()
});

// invalidos
When(`preencher os campos com dados invalidos {string}`, (type) => {
	console.log(type);
	return Lookup.preencher_recuperacao_type(type)
});

Then(`deverá mostrar a mensagem {string}`, (msg) => {
	console.log(msg);
	return Lookup.result_recuperacao_invalid(type)
});
