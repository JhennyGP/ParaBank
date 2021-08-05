Feature: Recuperar informações do Login
    Como usuário cadastrado
    Quero recuperar meu usuário e senha
    
    Background: Recuperar login
        Given que esteja na pagina principal
        When clicar o botão de recuperar login

    Scenario: Página Recuperar login
        Then deverá ser redirecionado para a página de recuperar login
        And aparecer os campos da página a serem preenchidos

    Scenario: Recuperar login válido
        When preencher os campos com dados validos "valid"
        Then deverá retornar o usuario e senha
        And logar automaticamente

    Scenario Outline: Recuperar login inválido
        When preencher os campos com dados invalidos "<type>"
        Then deverá mostrar a mensagem "<msg>"
        Examples:
            | type    | msg                                                  |
            | invalid | The customer information provided could not be found |
            | empty   | Please enter a username and password                 |

