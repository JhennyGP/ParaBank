/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ParaBank } from '../../pages/parabank.page'

beforeEach(() => {
	return ParaBank.acessar_site(), ParaBank.acessar_cadastro()
});

Given(`que esteja na pagina principal`, () => {
	return ParaBank.acessar_site()
});

When(`clicar em register`, () => {
	return ParaBank.acessar_cadastro()
});

Then(`devera ser redirecionado a pagina de cadastro`, () => {
	return ParaBank.verificar_componentes_cadastro()
});

// Cadastrar tipo
Given(`que esteja na pagina de cadastro`, () => {
	return ParaBank.verificar_componentes_cadastro()
});

When(`cadastrar usuario com os dados do tipo {string}`, (type) => {
	console.log(type);
	return ParaBank.preencher_cadastro_type(type),
	ParaBank.bnt_register()
});

Then(`devera mostrar a mensagem {string}`, (msg) => {
	console.log(msg);
	return ParaBank.msg_cadastro_sucesso(msg)
});

// vazio
Given(`que esteja na pagina de cadastro`, () => {
	return ParaBank.verificar_componentes_cadastro()
});

When(`clicar no botão register sem preencher os campos`, () => {
	return ParaBank.bnt_register()
});

Then(`devera mostrar a mensagem {string} em todos os campos vazios`, (string) => {
	console.log(string);
	return ParaBank.msg_empty(string)

});
