Feature: Cadastro

   Como novo usuário
   Quero me cadastrar no sistema
   Para ter acesso as funções

   Scenario: Página Cadastro
        Given que esteja na página principal
        When clicar em register
        Then deverá ser redirecionado a página de cadastro

    Scenario Outline: Cadastro de usuario
        Given que esteja na pagina de cadastro
        When cadastrar usuário com os dados do tipo "<type>"
        Then deverá mostrar a mensagem "<msg>"
        Examples:
            | type  | msg         |
            | valid |             |
            | empty | is required |