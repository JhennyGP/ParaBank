/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import { ParaBank } from '../../pages/parabank.page'
import { Profile } from '../../pages/update-profile.page'
import { Login } from '../../pages/login.page'

beforeEach(() => {
	Given(`usuário esteja logado`, () => {
		return ParaBank.acessar_site(),
			Login.preencher_login_type("valid")
	});

	And(`estar no menu 'Update Contact Info'`, () => {
		return ParaBank.pag_profile()
	});

});
// Ir p pagina
When(`clicar no menu 'Update Contact Info'`, () => {
	return ParaBank.pag_profile()
});

Then(`deverá ser redirecionado para a página de atualizar dados cadastrados`, () => {
	return Profile.validar_pag_profile()
});

And(`mostrar os campos preenchidos com os dados do usuário`, () => {
	return Profile.validar_campos_profile()
});

// Atualizar dados sem alterar
When(`não alterar os dados cadastrais`, () => {
	return Profile.validar_msg_profile_sucesso(),
	Profile.btn_alterar_profile()
});

Then(`deverá mostrar a mensagem de sucesso`, () => {
	return Profile.validar_msg_profile_sucesso()
});

// Alterar dados
When(`alterar os dados cadastrais por dados {string}`, (type) => {
	console.log(type);
	return Profile.validar_campos_profile(),
	Profile.alterar_profile(type),
	Profile.btn_alterar_profile()
});

Then(`deverá mostrar a mensagem de sucesso`, () => {
	return Profile.validar_msg_profile_sucesso()
});