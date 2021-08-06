/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { Register } from '../../pages/register.page'
import { ParaBank } from '../../pages/parabank.page'

beforeEach(() => {
	Given(`que esteja na pagina principal`, () => {
		return ParaBank.acessar_site()
	});
	
	When(`clicar em register`, () => {
		return Register.pag_cadastro()
	});
	
	Then(`devera ser redirecionado a pagina de cadastro`, () => {
		return Register.validar_pag_cadastro()
	});
});

// Cadastrar tipo
Given(`que esteja na pagina de cadastro`, () => {
	return Register.validar_pag_cadastro()
});

When(`cadastrar usuario com os dados do tipo {string}`, (type) => {
	console.log(type);
	return Register.preencher_cadastro_type(type),
	Register.bnt_register()
});

Then(`devera mostrar a mensagem {string}`, (msg) => {
	console.log(msg);
	return Register.msg_cadastro_sucesso(msg)
});

// vazio
Given(`que esteja na pagina de cadastro`, () => {
	return Register.validar_pag_cadastro()
});

When(`clicar no botão register sem preencher os campos`, () => {
	return Register.bnt_register()
});

Then(`devera mostrar a mensagem {string} em todos os campos vazios`, (string) => {
	console.log(string);
	return Register.msg_empty(string)

});
